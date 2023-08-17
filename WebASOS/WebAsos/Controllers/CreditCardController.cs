using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAsos.Data.Entitties.DTO;
using WebAsos.interfaces.Services.Interfaces;
using WebAsos.Models;

namespace WebAsos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CreditCardController : ControllerBase
    {
        private readonly ICreditCardService _creditCardService;

        public CreditCardController(ICreditCardService creditCardService)
        {
            _creditCardService = creditCardService;
        }

        [HttpPost("addCreditCard")]
        public async Task<IActionResult> AddCardAsync(CreditCardDTO model)
        {
            var result = await _creditCardService.AddCreditCardAsync(model);
            return Ok(result);
        }

        [HttpGet("getAllCreditCards")]
        public async Task<IActionResult> GetAllCardsAsync()
        {
            var result = await _creditCardService.GetAllCreditCardsAsync();
            return Ok(result);
        }


        [HttpPost("getCreditCardByUserId")]
        public async Task<IActionResult> GetCardByUserIdAsync(FindByIdViewModel model)
        {
            var result = await _creditCardService.GetCreditCardsByUserIdAsync(model.Id);
            return Ok(result);
        }

        [HttpPost("setDefaultCreditCard")]
        public async Task<IActionResult> SetDefaultCardAsync(SetDefaultCreditCardDTO model)
        {
            await _creditCardService.SetDefaultCreditCardAsync(model.CreditCardId, model.UserId);
            return Ok();
        }


        [HttpPost("findDefaultCardByUserId")]
        public async Task<IActionResult> FindDefaultCardByUserIdAsync(FindByIdViewModel model)
        {
            var result = await _creditCardService.FindDefaultCreditCardAsync(model.Id);
            return Ok(result);
        }

    }
}
