using System;

namespace MRP.DAL.Models
{
    public class PatientDiagnosis
    {
        public int PatientId { get; set; }
        public int DoctorId { get; set; }
        public string DoctorName { get; set; }
        public MedicalInstitution MedicalInstitution { get; set; }
        public bool InOutPatient { get; set; }
        public DateTime DiagnosisDate { get; set; }
        public DateTime DischargeDate { get; set; }
        public DateTime InclusionDate { get; set; }
        public string General { get; set; }
        public DiagnosisSymptoms Symptoms { get; set; }
    }
}