using Microsoft.AspNetCore.Identity;
using WebAsos.Data.Entitties.Catalog;

namespace WebAsos.Interfaces.CategoryInterfaces
{
    public interface ICategoryRepository
    {
        Task<CategoryEntity> GetByName(string name);
        Task<CategoryEntity> GetById(int id);
        Task<IdentityResult> CreateCategory(CategoryEntity model);
        Task UpdateCategory(CategoryEntity model);
        Task<IdentityResult> RemoveCategory(CategoryEntity model);
        Task <List<CategoryEntity>> GetAllCategories();
    }
}
