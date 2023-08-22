using System;
using AutoMapper;
using MailKit.Search;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Data.Entitties.DTO;
using WebAsos.Data.Entitties.IdentityUser;
using WebAsos.Data.ViewModels.User;
using WebAsos.Models;

namespace WebAsos.Data.AutoMapper.User
{
	public class AutoMapperUserProfile : Profile
    {
		public AutoMapperUserProfile()
		{
            CreateMap<RegisterUserProfileViewModel, UserEntity>().ForMember(dst => dst.UserName, act => act.MapFrom(src => src.Email));

            CreateMap<ProductEntity, ProductViewModel>().ForMember(dst => dst.Category,
            act =>
                act.MapFrom(src => src.Category.Name));

            CreateMap<CategoryEntity, CategoryViewModel>();
            CreateMap<ProductEntity, ProductViewModel>();

            CreateMap<ProductEntity, CreateProductDTO>();
            CreateMap<CreateProductDTO, ProductEntity>();

            CreateMap<ProductImageViewModel, ProductImageEntity>();
            CreateMap<ProductImageEntity, ProductImageViewModel>();

            CreateMap<CategoryEntity, CategoryCreateViewModel>();
            CreateMap<CategoryCreateViewModel, CategoryEntity>()
                .ForMember(c => c.Childrens, opt => opt.Ignore())
                .ForMember(c => c.ParentId, opt => opt.Ignore())
                .ForMember(c => c.Parent, opt => opt.Ignore());

            CreateMap<CategoryUpdateViewModel, CategoryEntity>();
            CreateMap<CategoryEntity, CategoryUpdateViewModel>();

            CreateMap<CategoryEntity, CategoryGroupViewModel>();
            CreateMap<RegisterUserProfileViewModel, UserEntity>().ForMember(dst => dst.UserName, act => act.MapFrom(src => src.Email));

            CreateMap<AddressEntity, AddressDTO>();
            CreateMap<AddressDTO, AddressEntity>();

            CreateMap<CreditCardEntity, CreditCardWithIdDTO>();
            CreateMap<CreditCardWithIdDTO, CreditCardEntity>();

            CreateMap<CreditCardEntity, CreditCardDTO>();
            CreateMap<CreditCardDTO, CreditCardEntity>();

            CreateMap<OrderDTO, OrderEntity>();
            CreateMap<OrderEntity, OrderDTO>();

            CreateMap<OrderedProductEntity, OrderedProductDTO>();
            CreateMap<OrderedProductDTO, OrderedProductEntity>();

            CreateMap<OrderedProductEntity, OrderedProductUpdatedDTO>();
            CreateMap<OrderedProductUpdatedDTO, OrderedProductEntity>();

            CreateMap<OrderWithUpdateProductsDTO, OrderEntity>();
            CreateMap<OrderEntity, OrderWithUpdateProductsDTO>();
        }
	}
}

