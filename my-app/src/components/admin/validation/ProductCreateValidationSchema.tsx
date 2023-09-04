import * as Yup from "yup";
export const CreateProductSchema = Yup.object().shape({
  name: Yup.string().required().min(2, "A small name!").max(60, "A big name!"),

  price: Yup.number().min(1, "A small price").required(),

  discount: Yup.number().required(),

  description: Yup.string()
    .min(2, "A small description!")
    .max(6000, "A big description!")
    .required(),

  size: Yup.number().required(),

  brand: Yup.string().required(),

  quantity: Yup.number().required(),

  isInTheStock: Yup.boolean().required(),
});
