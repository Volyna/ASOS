using WebAsos.Models;
using WebAsos.Services;

namespace WebAsos.interfaces.Services
{
    public interface ICategoryService
    {
        public Task<ServiceResponse> CreateAsync(CategoryCreateViewModel model);
        public Task<ServiceResponse> DeleteAsync(int id);
        public Task<ServiceResponse> UpdateAsync(CategoryUpdateViewModel model);
        public Task<ServiceResponse> GetAllAsync();
    }
}
