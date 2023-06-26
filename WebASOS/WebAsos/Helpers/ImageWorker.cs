using System;

namespace WebAsos.Helpers
{
    public static class ImageWorker
    {
        private static Random random = new Random();
        public static string SaveImage(string ImageBase54)
        {
            String path = Path.Combine(Directory.GetCurrentDirectory(), "images");


            //set the image path
            string imgPath = Path.Combine(path, RandomString() + ".jpg");

            byte[] imageBytes = Convert.FromBase64String(ImageBase54);

            File.WriteAllBytes(imgPath, imageBytes);

            return imgPath;
        }
        public static string RandomString()
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm0123456789";
            return new string(Enumerable.Repeat(chars, 15)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }
    }
}
