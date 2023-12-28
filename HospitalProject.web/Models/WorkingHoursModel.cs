namespace HospitalProject.web.Models
{
    public class WorkingHoursModel
    {
        public int WorkingHoursId { get; set; }
        public int DoctorId { get; set; }
        public string DayOfWeek { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        // Navigation property
        public DoctorModel Doctor { get; set; }
    }

}
