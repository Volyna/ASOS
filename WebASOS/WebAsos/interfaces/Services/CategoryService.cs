using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
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
                return new ServiceResponse(entity);

            }

            return new ServiceResponse("Create error");
        }

        public async Task<ServiceResponse> DeleteAsync(int id)
        {
            var result = await _categoryRepository.DeleteAsync(id);

            if (result)
            {
                return new ServiceResponse("Category deleted");
            }

            return new ServiceResponse("Delete error");
        }

        public async Task<ServiceResponse> GetAllAsync()
        {
            var res = await _categoryRepository.Categories().Include(c => c.Childrens).ToListAsync();
            var resVM = _mapper.Map<List<CategoryGroupViewModel>>(res);

            var list = CategoryHelper.BuildTree(resVM);

            return new ServiceResponse
            {
                Payload = list,
            };
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
                    Payload = entity
                };
            }

            return new ServiceResponse
            {
                Payload = "Update error"
            };
        }
    }
}
