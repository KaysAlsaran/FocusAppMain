using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HospitalProject.web.Controllers
{

    [Authorize(Roles = "Admin")]
    public class AdminPanelController : Controller
    {
        public IActionResult ManageDoctors()
        {
            // Logic for managing doctors (CRUD operations)
            return View();
        }

        public IActionResult ManageDepartments()
        {
            // Logic for managing departments (CRUD operations)
            return View();
        }
    }

}
