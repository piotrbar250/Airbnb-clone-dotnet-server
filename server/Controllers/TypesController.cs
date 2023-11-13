using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("/api/{controller}")]
public class TypesController : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<string>> getTypes()
    {
        string locations = System.IO.File.ReadAllText("Data/types.json");
        return await Task.Run(() => locations);
    }    
}