using WebAsos.Data.Entitties.Catalog;
using WebAsos.Models;
using WebAsos.Services;

namespace WebAsos.Interfaces.Services.Interfaces
{
    public interface ICategoryService
    {
        public Task<ServiceResponse> CreateAsync(CategoryCreateViewModel model);
        public Task<ServiceResponse> DeleteAsync(int id);
        public Task<ServiceResponse> UpdateAsync(CategoryUpdateViewModel model);
        public Task<ServiceResponse> GetAllAsync();
        public Task<CategoryEntity> GetByIdAsync(int id);
    }
}
