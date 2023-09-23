using Microsoft.EntityFrameworkCore;
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

        public async Task CreateCredit(CreditCardEntity creditCard)
        {
            try
            {
                var result = await _dbContext.CreditCard.AddAsync(creditCard);
                
                await _dbContext.SaveChangesAsync();
                
            }
            catch (Exception ex)
            {
                
            }
        }

        public async Task<CreditCardEntity> IfCardExist(int idUse)
        {
            try
            {
                var result = await _dbContext.CreditCard.Where(c => c.UserId == idUse).FirstOrDefaultAsync();
                return result;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
