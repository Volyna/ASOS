using System;
using WebAsos.Interfaces.LikesproductInterfaces;
using WebAsos.Models;

namespace WebAsos.Services
{
	public class LikeService : ILikeProductService
    {
        public readonly ILikeProductRepository _likeProductRepository;
        public LikeService(ILikeProductRepository likeProductRepository)
        {
            _likeProductRepository = likeProductRepository;

        }
        public async Task<ServiceResponse> AddLikeAsync(AddLikeProductViewModel model)
        {
            try
            {
                var result = await _likeProductRepository.AddLikeAsync(model);
                if (result.Succeeded)
                {
                    return new ServiceResponse
                    {
                        Message = "Successed add like product",
                        IsSuccess = true,
                    };
                }
                else
                {
                    return new ServiceResponse
                    {
                        Message = "Error db!",
                        IsSuccess = false,
                    };
                }
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

        public async Task<ServiceResponse> GetAllProductsLikesAsync(GetAllLikesProductsViewModel model)
        {
            try
            {
                var resultLikes = await _likeProductRepository.GetAllLikesAsync(model);
                if (resultLikes != null)
                {
                    var resultProductsLikes = await _likeProductRepository.GetAllProductsLikesAsync(resultLikes);
                    if (resultProductsLikes != null)
                    {
                        return new ServiceResponse
                        {
                            Message = "Successed request",
                            IsSuccess = true,
                            Payload = resultProductsLikes
                        };
                    }
                    else
                    {
                        return new ServiceResponse
                        {
                            Message = "Successed request with empty list",
                            IsSuccess = true,
                        };
                    }
                }

                return new ServiceResponse
                {
                    Message = "Successed request with empty list",
                    IsSuccess = true,
                };
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

        public async Task<ServiceResponse> RemoveLikeAsync(RemoveLikeProductViewModel model)
        {
            try
            {
                var result = await _likeProductRepository.RemoveLikeProductAsync(model);
                if (result.Succeeded)
                {
                    return new ServiceResponse
                    {
                        Message = "Successed remove like product",
                        IsSuccess = true,
                    };
                }
                else
                {
                    return new ServiceResponse
                    {
                        Message = "Error db!",
                        IsSuccess = false,
                    };
                }
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
    }
}

