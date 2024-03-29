﻿using WebAsos.Data.Entitties.Catalog;
using WebAsos.Interfaces.Repository.Interfaces;

namespace WebAsos.interfaces.Repository.Interfaces
{
    public interface IOrderedProductRepository : IGenericRepository<OrderedProductEntity, int>
    {
        public IQueryable<OrderedProductEntity> OrderedProducts();
    }
}
