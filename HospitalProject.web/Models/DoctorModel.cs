namespace HospitalProject.web.Models
{
    public class DoctorModel
    {
        public int DoctorId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int DepartmentId { get; set; }
        public string ContactInfo { get; set; }

        // Navigation properties
        public DepartmentModel Department { get; set; }
        public WorkingHoursModel WorkingHours { get; set; }
    }

}
