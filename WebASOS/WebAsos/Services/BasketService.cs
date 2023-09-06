using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data.Entitties.DTO;
using WebAsos.interfaces.BasketInterfaces;

namespace WebAsos.Services
{
    public class BasketService : IBasketService
    {
        private readonly IBasketRepository _basketRepository;
        public BasketService(IBasketRepository basketRepository) {
        _basketRepository = basketRepository;
        }
        public async Task<ServiceResponse> CeateAsync(CreaterBasketDTO model)
        {
            try
            {
                if (model == null || model.CountProducts == null || model.ProductId == null || model.UserIdOrder == null)
                {
                    return new ServiceResponse { IsSuccess = false,Message="Some data is null !!!" };
                }
                BasketEntity newBasket = new BasketEntity();
                newBasket.ProductId = model.ProductId;
                newBasket.CountProducts = model.CountProducts;
                newBasket.UserIdOrder = model.UserIdOrder;
                var result = await _basketRepository.CreateBasketAsync(newBasket);
                if (result.Succeeded== true)
                {
                    return new ServiceResponse { IsSuccess = true, Message = "Successfully create basket" };
                }
                else
                {
                    return new ServiceResponse { IsSuccess = false, Message = "Something went wrong" };
                }            
            }
            catch (Exception ex)
            {
                return new ServiceResponse
                {
                    Message = ex.Message,
                    IsSuccess = false,
                };
            }

        }
    }
}
