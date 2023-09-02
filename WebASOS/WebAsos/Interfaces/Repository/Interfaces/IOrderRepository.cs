using WebAsos.Data.Entitties.Catalog;
using WebAsos.Interfaces.Repository.Interfaces;

namespace WebAsos.interfaces.Repository.Interfaces
{
    public interface IOrderRepository : IGenericRepository<OrderEntity, int>
    {
        public IQueryable<OrderEntity> Orders();
    }
}
