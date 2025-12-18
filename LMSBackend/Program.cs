using LibraryManagementSystem.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// Add Swagger/OpenAPI support
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure SQLite database with Entity Framework
builder.Services.AddDbContext<LibraryContext>(options =>
    options.UseSqlite("Data Source=library.db")); // database file

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Optional: add authentication here in future
app.UseAuthorization();

// Map controllers
app.MapControllers();

// Run the application
app.Run();
