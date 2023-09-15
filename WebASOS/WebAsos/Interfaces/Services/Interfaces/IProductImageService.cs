using WebAsos.Data.Entitties.Catalog;
using WebAsos.Services;

namespace WebAsos.Interfaces.Services.Interfaces
{
    public interface IProductImageService
    {
        public Task<string> SaveImageAsync(string base64);
        public Task<string> CreateProductImageAsync(ProductImageEntity imgName);
        public Task<string> UpdateProductImageAsync(ProductImageEntity imgName);
        public Task<ProductImageEntity> GetMainImageByIdAsync(int id);
        public Task<ProductImageEntity> GetMainImageByParentId(int id);
        public Task DeleteAllImagesByProductId(int id);
        public string GetBase64ByName(string name);
        public Task<List<string>> GetAllProductImages(List<string> productsImages);
    }
}
