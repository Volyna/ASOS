using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAsos.Data.Entitties.Catalog
{
    [Table("tblProducts")]
    public class ProductEntity : BaseEntity<int>
    {
        [Required(ErrorMessage = "The Price field is required.")]
        [Range(1, float.MaxValue, ErrorMessage = "Min price is 1$")]
        public float Price { get; set; }

        [Range(0, 100, ErrorMessage = "The Discount field must be between 0 and 100.")]
        public int Discount { get; set; }


        [Required(ErrorMessage = "The Description field is required.")]
        public string Description { get; set; }


        [Required(ErrorMessage = "The Color field is required.")]
        public string Color { get; set; }


        [Required(ErrorMessage = "The Sizse field is required.")]
        public string Size { get; set; }


        [Required(ErrorMessage = "The Brand field is required.")]
        public string Brand { get; set; }


        [Required(ErrorMessage = "The Quantity field is required.")]
        [Range(0, int.MaxValue, ErrorMessage = "The Quantity field must be a positive value.")]
        public int Quantity { get; set; }

        [Required(ErrorMessage = "The Cout field is required.")]
        [Range(0, int.MaxValue, ErrorMessage = "The Quantity field must be a positive value.")]
        public int Cout { get; set; }


        public bool IsInTheStock { get; set; }

        public bool IsFavorite { get; set; }



         //Foreign keys:

        public CategoryEntity Category { get; set; }

        [ForeignKey(nameof(Category))]
        public int CategoryId { get; set; }


        public virtual ICollection<ProductImageEntity> ProductImages { get; set; }
    }
}
