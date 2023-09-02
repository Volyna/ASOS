using WebAsos.Data.Entitties.Catalog;
using WebAsos.Interfaces.Repository.Classes;
using WebAsos.interfaces.Repository.Interfaces;
using WebAsos.Data;

namespace WebAsos.interfaces.Repository.Classes
{
    public class OrderRepository : GenericRepository<OrderEntity, int>, IOrderRepository
    {
        private readonly AppEFContext _dbContext;

        public OrderRepository(AppEFContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public IQueryable<OrderEntity> Orders() => GetAll();
    }
}
