using WebAsos.Data.Entitties.Catalog;

namespace WebAsos.interfaces.Repository
{
        public interface ICategoryRepository : IGenericRepository<CategoryEntity, int>
        {
            public IQueryable<CategoryEntity> Categories();
        }
}
