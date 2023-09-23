using System;
using WebAsos.Models;
using WebAsos.Services;

namespace WebAsos.Interfaces.LikesproductInterfaces
{
	public interface ILikeProductService
	{
		public Task<ServiceResponse> AddLikeAsync(AddLikeProductViewModel model);
		public Task<ServiceResponse> RemoveLikeAsync(RemoveLikeProductViewModel model);
		public Task<ServiceResponse> GetAllProductsLikesAsync(GetAllLikesProductsViewModel model);
	}
}

