using System.ComponentModel.DataAnnotations;

namespace WebAsos.Data.ViewModels.Category
{
    public class CreateCategoryViewModel
    {
        [Required]
        public string Name { get; set; }
    }
}
