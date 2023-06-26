﻿using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using WebAsos.Data;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Interfaces.CategoryInterfaces;

namespace WebAsos.Repositories.Category
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly AppEFContext _context;
        public CategoryRepository(AppEFContext context)
        {
            _context = context;
        }

        public async Task<IdentityResult> CreateCategory(CategoryEntity model)
        {
            try
            {
                var result = await _context.Categories.AddAsync(model);
                await _context.SaveChangesAsync();
                return IdentityResult.Success;
            }
            catch (Exception ex)
            {
                return IdentityResult.Failed();
            }
          
        }

        public async Task<CategoryEntity> GetByName(string name)
        {
            var result = await _context.Categories.FirstOrDefaultAsync(c => c.Name.ToLower() == name.ToLower());
            return result;
        }
    }
}
