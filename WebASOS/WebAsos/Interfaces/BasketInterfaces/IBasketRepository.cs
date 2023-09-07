﻿using Microsoft.AspNetCore.Identity;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data.Entitties.DTO;

namespace WebAsos.interfaces.BasketInterfaces
{
    public interface IBasketRepository
    {
        public Task<IdentityResult> CreateBasketAsync(BasketEntity model);
        public Task<IdentityResult> UpdateBasketAsync(BasketEntity model);
        public Task<IdentityResult> DeleteBasketAsync(BasketEntity model);
        public Task<BasketEntity> GetBasketUpdateDTOAsync(UpdateBasketDTO model);
        public Task<List<BasketEntity>> GetBasketsAsync();
        public Task<BasketEntity> GetBasketAsync(int idUser, int countProduct, int idProduct);
    }
}
