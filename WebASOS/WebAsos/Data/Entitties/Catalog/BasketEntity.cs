using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAsos.Data.Entitties.Catalog
{
    [Table("tblBasket")]
    public class BasketEntity : BaseEntity<int>
    {
        [Required(ErrorMessage = "Field CountProducts  is required")]
        public int CountProducts { get; set; }
        [Required(ErrorMessage = "Field UserIdOrder  is required")]
        public int UserIdOrder { get; set; }
        [Required(ErrorMessage = "Field ProductId  is required")]
        public int ProductId { get; set; }

    }
}
