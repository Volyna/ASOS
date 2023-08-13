using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data;
using Microsoft.EntityFrameworkCore;
using WebAsos.Interfaces.Repository.Interfaces;

namespace WebAsos.Interfaces.Repository.Classes
{
    public class CategoryRepository : GenericRepository<CategoryEntity, int>,
      ICategoryRepository
    {
        private readonly AppEFContext _dbContext;

        public CategoryRepository(AppEFContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public IQueryable<CategoryEntity> Categories() => GetAll();

        public async Task<CategoryEntity> GetById(int id)
        {
            var result = await _dbContext.Categories.FirstOrDefaultAsync(c => c.Id == id);
            return result;
        }
        public async Task<CategoryEntity> GetByName(string name)
        {
            var result = await _dbContext.Categories.FirstOrDefaultAsync(c => c.Name.ToLower() == name.ToLower());
            return result;
        }

    }
}
