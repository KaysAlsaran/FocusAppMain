using Microsoft.AspNetCore.Mvc;

namespace HospitalProject.web.Controllers
{
    public class DoctorController : Controller
    {
        public IActionResult Index()
        {
            // Logic for displaying a list of doctors
            return View();
        }

        public IActionResult Details(int id)
        {
            // Logic for displaying details of a specific doctor
            return View();
        }
    }

}
