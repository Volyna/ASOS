using Google.Apis.Auth;
using WebAsos.Constants.User;
using WebAsos.Data.Entitties.IdentityUser;
using WebAsos.Data.ViewModels.User;

namespace WebAsos.interfaces.JwtTokenService
{
    public interface IJwtTokenService
    {
        Task<string> CreateToken(UserEntity user, string isHavePassword);
        Task<UserInformation> VerifyGoogleAccessTokenAsync(string token);
        Task<GoogleJsonWebSignature.Payload> VerifyGoogleToken(ExternalLoginRequest request);
    }
}

