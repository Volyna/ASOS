﻿namespace WebAsos.Data.Entitties.DTO
{
    public class CreateProductDTO
    {
        public string Name { get; set; }
        public string ProductType { get; set; }
        public string Material { get; set; }
        public string Pattern { get; set; }
        public string Fit { get; set; }
        public string Shop { get; set; }
        public float Price { get; set; }
        public int Discount { get; set; }
        public string Description { get; set; }
        public string Color { get; set; }
        public string Size { get; set; }
        public string Brand { get; set; }
        public int Quantity { get; set; }
        public bool IsInTheStock { get; set; }
        public IList<ProductImageUploadDTO> Images { get; set; }
        public int CategoryId { get; set; }
    }
}
