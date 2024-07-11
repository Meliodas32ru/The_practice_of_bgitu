using Microsoft.AspNetCore.SignalR;

namespace SignalRChat;
public class ChatHub : Hub
{
    public Dictionary<string, int> MyProperty { get; set; } = new();

    public async Task Send(string roomName)
    {
        if (!MyProperty.ContainsKey(roomName))
            MyProperty.Add(roomName, 0);
        MyProperty[roomName]++;
        await Clients.Group($"{roomName}").SendAsync("Receive", MyProperty[roomName]);
    }
}