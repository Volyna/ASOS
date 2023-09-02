using System.ComponentModel.DataAnnotations.Schema;
using WebAsos.Data.Entitties.IdentityUser;

namespace WebAsos.Data.Entitties.Catalog
{
    [Table("tblCreditCard")]
    public class CreditCardEntity: BaseEntity<int>
    {
        public string CardHolderName { get; set; }
        public string CardNumber { get; set; }
        public DateTime ExpiryDate { get; set; }
        public string Cvv { get; set; }
        public bool IsDefault { get; set; }



        public UserEntity User { get; set; }

        [ForeignKey(nameof(User))]
        public int? UserId { get; set; }
    }
}
