using Microsoft.EntityFrameworkCore;
using WebAsos.Data;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.interfaces.Repository.Interfaces;
using WebAsos.Interfaces.Repository.Classes;

namespace WebAsos.interfaces.Repository.Classes
{
    public class AddressRepository : GenericRepository<AddressEntity, int>, IAddressRepository
    {
        private readonly AppEFContext _dbContext;

        public AddressRepository(AppEFContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public IQueryable<AddressEntity> Addresses() => GetAll();

        public async Task CreateAddress(AddressEntity mode)
        {
            try
            {
                await _dbContext.Address.AddAsync(mode);
                await _dbContext.SaveChangesAsync();
            }
            catch (Exception ex)
            {

            }
        }

        public async Task<AddressEntity> GetByIdUser(int idUser)
        {
            try
            {
                var result = await _dbContext.Address.Where(a => a.UserId == idUser).FirstOrDefaultAsync();
                return result;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
