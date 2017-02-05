using Microsoft.AspNet.Identity;
using MRP.Common;
using MRP.Common.DTO;
using MRP.DAL.Repositories;
using System;
using System.Collections.Generic;

using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace MRP.BL
{
    public class AuthManager : IDisposable
    {
        IRpository rep;
        public AuthManager(IRpository repository)
        {
            rep = repository;
        }
        public AuthManager()
        {
            rep = new AuthRepository();
        }

        //public IEnumerable<UserDTO> GetUsers()
        //{
        //    return rep.GetUsers();
        //}

        //public UserDTO GetUsers(int id)
        //{
        //    return rep.GetUser(id);
        //}

        //public bool EditUser(int id, EditUserInfo uInfo)
        //{
        //    return rep.EditUser(id, uInfo);
        //}

        //public UserDTO Login(LoginInfo logInfo)
        //{
        //    return rep.Login(logInfo);
        //}

        //public bool DeleteUser(int id)
        //{
        //    return rep.DeleteUser(id);
        //}

        //public PasswordRecoveryResponse RecoverPassword(RecoveryInfo recInfo)
        //{
        //    return rep.RecoverPassword(recInfo);
        //}

        public Task<IdentityResult> Register(RegistrationInfo regInfo)
        {
            return rep.Register(regInfo);
        }

        public void Dispose()
        {
            rep.Dispose();
        }
    }
}
