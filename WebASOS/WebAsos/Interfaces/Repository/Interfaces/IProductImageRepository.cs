using WebAsos.Data.Entitties.Catalog;

namespace WebAsos.Interfaces.Repository.Interfaces
{
    public interface IProductImageRepository : IGenericRepository<ProductImageEntity, int>
    {
        public IQueryable<ProductImageEntity> ProductImages { get; }
        public Task<List<string>> GetListImagesProductByIdProduct(int id);

    }
}
