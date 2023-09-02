using WebAsos.Data.Entitties.Catalog;
using WebAsos.Interfaces.Repository.Interfaces;

namespace WebAsos.interfaces.Repository.Interfaces
{
    public interface ICreditCardRepository : IGenericRepository<CreditCardEntity, int>
    {
        IQueryable<CreditCardEntity> CreditCards();
    }
}
