using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WebAsos.Constants.Product;
using WebAsos.Data;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Interfaces.LikesproductInterfaces;
using WebAsos.Interfaces.Services.Interfaces;
using WebAsos.Models;

namespace WebAsos.Repositories.LikesProducts
{
    public class likesProducsRepository : ILikeProductRepository
    {
        private readonly AppEFContext _context;
        private readonly IProductImageService _productImageService;
        public likesProducsRepository(AppEFContext context, IProductImageService productImageService)
        {
            _context = context;
            _productImageService = productImageService;

        }
        public async Task<IdentityResult> AddLikeAsync(AddLikeProductViewModel model)
        {
            try
            {
                var product = await _context.Products.Where(p => p.Id == model.idProduct).FirstOrDefaultAsync();
                if (product != null)
                {
                    LikeEntity likeEntity = new LikeEntity();
                    likeEntity.Name = "Like";
                    likeEntity.userID = model.idUser;
                    likeEntity.productLikeId = product.Id;
                    var result = await _context.LikesProducts.AddAsync(likeEntity);
                    await _context.SaveChangesAsync();
                    return IdentityResult.Success;
                }
                else
                {
                    return IdentityResult.Failed();
                }
            }
            catch (Exception ex)
            {
                 return IdentityResult.Failed();
            }
        }

        public async Task<List<LikeEntity>> GetAllLikesAsync(GetAllLikesProductsViewModel model)
        {
            try
            {
                var productsLike = await _context.LikesProducts.Where(p => p.userID == model.idUser).ToListAsync();
                return productsLike;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<List<LikesProductsResponseDTO>> GetAllProductsLikesAsync(List<LikeEntity> model)
        {
            try
            {
                List<LikesProductsResponseDTO> LikesProductsResponseDTO = new List<LikesProductsResponseDTO>();
                foreach (var item in model)
                {
                    var product = await _context.Products.Where(p => p.Id == item.productLikeId).FirstOrDefaultAsync();
                    if (product != null)
                    {
                        var productLikeTemp = new LikesProductsResponseDTO();
                        productLikeTemp.Id = product.Id;
                        productLikeTemp.Name = product.Name;
                        productLikeTemp.Price = product.Price;
                        productLikeTemp.Discount = product.Discount;
                        productLikeTemp.Description = product.Description;
                        //productLikeTemp.Color = await _context.Products.Where()
                        //productLikeTemp.Size = await _context.Products.Where()
                        productLikeTemp.Brand = product.Brand;
                        productLikeTemp.Quantity = product.Quantity;
                        productLikeTemp.IsInTheStock = product.IsInTheStock;
                        productLikeTemp.Category_id = product.CategoryId;
                        var mainImage = await _productImageService.GetMainImageByIdAsync(product.Id);
                        if (mainImage != null)
                            productLikeTemp.MainImage = _productImageService.GetBase64ByName(mainImage.Name);



                        LikesProductsResponseDTO.Add(productLikeTemp);
                    }
                }
                return LikesProductsResponseDTO;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<IdentityResult> RemoveLikeProductAsync(RemoveLikeProductViewModel model)
        {
            try
            {
                var product = await _context.LikesProducts.Where(p => p.productLikeId == model.idProduct &&
                p.userID == model.idUser).FirstOrDefaultAsync();
                if (product != null)
                {
                     _context.LikesProducts.Remove(product);
                    await _context.SaveChangesAsync();
                    return IdentityResult.Success;
                }
                else
                {
                    return IdentityResult.Failed();
                }
            }
            catch (Exception ex)
            {
                return IdentityResult.Failed();
            }
        }
    }
}

