import parse from "date-fns/parse";
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
  dataBirdth: yup.date()
  .transform(function (value, originalValue) {
    if (this.isType(value)) {
      return value;
    }
    const result = parse(originalValue, "dd.MM.yyyy", new Date());
    return result;
  })
  .typeError("please enter a valid date")
  .required()
  .min("1969-11-13", "Date is too early")
  .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
    .required("Required"),
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