using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data.Entitties.DTO;
using WebAsos.Services;

namespace WebAsos.interfaces.Services.Interfaces
{
    public interface IAddressService
    {
        public Task<AddressEntity> AddAddressAsync(AddressDTO model);
        public Task<List<AddressEntity>> GetAllAddressesAsync();
        public Task<AddressEntity> GetAddressByUserIdAsync(int userId);
        public Task DeleteAddressByUserIdAsync(int userId);
    }
}
