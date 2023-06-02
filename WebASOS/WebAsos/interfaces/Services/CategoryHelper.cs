using WebAsos.Models;

namespace WebAsos.interfaces.Services
{
    public static class CategoryHelper
    {
        public static IList<CategoryGroupViewModel> BuildTree(this IEnumerable<CategoryGroupViewModel> source)
        {
            var groups = source.GroupBy(i => i.ParentId);

            var el = groups.FirstOrDefault();
            var k = el.Key;

            var roots = groups.FirstOrDefault(g => g.Key.HasValue == false).ToList();

            if (roots.Count > 0)
            {
                var dict = groups.Where(g => g.Key.HasValue).ToDictionary(g => g.Key.Value, g => g.ToList());
                for (int i = 0; i < roots.Count; i++)
                    AddChildren(roots[i], dict);
            }

            return roots;
        }

        private static void AddChildren(CategoryGroupViewModel node, IDictionary<int, List<CategoryGroupViewModel>> source)
        {
            if (source.ContainsKey(node.Id))
            {
                node.Children = source[node.Id];
                for (int i = 0; i < node.Children.Count; i++)
                    AddChildren(node.Children[i], source);
            }
            else
            {
                node.Children = new List<CategoryGroupViewModel>();
            }
        }
    }
}
