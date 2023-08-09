using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebAsos.Data.Entitties.DTO;
using WebAsos.Data.ViewModels.User;
using WebAsos.Services;

namespace WebAsos.interfaces.UserService
{
    public interface IUserService
    {
        public Task<ServiceResponse> LoginUserAsync(LoginViewModel model);
        public Task<ServiceResponse> RegisterUser(RegisterUserProfileViewModel model);
        public Task<ServiceResponse> GoogleExternalLoginAsync(ExternalLoginRequest request);
        public Task<ServiceResponse> ConfirmEmailAsync(String userId, string token);
        public Task<SimpleResponseDTO> ResetPasswordAsync(string? email = null);
        public Task<ChangePasswordResponseDTO> ChangePasswordAsync(ChangePasswordRequestDTO model);
        public Task<ServiceResponse> LockUserAsync(string userId, int days);
        public Task<ServiceResponse> UnLockUserAsync(string userId);
        public Task<ServiceResponse> DeleteUserAsync(string? userId = null);
    }
}

