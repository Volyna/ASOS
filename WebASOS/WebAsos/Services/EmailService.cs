using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using WebAsos.Data.Entitties.DTO;

namespace WebAsos.Services
{
    public class EmailService
    {
        private static IConfiguration _configuration;
        public EmailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task SendEmailAsync(MimeMessage message)
        {
            using (var client = new SmtpClient())
            {
                try
                {
                    message.From.Add(new MailboxAddress("Focus", _configuration["EmailSettings:User"]));
                    client.Connect(_configuration["EmailSettings:SMTP"], Int32.Parse(_configuration["EmailSettings:PORT"]), false);
                    client.Authenticate(_configuration["EmailSettings:User"], _configuration["EmailSettings:Password"]);
                    client.Send(message);

                    client.Disconnect(true);
                }
                catch
                {
                    throw;
                }
                finally
                {
                    client.Disconnect(true);
                    client.Dispose();
                }
            }
        }
    }
}
