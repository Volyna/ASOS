using System;
using System.ComponentModel.DataAnnotations.Schema;
using WebAsos.Data.Entitties.IdentityUser;

namespace WebAsos.Data.Entitties.Catalog
{
    [Table("tblOrdersProducts")]
    public class OrderProductEntity : BaseEntity<int>
    {
        
        [ForeignKey(nameof(User))]
        public int UserId { get; set; }
        public string OrderNumber { get; set; }
        public string Status { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string Street { get; set; }
        public string ZipCode { get; set; }
        public string City { get; set; }
        public string HomeNumber { get; set; }
        public string CardNumber { get; set; }
        public string ExpirationDate { get; set; }
        public string Cvv { get; set; }
        public double TotalPrice { get; set; }
        public double Discount { get; set; }
        public UserEntity User { get; set; }
        public ICollection<OrderProductItemEntity> OrderItems { get; set; }
    }
}

