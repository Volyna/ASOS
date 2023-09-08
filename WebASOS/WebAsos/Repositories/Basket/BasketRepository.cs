using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WebAsos.Data;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data.Entitties.DTO;
using WebAsos.interfaces.BasketInterfaces;
using WebAsos.Interfaces.Services.Interfaces;

namespace WebAsos.Repositories.Basket
{
    public class BasketRepository : IBasketRepository
    {
        private readonly AppEFContext _context;
        private readonly IProductImageService _productImageService;
        public BasketRepository(AppEFContext context, IProductImageService productImageService)
        {
            _context = context;
            _productImageService = productImageService;
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

        public async Task<List<BasketsResponseDTO>> GetProductsForBasket(List<BasketEntity> basketEntities)
        {
            try
            {
                List<BasketsResponseDTO> result = new List<BasketsResponseDTO>();
                foreach (var item in basketEntities)
                {
                    var product = await _context.Products.Where(p => p.Id == item.ProductId).FirstOrDefaultAsync();
                    if (product != null)
                    {
                        BasketsResponseDTO newBasket = new BasketsResponseDTO();
                        newBasket.CountProducts = item.CountProducts;
                        newBasket.UserIdOrder = item.UserIdOrder;
                        newBasket.ProductId = item.ProductId;
                        newBasket.Name = item.Name;
                        newBasket.Price = product.Price;
                        newBasket.Discount = product.Discount;
                        newBasket.Description = product.Description;
                        newBasket.Brand = product.Brand;
                        newBasket.Color = product.Color;
                        newBasket.Size = product.Size;
                        newBasket.Quantity = product.Quantity;
                        newBasket.IsInTheStock = product.IsInTheStock;

                        var mainImage = await _productImageService.GetMainImageByIdAsync(product.Id);
                        if (mainImage != null)
                            newBasket.Images = _productImageService.GetBase64ByName(mainImage.Name);


                        result.Add(newBasket);
                    }
                    else
                    {

                    }
                }
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
