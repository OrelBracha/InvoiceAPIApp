using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace InvoiceAPI
{
    public class Invoice
    {

        public int? Id { get; set; }

        public DateTime Date { get; set; }
       


        [StringLength(20)]

        public string? Status { get; set; } = string.Empty;

        public int Amount { get; set; }
    
    
    }
}
