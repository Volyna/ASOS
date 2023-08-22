namespace WebAsos.Data.Entitties.DTO
{
    public class OrderDTO
    {
        public string Surname { get; set; }
        public string Name { get; set; }
        public int? UserId { get; set; }
        public int? CreditCardId { get; set; }
        public int? AddressId { get; set; }
        public ICollection<OrderedProductDTO> Ordered_Products { get; set; }
    }

    public class OrderWithUpdateProductsDTO
    {
        public string Surname { get; set; }
        public string Name { get; set; }
        public int? UserId { get; set; }
        public int? CardId { get; set; }
        public int? AddressId { get; set; }
        public ICollection<OrderedProductUpdatedDTO> Products { get; set; }
    }
}
