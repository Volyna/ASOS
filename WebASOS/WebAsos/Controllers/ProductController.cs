using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebAsos.Data.Entitties.DTO;
using WebAsos.Interfaces.Services.Interfaces;
using WebAsos.Models;

namespace WebAsos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
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
        public async Task<IActionResult> GetProductByIdAsync([FromBody] FindByIdViewModel Id)
        {
            var res = await _productService.GetProductByIdAsync(Id.Id);
            if (res.IsSuccess)
            {
                return Ok(res);
            }

            return BadRequest(res);
        }

        [HttpGet("GetProductByCategoryId")]
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
    }
}
