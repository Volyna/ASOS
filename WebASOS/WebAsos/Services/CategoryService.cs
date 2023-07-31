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
            try
            {
                var category = await _categoryRepository.GetById(id);
                if (category != null)
                {
                    var result = await _categoryRepository.RemoveCategory(category);
                    if (result.Succeeded == true)
                    {
                        return new ServiceResponse() { IsSuccess = true };
                    }
                    else
                    {
                        return new ServiceResponse() { IsSuccess = false,Message= "Something went wrong" };
                    }
                }
                else
                {
                    return new ServiceResponse() { IsSuccess = false, Message = "Category with Id: " + id + "is not exist" };
                }
         
            }
            catch (Exception ex)
            {

                return new ServiceResponse() { IsSuccess = false, Message = ex.Message, Payload = ex.Message };
            }
        }

        public async Task<ServiceResponse> GetAllAsync()
        {
            try
            {
                 var category = await _categoryRepository.GetAllCategories();
                if (category != null)
                {

                    return new ServiceResponse() { IsSuccess = true, Payload = category };
                  
                }
                else
                {
                    return new ServiceResponse() { IsSuccess = false, Message = "Category is empty" };
                }
            }
            catch (Exception ex)
            {
                return new ServiceResponse() { IsSuccess = false, Message = ex.Message };
            }
        }

        public async Task<ServiceResponse> GetByIdAsync(int id)
        {
            try
            {
                var product = await _categoryRepository.GetById(id);
                if (product != null)
                {
                    return new ServiceResponse() { IsSuccess = true, Payload = product };
                }
                else
                {
                    return new ServiceResponse() { IsSuccess = false, Message = "Category with id: " + id + "is not exist" };
                }
            }
            catch (Exception ex)
            {
                return new ServiceResponse() { IsSuccess = false, Message = ex.Message, Payload = ex.Message };
            }
        }

        public async Task<ServiceResponse> UpdateAsync(UpdateCategoryViewModel model)
        {
            try
            {
                var oldCategory = await _categoryRepository.GetById(model.Id);
                if (oldCategory != null)
                {
                    var newCategory = _mapper.Map<UpdateCategoryViewModel, CategoryEntity>(model, oldCategory);
                    ImageWorker.RemoveImage(oldCategory.Image);
                    var pathImage = ImageWorker.SaveImage(model.ImageBase64);
                    newCategory.Image = pathImage;
                    var result = _categoryRepository.UpdateCategory(newCategory);
                    return new ServiceResponse() { IsSuccess = true };

                
                }
                else
                {
                    return new ServiceResponse() { IsSuccess = false, Message = "Category with id: " + model.Id + " is not exist" };
                }
                return null;
            }
            catch (Exception ex)
            {

                return new ServiceResponse() { IsSuccess = false, Message = ex.Message, Payload = ex.Message };
            }
        }
    }
}
