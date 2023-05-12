using System;
namespace WebAsos.Services
{
    public class ServiceResponse
    {
        public string Message { get; set; } = null;
        public object Payload { get; set; } = null;
        public bool IsSuccess { get; set; } = false;
        public IEnumerable<string> Errors { get; set; } = null;
    }
}

