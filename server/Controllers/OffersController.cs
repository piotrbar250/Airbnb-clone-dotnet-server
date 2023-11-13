using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("/api/{controller}")]
public class OffersController : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<string>> getLocations()
    {
        Console.WriteLine("a teraz");
        string locations = System.IO.File.ReadAllText("Data/offers.json");
        return await Task.Run(() => locations);
    }    
}