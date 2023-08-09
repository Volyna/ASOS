using Microsoft.AspNetCore.Identity;

namespace WebAsos.Data.Entitties.DTO
{

    public class ChangePasswordRequestDTO
    {
        public string UserId { get; set; }
        public string Token { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }

    public class ChangePasswordResponseDTO 
    {
        public string AccessToken { get; set; }
        public virtual bool IsSuccess { get; set; }
        public virtual IEnumerable<IdentityError> Errors { get; set; }
    }

    public class SimpleResponseDTO 
    {
        public object Payload { get; set; }
        public virtual bool IsSuccess { get; set; }
        public virtual IEnumerable<IdentityError> Errors { get; set; }
        public string Message { get; set; }
    }
}
