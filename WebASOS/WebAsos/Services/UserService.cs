using System;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
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
            var user = await _userManager.FindByNameAsync(model.Email);
            if (user == null)
            {
                return new ServiceResponse
                {
                    IsSuccess = false,
                    Message = "User not found !"
                };
            }
            var checkPassword = await _userManager.CheckPasswordAsync(user, model.Password);
            if (!checkPassword)
            {
                return new ServiceResponse { IsSuccess = false, Message = "Password incorrect !" };
            }
            string token = await _jwtTokenService.CreateToken(user);
            return new ServiceResponse()
            {
                IsSuccess = true,
                Payload = token,
                Message = "Successful request !"
            };
        }

        public async Task<ServiceResponse> RegisterUserAsync(RegisterUserProfileViewModal model)
        {
            if (model.Password != model.ConfirmPassword)
            {
                return new ServiceResponse()
                {
                    IsSuccess = false,
                    Message = "Confirm pssword do not match !!!"
                };

            }
            UserEntity newUser = _mapper.Map<RegisterUserProfileViewModal, UserEntity>(model);
            if (model.ImageBase64 == "" || model.ImageBase64 == null)
            {
                newUser.Image = "";
            }
            else
            {
                newUser.Image = model.ImageBase64;
            }

            var result = await _userRepository.RegisterUserAsync(newUser, model.Password);
            if (result.Succeeded)
            {
                var resultRole = await _userRepository.AddToRoleAsync(newUser, Roles.User);
                if (resultRole.Succeeded)
                {
                    var user = await _userManager.FindByEmailAsync(model.Email);
                    var token = await _jwtTokenService.CreateToken(user);
                    return new ServiceResponse
                    {
                        Message = "User successfully created.",
                        IsSuccess = true,
                        Payload = token,
                    };

                }
                else
                {
                    return new ServiceResponse { IsSuccess = false, Message = "User was added but wasn't add to role error !!!" };
                }

            }
            else
            {
                return new ServiceResponse()
                {
                    IsSuccess = false,
                    Message = "Error with register user !!!",
                    Errors = result.Errors.Select(e => e.Description)
                };

            }
        }
    }
}

