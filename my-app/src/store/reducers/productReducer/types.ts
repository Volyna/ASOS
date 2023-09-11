import { type } from "os";

export interface ProductsState {
  products: Array<IItemProduct>;
  loading: boolean;
}

interface IItemProduct {
  id: number;
  name: string,
  price: number,
  discount: number,
  description: string,
  color: string,
  size: number,
  brand: string,
  quantity: number,
  isInTheStock: boolean,
  images: Array<string>
  category_id: number
}

export enum ProductActionTypes {
  START_REQUEST_PRODUCT = "START_REQUEST_PRODUCT",  
  BAD_REQUEST_PRODUCT= "BAD_REQUEST_PRODUCT",
  GET_ALL_PRODUCTS_MAN= "GET_ALL_PRODUCTS_MAN",
}

interface StartRequestAction {
  type: ProductActionTypes.START_REQUEST_PRODUCT;
}
interface GetAllProductManRequestAction {
  type: ProductActionTypes.GET_ALL_PRODUCTS_MAN;
  payload:Array<IItemProduct>;
}
interface BadRequestAction {
  type: ProductActionTypes.BAD_REQUEST_PRODUCT;
}


export type ProductsActions =
  | StartRequestAction
  | BadRequestAction
  | GetAllProductManRequestAction;