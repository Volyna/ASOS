import * as yup from "yup";
import parse from "date-fns/parse";
export const ChangeContactInfoSchema = yup.object({
    phone: yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid phone number')
    .required('Required'),
    homePhone: yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid phone number')
    .required('Required'),
    passwordOld: yup .string()
    .required("The field must not be empty")
    .min(6, 'Password must be 6 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
    passwordNew: yup .string()
    .required("The field must not be empty")
    .min(6, 'Password must be 6 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
    Country:yup.string().min(4, 'Country must be 4 characters long'),
    City:yup.string().min(4, 'City must be 4 characters long'),
    State:yup.string().min(4, 'State must be 4 characters long'),
    Street:yup.string().min(4, 'Street must be 4 characters long'),
    ZipCode:yup.string().min(4, 'ZipCode must be 4 characters long'),
    firstName: yup.string().required("The field must not be empty"),
    lastName: yup.string().required("The field must not be empty"),
    email: yup.string().required("The field must not be empty").email("Email fail! Please type in your correct email address"),
  });