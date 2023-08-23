using Google.Apis.Auth;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Text;
using WebAsos.Data.Entitties;
using WebAsos.Data.Entitties.IdentityUser;
using WebAsos.Data.ViewModels.User;
using WebAsos.interfaces.JwtTokenService;
using WebAsos.Settings;

namespace WebAsos.Services
{
    public class JwtTokenService : IJwtTokenService
    {
        private const string GoogleCertsEndpoint = "https://www.googleapis.com/oauth2/v3/certs";
        private const string YourClientId = "579487123707-nsn0hncgmdfrptb3ensmn85v08g8aubf.apps.googleusercontent.com";
        private readonly IConfiguration _config;
        private readonly UserManager<UserEntity> _userManager;
        private readonly GoogleAuthSettings _googleAuthSettings;
        public JwtTokenService(IConfiguration config, UserManager<UserEntity> userManager, GoogleAuthSettings googleAuthSettings)
        {
            _config = config;
            _userManager = userManager;
            _googleAuthSettings = googleAuthSettings;
        }

        public async Task<string> CreateToken(UserEntity user)
        {
           
            List<Claim> claims = new List<Claim>()
            {
                new Claim("name", user.FirstName ?? ""),
                new Claim("surname", user.LastName ?? ""),
                new Claim("phone", user.PhoneNumber ?? ""),
                new Claim("email", user.Email ?? ""),
                new Claim("image", user.Image??"")
            };
            var roles = await _userManager.GetRolesAsync(user);
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

        public async Task<GoogleJsonWebSignature.Payload> VerifyGoogleToken(ExternalLoginRequest request)
        {
            string clientID = _config["GoogleAuthSettings:ClientId"];
            var settings = new GoogleJsonWebSignature.ValidationSettings()
            {
                Audience = new List<string>() { clientID }
            };

            var payload = await GoogleJsonWebSignature.ValidateAsync(request.Token, settings);
            return payload;
        }
        //new =>
        public async Task<bool> VerifyGoogleAccessTokenAsync(string accessToken)
        {
            // Step 1: Retrieve Google's public keys
            string apiUrl = "https://www.googleapis.com/oauth2/v3/userinfo";

            using (WebClient client = new WebClient())
            {
                client.Headers.Add("Authorization", $"Bearer {accessToken}");

                try
                {
                    string response = await client.DownloadStringTaskAsync(apiUrl);
                    Console.WriteLine(response);
                }
                catch (WebException ex)
                {
                    // Handle exceptions or errors
                    Console.WriteLine("An error occurred: " + ex.Message);
                    return true;
                }
            }
            return true;
        }

        public class Tokens
        {
            public string token { get; set; }
            public RefreshToken refreshToken { get; set; }
        }
    }
}

