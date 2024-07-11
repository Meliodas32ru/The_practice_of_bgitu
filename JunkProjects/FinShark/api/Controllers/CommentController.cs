using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using api.Data;
using api.Models;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly IMongoCollection<Comment> _comments;

        public CommentController(MongoDbService mongoDbService)
        {
            _comments = mongoDbService.Database?.GetCollection<Comment>("command");
        }

        [HttpGet]
        public async Task<IEnumerable<Comment>> Get() =>
            await _comments.Find(FilterDefinition<Comment>.Empty).ToListAsync();

        [HttpGet("{id}")]
        public async Task<ActionResult<Comment?>> GetById(string id)
        {
            var filter = Builders<Comment>.Filter.Eq(x => x.Id, id);
            var comment = _comments.Find(filter).FirstOrDefault();
            return comment is not null ? Ok(comment) : NotFound();
        }

        [HttpPost]
        public async Task<ActionResult> Create(Comment comment)
        {
            await _comments.InsertOneAsync(comment);
            return CreatedAtAction(nameof(GetById), new { id = comment.Id }, comment);
        }

        [HttpPut]
        public async Task<ActionResult> Update(Comment comment)
        {
            var filter = Builders<Comment>.Filter.Eq(e => e.Id, comment.Id);
            //var update = Builders<Comment>.Update
            //.Set(e=> e.Title, comment.Title)
            //.Set(e=> e.Content, comment.Content)
            //.Set(e=> e.CreatedOn, comment.CreatedOn)
            //.Set(e=> e.StockId, comment.StockId)
            //.Set(e=> e.Stock, comment.Stock);
            //await _comments.UpdateOneAsync(filter, update);

            await _comments.ReplaceOneAsync(filter, comment);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string id)
        {
            var filter = Builders<Comment>.Filter.Eq(e => e.Id, id);
            await _comments.DeleteOneAsync(filter);
            return Ok();
        }
    }
}