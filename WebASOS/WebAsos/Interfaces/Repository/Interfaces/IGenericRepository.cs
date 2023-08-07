using WebAsos.Data.Entitties;

namespace WebAsos.Interfaces.Repository.Interfaces
{
    public interface IGenericRepository<TEntity, T> where TEntity : class, IEntity<T>
    {
        IQueryable<TEntity> GetAll();

        Task<TEntity> GetByIdAsync(T id);

        Task<TEntity> GetByNameAsync(string name);

        Task<bool> CreateAsync(TEntity entity);

        Task<bool> UpdateAsync(TEntity entity);

        Task<bool> DeleteAsync(T id);
    }
}
