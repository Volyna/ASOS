using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebAsos.Data.ViewModels.Category;
using WebAsos.Data.ViewModels.User;
using WebAsos.interfaces.Services;

namespace WebAsos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : Controller
    {
        private readonly ICategoryService _categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }
        [HttpPost("create")]
        public async Task<IActionResult> CreateCategoryAsync([FromBody] CreateCategoryViewModel model)
        {
            var result = await _categoryService.CreateAsync(model);
            if (result.IsSuccess == true)
                return Ok(result);
            return BadRequest(result);
        }
        [HttpPut("update")]
        public async Task<IActionResult> UpdateCategoryAsync([FromBody] UpdateCategoryViewModel model)
        {
            var result = await _categoryService.UpdateAsync(model);
            if (result.IsSuccess == true)
                return Ok(result);
            return BadRequest(result);
        }
    }
}
