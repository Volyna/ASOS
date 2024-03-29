﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebAsos.Data.ViewModels.Category;
using WebAsos.Data.ViewModels.User;
using WebAsos.interfaces.Services;
using WebAsos.Interfaces.Services.Interfaces;

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
        [HttpDelete("delete")]
        public async Task<IActionResult> DeleteCategoryAsync(int id)
        {
            var result = await _categoryService.DeleteAsync(id);
            if (result.IsSuccess == true)
                return Ok(result);
            return BadRequest(result);
        }
        [HttpGet("getById")]
        public async Task<IActionResult> GetByIdCategoryAsync(int id)
        {

            var result = await _categoryService.GetByIdAsync(id);
            if (result != null)
                return Ok(result);
            return BadRequest(result);
        }
        [HttpGet("getAllCategories")]
        public async Task<IActionResult> GetAllCategorriesAsync()
        {
            var result = await _categoryService.GetAllAsync();
            return Ok(result);
        }
    }
}
