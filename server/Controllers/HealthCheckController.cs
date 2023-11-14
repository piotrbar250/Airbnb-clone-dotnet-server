using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/{controller}")]
public class  HealthCheckController : ControllerBase
{
    [HttpGet]
    public IActionResult HealthCheck()
    {
        return Ok("Api is running");
    }
}