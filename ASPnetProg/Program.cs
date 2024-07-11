using aspnetcoreapp;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorPages();
builder.Services.AddSignalR();
builder.Services.AddMemoryCache();

builder.Services.AddCors(o=>{
    o.AddDefaultPolicy(b=>{
        b.WithOrigins("http://localhost:3000/")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
}
app.UseDefaultFiles();
app.UseStaticFiles();
app.UseRouting();

app.MapRazorPages();
app.MapHub<ChatHub>("/own");

app.Run();
