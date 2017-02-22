using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MRP.Common.DTO
{
    public class DiagnosisSymptomsDTO
    {
        public int HeartRate { get; set; }
        public string BloodPressure { get; set; }
        public SymptomInfo PainfulLimb { get; set; }
        public SymptomInfo Cough { get; set; }
        public SymptomInfo SwollenLimb { get; set; }
        public SymptomInfo Hempotysis { get; set; }
        public SymptomInfo Dyspnea { get; set; }
        public SymptomInfo Syncope { get; set; }
        public SymptomInfo ChestPain { get; set; }
        public SymptomInfo Fever { get; set; }
        public SymptomInfo AbnormalPain { get; set; }
        public SymptomInfo NeurologicalMenifest { get; set; }
        public SymptomInfo Temperture { get; set; }
        public SymptomInfo MentalStatus { get; set; }
    }
}
