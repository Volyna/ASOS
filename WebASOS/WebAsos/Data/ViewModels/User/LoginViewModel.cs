using System;
namespace WebAsos.Data.ViewModels.User
{
    public class LoginViewModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class ExternalLoginRequest
    {
        public string Provider { get; set; }
        public string Token { get; set; }
    }
}


