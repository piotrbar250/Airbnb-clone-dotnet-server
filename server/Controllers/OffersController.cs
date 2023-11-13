using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("/api/{controller}")]
public class OffersController : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<string>> getLocations()
    {
        string locations = System.IO.File.ReadAllText("data/offers.json");
        return await Task.Run(() => locations);
    }    
}