using MRP.Common.IRepositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MRP.Common.DTO;
using MRP.DAL.Models;
using MongoDB.Driver;
using AspNet.Identity.MongoDB;
using Microsoft.AspNet.Identity;
using System.Configuration;
using MRP.DAL.Services;
using System.Reflection;

namespace MRP.DAL.Repositories
{
    public class PatientsRepository : IPatientsRepository
    {
        MongoClient _client;
        IMongoDatabase _database;
        IMongoCollection<User> _users;
        UserStore<User> _store;
        UserManager<User> _userManager;
        //IMongoCollection<IdentityRole> _roles;
        //RoleStore<IdentityRole> _roleStore;

        public PatientsRepository()
        {
            _client = new MongoClient(ConfigurationManager.ConnectionStrings["Mongo"].ConnectionString);
            _database = _client.GetDatabase("MRPDB"/*ConfigurationManager.AppSettings.Get("MRPDB")*/);
            _users = _database.GetCollection<User>("AspNetUsers");
            _store = new UserStore<User>(_users);
            _userManager = new UserManager<User>(_store);
            //_roles = _database.GetCollection<IdentityRole>("roles");
            //_roleStore = new RoleStore<IdentityRole>(_roles);
        }

        public async Task<bool> AddDiagnosis(PatientDiagnosisDTO diagnosis)
        {
            var update = Builders<Patient>.Update.CurrentDate("LastModified").AddToSet(p => p.Diagnosis, diagnosis.ConvertToModel());
            try
            {
                await _database.GetCollection<Patient>("Patients").UpdateOneAsync(p => p.PatientId == diagnosis.PatientId, update);
                return true;
            }
            catch (Exception) { return false; }
        }

        public async Task<bool> AddPatient(PatientDTO patient)
        {
            try
            {
                await _database.GetCollection<Patient>("Patients").InsertOneAsync(patient.ConvertToModel());
                return true;
            }
            catch (Exception ex) { throw ex; }
        }

        public async Task<bool> EditPatientInfo(PatientDTO patient)
        {
            List<Patient> dbPatient = await _database.GetCollection<Patient>("Patients").Find(p => p.PatientId == patient.PatientId).ToListAsync();
            var update = Builders<Patient>.Update.CurrentDate("LastModified");
            foreach (PropertyInfo propertyInfo in typeof(Patient).GetProperties())
            {
                if (propertyInfo.CanRead && propertyInfo.Name != "Id" && propertyInfo.Name != "Diagnosis")
                {
                    object firstValue = propertyInfo.GetValue(patient).ToString() ?? null;
                    object secondValue = propertyInfo.GetValue(dbPatient[0]) ?? null;
                    if (!object.Equals(firstValue, secondValue))
                    {
                        update.Set(propertyInfo.Name, propertyInfo.GetValue(patient, null));
                    }
                }
            }
            try
            {
                await _database.GetCollection<Patient>("Patients").UpdateOneAsync<Patient>(p => p.PatientId == patient.PatientId, update);
                return true;
            }
            catch (Exception) { return false; }
        }

        public async Task<IEnumerable<PatientDTO>> GetPatients(FindPatientModel model)
        {
            List<Patient> collection;
            if (!String.IsNullOrWhiteSpace(model.PatientId))
            {
                try
                {
                    collection = await _database.GetCollection<Patient>("Patients").Find(p => p.PatientId == model.PatientId).ToListAsync();
                    return collection.ConvertToDTOExtension().ToList();
                }
                catch (Exception ex) { throw ex; }
            }
            collection = await _database.GetCollection<Patient>("Patients").Find(p => p.Name == model.Name).ToListAsync();
            return collection.ConvertToDTOExtension().ToList();
        }
    }
}
