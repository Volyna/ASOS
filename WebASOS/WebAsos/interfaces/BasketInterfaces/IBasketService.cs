using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data.Entitties.DTO;
using WebAsos.Services;

namespace WebAsos.interfaces.BasketInterfaces
{
    public interface IBasketService
    {
        public Task<ServiceResponse> CeateAsync(CreaterBasketDTO model);
        public Task<ServiceResponse> DeleteAsync(DeleteBasketDTO model);
        public Task<ServiceResponse> UpdateAsync(UpdateBasketDTO model);
        public Task<ServiceResponse> GetBasketsAsync(int idUser);
    }
}
