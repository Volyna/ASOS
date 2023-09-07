import * as yup from "yup";

export const CreateCategorySchema = yup.object().shape({
  name: yup
    .string()
    .required("This is a required field")
    .min(2, "Categry name must consist of least 2 characters")
    .max(60, "Categry name must be a maximum of 60 characters"),
});

export const UpdateCategorySchema = yup.object().shape({
  name: yup
    .string()
    .required("This is a required field")
    .min(2, "Categry name must consist of least 2 characters")
    .max(60, "Categry name must be a maximum of 60 characters"),
});
