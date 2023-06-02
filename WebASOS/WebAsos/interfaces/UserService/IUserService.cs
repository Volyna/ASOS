using Microsoft.AspNetCore.Identity;
using WebAsos.Data.Entitties.IdentityUser;
using WebAsos.Data.ViewModels.User;
using WebAsos.Services;

namespace WebAsos.interfaces.UserService
{
    public interface IUserService
    {
        public Task<ServiceResponse> LoginUserAsync(LoginViewModel model);
        public Task<ServiceResponse> RegisterUserAsync(RegisterUserProfileViewModel model);
      
    }
}

