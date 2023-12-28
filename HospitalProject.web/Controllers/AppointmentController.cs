using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HospitalProject.web.Controllers
{
    public class AppointmentController : Controller
    {
        [Authorize]
        public IActionResult Schedule()
        {
            // Logic for scheduling an appointment
            return View();
        }

        [Authorize]
        public IActionResult ViewAppointments()
        {
            // Logic for displaying user's appointments
            return View();
        }
    }

}
