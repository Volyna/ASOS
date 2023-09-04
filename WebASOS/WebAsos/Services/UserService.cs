using System;
using System.Globalization;
using System.Net;
using System.Text;
using AutoMapper;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Newtonsoft.Json.Linq;
using WebAsos.Constants.User;
using WebAsos.Data.Entitties.DTO;
using WebAsos.Data.Entitties.IdentityUser;
using WebAsos.Data.ViewModels.User;
using WebAsos.interfaces.JwtTokenService;
using WebAsos.interfaces.UserService;
using WebAsos.SMTP_Email;

namespace WebAsos.Services
{
    public class UserService : IUserService   
    {
        private readonly UserManager<UserEntity> _userManager;
        private IConfiguration _configuration;
        private readonly IJwtTokenService _jwtTokenService;
        private readonly IHttpContextAccessor _httpContextAccessor;
        private readonly IMapper _mapper;
        private readonly IUserRepository _userRepository;
        //private EmailService _emailService;
        private readonly RecaptchaService _recaptchaService;
        private readonly SmtpEmailService _emailService;
        public UserService(UserManager<UserEntity> userManager, IConfiguration configuration, IJwtTokenService jwtTokenService, IHttpContextAccessor httpContextAccessor, IMapper mapper, IUserRepository userRepository, RecaptchaService recaptchaService, SmtpEmailService emailService)
        {
            _userRepository = userRepository;
            _configuration = configuration;
            _mapper = mapper;
            _jwtTokenService = jwtTokenService;
            _httpContextAccessor = httpContextAccessor;
            _userManager = userManager;
            //_emailService = emailService;
            _recaptchaService = recaptchaService;
            _emailService = emailService;
        }

        public async Task<ServiceResponse> LoginUserAsync(LoginViewModel model)
        {
            try
            {
                var recaptchaResult = await _recaptchaService.VerifyTokenAsync(model.RecaptchaToken);
                float minScore = float.Parse(_configuration["RecaptchaConfig:MinScore"], NumberStyles.Float, CultureInfo.InvariantCulture);
                if (!recaptchaResult.Success)
                {
                    return new ServiceResponse()
                    {
                        IsSuccess = false,
                        Message = "Recaptcha failed"
                    };
                }

                var user = await _userManager.FindByNameAsync(model.Email);
                if (user == null)
                {
                    return new ServiceResponse
                    {
                        Payload = "User not found !"
                    };
                }
                var checkPassword = await _userManager.CheckPasswordAsync(user, model.Password);
                if (!checkPassword)
                {
                    return new ServiceResponse { Payload = "Password incorrect !" };
                }
                string token = await _jwtTokenService.CreateToken(user,"true");
                return new ServiceResponse()
                {
                    Payload = token,
                };
            }
            catch (Exception ex)
            {

                return new ServiceResponse() { Payload =  ex.Message.ToString()  };
            }
            
        }

        public async Task<ServiceResponse> RegisterUser(RegisterUserProfileViewModel model)
        {
            try
            {
                var recaptchaResult = await _recaptchaService.VerifyTokenAsync(model.RecaptchaToken);
                float minScore = float.Parse(_configuration["RecaptchaConfig:MinScore"], NumberStyles.Float, CultureInfo.InvariantCulture);
                if (!recaptchaResult.Success || recaptchaResult.Score < minScore)
                {
                    return new ServiceResponse()
                    {
                        IsSuccess = false,
                        Message = "Recaptcha failed"
                    };
                }
                var user = await _userManager.FindByNameAsync(model.Email);
                if (user != null)
                {
                    return new ServiceResponse() { Payload = "User was register" };
                }
                UserEntity newUser = _mapper.Map<RegisterUserProfileViewModel, UserEntity>(model);
                DateTime dataBirth = model.DataBirdth;
                newUser.DataBirth = dataBirth;
                var result = await _userRepository.RegisterUserAsync(newUser, model.Password);
                if (result.Succeeded)
                {
                    var resultRole = await _userRepository.AddToRoleAsync(newUser, Roles.User);
                    if (resultRole.Succeeded)
                    {
                        var token = await _userRepository.GenerateEmailConfirmationTokenAsync(newUser);
                        var encodedEmailToken = Encoding.UTF8.GetBytes(token);
                        var validEmailToken = WebEncoders.Base64UrlEncode(encodedEmailToken);

                        string url = $"{_configuration["FrontEndUrl"]}/confirmemail?userid={newUser.Id}&token={validEmailToken}";

                        //await _emailService.SendEmailAsync(Emails.ConfirmAccountByEmail(newUser.Email, url));
                        Message info = new Message()
                        {
                            Subject = "Confirm email",
                            To = newUser.Email
                        };
                        string html = File.ReadAllText("SMTP_Email/html/confirmEmail.html");
                        html = html.Replace("{url}", url);
                        info.Body = html;
                        _emailService.Send(info);
                        var aceessToken = await _jwtTokenService.CreateToken(newUser,"true");
                        return new ServiceResponse() {
                            Message = "User successfully created.",
                            Payload = aceessToken,
                            IsSuccess = true
                        };

                    }
                    else
                    {
                        return new ServiceResponse() { IsSuccess = true,Payload = "User was added but wasn't add to role error !!!" };
                    }

                }
                else
                {
                    return new ServiceResponse()
                    {
                        Payload = "Error with register user !!!"
                    };

                }
            } 
            catch (Exception ex)
            {

                return new ServiceResponse() { Payload = ex.Message.ToString() };
            }
        }

