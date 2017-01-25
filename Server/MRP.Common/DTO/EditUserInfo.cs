using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MRP.Common.DTO
{
    public class EditUserInfo
    {
        public string FullName { get; set; }
        public string Username { get; set; }
        public string Emailddress { get; set; }
        public string ContactInfo { get; set; }
        public AuthLevel AuthLevel { get; set; }
        public string LicenceID { get; set; }
        public IEnumerable<MedicalInstitutionDTO> Institutions { get; set; }
    }
}
