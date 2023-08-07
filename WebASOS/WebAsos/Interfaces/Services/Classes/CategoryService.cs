using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Interfaces.Repository.Interfaces;
using WebAsos.Interfaces.Services.Interfaces;
using WebAsos.Models;
using WebAsos.Services;

namespace WebAsos.Interfaces.Services.Classes
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

            var list = resVM.BuildTree();

            return new ServiceResponse
            {
                IsSuccess = true,
                Payload = list,
                Message = "Categories loaded"
            };
        }

        public Task<CategoryEntity> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
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