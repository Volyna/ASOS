import * as Yup from "yup";
export const CreateProductSchema = Yup.object().shape({
  name: Yup.string().required().min(2, "A small name!").max(60, "A big name!"),

  price: Yup.number().min(1, "A small price").required(),

  description: Yup.string()
    .min(2, "A small description!")
    .max(6000, "A big description!")
    .required(),

  size: Yup.string().required(),

  brand: Yup.string().required(),

  quantity: Yup.number().required(),

  isInTheStock: Yup.boolean().required(),
});

export const UpdateProductSchema = Yup.object().shape({
  name: Yup.string().required().min(2, "A small name!").max(60, "A big name!"),

  price: Yup.number().min(1, "A small price").required(),

  description: Yup.string()
    .min(2, "A small description!")
    .max(6000, "A big description!")
    .required(),

  size: Yup.string().required(),

  brand: Yup.string().required(),

  quantity: Yup.number().required(),

  isInTheStock: Yup.boolean().required(),
});
