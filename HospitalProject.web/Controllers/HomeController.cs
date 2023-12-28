using Microsoft.AspNetCore.Mvc;

namespace HospitalProject.web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            // Logic for displaying the home page
            return View();
        }
    }

}
