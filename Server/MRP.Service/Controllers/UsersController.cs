using MRP.BL;
using MRP.Common.DTO;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web.Http;

namespace MRP.Service.Controllers
{
    public class UsersController : ApiController
    {
        LoginRegistrationManager manager = new LoginRegistrationManager();

        public IEnumerable<UserDTO> Get()
        {
            return manager.GetUsers();
        }

        public UserDTO Get(int id)
        {
            return manager.GetUsers(id);
        }

        public HttpResponseMessage Put(int id, [FromBody]EditUserInfo uInfo)
        {
            if (manager.EditUser(id,uInfo))
            {
                return new HttpResponseMessage(HttpStatusCode.OK); 
            }
            return new HttpResponseMessage(HttpStatusCode.BadRequest);
        }
        
        public HttpResponseMessage Delete(int id)
        {
            if (manager.DeleteUser(id))
            {
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            return new HttpResponseMessage(HttpStatusCode.BadRequest);
        }

        public HttpResponseMessage Post(HttpRequestMessage req, [FromBody]LoginInfo logInfo)
        {
            UserDTO user = manager.Login(logInfo);
            if (user != null)
            {
                List<Claim> claims = new List<Claim> { new Claim("Subject", user.Username) };
                return req.CreateResponse(HttpStatusCode.Accepted, new Tuple<UserDTO,JwtSecurityToken>(user, new JwtSecurityToken(
                    issuer: "MRPServer",
                    audience: "MRPClient",
                    claims: claims,
                    notBefore: DateTime.Now,
                    expires: DateTime.Now.AddHours(1),
                    signingCredentials: new Microsoft.IdentityModel.Tokens.SigningCredentials(null, ""))));
            }
            return new HttpResponseMessage(HttpStatusCode.BadRequest);
        }

        public HttpResponseMessage Post(HttpRequestMessage req, [FromBody]RegistrationInfo regInfo)
        {
            RegistrationResponse res = manager.Register(regInfo);
            if (res.Success)
            {
                return req.CreateResponse(HttpStatusCode.Created);
            }
            return new HttpResponseMessage(res.ErrorType == RegistrationErrorType.UsernameExist ? HttpStatusCode.Conflict : HttpStatusCode.InternalServerError);
        }

        public HttpResponseMessage Post(HttpRequestMessage req, [FromBody]RecoveryInfo recInfo)
        {
            PasswordRecoveryResponse res = manager.RecoverPassword(recInfo);
            if (res.Success)
            {
                // TO DO: send temp pass through email.
                req.CreateResponse(HttpStatusCode.OK, res.TempPassword);
            }
            return new HttpResponseMessage(HttpStatusCode.BadRequest);
        }
    }
}
