using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using WebAsos.Data.Entitties.IdentityUser;

namespace WebAsos.Data.Entitties.Catalog
{
    [Table("tblAddresses")]
    public class AddressEntity: BaseEntity<int>
    {
        public string Phone { get; set; }

        public string Email { get; set; }

        [Required(ErrorMessage = "Field сountry is required")]
        [MaxLength(50, ErrorMessage = "The сountry field cannot exceed 50 characters.")]
        public string Country { get; set; }

        [Required(ErrorMessage = "Field city is required")]
        [MaxLength(50, ErrorMessage = "The сity field cannot exceed 50 characters.")]
        public string State { get; set; }

        [Required(ErrorMessage = "Field street is required")]
        [MaxLength(100, ErrorMessage = "The street field cannot exceed 100 characters.")]
        public string Street { get; set; }

        [Required(ErrorMessage = "Field zip code is required")]
        [MaxLength(10, ErrorMessage = "The zip code field cannot exceed 10 characters.")]
        public int ZipCode { get; set; }

        [Required(ErrorMessage = "Field home number is required")]
        [MaxLength(50, ErrorMessage = "The City home number cannot exceed 50 characters.")]
        public int HomeNumber { get; set; }


        public UserEntity User { get; set; }

        [ForeignKey(nameof(User))]
        public int? UserId { get; set; }


    }
}
