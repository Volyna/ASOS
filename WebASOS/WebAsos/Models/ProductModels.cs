namespace WebAsos.Models
{
    public class ProductViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public int Discount { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }
        public int Size { get; set; }
        public string Brand { get; set; }
        public int Quantity { get; set; }
        public bool IsInTheStock { get; set; }
        public string Image { get; set; }
        public string Category { get; set; }
    }

    public class ProductCreateViewModel
    {
        public string Name { get; set; }
        public float Price { get; set; }
        public int Discount { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }
        public int Size { get; set; }
        public string Brand { get; set; }
        public int Quantity { get; set; }
        public bool IsInTheStock { get; set; }
        public string Image { get; set; }
        public string Category { get; set; }
    }
    public class ProductUpdateViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public float Price { get; set; }
        public int Discount { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }
        public int Size { get; set; }
        public string Brand { get; set; }
        public int Quantity { get; set; }
        public bool IsInTheStock { get; set; }
        public string Image { get; set; }
        public string Category { get; set; }
    }

    public class ProductUploadImageViewModel
    {
        public IFormFile Image { get; set; }
    }
}
