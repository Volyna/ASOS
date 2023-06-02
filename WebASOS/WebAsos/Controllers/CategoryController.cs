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
    
                return Ok(res);

        }

        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> createAsync([FromBody] CategoryCreateViewModel model)
        {

            var res = await _placeCategoryService.CreateAsync(model);
  
                return Ok(res);
        }

        [HttpPut]
        [Route("update")]
        public async Task<IActionResult> updateAsync([FromBody] CategoryUpdateViewModel model)
        {
            var res = await _placeCategoryService.UpdateAsync(model);
       
                return Ok(res);

        }

        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> deleteAsync(int id)
        {
            var res = await _placeCategoryService.DeleteAsync(id);
       
                return Ok(res);
      
        }
    }
}
