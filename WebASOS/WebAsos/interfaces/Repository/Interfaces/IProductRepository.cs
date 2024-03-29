﻿using WebAsos.Data.Entitties.Catalog;

namespace WebAsos.Interfaces.Repository.Interfaces
{
    public interface IProductRepository : IGenericRepository<ProductEntity, int>
    {
        public IQueryable<ProductEntity> Products { get; }
        public Task<ProductEntity> GetByName(string name);
        public ICollection<ProductEntity> GetProductsAsync();
        public ICollection<ProductEntity> GetByCategoryName(string category);
        public Task<List<ProductEntity>> GetAllProductsMan();
        public Task<List<ProductEntity>> GetAllProductsWomen();
        public Task<List<string>> GetAllColorProducsByName(string name);
        public Task<List<string>> GetAllSizeProducsByName(string name);
    }
}
