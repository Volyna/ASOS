using AutoMapper;
using MailKit.Search;
using WebAsos.Constants.User;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data.Entitties.DTO;
using WebAsos.interfaces.Repository.Interfaces;
using WebAsos.interfaces.Services.Interfaces;
using WebAsos.interfaces.UserService;
using WebAsos.Services;

namespace WebAsos.interfaces.Services.Classes
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IOrderedProductRepository _orderedProductRepository;
        private readonly IMapper _mapper;
        private readonly IUserRepository _userRepository;
        private readonly EmailService _emailService;

        public OrderService(IOrderRepository orderRepository, IOrderedProductRepository orderedProductRepository, IMapper mapper, IUserRepository userRepository, EmailService emailService)
        {
           _orderRepository = orderRepository;
            _orderedProductRepository = orderedProductRepository;
            _mapper = mapper;
            _userRepository = userRepository;
            _emailService = emailService;
        }

        public async Task<OrderWithUpdateProductsDTO> AddOrderAsync(OrderDTO model)
        {
            var order = _mapper.Map<OrderDTO, OrderEntity>(model);
            await _orderRepository.CreateAsync(order);


            foreach (var orderedProdct_tmp in model.Ordered_Products)
            {
                var orderedProduct = _mapper.Map<OrderedProductDTO, OrderedProductEntity>(orderedProdct_tmp);
                orderedProduct.OrderId = order.Id;
                await _orderedProductRepository.CreateAsync(orderedProduct);
            }

            var orderWithUpdateProducts = _mapper.Map<OrderEntity, OrderWithUpdateProductsDTO>(order);

            var user = await _userRepository.GetUserByIdAsync(model.UserId.ToString());

            await _emailService.SendEmailAsync(Emails.UserOrder(user.Email, order.Id));

            return orderWithUpdateProducts;
        }

        public List<OrderEntity> GetAllOrdersAsync()
        {
            return _orderRepository.GetAll().ToList();
        }

        public List<OrderEntity> GetOrdersByUserIdAsync(int id)
        {
            return _orderRepository.GetAll().Where(order => order.UserId == id).ToList();
        }
    }
}
