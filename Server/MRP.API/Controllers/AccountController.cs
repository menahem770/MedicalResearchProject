﻿using Microsoft.AspNet.Identity;
using MRP.API.Models;
using MRP.API.Services;
using MRP.BL;
using MRP.Common.DTO;
using System.Threading.Tasks;
using System.Web.Http;

namespace MRP.API.Controllers
{
    [RoutePrefix("api/Account")]
    public class AccountController : ApiController
    {
        private AuthManager _manager;

        public AccountController()
        {
            _manager = new AuthManager();
        }

        // POST api/Account/Register
        [AllowAnonymous]
        [Route("Register")]
        public async Task<IHttpActionResult> Register([FromBody]RegistrationInfo info)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IdentityResult result = await _manager.Register(info);

            IHttpActionResult errorResult = GetErrorResult(result);

            if (errorResult != null)
            {
                return errorResult;
            }

            return Created<UserDTO>("",null);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _manager.Dispose();
            }

            base.Dispose(disposing);
        }

        private IHttpActionResult GetErrorResult(IdentityResult result)
        {
            if (result == null)
            {
                return InternalServerError();
            }

            if (!result.Succeeded)
            {
                if (result.Errors != null)
                {
                    foreach (string error in result.Errors)
                    {
                        ModelState.AddModelError("", error);
                    }
                }

                if (ModelState.IsValid)
                {
                    // No ModelState errors are available to send, so just return an empty BadRequest.
                    return BadRequest();
                }

                return BadRequest(ModelState);
            }

            return null;
        }
    }
}