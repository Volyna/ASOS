using System.ComponentModel.DataAnnotations.Schema;

namespace WebAsos.Data.Entitties.Catalog
{
    public class OrderedProductEntity: BaseEntity<int>
    {
        public int Count { get; set; }


        
        public OrderEntity Order { get; set; }

        [ForeignKey(nameof(Order))]
        public int? OrderId { get; set; }

        
        public ProductEntity Product { get; set; }

        [ForeignKey(nameof(Product))]
        public int? ProductId { get; set; }
    }
}
