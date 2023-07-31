﻿using SixLabors.ImageSharp.Formats.Jpeg;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Interfaces.Repository;
using WebAsos.Services;

namespace WebAsos.Interfaces.Services
{
    public class ProductImageService : IProductImageService
    {
        private readonly IProductImageRepository _productImageRepository;

        public ProductImageService(IProductImageRepository productImageService)
        {
            _productImageRepository = productImageService;
        }

        public async Task<string> CreateProductImageAsync(ProductImageEntity img)
        {
            try
            {
                await _productImageRepository.CreateAsync(img);

                return "created";
            }
            catch
            {
                return null;
            }
        }

        public async Task DeleteAllImagesByProductId(int id)
        {
            var toDelete = _productImageRepository.GetAll().Where(img => img.ProductId == id).ToList();
            toDelete.ForEach(img => _productImageRepository.DeleteAsync(img.Id));
        }

        public string GetBase64ByName(string name)
        {
            try
            {
                var dir = Path.Combine(Directory.GetCurrentDirectory(), "images", name);

                var bytesOfImage = File.ReadAllBytes(dir);

                var stringBytes = Convert.ToBase64String(bytesOfImage);

                return stringBytes;
            }
            catch
            {
                return null;
            }
        }

        public async Task<ProductImageEntity> GetMainImageByIdAsync(int id)
        {
            var img = _productImageRepository.GetAll().Where(img => img.ProductId == id).FirstOrDefault(img => img.IsMainImage == true);
            return img;
        }

        public Task<ServiceResponse> GetProductImageAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<string> SaveImageAsync(string imgName)
        {
            int quality = 85;
            string fileName = string.Empty;

            try
            {
                if (imgName != null)
                {
                    var fileExp = ".jpg";
                    var dir = Path.Combine(Directory.GetCurrentDirectory(), "images");
                    fileName = string.Format(@"{0}" + fileExp, Guid.NewGuid());

                    byte[] byteBuffer = Convert.FromBase64String(imgName);

                    using (var image = Image.Load(byteBuffer))
                    {
                        image.Mutate(x => x.Resize(new ResizeOptions { Size = new Size(250, 250), Mode = ResizeMode.Max }));

                        var encoder = new JpegEncoder { Quality = quality };
                        image.Save(Path.Combine(dir, fileName), encoder);
                    }

                    return fileName;
                }
            }
            catch (Exception ex)
            {
                return ex.Message.ToString();
            }

            return fileName;
        }

       

        public async Task<string> UpdateProductImageAsync(ProductImageEntity imgName)
        {
            try
            {
                await _productImageRepository.UpdateAsync(imgName);

                return "updated";
            }
            catch
            {
                return null;
            }
        }
    }
}