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

    }
}
