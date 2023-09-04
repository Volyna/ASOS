using System.ComponentModel.DataAnnotations.Schema;
using WebAsos.Data.Entitties.IdentityUser;

namespace WebAsos.Data.Entitties.DTO
{
    public class CreditCardDTO
    {
        public string CardHolderName { get; set; }
        public string Name { get; set; }
        public string CardNumber { get; set; }
        public DateTime ExpiryDate { get; set; }
        public string Cvv { get; set; }
        public bool IsDefault { get; set; }
        public int UserId { get; set; }
    }

    public class CreditCardWithIdDTO
    {
        public int Id { get; set; }
        public string CardHolderName { get; set; }
        public string Name { get; set; }
        public string CardNumber { get; set; }
        public DateTime ExpiryDate { get; set; }
        public string Cvv { get; set; }
        public bool IsDefault { get; set; }
        public int UserId { get; set; }
    }

    public class SetDefaultCreditCardDTO
    {
        public int CreditCardId { get; set; }
        public int UserId { get; set; }
    }
}
