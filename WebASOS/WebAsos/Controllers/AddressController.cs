using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAsos.Data.Entitties.DTO;
using WebAsos.interfaces.Services.Interfaces;
using WebAsos.Models;

namespace WebAsos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AddressController : ControllerBase
    {
        private readonly IAddressService _addressService;

        public AddressController(IAddressService addressService)
        {
            _addressService = addressService;
        }

        [AllowAnonymous]
        [HttpPost("addAddress")]
        public async Task<IActionResult> AddAddressAsync(AddressDTO model)
        {
            var result = await _addressService.AddAddressAsync(model);
            return Ok(result);
        }

        [AllowAnonymous]
        [HttpGet("getAllAddresses")]
        public async Task<IActionResult> GetAllAddressesAsync()
        {
            var result = await _addressService.GetAllAddressesAsync();
            return Ok(result);
        }

        [AllowAnonymous]
        [HttpPost("getAddressByUserId")]
        public async Task<IActionResult> GetAddressByUserIdAsync(FindByIdViewModel model)
        {
            var result = await _addressService.GetAddressByUserIdAsync(model.Id);
            return Ok(result);
        }

        [AllowAnonymous]
        [HttpDelete("deleteAddressByUserId")]
        public async Task<IActionResult> DeleteAddressByUserIdAsync(FindByIdViewModel model)
        {
            await _addressService.DeleteAddressByUserIdAsync(model.Id);
            return Ok("Successfully deleted!");
        }
    }
}
