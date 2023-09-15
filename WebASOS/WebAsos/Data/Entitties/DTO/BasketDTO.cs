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
    public class GetBasketsByIDTO
    {
        [Required(ErrorMessage = "Field idUser is required")]
        public int idUser { get; set; }

    }
    public class BasketsResponseDTO
    {
        public int CountProducts { get; set; }
        public int UserIdOrder { get; set; }
        public int ProductId { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public int Discount { get; set; }
        public string Description { get; set; }
        public string Brand { get; set; }
        public string Color { get; set; }
        public List<string> Size { get; set; }
        public int Quantity { get; set; }
        public bool IsInTheStock { get; set; }
        public int Category_id { get; set; }
        public string Images { get; set; }
    }
}
