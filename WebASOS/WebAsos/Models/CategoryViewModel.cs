namespace WebAsos.Models
{
    public class CategoryViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
    }

    public class CategoryCreateViewModel
    {
        public string Name { get; set; }
        public string Image { get; set; }
        public string Parent { get; set; }
    }

    public class CategoryUpdateViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Parent { get; set; }
    }

    public class CategoryGroupViewModel
    {
        public int Id { get; set; }

        public string Name { get; set; }
        public string Image { get; set; }

        public int? ParentId { get; set; }

        public List<CategoryGroupViewModel> Children { get; set; }
    }
}
