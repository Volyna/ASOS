import * as yup from "yup";
export const loginBeforeUserSchema = yup.object({
  email: yup.string().required("The field must not be empty").email("Email fail! Please type in your correct email address"),
});

export const loginUserSchema = yup.object({
  email: yup.string().required("The field must not be empty").email("Email fail! Please type in your correct email address"),
  password: yup .string()
  .required("The field must not be empty")
  .min(6, 'Password must be 6 characters long')
  .matches(/[0-9]/, 'Password requires a number')
  .matches(/[a-z]/, 'Password requires a lowercase letter')
  .matches(/[A-Z]/, 'Password requires an uppercase letter')
  .matches(/[^\w]/, 'Password requires a symbol'),
});
export const registerUserSchema = yup.object({
  mostlyInterested:yup.string().oneOf(["womenswear","menswear"]),
  dayBirh:yup.string().notOneOf(["0","DD"],"Enter your day of birth").required("Enter your day of birth"),
  monthBirh:yup.string().notOneOf(["0","Month"],"Enter your month date of birth").required("Enter your month of birth"),
  yearBirh:yup.string().notOneOf(["0","YYY"],"Enter your year date of birth").required("Enter your year of birth"),
  firstName: yup.string().required("The field must not be empty"),
  lastName: yup.string().required("The field must not be empty"),
  email: yup.string().required("The field must not be empty").email("Email fail! Please type in your correct email address"),
  password: yup .string()
  .required("The field must not be empty")
  .min(6, 'Password must be 6 characters long')
  .matches(/[0-9]/, 'Password requires a number')
  .matches(/[a-z]/, 'Password requires a lowercase letter')
  .matches(/[A-Z]/, 'Password requires an uppercase letter')
  .matches(/[^\w]/, 'Password requires a symbol'),
});