using System;
namespace WebAsos.Services
{
    public class ServiceResponse
    {
        public ServiceResponse(Object _payload)
        {
               this.Payload = _payload;
        }
        
        public ServiceResponse()
        {
                
        }
        public object Payload { get; set; }

    }
}

