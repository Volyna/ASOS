using Microsoft.AspNetCore.Identity;
using WebAsos.Data.Entitties.Catalog;

namespace WebAsos.Interfaces.CategoryInterfaces
{
    public interface ICategoryRepository
    {
        Task<CategoryEntity> GetByName(string name);
        Task<IdentityResult> CreateCategory(CategoryEntity model);
    }
}
