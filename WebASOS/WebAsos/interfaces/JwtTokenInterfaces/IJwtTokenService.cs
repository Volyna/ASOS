using Google.Apis.Auth;
using WebAsos.Data.Entitties.IdentityUser;
using WebAsos.Data.ViewModels.User;

namespace WebAsos.interfaces.JwtTokenService
{
    public interface IJwtTokenService
    {
        Task<string> CreateToken(UserEntity user);
        Task<bool> VerifyGoogleAccessTokenAsync(string token);
        Task<GoogleJsonWebSignature.Payload> VerifyGoogleToken(ExternalLoginRequest request);
    }
}

