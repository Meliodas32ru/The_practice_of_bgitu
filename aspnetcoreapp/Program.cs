using aspnetcoreapp;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();
builder.Services.AddSignalR();
builder.Services.AddMemoryCache();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
}
app.UseDefaultFiles();
app.UseStaticFiles();
app.UseRouting();

app.MapRazorPages();
app.MapHub<ChatHub>("/chat");
//app.MapGet("/hi", () => "Hello!");

app.Run();
