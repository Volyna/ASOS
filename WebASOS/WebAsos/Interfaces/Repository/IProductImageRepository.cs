using WebAsos.Data.Entitties.Catalog;
using WebAsos.interfaces.Repository;

namespace WebAsos.Interfaces.Repository
{
    public interface IProductImageRepository : IGenericRepository<ProductImageEntity, int>
    {
        public IQueryable<ProductImageEntity> ProductImages { get; }

    }
}
