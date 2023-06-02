using System;
using AutoMapper;
using WebAsos.Data.Entitties.IdentityUser;
using WebAsos.Data.ViewModels.User;

namespace WebAsos.Data.AutoMapper.User
{
	public class AutoMapperUserProfile : Profile
    {
		public AutoMapperUserProfile()
		{
            CreateMap<RegisterUserProfileViewModel, UserEntity>().ForMember(dst => dst.UserName, act => act.MapFrom(src => src.Email));  
        }
	}
}

