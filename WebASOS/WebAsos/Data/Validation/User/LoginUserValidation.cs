using System;
using FluentValidation;
using WebAsos.Data.ViewModels.User;

namespace WebAsos.Data.Validation.User
{
    public class LoginUserValidation : AbstractValidator<LoginViewModel>
    {
        public LoginUserValidation()
        {
            RuleFor(r => r.Email).NotEmpty().EmailAddress();
            RuleFor(r => r.Password).NotEmpty().WithMessage("Your password cannot be empty")
            .MinimumLength(6).WithMessage("Your password length must be at least 6.")
            .Matches(@"[A-Z]+").WithMessage("Your password must contain at least one uppercase letter.")
            .Matches(@"[a-z]+").WithMessage("Your password must contain at least one lowercase letter.")
            .Matches(@"[0-9]+").WithMessage("Your password must contain at least one number.");
        }
    }
}

