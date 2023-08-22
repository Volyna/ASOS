using MailKit.Search;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data.Entitties.DTO;

namespace WebAsos.interfaces.Services.Interfaces
{
    public interface IOrderService
    {
        public Task<OrderWithUpdateProductsDTO> AddOrderAsync(OrderDTO model);
        public List<OrderEntity> GetAllOrdersAsync();
        public List<OrderEntity> GetOrdersByUserIdAsync(int id);
    }
}
