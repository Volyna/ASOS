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
  images: Array<File>
  category_id: number
}

export enum ProductActionTypes {
  START_REQUEST_PRODUCT = "START_REQUEST_PRODUCT",
 
}

interface StartRequestAction {
  type: ProductActionTypes.START_REQUEST_PRODUCT;
}


export type ProductsActions =
  | StartRequestAction;