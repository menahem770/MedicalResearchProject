using Microsoft.AspNet.Identity;
using MRP.API.Models;
using MRP.BL;
using MRP.Common.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace MRP.API.Controllers
{
    [RoutePrefix("api/Account"),Authorize]
    public class AccountsController : ApiController
    {
        private UserAccountsManager _manager;

        public AccountsController()
        {
            _manager = new UserAccountsManager();
        }

        [AllowAnonymous]
        [Route("Register")]
        public async Task<IHttpActionResult> Register([FromBody]RegistrationInfo info)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            IdentityResult result = await _manager.CreateAsync(info);

            IHttpActionResult errorResult = GetErrorResult(result);

            if (errorResult != null)
            {
                return errorResult;
            }

            return Created<UserDTO>("",null);
        }

        [Route("GetAllUsers")]
        public Task<IEnumerable<UserDTO>> GetAllUsersAsync()
        {
            return _manager.GetAllUsersAsync();
        }

        [Route("GetUser")]
        public Task<UserDTO> GetUserAsync([FromUri]string username)
        {
            return _manager.GetUserAsync(username);
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
