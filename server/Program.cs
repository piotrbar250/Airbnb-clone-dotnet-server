var builder = WebApplication.CreateBuilder();
builder.Services.AddControllers();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder.WithOrigins("https://airbnb-clone-with-dotnet-server.vercel.app")
                          .AllowAnyHeader()
                          .AllowAnyMethod());
});

var app = builder.Build();
app.UseCors("AllowSpecificOrigin");
app.MapGet("/", () => "Hello there");
app.MapControllers();

app.Run();
