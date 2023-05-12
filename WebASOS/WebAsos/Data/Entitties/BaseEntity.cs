using Microsoft.Extensions.Diagnostics.HealthChecks;
using System;
namespace WebAsos.Data.Entitties
{
	public class BaseEntity
	{
		int Id { get; set; }
		public string Name { get; set; }
		public BaseEntity()
		{
		}
	}
}

