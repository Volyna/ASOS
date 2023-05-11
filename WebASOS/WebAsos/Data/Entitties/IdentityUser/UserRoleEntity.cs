using System;
using Microsoft.AspNetCore.Identity;

namespace WebAsos.Data.Entitties.IdentityUser
{
    public class UserRoleEntity : IdentityUserRole<int>
    {
        public virtual UserEntity User { get; set; }
        public virtual RoleEntity Role { get; set; }
    }
}

