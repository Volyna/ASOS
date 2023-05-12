using System;
using WebAsos.Data.Entitties.IdentityUser;

namespace WebAsos.interfaces.JwtTokenService
{
    public interface IJwtTokenService
    {
        Task<string> CreateToken(UserEntity user);
    }
}

