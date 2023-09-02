using System.ComponentModel.DataAnnotations.Schema;
using WebAsos.Data.Entitties.IdentityUser;

namespace WebAsos.Data.Entitties.Catalog
{
    [Table("tblOrders")]
    public class OrderEntity : BaseEntity<int>
    {
        public string Surname { get; set; }

        public UserEntity User { get; set; }

        [ForeignKey(nameof(User))]
        public int? UserId { get; set; }


        public CreditCardEntity CreditCard { get; set; }

        [ForeignKey(nameof(CreditCard))]
        public int? CreditCardId { get; set; }


        public AddressEntity Address { get; set; }

        [ForeignKey(nameof(Address))]
        public int? AddressId { get; set; }

        public ICollection<OrderedProductEntity> OrderedProducts { get; set; }

    }
}
