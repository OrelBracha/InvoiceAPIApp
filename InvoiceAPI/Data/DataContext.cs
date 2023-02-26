using Microsoft.EntityFrameworkCore;

namespace InvoiceAPI.Data
{
    public class DataContext : DbContext
    {
    
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }


        public DbSet<Invoice> Invoices { get; set; }

    
    }
}
