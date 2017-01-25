using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MRP.Common.DTO
{
    public class PasswordRecoveryResponse
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public string TempPassword { get; set; }
    }
}
