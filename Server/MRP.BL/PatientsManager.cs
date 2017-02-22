﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MRP.Common.DTO;
using MRP.Common.IRepositories;
using MRP.DAL.Repositories;

namespace MRP.BL
{
    public class PatientsManager
    {
        private IPatientsRepository _pRep;

        public PatientsManager()
        {
            _pRep = new PatientsRepository();
        }
        public Task<IEnumerable<PatientDTO>> GetPatients(FindPatientModel model)
        {
            return _pRep.GetPatients(model);
        }
    }
}
