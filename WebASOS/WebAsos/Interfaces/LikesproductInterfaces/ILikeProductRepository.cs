using System;
using Microsoft.AspNetCore.Identity;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Models;
using WebAsos.Services;

namespace WebAsos.Interfaces.LikesproductInterfaces
{
	public interface ILikeProductRepository
	{
		public Task<IdentityResult> RemoveLikeProductAsync(RemoveLikeProductViewModel model);
        public Task<IdentityResult> AddLikeAsync(AddLikeProductViewModel model);
        public Task<List<LikeEntity>> GetAllLikesAsync(GetAllLikesProductsViewModel model);
        public Task<List<LikesProductsResponseDTO>> GetAllProductsLikesAsync(List<LikeEntity> model);
        public Task<List<LikeEntity>> GetAllLikesUser(int idUser);
    }
}

