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
                newBasket.Name = "Basket";
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

        public async Task<ServiceResponse> DeleteAsync(DeleteBasketDTO model)
        {
            try
            {
                if (model == null || model.CountProducts == null || model.ProductId == null || model.UserIdOrder == null)
                {
                    return new ServiceResponse { IsSuccess = false, Message = "Some data is null !!!" };
                }
                var baketToDelete = await _basketRepository.GetBasketAsync(model.UserIdOrder,model.CountProducts,model.ProductId);
                if (baketToDelete == null)
                {
                    return new ServiceResponse { IsSuccess = false, Message = "Some data is null or basket is not exist !!!" };
                }
                var resultDelete = await _basketRepository.DeleteBasketAsync(baketToDelete);
                if (resultDelete.Succeeded == true)
                {
                    return new ServiceResponse { IsSuccess = true, Message = "Successfully delete basket" };
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

        public async Task<ServiceResponse> GetBasketsAsync()
        {
            try
            {
                var baskets = await _basketRepository.GetBasketsAsync();
                if (baskets == null)
                {
                    return new ServiceResponse { IsSuccess = false, Message = "Some data is null or basket empty !!!" };
                }
                else
                {
                    return new ServiceResponse { IsSuccess = true, Message = "Successfully request baskets",Payload = baskets };
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public async Task<ServiceResponse> UpdateAsync(UpdateBasketDTO model)
        {
            try
            {
                if (model == null || model.CountProducts == null || model.ProductId == null || model.UserIdOrder == null)
                {
                    return new ServiceResponse { IsSuccess = false, Message = "Some data is null !!!" };
                }
                var basketToUpdate = await _basketRepository.GetBasketUpdateDTOAsync(model);
                if (basketToUpdate == null)
                {
                    return new ServiceResponse { IsSuccess = false, Message = "Some data is null !!!" };
                }
                basketToUpdate.CountProducts = model.CountProducts;
                var resultUpdate = await _basketRepository.UpdateBasketAsync(basketToUpdate);
                if (resultUpdate.Succeeded == true)
                {
                    return new ServiceResponse { IsSuccess = true, Message = "Successful update basket" };
                }
                else
                {
                    return new ServiceResponse { IsSuccess = false, Message = "problem with update basket" };
                }
                

            }
            catch (Exception ex)
            {

                return new ServiceResponse { IsSuccess = false, Message = "Some problem!!!" };
            }
        }
    }
}
