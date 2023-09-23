using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;
using WebAsos.Constants.Product;
using WebAsos.Data;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Interfaces.Repository.Interfaces;

namespace WebAsos.Interfaces.Repository.Classes
{
    public class ProductRepository : GenericRepository<ProductEntity, int>,
        IProductRepository
    {
        private readonly AppEFContext _dbContext;

        public ProductRepository(AppEFContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public IQueryable<ProductEntity> Products => GetAll();

        public async Task<ProductEntity> GetByName(string name)
        {
            return await _dbContext.Set<ProductEntity>().Include(i => i.Category)
            .AsNoTracking().FirstOrDefaultAsync(e => e.Name == name);
        }

        public async Task<ProductEntity> GetByIdAync(int id)
        {
            return await _dbContext.Products.Where(p => p.Id == id).FirstAsync();
        }


        public ICollection<ProductEntity> GetProductsAsync()
        {
            return GetAll().Include(i => i.Category).ToList();

        }

        public ICollection<ProductEntity> FilterByName(ICollection<ProductEntity> list, string name)
        {
            return list.Where(i => i.Name.ToLower().Contains(name.ToLower())).ToList();
        }

        public ICollection<ProductEntity> GetByCategoryName(string category)
        {
            if (category == "")
            {
                return GetAll().Include(i => i.Category).ToList();
            }

            return _dbContext.Categories.FirstOrDefault(i => i.Name == category)?.Products;
        }

        public async Task<List<ProductEntity>> GetAllProductsMan()
        {
            try
            {
                int idCategoryMan = await _dbContext.Categories.Where(c => c.Name.ToLower().Trim() == Product.Men && c.IsDeleted ==false).Select(p => p.Id).FirstOrDefaultAsync();
                var resultProdcut = await _dbContext.Products.Where(p => p.CategoryId == idCategoryMan && p.IsDeleted == false && p.Quantity != 0).ToListAsync();
                return resultProdcut;

            }
            catch (Exception ex)
            {

                return null;
            }
        }

        public async Task<List<string>> GetAllColorProducsByName(string name)
        {
            try
            {
                var resultProdcut = await _dbContext.Products.Where(p =>p.IsDeleted== false && p.Name.ToLower().Trim() == name.ToLower().Trim()).Select(p => p.Color).ToListAsync();
                var newListWithoutDublicate = resultProdcut.Distinct().ToList();
                return newListWithoutDublicate;

            }
            catch (Exception ex)
            {

                return null;
            }
        }

        public async Task<List<string>> GetAllSizeProducsByName(string name)
        {
            try
            {
                var resultProdcut = await _dbContext.Products.Where(p => p.IsDeleted == false && p.Name.ToLower().Trim() == name.ToLower().Trim()).Select(p => p.Size.ToString()).ToListAsync();
                return resultProdcut;

            }
            catch (Exception ex)
            {

                return null;
            }
        }

        public async Task<List<ProductEntity>> GetAllProductsWomen()
        {
            try
            {
                int idCategoryWomen = await _dbContext.Categories.Where(c => c.Name.ToLower().Trim() == Product.Women && c.IsDeleted == false).Select(p => p.Id).FirstOrDefaultAsync();
                var resultProdcut = await _dbContext.Products.Where(p => p.CategoryId == idCategoryWomen && p.IsDeleted == false && p.Quantity != 0).ToListAsync();
                return resultProdcut;

            }
            catch (Exception ex)
            {

                return null;
            }
        }
    }
}
