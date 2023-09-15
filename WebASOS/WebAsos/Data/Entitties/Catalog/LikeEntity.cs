using System;
using System.ComponentModel.DataAnnotations.Schema;
using WebAsos.Data.Entitties.IdentityUser;

namespace WebAsos.Data.Entitties.Catalog
{
    [Table("tblLikeProduct")]
    public class LikeEntity : BaseEntity<int>
    {
        public UserEntity User { get; set; }
        [ForeignKey(nameof(User))]
        public int userID { get; set; }
        public ProductEntity ProductLike { get; set; }
        [ForeignKey(nameof(ProductLike))]
        public int productLikeId { get; set; }


    }
}

