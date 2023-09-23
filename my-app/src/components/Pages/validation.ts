import * as yup from "yup";
import * as Yup from "yup";
import parse from "date-fns/parse";
export const ChangeContactInfoSchema = yup.object().shape({
  phone: yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid phone number'),
  homePhone: yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid phone number'),
  passwordOld: yup.string()
    .min(6, 'Password must be 6 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
  ,
  newPasswordAnotherLogin: yup.string()
    .min(6, 'Password must be 6 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
  ,
  passwordNew: yup.string()
    .min(6, 'Password must be 6 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .when("passwordOld", {
      is: (passwordOld: string) => {
        if (passwordOld != null) {
          return true
        }
        else return false
      },
      then: (s) => s.required("required")
    })
  ,
  country: yup.string().min(4, 'Country must be 4 characters long'),
  city: yup.string().min(3, 'City must be 3 characters long'),
  state: yup.string().min(3, 'State must be 3 characters long'),
  street: yup.string().min(4, 'Street must be 4 characters long'),
  zipCode: yup.string().min(4, 'ZipCode must be 4 characters long'),
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string().email("Email fail! Please type in your correct email address"),
});
export const ReceivePasswordSchema = yup.object().shape({ email: yup.string().email("Email fail! Please type in your correct email address") });
export const PasswordUpdateRecoverySchema = yup.object().shape({
  password: yup.string()
    .min(6, 'Password must be 6 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .required("required")
  ,
  confirmPassword: yup.string()
    .min(6, 'Password must be 6 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .required("required")
    .oneOf([Yup.ref('password'), "Passwords must match"], 'Passwords must match')
});
export const CheckoutInfoSchema = yup.object().shape({
  homePhone: yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid phone number').required("Home number is required !"),
  country: yup.string().min(4, 'Country must be 4 characters long').required("Country is required !"),
  city: yup.string().min(3, 'City must be 3 characters long').required("City is required !"),
  state: yup.string().min(3, 'State must be 3 characters long').required("State is required !"),
  street: yup.string().min(4, 'Street must be 4 characters long').required("Street is required !"),
  zipCode: yup.string().min(4, 'ZipCode must be 4 characters long').required("ZipCode is required !"),
  cardNumber: yup.string().min(16, 'Card Number must be only 16 numbers').max(16, "Card Number must be only 16 numbers").required("Card number is required !"),
  cardDate: yup.string().min(5, 'Expiration date must be correct').max(5, "Expiration date must be correct").required("Expiration date is required !"),
  cardCvv: yup.string().min(3, 'Expiration date must be correct').max(3, "Expiration date must be correct").required("Expiration date is required !"),
});