using System;
using Microsoft.AspNetCore.Identity;
using WebAsos.Data.Entitties.IdentityUser;
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
    }
}

