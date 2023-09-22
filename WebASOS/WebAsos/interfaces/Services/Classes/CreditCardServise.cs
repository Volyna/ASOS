using AutoMapper;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data.Entitties.DTO;
using WebAsos.interfaces.Repository.Interfaces;
using WebAsos.interfaces.Services.Interfaces;
using WebAsos.interfaces.UserService;

namespace WebAsos.interfaces.Services.Classes
{
    public class CreditCardServise : ICreditCardService
    {
        private readonly ICreditCardRepository _creditCardRepository;
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;

        public CreditCardServise(ICreditCardRepository creditCardRepository, IUserRepository userRepository, IMapper mapper)
        {
            _creditCardRepository = creditCardRepository;
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public async Task<CreditCardEntity> AddCreditCardAsync(CreditCardDTO model)
        {
            var creditCard = _mapper.Map<CreditCardDTO, CreditCardEntity>(model);
            var otherCreditCards = _creditCardRepository.GetAll().Where(c => c.UserId == creditCard.UserId).ToList();

            if (otherCreditCards.Any() && creditCard.IsDefault)
                foreach (var otherCreditCard in otherCreditCards)
                {
                    otherCreditCard.IsDefault = false;
                    await _creditCardRepository.UpdateAsync(otherCreditCard);
                }

            await _creditCardRepository.CreateAsync(creditCard);

            return creditCard;
        }

        public async  Task<CreditCardEntity> FindDefaultCreditCardAsync(int userId)
        {
            var creditCard = _creditCardRepository.GetAll().Where(creditCard => creditCard.UserId == userId && creditCard.IsDefault).FirstOrDefault();

            return creditCard;
        }

        public async Task<List<CreditCardWithIdDTO>> GetAllCreditCardsAsync()
        {
            var creditCards = _creditCardRepository.GetAll().ToList();
            return _mapper.Map<List<CreditCardEntity>, List<CreditCardWithIdDTO>>(creditCards);
        }

        public async Task<List<CreditCardEntity>> GetCreditCardsByUserIdAsync(int userId)
        {
            try
            {
                var creditCards = _creditCardRepository.GetAll().Where(creditCard => creditCard.UserId == userId).ToList();
                return creditCards;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public async Task SetDefaultCreditCardAsync(int creditCardId, int userId)
        {
            var creditCards = _creditCardRepository.GetAll().Where(creditCards => creditCards.UserId == userId).ToList();
            foreach (var otherCreditCard in creditCards)
            {
                if (otherCreditCard.Id == creditCardId)
                {
                    otherCreditCard.IsDefault = true;
                }
                else
                {
                    otherCreditCard.IsDefault = false;
                }
                await _creditCardRepository.UpdateAsync(otherCreditCard);
            }
        }
    }
}
