using System;
using Microsoft.AspNetCore.Identity;

namespace WebAsos.Data.Entitties.IdentityUser
{
    public class RoleEntity : IdentityRole<int>
    {
        public virtual ICollection<UserRoleEntity> UserRoles { get; set; }
    }
}

