using System.ComponentModel.DataAnnotations;

namespace WebAsos.Data.Entitties.DTO
{
    public class CreaterBasketDTO
    {
        [Required(ErrorMessage = "Field CountProducts  is required")]
        public int CountProducts { get; set; }
        [Required(ErrorMessage = "Field UserIdOrder  is required")]
        public int UserIdOrder { get; set; }
        [Required(ErrorMessage = "Field ProductId  is required")]
        public int ProductId { get; set; }
    }
    public class UpdateBasketDTO
    {
        [Required(ErrorMessage = "Field CountProducts  is required")]
        public int CountProducts { get; set; }
        [Required(ErrorMessage = "Field UserIdOrder  is required")]
        public int UserIdOrder { get; set; }
        [Required(ErrorMessage = "Field ProductId  is required")]
        public int ProductId { get; set; }
    }
    public class DeleteBasketDTO
    {
        [Required(ErrorMessage = "Field CountProducts  is required")]
        public int CountProducts { get; set; }
        [Required(ErrorMessage = "Field UserIdOrder  is required")]
        public int UserIdOrder { get; set; }
        [Required(ErrorMessage = "Field ProductId  is required")]
        public int ProductId { get; set; }
    }
}
