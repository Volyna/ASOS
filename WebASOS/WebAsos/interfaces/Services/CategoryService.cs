using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.interfaces.Repository;
using WebAsos.Models;
using WebAsos.Services;

namespace WebAsos.interfaces.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IMapper _mapper;

        public CategoryService(ICategoryRepository ctegoryRepository, IMapper mapper)
        {
            _categoryRepository = ctegoryRepository;
            _mapper = mapper;
        }

        public async Task<ServiceResponse> CreateAsync(CategoryCreateViewModel model)
        {
            var entity = _mapper.Map<CategoryEntity>(model);

            if (!model.Parent.IsNullOrEmpty())
            {
                var parent = await _categoryRepository.GetAll().FirstOrDefaultAsync(c => c.Name == model.Parent);
                entity.ParentId = parent?.Id;
            }

            var result = await _categoryRepository.CreateAsync(entity);

            if (result)
            {
                return new ServiceResponse
                {
                    IsSuccess = true,
                    Message = "Category created",
                    Payload = entity
                };
            }

            return new ServiceResponse
            {
                IsSuccess = false,
                Message = "Create error",
                Payload = null
            };
        }

        public async Task<ServiceResponse> DeleteAsync(int id)
        {
            var result = await _categoryRepository.DeleteAsync(id);

            if (result)
            {
                return new ServiceResponse
                {
                    IsSuccess = true,
                    Message = "Category deleted",
                    Payload = id
                };
            }

            return new ServiceResponse
            {
                IsSuccess = false,
                Message = "Delete error",
                Payload = null
            };
        }

        public async Task<ServiceResponse> GetAllAsync()
        {
            var res = await _categoryRepository.Categories().Include(c => c.Childrens).ToListAsync();
            var resVM = _mapper.Map<List<CategoryGroupViewModel>>(res);

            var list = CategoryHelper.BuildTree(resVM);

            return new ServiceResponse
            {
                IsSuccess = true,
                Payload = list,
                Message = "Categories loaded"
            };
        }

        public async Task<CategoryEntity> GetByIdAsync(int id)
        {
            var category = _categoryRepository.Categories().Include(c => c.Childrens).FirstOrDefault(c => c.Id == id);


            if (category != null)
            {
                return category;
            }

            return null;
        }

        public async Task<ServiceResponse> UpdateAsync(CategoryUpdateViewModel model)
        {

            var entity = _mapper.Map<CategoryEntity>(model);
            entity.DateCreated = DateTime.Now.ToUniversalTime();
            if (!model.Parent.IsNullOrEmpty())
            {
                var parent = await _categoryRepository.Categories().FirstOrDefaultAsync(c => c.Name == model.Parent);
                if (parent != null)
                {
                    entity.ParentId = parent.Id;
                }
            }

            var result = await _categoryRepository.UpdateAsync(entity);

            if (result)
            {
                return new ServiceResponse
                {
                    IsSuccess = true,
                    Message = "Category updated",
                    Payload = entity
                };
            }

            return new ServiceResponse
            {
                IsSuccess = false,
                Message = "Update error",
                Payload = null
            };
        }
    }
}