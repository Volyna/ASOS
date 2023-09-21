using WebAsos.Data.Entitties.Catalog;
using WebAsos.Interfaces.Repository.Interfaces;

namespace WebAsos.interfaces.Repository.Interfaces
{
    public interface IAddressRepository : IGenericRepository<AddressEntity, int>
    {
        IQueryable<AddressEntity> Addresses();
    }
}
