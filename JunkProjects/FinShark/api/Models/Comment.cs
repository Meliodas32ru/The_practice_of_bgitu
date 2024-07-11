using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace api.Models
{
    public class Comment
    {
        [BsonId]
        [BsonElement("_id"), BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; } 

        [BsonElement("title"), BsonRepresentation(BsonType.String)]
        public string? Title { get; set; } 

        [BsonElement("content"), BsonRepresentation(BsonType.String)]
        public string? Content { get; set; } 

        [BsonElement("create_time"), BsonRepresentation(BsonType.DateTime)]
        public DateTime CreatedOn { get; set; } = DateTime.Now;

        [BsonElement("stock_id"), BsonRepresentation(BsonType.ObjectId)]
        public int? StockId { get; set; }
        
        [BsonElement("stock"), BsonRepresentation(BsonType.Document)]
        public Stock? Stock { get; set; }
    }
}