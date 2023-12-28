using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HospitalProject.web.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Register()
        {
            // Logic for user registration
            return View();
        }

        public IActionResult Login()
        {
            // Logic for user login
            return View();
        }

        [Authorize]
        public IActionResult Logout()
        {
            // Logic for user logout
            return RedirectToAction("Index", "Home");
        }
    }

}
