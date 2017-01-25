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
    public class LoginRegistrationManager
    {
        IRpository rep;
        public LoginRegistrationManager(IRpository repository)
        {
            rep = repository;
        }
        public LoginRegistrationManager()
        {
            rep = new MockRepository();
        }

        public IEnumerable<UserDTO> GetUsers()
        {
            return rep.GetUsers();
        }

        public UserDTO GetUsers(int id)
        {
            return rep.GetUser(id);
        }

        public bool EditUser(int id, EditUserInfo uInfo)
        {
            return rep.EditUser(id, uInfo);
        }

        public UserDTO Login(LoginInfo logInfo)
        {
            return rep.Login(logInfo);
        }

        public bool DeleteUser(int id)
        {
            return rep.DeleteUser(id);
        }

        public PasswordRecoveryResponse RecoverPassword(RecoveryInfo recInfo)
        {
            return rep.RecoverPassword(recInfo);
        }

        public RegistrationResponse Register(RegistrationInfo regInfo)
        {
            return rep.Register(regInfo);
        }
    }
}
