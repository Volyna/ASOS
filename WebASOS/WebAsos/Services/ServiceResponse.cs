using System;
namespace WebAsos.Services
{
    public class ServiceResponse
    {
        public string Message { get; set; }
        public object Payload { get; set; }
        public bool IsSuccess { get; set; } 
        public IEnumerable<string> Errors { get; set; }
    }
}

