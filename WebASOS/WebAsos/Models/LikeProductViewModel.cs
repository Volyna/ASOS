using System;
namespace WebAsos.Models
{
	public class AddLikeProductViewModel
	{
		public int idProduct { get; set; }
		public int idUser { get; set; }
	}
	public class RemoveLikeProductViewModel
	{
		public int idProduct { get; set; }
		public int idUser { get; set; }
	}
	public class GetAllLikesProductsViewModel
	{
		public int idUser { get; set; }
	}
    public class LikesProductsResponseDTO
    {
        public int Id { get; set; }
        public string Name{ get; set; }
        public float Price { get; set; }
        public int Discount{ get; set; }
        public string Description { get; set; }
        public List<string> Color { get; set; }
        public List<string> Size { get; set; }
        public string Brand { get; set; }
        public int Quantity { get; set; }
        public bool IsInTheStock { get; set; }
        public string MainImage { get; set; }
        public int Category_id { get; set; }
        public bool IsOnBasket { get; set; }
    }
}

