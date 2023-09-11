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
using WebAsos.Data;

namespace WebAsos.Interfaces.Services.Classes
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;
        private readonly ICategoryService _categoryService;
        private readonly IProductImageService _productImageService;
        private readonly IProductImageRepository _productImageRepository;
        private readonly AppEFContext _context;

        private readonly IMapper _mapper;

        public ProductService(IProductRepository productRepository, IMapper mapper, ICategoryService categoryService, IProductImageService productImageService, IProductImageRepository productImageRepository, AppEFContext context)
        {
            _context = context;
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
            var toDelete = _productImageRepository.GetAll().Where(img => img.ProductId == id).ToList();
            toDelete.ForEach(img => _productImageRepository.DeleteAsync(img.Id));

            await _productRepository.DeleteAsync(id);
        }

        public async Task<ServiceResponse> GetAllProductsMan()
        {
            try
            {
                var resultProduct = await _productRepository.GetAllProdcutsMan();
                if (resultProduct != null)
                {
                    var listResponse = new List<ProductResponseDTO>();
                    foreach (var product in resultProduct)
                    {
                        ProductResponseDTO productResponseDTO = new ProductResponseDTO();
                        productResponseDTO.Name = product.Name;
                        productResponseDTO.Description = product.Description;
                        productResponseDTO.Price =  product.Price;
                        productResponseDTO.Size = await _context.Products.Where(p => p.Name.ToLower() == product.Name.ToLower() && p.Color.ToLower() == product.Color.ToLower()).Select(i => i.Size).ToListAsync();
                        productResponseDTO.Quantity = product.Quantity;
                        productResponseDTO.Discount = product.Discount;
                        productResponseDTO.Color = await _context.Products.Where(p => p.Name.ToLower() == product.Name.ToLower() && p.Color.ToLower() == product.Color.ToLower()).Select(i => i.Color).ToListAsync();
                        productResponseDTO.Brand = product.Brand;
                        productResponseDTO.IsInTheStock =product.IsInTheStock;
                        productResponseDTO.Images = await _productImageService.GetProductImagesProduct(product.Id);
                        listResponse.Add(productResponseDTO);


                    }

                    return new ServiceResponse { IsSuccess = true, Message = "Successfully request products", Payload = listResponse };
                }
                else
                {
                    return new ServiceResponse { IsSuccess = false, Message = "Not successfully request products man is null" };
                }


            }
            catch (Exception ex)
            {

                return new ServiceResponse { IsSuccess = false, Message = ex.Message };
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

            return new ServiceResponse
            {
                Message = "Get product",
                IsSuccess = true,
                Payload = item
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
