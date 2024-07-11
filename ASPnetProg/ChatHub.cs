using System.Text.Json.Serialization;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Caching.Memory;

namespace aspnetcoreapp;
public class ChatHub : Hub
{
    private readonly IMemoryCache _memoryCache;

    public ChatHub(IMemoryCache memoryCache) =>
        _memoryCache = memoryCache;

    public async Task Join(string nameUser)
    {
        // дописать что бы коды не повторялись
        Random random = new Random();
        string room = random.Next(1000, 10000).ToString();

        await Connect(nameUser, room);
    }

    public async Task Connect(string nameUser, string nameRoom)
    {
        List<object>? value;
        if (_memoryCache.TryGetValue(nameRoom, out value))
        {
            if (value?.Count >= 4) return;
        }
        else value = new();

        Dictionary<string, object> s = new() { { "userName", nameUser }, { "connectionId", Context.ConnectionId } };
        value?.Add(s);

        await Groups.AddToGroupAsync(Context.ConnectionId, nameRoom);
        await Clients.Group(nameRoom).SendAsync("GetTag", nameRoom);
        await Clients.Group(nameRoom).SendAsync("GetPlayers", value);
        _memoryCache.Set(nameRoom, value);
    }

    public async Task StartGame(string nameRoom)
    {
        if (_memoryCache.TryGetValue(nameRoom, out List<object>? value) && value?.Count >= 4)
        {
            value?.Add(0);
            await Clients.Group(nameRoom).SendAsync("GetPath", value);
            _memoryCache.Set(nameRoom, value);
        }
    }

    public async Task AddScore(int count, string nameRoom)
    {
        if (_memoryCache.TryGetValue(nameRoom, out List<object>? value))
        {
            value[value.Count - 1] = (int)value[value.Count - 1] + count;
            await Clients.Group(nameRoom).SendAsync("GetPath", value);
            _memoryCache.Set(nameRoom, value);
        }
    }

    public async Task SetFight(string nameRoom)
    {
        if (_memoryCache.TryGetValue(nameRoom, out List<object>? value))
            await Clients.Group(nameRoom).SendAsync("GetFight", value);
    }
    
    public async Task SetChest(string nameRoom)
    {
        if (_memoryCache.TryGetValue(nameRoom, out List<object>? value))
            await Clients.Group(nameRoom).SendAsync("GetChest", value);
    }

    private string Cache(string message, string roomName)
    {
        string? value;
        _memoryCache.TryGetValue(roomName, out value);
        value += "\n" + message;
        _memoryCache.Set(roomName, value);
        return value;
    }
}