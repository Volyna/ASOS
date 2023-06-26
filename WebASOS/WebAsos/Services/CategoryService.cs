using AutoMapper;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data.ViewModels.Category;
using WebAsos.Helpers;
using WebAsos.interfaces.Services;
using WebAsos.Interfaces.CategoryInterfaces;

namespace WebAsos.Services
{
    public class CategoryService : ICategoryService
    {
        private readonly IMapper _mapper;
        private readonly ICategoryRepository _categoryRepository;
        public CategoryService(ICategoryRepository categoryRepository, IMapper mapper)
        {
            _categoryRepository = categoryRepository;
            _mapper = mapper;
        }
        public async Task<ServiceResponse> CreateAsync(CreateCategoryViewModel model)
        {
            try
            {
                var isExistCategory = await _categoryRepository.GetByName(model.Name);
                if (isExistCategory == null)
                {
                    var newCategory = _mapper.Map<CreateCategoryViewModel,CategoryEntity>(model);
                    var pathImage = ImageWorker.SaveImage(model.ImageBase64);
                    newCategory.Image = pathImage;
                    var result = await _categoryRepository.CreateCategory(newCategory);
                    if (result.Succeeded)
                    {
                        return new ServiceResponse() { IsSuccess = true };
                    }
                    else
                    {
                        return new ServiceResponse() { IsSuccess = false, Message = "Problem with repositories !!!" };
                    }
                }
                else
                {
                    return new ServiceResponse() { IsSuccess = false,Message = "Category with Name: " + model.Name +" exist" };
                }            
            }
            catch (Exception ex)
            {

                return new ServiceResponse() { IsSuccess = false,Message = ex.Message,Payload = ex.Message };
            }
        }

        public async Task<ServiceResponse> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<ServiceResponse> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public async Task<ServiceResponse> UpdateAsync(UpdateCategoryViewModel model)
        {
            throw new NotImplementedException();
        }
    }
}
