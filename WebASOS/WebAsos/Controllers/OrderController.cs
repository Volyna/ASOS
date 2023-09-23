using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAsos.Data.Entitties.DTO;
using WebAsos.interfaces.Services.Interfaces;
using WebAsos.Models;

namespace WebAsos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost("addOrder")]
        public async Task<IActionResult> AddOrderAsync([FromBody] OrderDTO model)
        {

            var result = await _orderService.AddOrderAsync(model);
            return Ok(result);
        }

        [HttpGet("getAllOrders")]
        public async Task<IActionResult> GetAllOrdersAsync()
        {
            var result = _orderService.GetAllOrdersAsync();
            return Ok(result);
        }

        [HttpPost("getOrdersByUserId")]
        public async Task<IActionResult> GetOrdersByUserIdAsync(FindByIdViewModel model)
        {
            var result = _orderService.GetOrdersByUserIdAsync(model.Id);
            return Ok(result);
        }
    }
}
