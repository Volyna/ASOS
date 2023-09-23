namespace WebAsos.Data.Entitties.DTO
{
    public class OrderDTO
    {
        public int UserId { get; set; }
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
        public List<ResponseListProductToOrder> Orders { get; set; }
    }
    public class ResponseListProductToOrder
    {
        public int ProductId { get; set; }
        public int CountProducts { get; set; }
        public int Price { get; set; }
        public int Discount { get; set; }
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
