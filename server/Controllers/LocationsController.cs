using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("/api/{controller}")]
public class LocationsController : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<string>> getLocations()
    {
        string locations = System.IO.File.ReadAllText("data/locations.json");
        return await Task.Run(() => locations);
    }    
}