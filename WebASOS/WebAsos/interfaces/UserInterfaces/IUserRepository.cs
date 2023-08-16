using System;
using Microsoft.AspNetCore.Identity;
using WebAsos.Data.Entitties.IdentityUser;
using WebAsos.Data.ViewModels.User;

namespace WebAsos.interfaces.UserService
{
	public interface IUserRepository
    {
        Task<IdentityResult> RegisterUserAsync(UserEntity model, string password);
        Task<IdentityResult> AddToRoleAsync(UserEntity user, string role);
        Task<bool> ValidatePasswordAsync(LoginViewModel model, string password);
        Task<UserEntity> GetUserByIdAsync(string id);
        Task<UserEntity> GetUserByEmailAsync(string email);
        Task<IList<string>> GetRolesAsync(UserEntity model);
        Task<IdentityResult> ConfirmEmailAsync(UserEntity model, string token);
        Task<string> GeneratePasswordResetTokenAsync(UserEntity model);
        Task<string> GenerateEmailConfirmationTokenAsync(UserEntity appUser);
        Task<List<UserEntity>> GetAllUsersAsync();
        Task<IdentityResult> LockUserAsync(UserEntity model, int days);
        Task<IdentityResult> UnLockUserAsync(UserEntity model);
        Task<IdentityResult> DeleteUserAsync(UserEntity model);
    }
}

