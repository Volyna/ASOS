using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data.Entitties.DTO;

namespace WebAsos.interfaces.Services.Interfaces
{
    public interface ICreditCardService
    {
        public Task<CreditCardEntity> AddCreditCardAsync(CreditCardDTO model);
        public Task SetDefaultCreditCardAsync(int creditCardId, int userId);
        public Task<CreditCardEntity> FindDefaultCreditCardAsync(int userId);
        public Task<List<CreditCardEntity>> GetCreditCardsByUserIdAsync(int userId);
        public Task<List<CreditCardWithIdDTO>> GetAllCreditCardsAsync();
    }
}
