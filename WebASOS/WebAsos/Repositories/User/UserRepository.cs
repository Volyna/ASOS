using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WebAsos.Data.Entitties.IdentityUser;
using WebAsos.Data.ViewModels.User;
using WebAsos.interfaces.UserService;

namespace WebAsos.Repositories.User
{
    public class UserRepository : IUserRepository
    {
        private readonly UserManager<UserEntity> _userManager;
        private readonly SignInManager<UserEntity> _signInManager;
        public UserRepository(UserManager<UserEntity> userManager, SignInManager<UserEntity> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }
        public async Task<IdentityResult> RegisterUserAsync(UserEntity model, string password)
        {
            var result = await _userManager.CreateAsync(model, password);
            return result;
        }
        public async Task<IdentityResult> AddToRoleAsync(UserEntity user, string role)
        {
            var result = await _userManager.AddToRoleAsync(user, role);
            return result;
        }

        public async Task<IdentityResult> ConfirmEmailAsync(UserEntity model, string token)
        {
            var result = await _userManager.ConfirmEmailAsync(model, token);
            return result;
        }

        public async Task<string> GeneratePasswordResetTokenAsync(UserEntity model)
        {
            var result = await _userManager.GeneratePasswordResetTokenAsync(model);
            return result;
        }

        public async Task<string> GenerateEmailConfirmationTokenAsync(UserEntity appUser)
        {
            var result = await _userManager.GenerateEmailConfirmationTokenAsync(appUser);
            return result;
        }

        public async Task<bool> ValidatePasswordAsync(LoginViewModel model, string password)
        {
            var user = await _userManager.FindByEmailAsync(model.Email);
            var result = await _userManager.CheckPasswordAsync(user, password);
            return result;
        }

        public async Task<UserEntity> GetUserByIdAsync(string id)
        {
            var result = await _userManager.FindByIdAsync(id);
            return result;
        }

        public async Task<UserEntity> GetUserByEmailAsync(string email)
        {
            var result = await _userManager.FindByEmailAsync(email);
            return result;
        }

        public async Task<IList<string>> GetRolesAsync(UserEntity model)
        {
            var result = await _userManager.GetRolesAsync(model);
            return result;
        }

        public async Task<List<UserEntity>> GetAllUsersAsync()
        {
            var result = await _userManager.Users.ToListAsync();
            return result;
        }

        public async Task<IdentityResult> LockUserAsync(UserEntity model, int days)
        {
            var result = await _userManager.SetLockoutEndDateAsync(model, DateTimeOffset.UtcNow.AddDays(days));
            return result;
        }

        public async Task<IdentityResult> UnLockUserAsync(UserEntity model)
        {
            var result = await _userManager.SetLockoutEndDateAsync(model, null);
            return result;
        }

        public async Task<IdentityResult> DeleteUserAsync(UserEntity model)
        {
            var result = await _userManager.DeleteAsync(model);
            return result;
        }
    }
}

