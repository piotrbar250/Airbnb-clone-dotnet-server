
var builder = WebApplication.CreateBuilder();
builder.Services.AddControllers();
// builder.Services.AddCors(options =>
// {
//     options.AddPolicy("CorsPolicy",
//         builder => builder.WithOrigins("http://localhost:3000/")
//                           .AllowAnyHeader()
//                           .AllowAnyMethod());
// });
var app = builder.Build();
app.MapGet("/", () => "Hello there");
// app.UseCors();

app.MapControllers();

app.Run();
