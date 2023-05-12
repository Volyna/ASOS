using Microsoft.Extensions.Diagnostics.HealthChecks;
using System;
using System.ComponentModel.DataAnnotations;

namespace WebAsos.Data.Entitties
{
    public interface IEntity<T>
    {
        T Id { get; set; }
        bool IsDeleted { get; set; }
        DateTime DateCreated { get; set; }
    }
    public class BaseEntity<T> : IEntity<T>
    {
        [Key]
        public T Id { get; set; }
        public bool IsDeleted { get; set; }
        public DateTime DateCreated { get; set; }
    }


    public class Language
    {
        private string _name;
        private string _description;
    }

    public class CategoryEntity : BaseEntity<int>
    {
        [Required, StringLength(255)]
        public string Name { get; set; }
        [StringLength(255)]
        public string Image { get; set; }
        [StringLength(4000)]
        public string Description { get; set; }

    }

    class Salo
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}


