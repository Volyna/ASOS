
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using WebAsos.Constants.User;
using WebAsos.Data.Entitties.IdentityUser;
using WebAsos.Data.ViewModels.User;
using WebAsos.interfaces.JwtTokenService;
using WebAsos.interfaces.UserService;
using WebAsos.Services;

namespace WebAsos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserService _userService;
        private readonly UserManager<UserEntity> _userManager;
        private readonly IJwtTokenService _jwtTokenService;

        public UserController(IJwtTokenService jwtTokenService,
           UserManager<UserEntity> userManager, IUserService userService)
        {
            _userService = userService;
            _userManager = userManager;
            _jwtTokenService = jwtTokenService;
        }

        [AllowAnonymous]
        [HttpPost("login")]
        public async Task<IActionResult> LoginUserAsync([FromBody] LoginViewModel model)
        {
            var result = await _userService.LoginUserAsync(model);
            return Ok(result);
        }
        [AllowAnonymous]
        [HttpPost("register")]
        public async Task<IActionResult> RegisterUserAsync([FromBody] RegisterUserProfileViewModel model)
        {
            var result = await _userService.RegisterUser(model);
            return Ok(result);
        }
        [AllowAnonymous]
        [HttpPost("GoogleExternalLogin")]
        public async Task<IActionResult> GoogleExternalLoginAsync([FromBody] ExternalLoginRequest request)
        {
            var result = await _userService.GoogleExternalLoginAsync(request);
            return Ok(result);
        }
        [AllowAnonymous]
        [HttpPost("isUserExist")]
        public async Task<IActionResult> isUserExist([FromBody] BeforeLoginUser model)
        {
            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user == null)
            {
                return Ok(false);
            }
            else
            {
                return Ok(true);
            }

        }
    }
}