using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAsos.Data.Entitties.Catalog
{
    [Table("tblProductImages")]
    public class ProductImageEntity : BaseEntity<int>
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Field name is required")]
        public string Name { get; set; }

        public int Priority { get; set; }

        public bool IsMainImage { get; set; }



        public ProductEntity Product { get; set; }

        [ForeignKey(nameof(Product))]
        public int? ProductId { get; set; }

    }
}
