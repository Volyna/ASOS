using WebAsos.Data.Entitties.Catalog;
using WebAsos.Models;
﻿using WebAsos.Data.ViewModels.Category;
using WebAsos.Services;

namespace WebAsos.interfaces.Services
{
    public interface ICategoryService
    {
        public Task<ServiceResponse> CreateAsync(CreateCategoryViewModel model);
        public Task<ServiceResponse> DeleteAsync(int id);
        public Task<ServiceResponse> UpdateAsync(UpdateCategoryViewModel model);
        public Task<ServiceResponse> GetAllAsync();
        public Task<CategoryEntity> GetByIdAsync(int id);
    }
}
