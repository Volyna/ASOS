using System;
using System.ComponentModel.DataAnnotations.Schema;
using WebAsos.Data.Entitties.IdentityUser;

namespace WebAsos.Data.Entitties.Catalog
{
    [Table("tblOrderProductItem")]
    public class OrderProductItemEntity : BaseEntity<int>
    {
        [ForeignKey(nameof(Product))]
        public int ProductId { get; set; }
        public ProductEntity Product { get; set; }

        [ForeignKey(nameof(User))]
        public int UserId { get; set; }
        public UserEntity User { get; set; }

        public double Price { get; set; }
        public int Discount { get; set; }
        public int Count { get; set; }
        public string OrderNumber { get; set; }
    }
}

