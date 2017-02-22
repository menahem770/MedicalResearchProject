using MRP.BL;
using MRP.Common.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace MRP.API.Controllers
{
    [RoutePrefix("api/Patients"),Authorize]
    public class PatientsController : ApiController
    {
        private PatientsManager _manager;

        public PatientsController()
        {
            _manager = new PatientsManager();
        }

        [Route("GetPatients")]
        public async Task<IEnumerable<PatientDTO>> GetPatients([FromBody]FindPatientModel model)
        {
            IdentityResult result = await _manager.CreateAsync(info);

            IHttpActionResult errorResult = GetErrorResult(result);

            if (errorResult != null)
            {
                return errorResult;
            }

            return Created<UserDTO>("", null);
        }

        // GET: api/Patient/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Patient
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Patient/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Patient/5
        public void Delete(int id)
        {
        }
    }
}
