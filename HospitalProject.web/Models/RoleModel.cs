namespace HospitalProject.web.Models
{
    public class RoleModel
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; }

        // Navigation property for Users with this role
        public List<UserModel> Users { get; set; }
    }

}
