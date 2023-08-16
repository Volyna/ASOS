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

    }
}
