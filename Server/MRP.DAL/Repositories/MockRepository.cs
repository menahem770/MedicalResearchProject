using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MRP.Common.DTO;
using MRP.DAL.Models;
using MRP.DAL.Services;
using MRP.Common;

namespace MRP.DAL.Repositories
{
    public class MockRepository : IRpository
    {
        List<User> _users = new List<User>();
        List<ErrorEntry> _errors = new List<ErrorEntry>();
        Random rand = new Random();

        public UserDTO Login(LoginInfo logInfo)
        {
            try
            {
                return _users.Where(u => u.Username == logInfo.Username && u.Password == logInfo.Password).ConvertToDTOExtension().FirstOrDefault();
            }
            catch (Exception e)
            {
                _errors.Add(new ErrorEntry
                {
                    Type = ErrorType.LoginDB,
                    Content = e.Message,
                    Additional = $"username: {logInfo.Username}"
                });
                return null;
            }
        }

        public PasswordRecoveryResponse RecoverPassword(RecoveryInfo recInfo)
        {
            User user = _users.FirstOrDefault(u => u.EmailAddress == recInfo.EmailAddress && u.DateOfBirth == recInfo.DateOfBirth);
            if(user != null)
            {
                user.Password = RandomPasswordGenerator.GeneratePassword(8);
                return new PasswordRecoveryResponse { Success = true, TempPassword = user.Password };
            }
            else
            {
                return new PasswordRecoveryResponse { Message = "User not found!" };
            }
        }

        public RegistrationResponse Register(RegistrationInfo regInfo)
        {
            if (_users.Any(u => u.Username == regInfo.Username))
            {
                return new RegistrationResponse { ErrorType = RegistrationErrorType.UsernameExist, Message = "Username in use" };
            }
            try
            {
                _users.Add(new User
                {
                    Username = regInfo.Username,
                    Password = regInfo.Password,
                    FullName = regInfo.Fullname,
                    EmailAddress = regInfo.EmailAddress,
                    DateOfBirth = regInfo.DateOfBirth,
                    ContactInfo = regInfo.ContactInfo,
                    AuthLevel = regInfo.AuthLevel,
                    LicenceID = regInfo.LicenceID,
                    Institutions = regInfo.Institutions.ConvertToModelExtension().ToList()
                });
                return new RegistrationResponse { Success = true, Message = "Created" };
            }
            catch (Exception e)
            {
                _errors.Add(new ErrorEntry
                {
                    Type = ErrorType.RegistrationDB,
                    Content = e.Message,
                    Additional = $"username: {regInfo.Username}, email address: {regInfo.EmailAddress}, full name: {regInfo.Fullname}"
                });
                return new RegistrationResponse { ErrorType = RegistrationErrorType.DBServerError, Message = "Server Error" };
            }
            
        }

        public IEnumerable<UserDTO> GetUsers()
        {
            return _users.ConvertToDTOExtension().ToList();
        }

        public UserDTO GetUser(int id)
        {
            return _users.Where(u => u.ID == id).ConvertToDTOExtension().FirstOrDefault();
        }

        public bool DeleteUser(int id)
        {
            return _users.Remove(_users.Find(u => u.ID == id));
        }

        public bool EditUser(int id, EditUserInfo uInfo)
        {
            User user = _users.Find(u => u.ID == id);
            if (user != null)
            {
                user.FullName = uInfo.FullName;
                user.EmailAddress = uInfo.Emailddress;
                user.Username = uInfo.Username;
                user.ContactInfo = uInfo.ContactInfo;
                user.AuthLevel = uInfo.AuthLevel;
                user.LicenceID = uInfo.LicenceID;
                user.Institutions = uInfo.Institutions.ConvertToModelExtension().ToList();
                return true;
            }
            return false;
        }
    }
}
