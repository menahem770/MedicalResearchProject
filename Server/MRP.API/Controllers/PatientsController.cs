using MRP.BL;
using MRP.Common.DTO;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;

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

        [Route("GetPatients"),HttpPost]
        public async Task<JsonResult<IEnumerable<PatientDTO>>> GetPatients([FromBody]FindPatientModel model)
        {
            IEnumerable<PatientDTO> patients = await _manager.GetPatients(model);
            return Json(patients);
        }

        [Route("AddPatient"),HttpPost]
        public async Task<IHttpActionResult> AddPatient([FromBody]PatientDTO patient)
        {
            try
            {
                await _manager.AddPateint(patient);
                return Ok();
            }
            catch (Exception ex)
            {
                return new BadRequestErrorMessageResult(ex.Message,null);
            }
        }

        [Route("AddDiagnosis"),HttpPut]
        public async Task<IHttpActionResult> AddDiagnosis([FromBody]PatientDiagnosisDTO diagnosis)
        {
            string s;
            using (var contentStream = await this.Request.Content.ReadAsStreamAsync())
            {
                contentStream.Seek(0, SeekOrigin.Begin);
                using (var sr = new StreamReader(contentStream))
                {
                    string rawContent = sr.ReadToEnd();
                    s = rawContent;
                    // use raw content here
                }
            }
            //HttpContent requestContent = Request.Content;
            //string jsonContent = requestContent.ReadAsStringAsync().Result;
            //var symptoms = jsonContent.Property("Symptoms");
            PatientDiagnosisDTO contact = JsonConvert.DeserializeObject<PatientDiagnosisDTO>(s);
            return await _manager.AddDiagnosis(diagnosis) ? Created<PatientDiagnosisDTO>("", null) : (IHttpActionResult)InternalServerError();
        }

        [Route("EditPatient"),HttpPut]
        public async Task<IHttpActionResult> EditPatient([FromBody]PatientDTO patient)
        {
            return await _manager.EditPatient(patient) ? Created<PatientDTO>("", null) : (IHttpActionResult)InternalServerError();
        }
    }
}
