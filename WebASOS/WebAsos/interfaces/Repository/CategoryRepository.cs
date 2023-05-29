using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data;
using Microsoft.EntityFrameworkCore;

namespace WebAsos.interfaces.Repository
{
    public class CategoryRepository : GenericRepository<CategoryEntity, int>,
      ICategoryRepository
    {
        private readonly AppEFContext _dbContext;

        public CategoryRepository(AppEFContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public IQueryable<CategoryEntity> Categories()
        {
            return _dbContext.Categories.Where(c => c.IsDelete == false).AsNoTracking();
        }

    }
}
