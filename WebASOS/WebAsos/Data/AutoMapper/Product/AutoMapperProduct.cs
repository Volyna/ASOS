using System;
using AutoMapper;
using WebAsos.Data.Entitties.Catalog;
using WebAsos.Models;

namespace WebAsos.Data.AutoMapper.Product
{
	public class AutoMapperProduct : Profile
    {
		public AutoMapperProduct()
		{
			CreateMap<ProductEntity, ProductProductDTO>()
				.ForMember(p => p.Color, d => d.Ignore())
				.ForMember(p => p.Size, d => d.Ignore())
				.ForMember(p => p.Color, d => d.Ignore());
        }
	}
}


