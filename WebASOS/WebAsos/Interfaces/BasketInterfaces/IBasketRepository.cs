using Microsoft.AspNetCore.Identity;
using WebAsos.Data.Entitties.Catalog;

namespace WebAsos.interfaces.BasketInterfaces
{
    public interface IBasketRepository
    {
        public Task<IdentityResult> CreateBasketAsync(BasketEntity model);
    }
}
