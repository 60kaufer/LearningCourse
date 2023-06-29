//Persistence basically defines how to interact with the model using C# to create SQL queries through LINQ
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Activity> Activities { get; set; }
    }
}