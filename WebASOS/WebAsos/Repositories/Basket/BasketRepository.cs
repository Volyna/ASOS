using Microsoft.AspNetCore.Identity;
using WebAsos.Data;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.interfaces.BasketInterfaces;

namespace WebAsos.Repositories.Basket
{
    public class BasketRepository : IBasketRepository
    {
        private readonly AppEFContext _context;
        public BasketRepository(AppEFContext context) {
            _context = context;
        }
        public async Task<IdentityResult> CreateBasketAsync(BasketEntity model)
        {
            try
            {
                await _context.Basket.AddAsync(model);
                await _context.SaveChangesAsync();
                return IdentityResult.Success;
            }
            catch (Exception ex)
            {
                return IdentityResult.Failed();
            }
        }
    }
}
