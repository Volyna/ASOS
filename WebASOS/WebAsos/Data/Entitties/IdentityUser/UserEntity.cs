﻿using System;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using WebAsos.Data.Entitties.Catalog;

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
        [StringLength(100)]
        public string? Country { get; set; }
        [StringLength(100)]
        public string? State { get; set; }
        [StringLength(100)]
        public string? Street { get; set; } 
        [StringLength(100)]
        public string? ZipCode { get; set; } 
        [StringLength(100)]
        public string? City { get; set; }

        public AddressEntity Address { get; set; }
        public virtual ICollection<UserRoleEntity> UserRoles { get; set; }
    }
}

