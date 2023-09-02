using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data;
using Microsoft.EntityFrameworkCore;
using WebAsos.Interfaces.Repository.Interfaces;
using Microsoft.AspNetCore.Identity;
using WebAsos.Interfaces.CategoryInterfaces;

namespace WebAsos.Interfaces.Repository.Classes
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

        public async Task<List<CategoryEntity>> GetAllCategories()
        {
            try
            {
                var result = await _context.Categories.ToListAsync();
                return result;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task<CategoryEntity> GetById(int id)
        {
            var result = await _context.Categories.FirstOrDefaultAsync(c => c.Id == id);
            return result;
        }

        public async Task<CategoryEntity> GetByName(string name)
        {
            var result = await _context.Categories.FirstOrDefaultAsync(c => c.Name.ToLower() == name.ToLower());
            return result;
        }

        public async Task<IdentityResult> RemoveCategory(CategoryEntity model)
        {
            try
            {
                var result = _context.Categories.Remove(model);
                await _context.SaveChangesAsync();

                return IdentityResult.Success;
            }
            catch (Exception ex)
            {
                return IdentityResult.Failed();
            }
        }

        public async Task UpdateCategory(CategoryEntity model)
        {
            _context.Categories.Update(model);
            await _context.SaveChangesAsync();
        }
    }
}
