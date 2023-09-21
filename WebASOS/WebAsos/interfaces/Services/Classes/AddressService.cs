using AutoMapper;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data.Entitties.DTO;
using WebAsos.interfaces.Repository.Interfaces;
using WebAsos.interfaces.Services.Interfaces;

namespace WebAsos.interfaces.Services.Classes
{
    public class AddressService : IAddressService
    {
        private readonly IMapper _mapper;
        private readonly IAddressRepository _addressRepository;

        public AddressService(IMapper mapper, IAddressRepository addressRepository)
        {
            _mapper = mapper;
            _addressRepository = addressRepository;
        }

        public async Task<AddressEntity> AddAddressAsync(AddressDTO model)
        {
            var address = _mapper.Map<AddressDTO, AddressEntity>(model);
            await _addressRepository.CreateAsync(address);
            return address;
        }

        public async Task DeleteAddressByUserIdAsync(int userId)
        {
            var address = _addressRepository.GetAll().FirstOrDefault(a => a.UserId == userId);

            if (address != null)
            {
                await _addressRepository.DeleteAsync(address.Id);
            }
        }

        public async Task<AddressEntity> GetAddressByUserIdAsync(int userId)
        {
            var address = _addressRepository.GetAll().FirstOrDefault(a => a.UserId == userId);
            return address;
        }

        public async Task<List<AddressEntity>> GetAllAddressesAsync()
        {
            var addresses = _addressRepository.GetAll().ToList();
            return addresses;
        }
    }
}
