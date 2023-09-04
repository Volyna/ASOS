using WebAsos.Data;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.interfaces.Repository.Interfaces;
using WebAsos.Interfaces.Repository.Classes;

namespace WebAsos.interfaces.Repository.Classes
{
    public class CreditCardRepository : GenericRepository<CreditCardEntity, int>, ICreditCardRepository
    {
        private readonly AppEFContext _dbContext;

        public CreditCardRepository(AppEFContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public IQueryable<CreditCardEntity> CreditCards() => GetAll();
    }
}
