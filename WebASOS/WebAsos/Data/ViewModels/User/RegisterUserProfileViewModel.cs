using System;
namespace WebAsos.Data.ViewModels.User
{
	public class RegisterUserProfileViewModel
	{
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string ImageBase64 { get; set; }
    }
}

