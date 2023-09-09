using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebAsos.Data.Entitties.DTO;
using WebAsos.Data.ViewModels.Category;
using WebAsos.interfaces.BasketInterfaces;
using WebAsos.Interfaces.Services.Interfaces;
using WebAsos.Services;

namespace WebAsos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasketController : Controller
    {
        private readonly IBasketService _basketService;
        public BasketController(IBasketService basketService)
        {
            _basketService = basketService;
        }
        [HttpPost("create")]
        public async Task<ServiceResponse> CreateBasketAsync([FromBody] CreaterBasketDTO model)
        {
            var result = await _basketService.CeateAsync(model);
            return result;
        }
        [HttpPut("update")]
        public async Task<ServiceResponse> UpdateBasketAsync([FromBody] UpdateBasketDTO model)
        {
            var result = await _basketService.UpdateAsync(model);
            return result;
        }
        [HttpDelete("delete")]
        public async Task<ServiceResponse> DeleteBasketAsync([FromBody] DeleteBasketDTO model)
        {
            var result = await _basketService.DeleteAsync(model);
            return result;
        }

        [HttpPost("getBaskets")]
        public async Task<ServiceResponse> GetBasketAsync([FromBody] int idUser)
        {
            var result = await _basketService.GetBasketsAsync(idUser);
            return result;
        }

    }
}
