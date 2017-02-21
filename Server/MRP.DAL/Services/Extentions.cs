using MRP.Common.DTO;
using MRP.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MRP.DAL.Services
{
    public static class LinqExtention
    {
        public static IEnumerable<UserDTO> ConvertToDTOExtension(this IEnumerable<User> users)
        {
            foreach (User u in users)
            {
                yield return new UserDTO
                {
                    Id = u.Id,
                    Username = u.UserName,
                    EmailAddress = u.Email,
                    FullName = u.FullName,
                    DateOfBirth = u.DateOfBirth,
                    ContactInfo = u.ContactInfo,
                    Roles = u.Roles,
                    LicenceID = u.LicenceID,
                    Institutions = u.Institutions.ConvertToDTOExtension().ToList()
                };
            }
        }
        public static IEnumerable<MedicalInstitutionDTO> ConvertToDTOExtension(this IEnumerable<MedicalInstitution> ins)
        {
            if (ins != null)
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
        }
        public static IEnumerable<MedicalInstitution> ConvertToModelExtension(this IEnumerable<MedicalInstitutionDTO> ins)
        {
            if (ins != null)
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

    public static class UserDTOExtention
    {
        public static UserDTO ConvertToDTO(this User u)
        {
            return new UserDTO
            {
                Id = u.Id,
                Username = u.UserName,
                EmailAddress = u.Email,
                FullName = u.FullName,
                DateOfBirth = u.DateOfBirth,
                ContactInfo = u.ContactInfo,
                Roles = u.Roles,
                LicenceID = u.LicenceID,
                Institutions = u.Institutions.ConvertToDTOExtension().ToList()
            };
        }
    }

}
