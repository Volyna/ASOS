using System;
using FluentValidation;
using WebAsos.Data.ViewModels.User;

namespace WebAsos.Data.Validation.User
{
    public class RegisterUserValidation : AbstractValidator<RegisterUserProfileViewModal>
    {
        public RegisterUserValidation()
        {
            RuleFor(r => r.FirstName).NotEmpty().MinimumLength(3);
            RuleFor(r => r.LastName).NotEmpty().MinimumLength(3);
            RuleFor(r => r.Email).NotEmpty().EmailAddress();
            RuleFor(r => r.Password).NotEmpty().MinimumLength(6);
            RuleFor(r => r.ConfirmPassword).NotEmpty().MinimumLength(6);
            RuleFor(r => r.Password).Equal(r => r.ConfirmPassword);
        }
    }
}

