using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using WebAsos.Data.Entitties.IdentityUser;

namespace WebAsos.Data.Entitties.DTO
{
    public class AddressDTO
    {
        public string Name { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Country { get; set; }
        public string State { get; set; }
        public string Street { get; set; }
        public int ZipCode { get; set; }
        public int HomeNumber { get; set; }
        public int UserId { get; set; }
    }
}
