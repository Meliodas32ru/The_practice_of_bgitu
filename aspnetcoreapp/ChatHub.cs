using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Caching.Memory;

namespace aspnetcoreapp;
public class ChatHub : Hub
{
    private readonly IMemoryCache _memoryCache;

    public ChatHub(IMemoryCache memoryCache)
    {
        _memoryCache = memoryCache;
    }

    public async Task Join(string roomName)
    {
        await Groups.AddToGroupAsync(Context.ConnectionId, roomName);
        await Clients.Group(roomName).SendAsync("Receive", Cache($"Подключился к комнате {roomName}", roomName));
    }

    public async Task Send(string message, string roomName)
    {
        await Clients.Group(roomName).SendAsync("Receive", Cache(message, roomName));
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