namespace LibraryManagementSystem.Models
{
    public class Book
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Author { get; set; } = null!;
        public string Description { get; set; } = null!;
        public string RackNumber { get; set; } = null!;
        public string Status { get; set; } = null!; 
        public string ImageUrl { get; set; } = null!;
    }
}
