using Microsoft.AspNet.Identity;
using MongoDB.AspNet.Identity;
using MRP.API.Models;
using MRP.Common.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace MRP.API.Services
{
    public class AuthRepository : IDisposable
    {

        private UserManager<UserDTO> _userManager;

        public AuthRepository()
        {
            _userManager = new UserManager<UserDTO>(new UserStore<UserDTO>("Mongo"));
        }

        public async Task<IdentityResult> RegisterUser(UserModel userModel)
        {
            UserDTO user = new UserDTO
            {
                UserName = userModel.UserName
            };

            var result = await _userManager.CreateAsync(user, userModel.Password);

            return result;
        }

        public async Task<UserDTO> FindUser(string userName, string password)
        {
            UserDTO user = await _userManager.FindAsync(userName, password);

            return user;
        }

        public void Dispose()
        {
            _userManager.Dispose();

        }
    }
}