        public async Task<ServiceResponse> GoogleExternalLoginAsync(ExternalLoginRequest request)
        {
            try
            {
                var payload = await _jwtTokenService.VerifyGoogleAccessTokenAsync(request.Token);
                //var payload = await _jwtTokenService.VerifyGoogleToken(request);
                if (payload == null)
                {
                    return new ServiceResponse { IsSuccess=false,Message= "Something went wrong..." };
                }
                var info = new UserLoginInfo(request.Provider, payload.Sub, request.Provider);
                var user = await _userManager.FindByLoginAsync(info.LoginProvider, info.ProviderKey);
                if (user == null)
                {
                    user = await _userManager.FindByEmailAsync(payload.Email);
                    if (user == null)
                    {
                        user = new UserEntity()
                        {
                            FirstName = payload.GivenName,
                            LastName = payload.FamilyName,
                            Email = payload.Email,
                            UserName = payload.Email

                        };
                        var resultCreate = await _userManager.CreateAsync(user);
                        if (!resultCreate.Succeeded)
                        {
                            return new ServiceResponse { IsSuccess = false, Message = "Error creating user" };
                        }
                    }

                    var resultLogin = await _userManager.AddLoginAsync(user, info);
                    if (!resultLogin.Succeeded)
                    {
                        return new ServiceResponse { IsSuccess = false, Message = "Error creating a login through Google" };           
                    }
                }
                var isHavePasswordTemp = await _userManager.HasPasswordAsync(user);
                var isHavePassword = isHavePasswordTemp == true ? "true" : "false";
                string token = await _jwtTokenService.CreateToken(user, isHavePassword);
                return new ServiceResponse { Payload = token, IsSuccess=true};
            }
            catch (Exception ex)
            {
                return new ServiceResponse { IsSuccess = false, Message = ex.Message.ToString() };
            }
        }
        public async Task<ServiceResponse> ConfirmEmailAsync(string userId, string token)
        {
            var user = await _userRepository.GetUserByIdAsync(userId);
            if (user == null)
                return new ServiceResponse
                {
                    IsSuccess = false,
                    Message = "User not found"
                };

            var decodedToken = WebEncoders.Base64UrlDecode(token);
            string normalToken = Encoding.UTF8.GetString(decodedToken);

            var result = await _userRepository.ConfirmEmailAsync(user, normalToken);

            if (result.Succeeded)
            {
                return new ServiceResponse
                {
                    Message = "Email confirmed successfully!",
                    IsSuccess = true,
                };
            }
            else
            {
                return new ServiceResponse
                {
                    IsSuccess = false,
                    Message = "Email didn't confirm",
                    Errors = result.Errors.Select(e => e.Description)
                };
            }
        }

        public async Task<SimpleResponseDTO> ResetPasswordAsync(string? email = null)
        {
            
            UserEntity user = null;
            if (email == null)
            {
                user = await _userManager.GetUserAsync(_httpContextAccessor.HttpContext.User);
            }
            else
            {
                user = await _userManager.FindByEmailAsync(email);
            }

            if (user == null)
            {
                return new SimpleResponseDTO() {
                    IsSuccess = true,
                    Message = "The password has been changed"
                };
            }

            string token = await _userManager.GeneratePasswordResetTokenAsync(user);
            var encodedEmailToken = Encoding.UTF8.GetBytes(token);
            var validEmailToken = WebEncoders.Base64UrlEncode(encodedEmailToken);
            string url = $"{_configuration["FrontEndUrl"]}/resetPassword/?userId={user.Id}&token={validEmailToken}";
            //await _emailService.SendEmailAsync(Emails.ResetPassword(user.Email, url));
            Message info = new Message()
            {
                Subject = "Reset Password",
                To = user.Email
            };
            string html = File.ReadAllText("SMTP_Email/html/resetPassword.html");
            html = html.Replace("{url}", url);
            info.Body = html;
            _emailService.Send(info);



            return new SimpleResponseDTO()
            {
                IsSuccess = true,
                Message = "The password has been changed"
            };
        }

