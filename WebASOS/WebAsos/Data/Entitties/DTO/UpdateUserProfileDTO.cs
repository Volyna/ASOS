namespace WebAsos.Data.Entitties.DTO
{
    public class UpdateUserProfileDTO
    {
        public string Email { get; set; }
        public string Phone { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string discountsAndSales { get; set; }
        public string passwordOld { get; set; }
        public string passwordNew { get; set; }
        public string country { get; set; }
        public string state { get; set; }
        public string street { get; set; }
        public string zipCode { get; set; }
        public string city { get; set; }
        public string homePhone { get; set; }
        public string newPasswordAnotherLogin { get; set; }

    }
    public class AllUsersVM
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string country { get; set; }
        public string state { get; set; }
        public string street { get; set; }
        public string zipCode { get; set; }
        public string city { get; set; }
        public string homePhone { get; set; }
    }
}
