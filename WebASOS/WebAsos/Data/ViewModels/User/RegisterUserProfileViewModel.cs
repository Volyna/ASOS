using System;
namespace WebAsos.Data.ViewModels.User
{
	public class RegisterUserProfileViewModel
	{
        public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DataBirdth { get; set; }
        public string MostlyInterested { get; set; }
        public bool DiscountsAndSales { get; set; }
        public bool NewStuff { get; set; }
        public bool YourExclusives { get; set; }
        public bool AsosPartners { get; set; }
        public string RecaptchaToken { get; set; }
    }
}

