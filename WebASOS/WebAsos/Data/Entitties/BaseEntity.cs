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
}

