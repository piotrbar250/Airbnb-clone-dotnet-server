var builder = WebApplication.CreateBuilder();
builder.Services.AddControllers();

var app = builder.Build();
app.MapGet("/", () => "Hello there");

app.MapControllers();

app.Run();
