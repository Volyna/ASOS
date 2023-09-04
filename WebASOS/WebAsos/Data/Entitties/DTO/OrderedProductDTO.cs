namespace WebAsos.Data.Entitties.DTO
{
    public class OrderedProductDTO
    {
        public int ProductId { get; set; }
        public int Count { get; set; }
    }

    public class OrderedProductUpdatedDTO
    {
        public int Count { get; set; }
        public int? ProductId { get; set; }
        public OrderWithUpdateProductsDTO Product { get; set; }
    }
}
