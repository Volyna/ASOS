using Microsoft.EntityFrameworkCore;
using WebAsos.Data;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Interfaces.Repository.Interfaces;

namespace WebAsos.Interfaces.Repository.Classes
{
    public class ProductImageRepository : GenericRepository<ProductImageEntity, int>,
        IProductImageRepository
    {
        private readonly AppEFContext _dbContext;

        public ProductImageRepository(AppEFContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public IQueryable<ProductImageEntity> ProductImages => GetAll();
        public async Task<List<string>> GetListImagesProductByIdProduct(int id)
        {
            try
            {
                 List<string> images = await _dbContext.ProductImages.Where(p => p.Id == id).Select(p => p.Name.ToString()).ToListAsync();
                return images;
            }
            catch (Exception)
            {

                return null;
            }
        }
    }
}
