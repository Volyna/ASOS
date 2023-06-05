using System;
using AutoMapper;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using WebAsos.Constants.User;
using WebAsos.Data.Entitties.IdentityUser;
using WebAsos.Data.ViewModels.User;
using WebAsos.interfaces.JwtTokenService;
using WebAsos.interfaces.UserService;

namespace WebAsos.Services
{
    public class UserService : IUserService
    {
        private readonly UserManager<UserEntity> _userManager;
        private readonly IJwtTokenService _jwtTokenService;
        private readonly IMapper _mapper;
        private readonly IUserRepository _userRepository;
        public UserService(UserManager<UserEntity> userManager, IJwtTokenService jwtTokenService, IMapper mapper, IUserRepository userRepository)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _jwtTokenService = jwtTokenService;
            _userManager = userManager;
        }

        public async Task<ServiceResponse> LoginUserAsync(LoginViewModel model)
        {
            try
            {
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
                string token = await _jwtTokenService.CreateToken(user);
                return new ServiceResponse()
                {
                    Payload = token,
                };
            }
            catch (Exception ex)
            {

                return new ServiceResponse() { Payload =  ex.Message  };
            }
            
        }

        public async Task<ServiceResponse> RegisterUser(RegisterUserProfileViewModel model)
        {
            try
            {
                var user = await _userManager.FindByNameAsync(model.Email);
                if (user != null)
                {
                    return new ServiceResponse() { Payload = "User was register" };
                }
                UserEntity newUser = _mapper.Map<RegisterUserProfileViewModel, UserEntity>(model);
                DateTime dataBirth = new DateTime(model.YearBirh, model.MonthBirh, model.DayBirh);
                newUser.DataBirth = dataBirth;
                var result = await _userRepository.RegisterUserAsync(newUser, model.Password);
                if (result.Succeeded)
                {
                    var resultRole = await _userRepository.AddToRoleAsync(newUser, Roles.User);
                    if (resultRole.Succeeded)
                    {

                        var token = await _jwtTokenService.CreateToken(newUser);
                        return new ServiceResponse() { Payload = token };

                    }
                    else
                    {
                        return new ServiceResponse() { Payload = "User was added but wasn't add to role error !!!" };
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

                return new ServiceResponse() { Payload = ex.Message };
            }

           



        }

        public async Task<ServiceResponse> GoogleExternalLoginAsync(ExternalLoginRequest request)
        {
            try
            {
                var payload = await _jwtTokenService.VerifyGoogleToken(request);
                if (payload == null)
                {
                    return new ServiceResponse { IsSuccess=false,Message= "Something went wrong..." };
                }

                var info = new UserLoginInfo(request.Provider, payload.Subject, request.Provider);
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
                            Email = payload.Email

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

                string token = await _jwtTokenService.CreateToken(user);
                return new ServiceResponse { Payload = token, IsSuccess=true};
            }
            catch (Exception ex)
            {
                return new ServiceResponse { IsSuccess = false, Message = ex.Message.ToString() };
            }
        }
    }
}

