using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAsos.interfaces.Services;
using WebAsos.Models;

namespace WebAsos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : Controller
    {
        private readonly ICategoryService _placeCategoryService;

        public CategoryController(ICategoryService placeCategoryService)
        {
            _placeCategoryService = placeCategoryService;
        }

        [HttpGet]
        [Route("list")]
        public async Task<IActionResult> getAllAsync()
        {
            var res = await _placeCategoryService.GetAllAsync();
            if (res.IsSuccess)
            {
                return Ok(res);
            }
            return BadRequest(res);
        }

        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> createAsync([FromBody] CategoryCreateViewModel model)
        {

            var res = await _placeCategoryService.CreateAsync(model);
            if (res.IsSuccess)
            {
                return Ok(res);
            }
            return BadRequest(res);
        }

        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> updateAsync([FromBody] CategoryUpdateViewModel model)
        {
            var res = await _placeCategoryService.UpdateAsync(model);
            if (res.IsSuccess)
            {
                return Ok(res);
            }
            return BadRequest(res);
        }

        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> deleteAsync(int id)
        {
            var res = await _placeCategoryService.DeleteAsync(id);
            if (res.IsSuccess)
            {
                return Ok(res);
            }
            return BadRequest(res);
        }
    }
}