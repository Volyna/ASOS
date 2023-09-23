using WebAsos.Data.Entitties.DTO;
using WebAsos.Services;
using AutoMapper;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Models;
using System.Data;
using WebAsos.Interfaces.Repository.Interfaces;
using WebAsos.Interfaces.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using WebAsos.Constants.Product;
using WebAsos.Interfaces.LikesproductInterfaces;

namespace WebAsos.Interfaces.Services.Classes
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;
        private readonly ICategoryService _categoryService;
        private readonly IProductImageService _productImageService;
        private readonly IProductImageRepository _productImageRepository;
        private readonly ILikeProductRepository _likeProductRepository;

        private readonly IMapper _mapper;

        public ProductService(IProductRepository productRepository, IMapper mapper, ICategoryService categoryService, IProductImageService productImageService, IProductImageRepository productImageRepository, ILikeProductRepository likeProductRepository)
        {
            _likeProductRepository = likeProductRepository;
            _productRepository = productRepository;
            _mapper = mapper;
            _categoryService = categoryService;
            _productImageService = productImageService;
            _productImageRepository = productImageRepository;
        }

        public async Task<ServiceResponse> CreateProductAsync(CreateProductDTO model)
        {
            var product = _mapper.Map<CreateProductDTO, ProductEntity>(model);

            var category = await _categoryService.GetByIdAsync(model.CategoryId);
            if (category == null)
            {
                return new ServiceResponse
                {
                    Message = "Category is not exist with id: " + model.CategoryId,
                    IsSuccess = false,
                };
            }

            product.CategoryId = category.Id;


            bool isFirstPicture = true;

            if (product != null)
            {
                await _productRepository.CreateAsync(product);


                foreach (var img in model.Images)
                {
                    var imgTemplate = img.Data;
                    var imgFileName = await _productImageService.SaveImageAsync(imgTemplate);
                    ProductImageEntity new_img_to_upload = new ProductImageEntity { Name = imgFileName, ProductId = product.Id };

                    if (isFirstPicture == true)
                    {
                        new_img_to_upload.IsMainImage = true;
                        isFirstPicture = false;
                    }

                    await _productImageService.CreateProductImageAsync(new_img_to_upload);
                }

                return new ServiceResponse
                {
                    Message = "Create Product",
                    IsSuccess = true,
                    Payload = "ok"
                };
            }


            return new ServiceResponse
            {
                Message = "Create Product",
                IsSuccess = false,
            };
        }

        

        public async Task DeleteProductAsync(int id)
        {
            //    var toDelete = _productImageRepository.GetAll().Where(img => img.ProductId == id).ToList();
            //    toDelete.ForEach(img => _productImageRepository.DeleteAsync(img.Id));

            //    await _productRepository.DeleteAsync(id);

            var toDelete = _productRepository.GetAll().Where(prod => prod.Id == id).FirstOrDefault();

            await _productRepository.DeleteAsync(id);

           

        }

        public async Task<ServiceResponse> GetAllProductsMenAsync(int idUser)
        {
            try
            {
                var products = await _productRepository.GetAllProductsMan();
                var userLikesProducts = await _likeProductRepository.GetAllLikesUser(idUser);
                if (products != null)
                {
                    List<ProductProductDTO> response = new List<ProductProductDTO>();
                    foreach (var item in products)
                    {
                        ProductProductDTO tempProductDTO = new ProductProductDTO();
                        tempProductDTO.Id = item.Id;
                        tempProductDTO.Name = item.Name;
                        tempProductDTO.Price = item.Price;
                        tempProductDTO.Discount = item.Discount;
                        tempProductDTO.Description = item.Description;
                        tempProductDTO.Color = await _productRepository.GetAllColorProducsByName(item.Name);
                        tempProductDTO.Size = await _productRepository.GetAllSizeProducsByName(item.Name);
                        tempProductDTO.Brand = item.Brand;
                        var ifLikeExist = userLikesProducts.Where(l => l.userID == idUser && l.productLikeId == item.Id).FirstOrDefault();
                        tempProductDTO.isLikeUser = ifLikeExist != null ? true : false;
                        var mainImage = await _productImageService.GetMainImageByIdAsync(item.Id);
                        if (mainImage != null)
                            tempProductDTO.MainImage = _productImageService.GetBase64ByName(mainImage.Name);
                        tempProductDTO.Quantity = item.Quantity;
                        tempProductDTO.IsInTheStock = item.IsInTheStock;
                        tempProductDTO.IsInTheStock = item.IsInTheStock;
                        tempProductDTO.CategoryId = item.CategoryId;
                        //var productImages = await _productImageRepository.GetAllImagesById(item.Id);
                        //tempProductDTO.Images = await _productImageService.GetAllProductImages(productImages);
                        response.Add(tempProductDTO);
                     
                        
                    }
                    return new ServiceResponse { IsSuccess = true, Message = "Successfully request",Payload= response };
                }
                return new ServiceResponse { IsSuccess = false, Message = "Some data is null !!!" };
            }
            catch (Exception ex)
            {

                return new ServiceResponse
                {
                    Message = ex.Message,
                    IsSuccess = false,
                };
            }
        }

        public async Task<ServiceResponse> GetAllProductsWomenAsync(int userId)
        {
            try
            {
                var products = await _productRepository.GetAllProductsWomen();
                var userLikesProducts = await _likeProductRepository.GetAllLikesUser(userId);
                if (products != null)
                {
                    List<ProductProductDTO> response = new List<ProductProductDTO>();
                    foreach (var item in products)
                    {
                        ProductProductDTO tempProductDTO = new ProductProductDTO();
                        tempProductDTO.Id = item.Id;
                        tempProductDTO.Name = item.Name;
                        tempProductDTO.Price = item.Price;
                        tempProductDTO.Discount = item.Discount;
                        tempProductDTO.Description = item.Description;
                        tempProductDTO.Color = await _productRepository.GetAllColorProducsByName(item.Name);
                        tempProductDTO.Size = await _productRepository.GetAllSizeProducsByName(item.Name);
                        tempProductDTO.Brand = item.Brand;
                        var ifLikeExist = userLikesProducts.Where(l => l.userID == userId && l.productLikeId == item.Id).FirstOrDefault();
                        tempProductDTO.isLikeUser = ifLikeExist != null ? true : false;
                        var mainImage = await _productImageService.GetMainImageByIdAsync(item.Id);
                        if (mainImage != null)
                            tempProductDTO.MainImage = _productImageService.GetBase64ByName(mainImage.Name);
                        tempProductDTO.Quantity = item.Quantity;
                        tempProductDTO.IsInTheStock = item.IsInTheStock;
                        tempProductDTO.IsInTheStock = item.IsInTheStock;
                        tempProductDTO.CategoryId = item.CategoryId;
                        //var productImages = await _productImageRepository.GetAllImagesById(item.Id);
                        //tempProductDTO.Images = await _productImageService.GetAllProductImages(productImages);
                        response.Add(tempProductDTO);


                    }
                    return new ServiceResponse { IsSuccess = true, Message = "Successfully request", Payload = response };
                }
                return new ServiceResponse { IsSuccess = false, Message = "Some data is null !!!" };
            }
            catch (Exception ex)
            {

                return new ServiceResponse
                {
                    Message = ex.Message,
                    IsSuccess = false,
                };
            }
        }

        public async Task<ServiceResponse> GetProductAsync(string name)
        {
            ICollection<ProductEntity> res = _productRepository.GetProductsAsync();



            var list = new List<ProductViewModel>();
            foreach (var p in res)
            {
                var item = _mapper.Map<ProductEntity, ProductViewModel>(p);

                var mainImage = await _productImageService.GetMainImageByIdAsync(item.Id);

                if (mainImage != null)
                    item.Image = _productImageService.GetBase64ByName(mainImage.Name);

                list.Add(item);
            }

            return new ServiceResponse
            {
                Message = "Get products",
                IsSuccess = true,
                Payload = list
            };
        }

        public async Task<ServiceResponse> GetProductByCategoryId(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<ServiceResponse> GetProductByIdAsync(int id)
        {
            var res = await _productRepository.GetByIdAsync(id);
            var item = _mapper.Map<ProductEntity, ProductViewModel>(res);
            var img = await _productImageService.GetMainImageByParentId(item.Id);
            item.Image = _productImageService.GetBase64ByName(img.Name);

            ProductProductDTO result = new();
            result.Id = item.Id;
            result.Name = item.Name;
            result.Price = item.Price;
            result.Discount = item.Discount;
            result.Description = item.Description;
            result.Color = await _productRepository.GetAllColorProducsByName(item.Name);
            result.Size = await _productRepository.GetAllSizeProducsByName(item.Name);
            result.Brand = item.Brand;

            var mainImage = await _productImageService.GetMainImageByIdAsync(item.Id);
            if (mainImage != null)
                result.MainImage = _productImageService.GetBase64ByName(mainImage.Name);
            result.Quantity = item.Quantity;
            result.IsInTheStock = item.IsInTheStock;
            result.IsInTheStock = item.IsInTheStock;

            return new ServiceResponse
            {
                Message = "Get product",
                IsSuccess = true,
                Payload = result
            };
        }

        public async Task<ServiceResponse> GetProductsAsync()
        {
            ICollection<ProductEntity> res = _productRepository.GetProductsAsync();


            var list = new List<ProductViewModel>();
            foreach (var p in res)
            {
                var item = _mapper.Map<ProductEntity, ProductViewModel>(p);

                var mainImage = await _productImageService.GetMainImageByIdAsync(item.Id);

                if (mainImage != null)
                    item.Image = _productImageService.GetBase64ByName(mainImage.Name);

                list.Add(item);
            }

            return new ServiceResponse
            {
                Message = "Get products",
                IsSuccess = true,
                Payload = list
            };
        }

        public async Task<ServiceResponse> ToggleFavoriteStatus(int id)
        {
            var product =  await _productRepository.GetByIdAsync(id);
            if (product == null)
            {
                return new ServiceResponse
                {
                    Message = "No product found",
                    IsSuccess = false
                };
            }

            product.IsFavorite = !product.IsFavorite;

            return new ServiceResponse
            {
                Message = "Toggle favorite status",
                IsSuccess = true,
                Payload = product.IsFavorite
            };
        }

        public async Task<ServiceResponse> UpdateProductAsync(UpdateProductDTO model)
        {
            var product = _mapper.Map<UpdateProductDTO, ProductEntity>(model);

            var category = await _categoryService.GetByIdAsync(model.CategoryId);

            product.CategoryId = category.Id;


            bool isFirstPicture = true;

            if (product != null)
            {
                await _productRepository.UpdateAsync(product);


                foreach (var img in model.Images)
                {
                    var imgTemplate = img.Data;
                    var imgFileName = await _productImageService.SaveImageAsync(imgTemplate);
                    ProductImageEntity new_img_to_upload = new ProductImageEntity { Name = imgFileName, ProductId = product.Id };

                    if (isFirstPicture == true)
                    {
                        new_img_to_upload.IsMainImage = true;
                        isFirstPicture = false;
                    }

                    await _productImageService.UpdateProductImageAsync(new_img_to_upload);
                }

                return new ServiceResponse
                {
                    Message = "Update Product",
                    IsSuccess = true,
                    Payload = "ok"
                };
            }


            return new ServiceResponse
            {
                Message = "Update Product",
                IsSuccess = false,
            };
        }
    }
}
