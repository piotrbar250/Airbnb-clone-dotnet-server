using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("/api/{controller}")]
public class ImageController : ControllerBase
{
    [HttpGet]
    public IActionResult GetImage()
    {
        var imagePath = "data/pictures/offer_img.webp"; // Replace with your image path
        var imageBytes = System.IO.File.ReadAllBytes(imagePath);
        return File(imageBytes, "image/webp");
    }
}