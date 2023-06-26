using System.ComponentModel.DataAnnotations;

namespace WebAsos.Data.Entitties.Catalog
{
    public class CategoryEntity : BaseEntity<int>
    {
        [MaxLength(255)]
        public string Image { get; set; }
    }
}
