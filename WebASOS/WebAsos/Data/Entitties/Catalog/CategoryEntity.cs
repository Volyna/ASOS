using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAsos.Data.Entitties.Catalog
{
    public class CategoryEntity : BaseEntity<int>
    {
        //[MaxLength(255)]
        //public string Image { get; set; }
        [ForeignKey("Parent")]
        public int? ParentId { get; set; }
        public CategoryEntity Parent { get; set; }
        virtual public ICollection<CategoryEntity> Childrens { get; set; }
        public ICollection<ProductEntity> Products { get; set; }
    }
}
