namespace HospitalProject.web.Models
{
    public class AppointmentModel
    {
        public int AppointmentId { get; set; }
        public int UserId { get; set; }
        public int DoctorId { get; set; }
        public DateTime AppointmentDateTime { get; set; }
        public string Status { get; set; }

        // Navigation properties
        public UserModel User { get; set; }
        public DoctorModel Doctor { get; set; }
    }

}
