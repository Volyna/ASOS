using System.Diagnostics;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAsos.Data.Entitties.DTO;
using WebAsos.Data.ViewModels.Category;
using WebAsos.Interfaces.Services.Interfaces;
using WebAsos.Models;
using WebAsos.Services;

namespace WebAsos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IProductImageService _productImageService;

        public ProductController(IProductService productService, IProductImageService productImageService)
        {
            _productService = productService;
            _productImageService = productImageService;
        }


        [HttpGet("GetProducts")]
        public async Task<IActionResult> GetProductsAsync()
        {
            var res = await _productService.GetProductsAsync();
            if (res.IsSuccess)
            {
                return Ok(res);
            }

            return BadRequest();
        }

        [HttpGet("GetProduct")]
        public async Task<IActionResult> GetProductAsync(string title)
        {
            string p = string.Join(" ", title.Split('_'));
            var res = await _productService.GetProductAsync(p);
            if (res.IsSuccess)
            {
                return Ok(res);
            }

            return BadRequest(res);
        }

        [HttpPost]
        [Route("CreateProduct")]
        [DisableRequestSizeLimit]
        public async Task<IActionResult> CreateProductAsync(CreateProductDTO model) 
        {
            var res = await _productService.CreateProductAsync(model);
            if (res.IsSuccess)
            {
                return Ok(res);
            }
            return BadRequest(res);
        }

        [HttpDelete]
        [Route("DeleteProduct")]
        public async Task<IActionResult> DeleteProductAsync([FromBody] FindByIdViewModel model)
        {
            await _productService.DeleteProductAsync(model.Id);
            return Ok(model);
        }

        [HttpGet("GetProductById")]
        public async Task<IActionResult> GetProductByIdAsync(int id)
        {
            var res = await _productService.GetProductByIdAsync(id);
            if (res != null)
                return Ok(res);
            return BadRequest(res);
        }

        [HttpPost("GetProductByCategoryId")]
        public async Task<IActionResult> GetProductByCategoryIdAsync([FromBody] FindByIdViewModel Id)
        {
            var res = await _productService.GetProductByCategoryId(Id.Id);
            if (res.IsSuccess)
            {
                return Ok(res);
            }

            return BadRequest(res);
        }
       
        [HttpPut]
        [Route("UpdateProduct")]
        public async Task<IActionResult> UpdateProductAsync([FromBody] UpdateProductDTO model)
        {
            var res = await _productService.UpdateProductAsync(model);
            if (res.IsSuccess)
            {
                return Ok(res);
            }
            return BadRequest(res);
        }

        [HttpPost]
        [Route("UploadImage")]
        public async Task<IActionResult> UploadImage([FromForm] ProductUploadImageViewModel model)
        {
            string fileName = string.Empty;

            if (model.Image != null)
            {
                var fileExp = Path.GetExtension(model.Image.FileName);
                var dir = Path.Combine(Directory.GetCurrentDirectory(), "images");
                fileName = Path.GetRandomFileName() + fileExp;

                using (var stream = System.IO.File.Create(Path.Combine(dir, fileName)))
                {
                    await model.Image.CopyToAsync(stream);
                }
            }
            string port = string.Empty;
            if (Request.Host.Port != null)
                port = ":" + Request.Host.Port.ToString();
            var url = $@"{Request.Scheme}://{Request.Host.Host}{port}/images/{fileName}";
            return Ok(url);
        }

        [HttpPost]
        [Route("toggleFavorite")]
        public async Task<IActionResult> ToggleFavorite([FromBody] FindByIdViewModel Id)
        {
            var isFavorite = _productService.ToggleFavoriteStatus(Id.Id);
            return Ok(new { IsFavorite = isFavorite });
        }
        [AllowAnonymous]
        [HttpPost]
        [Route("getProdcutsMan")]
        public async Task<ServiceResponse> GetProdcutsManAsync([FromBody] int idUser)
        {
            Stopwatch stopWatch = new Stopwatch();
            stopWatch.Start();
            var result = await _productService.GetAllProductsMenAsync(idUser);
            stopWatch.Stop();
            // Get the elapsed time as a TimeSpan value.
            TimeSpan ts = stopWatch.Elapsed;

            // Format and display the TimeSpan value.
            string elapsedTime = String.Format("{0:00}:{1:00}:{2:00}.{3:00}",
                ts.Hours, ts.Minutes, ts.Seconds,
                ts.Milliseconds / 10);
            return result;

        }
    }
    
}
