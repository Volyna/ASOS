using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WebAsos.Data;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data.Entitties.DTO;
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

        public async Task<IdentityResult> DeleteBasketAsync(BasketEntity model)
        {
            try
            {
                _context.Basket.Remove(model);
                await _context.SaveChangesAsync();
                return IdentityResult.Success;
            }
            catch (Exception ex)
            {
                return IdentityResult.Failed();
            }
        }

        public async Task<BasketEntity> GetBasketAsync(int idUser, int countProduct, int idProduct)
        {
            try
            {
                var result = await _context.Basket.Where(b => b.ProductId == idProduct && b.UserIdOrder == idUser && b.CountProducts == countProduct).FirstOrDefaultAsync();
                return result;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task<List<BasketEntity>> GetBasketsByIdAsync(int idUser)
        {
            try
            {
                var result = await _context.Basket.Where(b => b.UserIdOrder == idUser).ToListAsync();
                return result;
            }
            catch (Exception)
            {
                return null;
            }
        }

        public async Task<BasketEntity> GetBasketUpdateDTOAsync(UpdateBasketDTO model)
        {
            try
            {
                var result = await _context.Basket.Where(b => b.ProductId == model.ProductId && b.UserIdOrder == model.UserIdOrder).FirstOrDefaultAsync();
                return result;

            }
            catch (Exception)
            {

                return null;
            }
        }

        public async Task<IdentityResult> UpdateBasketAsync(BasketEntity model)
        {
            try
            {
                 _context.Basket.Update(model);
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
