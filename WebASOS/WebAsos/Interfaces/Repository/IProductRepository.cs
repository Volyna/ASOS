using WebAsos.Data.Entitties.Catalog;
using WebAsos.interfaces.Repository;

namespace WebAsos.Interfaces.Repository
{
    public interface IProductRepository : IGenericRepository<ProductEntity, int>
    {
        public IQueryable<ProductEntity> Products { get; }
        public Task<ProductEntity> GetByName(string name);
        public ICollection<ProductEntity> GetProductsAsync();
        public ICollection<ProductEntity> GetByCategoryName(string category);
    }
}
