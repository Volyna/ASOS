using WebAsos.Data;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.interfaces.Repository;

namespace WebAsos.Interfaces.Repository
{
    public class ProductImageRepository : GenericRepository<ProductImageEntity, int>, 
        IProductImageRepository
    {
        private readonly AppEFContext _dbContext;

        public ProductImageRepository(AppEFContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public IQueryable<ProductImageEntity> ProductImages => GetAll();
    }
}
