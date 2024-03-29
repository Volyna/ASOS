﻿using SixLabors.ImageSharp.Formats.Jpeg;
using SixLabors.ImageSharp.Formats.Webp;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Interfaces.Repository.Interfaces;
using WebAsos.Interfaces.Services.Interfaces;
using WebAsos.Services;

namespace WebAsos.Interfaces.Services.Classes
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

        public async Task<List<string>> GetAllProductImages(List<string> productsImages)
        {
            try
            {
                List<string> resultImages = new List<string>(); 
                foreach (var item in productsImages)
                {
                    var bytes = GetBase64ByName(item);
                    resultImages.Add(bytes);
                }
                return resultImages;
            }
            catch (Exception ex)
            {

                return null; 
            }
        }


        public async Task<List<string>> ListOfImages(int id)
        {
            try
            {
                List<ProductImageEntity> resultImages = new List<ProductImageEntity>();
                resultImages = _productImageRepository.GetAll().Where(image => image.ProductId == id).ToList();
                List<string> resultList = new List<string>();
                foreach(var item in resultImages)
                {
                    resultList.Add(item.Name);
                }
                return resultList;
            }
            catch (Exception ex)
            {

                return null;
            }
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

        public async Task<ProductImageEntity> GetMainImageByParentId(int parentId)
        {
            var img = _productImageRepository.GetAll().Where(img => img.ProductId == parentId).First(img => img.IsMainImage == true);
            return img;
        }




        public async Task<string> SaveImageAsync(string imgName)
        {
            int quality = 85;
            string fileName = string.Empty;

            try
            {
                if (imgName != null)
                {
                    var fileExp = ".webp";
                    var dir = Path.Combine(Directory.GetCurrentDirectory(), "images");
                    fileName = string.Format(@"{0}" + fileExp, Guid.NewGuid());

                    byte[] byteBuffer = Convert.FromBase64String(imgName);

                    using (var image = Image.Load(byteBuffer))
                    {
                        image.Mutate(x => x.Resize(new ResizeOptions { Size = new Size(250, 250), Mode = ResizeMode.Max }));

                        var encoder = new WebpEncoder { };
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
