using System.ComponentModel.DataAnnotations;

namespace WebAsos.Data.ViewModels.Category
{
    public class CreateCategoryViewModel
    {
        [Required]
        public string Name { get; set; }
        //[Required]
        //public string ImageBase64 { get; set; }
    }
}
