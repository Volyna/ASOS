using WebAsos.Data.Entitties.Catalog;

namespace WebAsos.Interfaces.Repository.Interfaces
{
    public interface ICategoryRepository : IGenericRepository<CategoryEntity, int>
    {
        public IQueryable<CategoryEntity> Categories();
        public Task<CategoryEntity> GetById(int id);    
    }
}
