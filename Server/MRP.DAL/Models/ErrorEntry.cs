using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MRP.DAL.Models
{
    public class ErrorEntry
    {
        public int ID { get; set; }
        public ErrorType Type { get; set; }
        public DateTime Thrown { get; set; } = DateTime.Now;
        public string Content { get; set; }
        public string Additional { get; set; }

    }
}
