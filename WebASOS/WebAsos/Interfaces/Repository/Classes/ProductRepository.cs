using Microsoft.EntityFrameworkCore;
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

        public async Task<List<ProductEntity>> GetAllProdcutsMan()
        {
            try
            {
                var idMan = await _dbContext.Categories.Where(c => c.Name.ToLower().Trim() == Product.Man).FirstOrDefaultAsync();
                if (idMan == null)
                {
                    return null;
                }
                var productsMan = await _dbContext.Products.Where(p => p.CategoryId == idMan.Id).ToListAsync();
                return productsMan;

            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
