namespace WebAsos.SMTP_Email
{
    public class Message
    {
        /// <summary>
        /// Тема листа
        /// </summary>
        public string Subject { get; set; }
        /// <summary>
        /// Вміст листа
        /// </summary>
        public string Body { get; set; }
        /// <summary>
        /// Кому на пошту піде лист
        /// </summary>
        public string To { get; set; }
    }
}
