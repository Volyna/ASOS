
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Net.Mail;
using System.Net;
using WebAsos.Constants.User;
using WebAsos.Data.Entitties.DTO;
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
        [AllowAnonymous]
        [HttpGet("confirmEmail")]
        public async Task<IActionResult> ConfirmEmailAsync(string userId, string token)
        {
            if (string.IsNullOrWhiteSpace(userId) || string.IsNullOrWhiteSpace(token))
                return NotFound();

            var result = await _userService.ConfirmEmailAsync(userId, token);

            if (result.IsSuccess)
            {
                return Ok(result);
            }
            return BadRequest(result);
        }

        [AllowAnonymous]
        [HttpGet("resetPassword")]
        public async Task<IActionResult> ResetPasswordAsync([FromQuery] string? email = null)
        {
            
            try
            {
                var result = await _userService.ResetPasswordAsync(email);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message.ToString());
            }
        }
        [AllowAnonymous]
        [HttpPost("changePassword")]
        public async Task<IActionResult> ChangePasswordAsync([FromBody] ChangePasswordRequestDTO model)
        {
            try
            {
                var result = await _userService.ChangePasswordAsync(model);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }



        //only for admin

        [Authorize(Roles = "Admin")]
        [HttpGet("admin/lockUser/{userId}")]
        public async Task<IActionResult> LockUserAsync([FromRoute] string userId, [FromQuery] int days = 3650)
        {
            try
            {
                var result = await _userService.LockUserAsync(userId, days);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("admin/unlockUser/{userId}")]
        public async Task<IActionResult> UnLockUserAsync([FromRoute] string userId)
        {
            try
            {
                var result = await _userService.UnLockUserAsync(userId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("admin/{userId}")]
        public async Task<IActionResult> DeleteUserAsync([FromRoute] string userId)
        {
            try
            {
                var result = await _userService.DeleteUserAsync(userId);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

    }
}