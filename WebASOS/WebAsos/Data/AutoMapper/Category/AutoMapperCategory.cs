using AutoMapper;
using System.Security.Cryptography;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data.ViewModels.Category;

namespace WebAsos.Data.AutoMapper.Category
{
    public class AutoMapperCategory : Profile
    {
        public AutoMapperCategory()
        {
            CreateMap<CreateCategoryViewModel, CategoryEntity>();
            CreateMap<UpdateCategoryViewModel, CategoryEntity>();
        }
    }
}
