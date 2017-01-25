using MRP.Common.DTO;
using MRP.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MRP.DAL.Services
{
    public static class LinqExtension
    {
        public static IEnumerable<UserDTO> ConvertToDTOExtension(this IEnumerable<User> users)
        {
            foreach (User u in users)
            {
                yield return new UserDTO
                {
                    ID = u.ID,
                    Username = u.Username,
                    Emailddress = u.EmailAddress,
                    FullName = u.FullName,
                    DateOfBirth = u.DateOfBirth,
                    ContactInfo = u.ContactInfo,
                    AuthLevel = u.AuthLevel,
                    LicenceID = u.LicenceID,
                    Institutions = u.Institutions.ConvertToDTOExtension().ToList()
                };
            }
        }
        public static IEnumerable<MedicalInstitutionDTO> ConvertToDTOExtension(this IEnumerable<MedicalInstitution> ins)
        {
            foreach (MedicalInstitution m in ins)
            {
                yield return new MedicalInstitutionDTO
                {
                    ID = m.ID,
                    Name = m.Name
                };
            }
        }
        public static IEnumerable<MedicalInstitution> ConvertToModelExtension(this IEnumerable<MedicalInstitutionDTO> ins)
        {
            foreach (MedicalInstitutionDTO m in ins)
            {
                yield return new MedicalInstitution
                {
                    ID = m.ID,
                    Name = m.Name
                };
            }
        }
    }
}
