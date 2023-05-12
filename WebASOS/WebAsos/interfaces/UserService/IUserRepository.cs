using System;
using Microsoft.AspNetCore.Identity;
using WebAsos.Data.Entitties.IdentityUser;

namespace WebAsos.interfaces.UserService
{
	public interface IUserRepository
    {
        Task<IdentityResult> RegisterUserAsync(UserEntity model, string password);
        Task<IdentityResult> AddToRoleAsync(UserEntity user, string role);
    }
}

