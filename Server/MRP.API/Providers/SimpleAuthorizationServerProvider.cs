using Microsoft.Owin.Security.OAuth;
using MRP.BL;
using MRP.Common.DTO;
using System.Security.Claims;
using System.Threading.Tasks;

namespace MRP.API.Providers
{
    public class SimpleAuthorizationServerProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            context.Validated();
        }

        public override async Task GrantResourceOwnerCredentials(OAuthGrantResourceOwnerCredentialsContext context)
        {
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });
            AuthManager _manager = new AuthManager();
            UserDTO user = await _manager.Login(context.UserName, context.Password);
            if (user == null)
            {
                context.SetError("invalid_grant", "The user name or password is incorrect.");
                return;
            }
            var identity = new ClaimsIdentity(context.Options.AuthenticationType);
            identity.AddClaim(new Claim("sub", context.UserName));
            user.Roles.ForEach(r => identity.AddClaim(new Claim("role", r)));
            context.Validated(identity);
        }
    }
}