using System;
using Microsoft.AspNetCore.Identity;
using WebAsos.Constants.User;
using WebAsos.Data.Entitties.IdentityUser;
using Microsoft.EntityFrameworkCore;
namespace WebAsos.Data.Entitties
{
    public static class SeederDB
    {
        public static void SeedData(this IApplicationBuilder app)
        {
            using (var scope = app.ApplicationServices
                .GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<AppEFContext>();
                context.Database.Migrate();
                var userManager = scope.ServiceProvider
                    .GetRequiredService<UserManager<UserEntity>>();

                var roleManager = scope.ServiceProvider
                    .GetRequiredService<RoleManager<RoleEntity>>();
                if (!context.Roles.Any())
                {
                    RoleEntity admin = new RoleEntity
                    {
                        Name = Roles.Admin,
                    };
                    RoleEntity user = new RoleEntity
                    {
                        Name = Roles.User,
                    };
                    var result = roleManager.CreateAsync(admin).Result;
                    result = roleManager.CreateAsync(user).Result;
                }

                if (!context.Users.Any())
                {
                    UserEntity user = new UserEntity
                    {
                        FirstName = "User",
                        LastName = "User",
                        Email = "user@gmail.com",
                        UserName = "user@gmail.com",
                        Image = ""
                    };
                    var result = userManager.CreateAsync(user, "Qwerty-1")
                        .Result;
                    if (result.Succeeded)
                    {
                        result = userManager
                            .AddToRoleAsync(user, Roles.User)
                            .Result;
                    }
                    UserEntity admin = new UserEntity
                    {
                        FirstName = "Admin",
                        LastName = "Admin",
                        Email = "admin@gmail.com",
                        UserName = "admin@gmail.com",
                        Image = ""
                    };
                    var resultAdmin = userManager.CreateAsync(admin, "Qwerty-1")
                        .Result;
                    if (resultAdmin.Succeeded)
                    {
                        resultAdmin = userManager
                            .AddToRoleAsync(admin, Roles.Admin)
                            .Result;
                    }
                }

            }
        }
    }
}

