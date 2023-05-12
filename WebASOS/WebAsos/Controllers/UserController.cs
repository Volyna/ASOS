using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebAsos.Data.Validation.User;
using WebAsos.Data.ViewModels.User;
using WebAsos.interfaces.UserService;


namespace WebAsos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> LoginUserAsync([FromBody] LoginViewModel model)
        {
            try
            {
                var userValidator = new LoginUserValidation();
                var validationResult = userValidator.Validate(model);
                if (validationResult.IsValid)
                {
                    var result = await _userService.LoginUserAsync(model);
                    return Ok(result);
                }
                else
                {
                    return BadRequest(validationResult.Errors);
                }

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }
        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<IActionResult> RegisterUserAsync([FromBody] RegisterUserProfileViewModal model)
        {
            try
            {
                var validator = new RegisterUserValidation();
                var validationResult = validator.Validate(model);
                if (validationResult.IsValid)
                {
                    var result = await _userService.RegisterUserAsync(model);
                    return Ok(result);
                }
                else
                {
                    return BadRequest(validationResult.Errors);
                }
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }


        }
    }
}

