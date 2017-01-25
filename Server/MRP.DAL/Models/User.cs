﻿using MRP.Common.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MRP.DAL.Models
{
    public class User
    {
        public int ID { get; set; }
        public string FullName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string EmailAddress { get; set; }
        public string ContactInfo { get; set; }
        public AuthLevel AuthLevel { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string LicenceID { get; set; }
        public IEnumerable<MedicalInstitution> Institutions { get; set; }
    }
}
