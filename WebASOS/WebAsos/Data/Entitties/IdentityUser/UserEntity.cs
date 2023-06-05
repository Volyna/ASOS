using System;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace WebAsos.Data.Entitties.IdentityUser
{
    public class UserEntity : IdentityUser<int>
    {
        [StringLength(100)]
        public string FirstName { get; set; }
        [StringLength(100)]
        public string LastName { get; set; }
        [StringLength(100)]
        public string? Image { get; set; }
        public DateTime? DataBirth { get; set; }
        public string? MostlyInterested { get; set; }
        public bool? DiscountsAndSales { get; set; }
        public bool? NewStuff { get; set; }
        public bool? YourExclusives { get; set; }
        public bool? AsosPartners { get; set; }
        public virtual ICollection<UserRoleEntity> UserRoles { get; set; }
    }
}

