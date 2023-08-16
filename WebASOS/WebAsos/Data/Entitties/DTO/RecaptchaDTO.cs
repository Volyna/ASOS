using Newtonsoft.Json;

namespace WebAsos.Data.Entitties.DTO
{
    public class RecaptchaDTO
    {
        [JsonProperty("success")]
        public bool Success { get; set; }
        [JsonProperty("error-codes")]
        public List<string> ErrorCodes { get; set; }
        [JsonProperty("challenge_ts")]
        public DateTime ChalangeDate { get; set; }
        [JsonProperty("score")]
        public float Score { get; set; }
    }
}
