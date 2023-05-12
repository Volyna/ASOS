using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebAsos.Data.Entitties.IdentityUser;
using WebAsos.interfaces.JwtTokenService;

namespace WebAsos.Services
{
    public class JwtTokenService : IJwtTokenService
    {
        private readonly IConfiguration _config;
        private readonly UserManager<UserEntity> _userManager;
        public JwtTokenService(IConfiguration config, UserManager<UserEntity> userManager)
        {
            _config = config;
            _userManager = userManager;
        }

        public async Task<string> CreateToken(UserEntity user)
        {
            IList<string> roles = await _userManager.GetRolesAsync(user);
            List<Claim> claims = new List<Claim>()
            {
                new Claim("name", user.UserName),
                new Claim("image", user.Image??"krot.jpg")
            };

            foreach (var claim in roles)
            {
                claims.Add(new Claim("roles", claim));
            }
            var signinKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetValue<String>("JWTSecretKey")));
            var signinCredentials = new SigningCredentials(signinKey, SecurityAlgorithms.HmacSha256);

            var jwt = new JwtSecurityToken(
                signingCredentials: signinCredentials,
                expires: DateTime.Now.AddDays(10),
                claims: claims
            );
            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }
    }
}

