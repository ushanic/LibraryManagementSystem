using Microsoft.EntityFrameworkCore;
using LMSBackend.Models;  

namespace LMSBackend.Data  
{
    public class LibraryContext : DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> options) : base(options) { }

        public DbSet<Book> Books { get; set; } = null!;
    }
}
