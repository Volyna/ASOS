using WebAsos.Data.Entitties.Catalog;
using WebAsos.Interfaces.Repository.Interfaces;

namespace WebAsos.interfaces.Repository.Interfaces
{
    public interface ICreditCardRepository : IGenericRepository<CreditCardEntity, int>
    {
        public Task CreateCredit(CreditCardEntity creditCard);
        public Task<CreditCardEntity> IfCardExist(int idUse);
    }
}