        public async Task<ChangePasswordResponseDTO> ChangePasswordAsync(ChangePasswordRequestDTO model)
        {
            UserEntity user = await _userManager.FindByIdAsync(model.UserId);
            if (user == null)
            {
                return new ChangePasswordResponseDTO() { 
                    IsSuccess = false 
                };
            }

            var result = await _userManager.ResetPasswordAsync(user, model.Token, model.ConfirmPassword);

            if (result.Succeeded)
            {
                //await _emailService.SendEmailAsync(Emails.PasswordChanged(user.Email));
                Message info = new Message()
                {
                    Subject = "Reset Password",
                    To = user.Email
                };
                string html = File.ReadAllText("SMTP_Email/html/changedPassword.html");
                info.Body = html;
                _emailService.Send(info);
                string accessToken = await _jwtTokenService.CreateToken(user,"");
                return new ChangePasswordResponseDTO()
                {
                    IsSuccess = true,
                    AccessToken = accessToken
                };
            }

            return new ChangePasswordResponseDTO()
            {
                IsSuccess = false,
                Errors = result.Errors
            };
        }

        public async Task<ServiceResponse> LockUserAsync(string userId, int days)
        {
            UserEntity userEntity = await _userRepository.GetUserByIdAsync(userId);
            if (userEntity == null)
            {
                return new ServiceResponse(){ 
                    Message = "No user found",
                    IsSuccess = false,
                } ;
            }
            var result = await _userRepository.LockUserAsync(userEntity, days);

            return new ServiceResponse()
            {
                Message = "The user is blocked",
                IsSuccess = true
            };
        }

        public async Task<ServiceResponse> UnLockUserAsync(string userId)
        {
            UserEntity userEntity = await _userRepository.GetUserByIdAsync(userId);
            if (userEntity == null)
            {
                return new ServiceResponse()
                {
                    Message = "No user found",
                    IsSuccess = false
                };
            }

            var result = await _userRepository.UnLockUserAsync(userEntity);

            return new ServiceResponse()
            {
                Message = "The user is unlocked",
                IsSuccess = true
            };
        }

        public async Task<ServiceResponse> DeleteUserAsync(string? userId = null)
        {
            if (userId == null)
            {
                userId = _userManager.GetUserId(_httpContextAccessor.HttpContext.User);
            }

            UserEntity userEntity = await _userRepository.GetUserByIdAsync(userId);
            if (userEntity == null)
            {
                return new ServiceResponse()
                {
                    Message = "No user found",
                    IsSuccess = false
                };
            }
            var result = await _userRepository.DeleteUserAsync(userEntity);

            if (result.Succeeded)
            {
                return new ServiceResponse()
                {
                    Message = "The user is deleted",
                    IsSuccess = true
                };
            }

            return new ServiceResponse()
            {
                IsSuccess = false,
                Errors = result.Errors.Select(e => e.Description)
            };
        }

        public async Task<ServiceResponse> UpdateUserProfileAsync(UpdateUserProfileDTO model)
        {
            try
            {
                UserEntity user = await _userManager.FindByEmailAsync(model.Email);
                if (user == null)
                {
                    return new ServiceResponse
                    {
                        IsSuccess = false,
                        Message = "No user associated with email",
                    };
                }
                else if (!String.IsNullOrEmpty(model.passwordNew))
                {

                    if (await _userManager.CheckPasswordAsync(user, model.passwordOld) == true)
                    {
                        await _userManager.ChangePasswordAsync(user, model.passwordOld, model.passwordNew);
                        user.FirstName = model.firstName;
                        user.Email = model.Email;
                        user.LastName = model.lastName;
                        user.PhoneNumber = model.Phone;
                        user.DiscountsAndSales = model.discountsAndSales == "true" ? true : false;
                        user.Country = model.country;
                        user.State = model.state;
                        user.Street = model.street;
                        user.ZipCode = model.zipCode;
                        user.City = model.city;

                        await _userRepository.UpdateUserProfile(user);
                        return new ServiceResponse() { IsSuccess = true, Message = "Succeeded Update User!!!" };
                    }
                    else
                    {
                        return new ServiceResponse() { IsSuccess = false, Message = "Invalid old password!!!" };
                    }
                   
                }
                else
                {
                    if (model.newPasswordAnotherLogin != null)
                    {
                        await _userManager.AddPasswordAsync(user, model.newPasswordAnotherLogin);
                    }
                    user.FirstName = model.firstName;
                    user.Email = model.Email;
                    user.LastName = model.lastName;
                    user.PhoneNumber = model.Phone;
                    user.DiscountsAndSales = model.discountsAndSales == "true" ? true :false;
                    user.Country = model.country;
                    user.State = model.state;
                    user.Street = model.street;
                    user.ZipCode = model.zipCode;
                    user.City = model.city;
      
                    await _userRepository.UpdateUserProfile(user);
                    return new ServiceResponse() { IsSuccess = true, Message = "Succeeded Update User!!!" };
                 
                }

            }
            catch (Exception ex)
            {

                return new ServiceResponse { IsSuccess = false, Message = ex.Message.ToString() };
            }
        }
    }
}

