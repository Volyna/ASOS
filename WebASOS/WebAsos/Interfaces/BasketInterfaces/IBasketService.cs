using WebAsos.Data.Entitties.DTO;
using WebAsos.Services;

namespace WebAsos.interfaces.BasketInterfaces
{
    public interface IBasketService
    {
        public Task<ServiceResponse> CeateAsync(CreaterBasketDTO model);
    }
}
