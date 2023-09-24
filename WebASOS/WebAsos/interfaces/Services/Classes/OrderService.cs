using System;
using System.Collections.Generic;
using AutoMapper;
using MailKit.Search;
using Microsoft.EntityFrameworkCore;
using WebAsos.Constants.OrderStatus;
using WebAsos.Constants.User;
using WebAsos.Data;
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
        private static Random random = new Random();
        private readonly IOrderRepository _orderRepository;
        private readonly ICreditCardRepository _creditCardRepository;
        private readonly IOrderedProductRepository _orderedProductRepository;
        private readonly IMapper _mapper;
        private readonly IUserRepository _userRepository;
        private readonly EmailService _emailService;
        private readonly AppEFContext _context;
        private readonly IAddressRepository _addressRepository;

        public OrderService(AppEFContext context ,IAddressRepository addressRepository, IOrderRepository orderRepository, IOrderedProductRepository orderedProductRepository, IMapper mapper, IUserRepository userRepository, EmailService emailService, ICreditCardRepository creditCardRepository)
        {
            _context = context;
            _addressRepository = addressRepository;
            _creditCardRepository = creditCardRepository;
           _orderRepository = orderRepository;
            _orderedProductRepository = orderedProductRepository;
            _mapper = mapper;
            _userRepository = userRepository;
            _emailService = emailService;
        }
        private string RandomStringValue()
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm0123456789";
            return new string(Enumerable.Repeat(chars, 10)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }
        public async Task<ServiceResponse> AddOrderAsync(OrderDTO model)
        {
            try
            {
                var randomString = RandomStringValue();
                var user = await _userRepository.GetUserByIdAsync(model.UserId.ToString());
                foreach (var item in model.Orders)
                {
                    ProductEntity product = await _context.Products.Where(p => p.Id == item.ProductId).FirstOrDefaultAsync();
                    OrderProductItemEntity orderProductItemEntity = new OrderProductItemEntity();
                    orderProductItemEntity.ProductId = product.Id;
                    orderProductItemEntity.Name = "Order One Item";
                    orderProductItemEntity.UserId = user.Id;
                    orderProductItemEntity.Count = item.CountProducts;
                    orderProductItemEntity.Price = item.Price;
                    orderProductItemEntity.Discount = item.Discount;
                    orderProductItemEntity.OrderNumber = randomString;
                    var oldCountProduct = product.Quantity - item.CountProducts;
                    product.Quantity = oldCountProduct;
                    _context.Products.Update(product);
                    await _context.OrderProductItem.AddAsync(orderProductItemEntity);
                    await _context.SaveChangesAsync();

                }
                OrderProductEntity orderProductEntity = new OrderProductEntity();
                orderProductEntity.Name = "Order info";
                orderProductEntity.UserId = user.Id;
                orderProductEntity.OrderNumber = randomString;
                orderProductEntity.Status = OrderStatus.ProcessDelivery;
                orderProductEntity.Country = model.Country;
                orderProductEntity.State = model.State;
                orderProductEntity.Street = model.Street;
                orderProductEntity.ZipCode = model.ZipCode;
                orderProductEntity.City = model.City;
                orderProductEntity.HomeNumber = model.HomeNumber;
                orderProductEntity.CardNumber = model.CardNumber;
                orderProductEntity.ExpirationDate = model.ExpirationDate;
                orderProductEntity.Cvv = model.Cvv;
                orderProductEntity.TotalPrice = model.TotalPrice;
                orderProductEntity.Discount = model.Discount;
                await _context.OrderProduct.AddAsync(orderProductEntity);
                await _context.SaveChangesAsync();

                return new ServiceResponse { IsSuccess=true };



            }
            catch (Exception ex)
            {
                return new ServiceResponse { IsSuccess = false };
            }
        }

        public List<OrderEntity> GetAllOrdersAsync()
        {
            return _orderRepository.GetAll().ToList();
        }

        public List<OrderEntity> GetOrdersByUserIdAsync(int id)
        {
            return _orderRepository.GetAll().Where(order => order.UserId == id).ToList();
        }

        public async Task<ServiceResponse> GetHistoryOrder(int userId)
        {
            try
            {
                var orders = await _context.OrderProduct.Where(p => p.UserId == userId).ToListAsync();
                if (orders == null)
                {
                    return new ServiceResponse { IsSuccess = true };
                }
                else
                {
                    List<OrderResponseDto> orderResponseDtos = new List<OrderResponseDto>();
                    foreach (var item in orders)
                    {
                        OrderResponseDto order = new OrderResponseDto();
                        order.Amount = item.TotalPrice;
                        string day = item.DateCreated.Day.ToString();
                        string month = item.DateCreated.Month.ToString();
                        string year = item.DateCreated.Year.ToString();
                        order.Date = day + "." + month + "." + year;
                        order.OrderStatus = item.Status;
                        order.OrderNumber = item.OrderNumber;
                        orderResponseDtos.Add(order);
                    }
                    return new ServiceResponse { IsSuccess = true, Payload = orderResponseDtos };

                }

            }
            catch (Exception ex)
            {
                return new ServiceResponse { IsSuccess = false };
            }
        }
    }
}
