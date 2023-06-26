using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebAsos.Data.Entitties.IdentityUser;
using WebAsos.Data.ViewModels.User;
using WebAsos.Services;

namespace WebAsos.interfaces.UserService
{
    public interface IUserService
    {
        public Task<ServiceResponse> LoginUserAsync(LoginViewModel model);
        public Task<ServiceResponse> RegisterUser(RegisterUserProfileViewModel model);
        public Task<ServiceResponse> GoogleExternalLoginAsync(ExternalLoginRequest request);
      
    }
}

