import * as yup from "yup";
export const loginUserSchema = yup.object({
  email: yup.string().required("The field must not be empty").email("Email fail! Please type in your correct email address"),
});