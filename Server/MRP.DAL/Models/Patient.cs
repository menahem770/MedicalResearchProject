using MRP.Common.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MRP.DAL.Models
{
    public class Patient
    {
        public string Id { get; set; }
        public int PatientId { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public Gender Gender { get; set; }
        public int Weight { get; set; }
        public int Height { get; set; }
        public Race Race { get; set; }
        public DateTime InclusionDate { get; set; }
        public string General { get; set; }
        public DateTime LastModified { get; set; }
        public IEnumerable<PatientDiagnosis> Diagnosis { get; set; }
    }
}
