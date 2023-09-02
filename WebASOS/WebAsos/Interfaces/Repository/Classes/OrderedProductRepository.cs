using WebAsos.Data;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.interfaces.Repository.Interfaces;
using WebAsos.Interfaces.Repository.Classes;

namespace WebAsos.interfaces.Repository.Classes
{
    public class OrderedProductRepository : GenericRepository<OrderedProductEntity, int>, IOrderedProductRepository
    {
        private readonly AppEFContext _dbContext;

        public OrderedProductRepository(AppEFContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public IQueryable<OrderedProductEntity> OrderedProducts() => GetAll();
    }
}
