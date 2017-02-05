using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MRP.Common.DTO;
using MRP.DAL.Models;
using MRP.DAL.Services;
using MRP.Common;
using Microsoft.AspNet.Identity;
using MongoDB.AspNet.Identity;

namespace MRP.DAL.Repositories
{
    public class AuthRepository : IRpository
    {
        private UserManager<User> _userManager;
        Random rand = new Random();

        public AuthRepository()
        {
            _userManager = new UserManager<User>(new UserStore<User>("Mongo"));
        }


        public async Task<IdentityResult> Register(RegistrationInfo regInfo)
        {
            var user = new User
            {
                UserName = regInfo.Username,
                FullName = regInfo.Fullname,
                EmailAddress = regInfo.EmailAddress,
                DateOfBirth = regInfo.DateOfBirth,
                ContactInfo = regInfo.ContactInfo,
                AuthLevel = regInfo.AuthLevel,
                LicenceID = regInfo.LicenceID,
                Institutions = regInfo.Institutions.ConvertToModelExtension().ToList()
            };
            return await _userManager.CreateAsync(user, regInfo.Password);

        }

        private async Task<User> FindUser(string username, string password)
        {
            User user = await _userManager.FindAsync(username, password);

            return user;
        }

        private async Task<User> FindUser(string username)
        {
            User user = await _userManager.FindByNameAsync(username);

            return user;
        }

        public void Dispose()
        {
            _userManager.Dispose();
        }

        //public PasswordRecoveryResponse RecoverPassword(RecoveryInfo recInfo)
        //{
        //    User user = _users.FirstOrDefault(u => u.EmailAddress == recInfo.EmailAddress && u.DateOfBirth == recInfo.DateOfBirth);
        //    if(user != null)
        //    {
        //        user.Password = RandomPasswordGenerator.GeneratePassword(8);
        //        return new PasswordRecoveryResponse { Success = true, TempPassword = user.Password };
        //    }
        //    else
        //    {
        //        return new PasswordRecoveryResponse { Message = "User not found!" };
        //    }
        //}
        //public IEnumerable<UserDTO> GetUsers()
        //{
        //    return _users.ConvertToDTOExtension().ToList();
        //}

        //public UserDTO GetUser(int id)
        //{
        //    return _users.Where(u => u.ID == id).ConvertToDTOExtension().FirstOrDefault();
        //}

        //public bool DeleteUser(int id)
        //{
        //    return _users.Remove(_users.Find(u => u.ID == id));
        //}

        //public bool EditUser(int id, EditUserInfo uInfo)
        //{
        //    User user = _users.Find(u => u.ID == id);
        //    if (user != null)
        //    {
        //        user.FullName = uInfo.FullName;
        //        user.EmailAddress = uInfo.Emailddress;
        //        user.Username = uInfo.Username;
        //        user.ContactInfo = uInfo.ContactInfo;
        //        user.AuthLevel = uInfo.AuthLevel;
        //        user.LicenceID = uInfo.LicenceID;
        //        user.Institutions = uInfo.Institutions.ConvertToModelExtension().ToList();
        //        return true;
        //    }
        //    return false;
        //}
    }
}
