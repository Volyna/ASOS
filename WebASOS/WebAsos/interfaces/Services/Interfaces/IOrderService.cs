using MailKit.Search;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data.Entitties.DTO;
using WebAsos.Services;

namespace WebAsos.interfaces.Services.Interfaces
{
    public interface IOrderService
    {
        public Task<ServiceResponse> AddOrderAsync(OrderDTO model);
        public Task<ServiceResponse> GetHistoryOrder(int userId);
        public List<OrderEntity> GetAllOrdersAsync();
        public List<OrderEntity> GetOrdersByUserIdAsync(int id);
    }
}
