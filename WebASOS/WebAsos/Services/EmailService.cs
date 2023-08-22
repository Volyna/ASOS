using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using WebAsos.Data.Entitties.DTO;

namespace WebAsos.Services
{
    public class EmailService
    {
        private readonly EmailSettings _settings;
        public EmailService(EmailSettings settings)
        {
            _settings = settings;
        }

        public async Task SendEmailAsync(MimeMessage message)
        {
            using (var client = new SmtpClient())
            {
                try
                {
                    message.From.Add(new MailboxAddress("Focus", _settings.From));
                    client.Connect(_settings.SMTP,_settings.PORT, false);
                    client.Authenticate(_settings.User, _settings.Password);
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
