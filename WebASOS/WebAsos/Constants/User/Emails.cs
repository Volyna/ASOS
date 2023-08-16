using MimeKit;

namespace WebAsos.Constants.User
{
    public static class Emails
    {
        public static MimeMessage ResetPassword(string to, string url)
        {
            var builder = new BodyBuilder();
            builder.HtmlBody = $"Click <a href='{url}'>here</a> to reset password";

            var message = new MimeMessage()
            {
                Subject = "Reset password",
                Body = builder.ToMessageBody(),
            };

            message.To.Add(new MailboxAddress(to, to));

            return message;
        }
         
        public static MimeMessage PasswordChanged(string to)
        {
            var builder = new BodyBuilder();
            builder.HtmlBody = $"<p>Password changed</p>";

            var message = new MimeMessage()
            {
                Subject = "Password changed",
                Body = builder.ToMessageBody(),
            };

            message.To.Add(new MailboxAddress(to, to));

            return message;
        }

        public static MimeMessage ConfirmAccountByEmail(string to, string url)
        {
            var builder = new BodyBuilder();
            builder.HtmlBody = $"Click <a href='{url}'>here</a> to confirm account";

            var message = new MimeMessage()
            {
                Subject = "Confirm account",
                Body = builder.ToMessageBody(),
            };

            message.To.Add(new MailboxAddress(to, to));

            return message;
        }
    }
}
