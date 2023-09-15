using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAsos.Interfaces.LikesproductInterfaces;
using WebAsos.Models;
using WebAsos.Services;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAsos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LikeController : Controller
    {
        private readonly ILikeProductService _likeProductService;
        public LikeController(ILikeProductService likeProductService)
        {
            _likeProductService = likeProductService;
        }
        [HttpPost("addLike")]
        public async Task<ServiceResponse> AddLikeAsync([FromBody] AddLikeProductViewModel model)
        {
            var result = await _likeProductService.AddLikeAsync(model);
            return result;
        }
        [HttpDelete("removeLike")]
        public async Task<ServiceResponse> RemoveLikeAsync([FromBody] RemoveLikeProductViewModel model)
        {
            var result = await _likeProductService.RemoveLikeAsync(model);
            return result;
        }
        [HttpPost("getLikes")]
        public async Task<ServiceResponse> GetLikesProductsAsync([FromBody] GetAllLikesProductsViewModel model)
        {
            var result = await _likeProductService.GetAllProductsLikesAsync(model);
            return result;
        }
    }
}

