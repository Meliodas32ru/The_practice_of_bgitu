using MongoDB.Driver;

namespace api.Data
{
    public class MongoDbService
    {
        private readonly IConfiguration _configuration;
        private readonly IMongoDatabase? _database;

        public MongoDbService(IConfiguration configuration)
        {
            _configuration = configuration;

            var connectionString = _configuration.GetConnectionString("ConnectionDB");
            var mogoUrl = MongoUrl.Create(connectionString);
            var mongoClient = new MongoClient(mogoUrl);
            _database = mongoClient.GetDatabase(mogoUrl.DatabaseName);
        }

        public IMongoDatabase? Database => _database;
    }
}