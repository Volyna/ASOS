using System.Net;
using WebAsos.Data.Entitties.DTO;

namespace WebAsos.Services
{
    public class RecaptchaService
    {
        private readonly IConfiguration _configuration;
        public RecaptchaService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<RecaptchaDTO> VerifyTokenAsync(string token)
        {
            using (var client = new WebClient())
            {
                string secretKey = _configuration["RecaptchaConfig:SecretKey"];
                string requestCommand = string.Format("https://www.google.com/recaptcha/api/siteverify?secret={0}&response={1}", secretKey, token);
                var result = client.DownloadString(requestCommand);

                var captchaResponse = Newtonsoft.Json.JsonConvert.DeserializeObject<RecaptchaDTO>(result);

                return captchaResponse;
            }
        }
    }
}
