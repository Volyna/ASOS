import { type } from "os";

export interface ProductsState {
  productsMan: Array<IItemProduct>;
  productsWoman: Array<IItemProduct>;
  loadingProductMan: boolean;
  loadingProductWoman: boolean;
}

interface IItemProduct {
  id: number;
  name: string,
  price: number,
  discount: number,
  description: string,
  color: Array<string>,
  size: Array<string>,
  brand: string,
  quantity: number,
  isInTheStock: boolean,
  images: Array<string>,
  mainImage: string,
  category_id: number
}

export enum ProductActionTypes {
  START_REQUEST_PRODUCT = "START_REQUEST_PRODUCT",
  BAD_REQUEST_PRODUCT = "BAD_REQUEST_PRODUCT",
  SUCCESSFUL_REQUEST_MAN_PRODUCTS = "SUCCESSFUL_REQUEST_MAN_PRODUCTS",

}

interface StartRequestAction {
  type: ProductActionTypes.START_REQUEST_PRODUCT;
}
interface BadRequestAction {
  type: ProductActionTypes.BAD_REQUEST_PRODUCT;
}
interface SuccessfulRequestManProductsAction {
  type: ProductActionTypes.SUCCESSFUL_REQUEST_MAN_PRODUCTS;
  payload: Array<IItemProduct>
}


export type ProductsActions =
  | StartRequestAction
  | BadRequestAction
  | SuccessfulRequestManProductsAction;