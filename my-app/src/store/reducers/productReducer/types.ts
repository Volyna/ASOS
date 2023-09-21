import { colors } from '@mui/material';
import { type } from "os";

export interface ProductsState {
  productsMan: Array<IItemProduct>;
  productsWoman: Array<IItemProduct>;
  productCurrent: IItemProduct
  loadingProductMan: boolean;
  loadingProductWoman: boolean;


  products: Array<IItemProduct>;
  message: null | string;
  loading: boolean;
  productForUpdate: IItemProduct;
}

interface IItemProduct {
  id: number;
  name: string,
  price: number,
  discount: number,
  description: string,
  // color: string,
  // size: string,
  color: Array<string>,
  size: Array<string>,
  brand: string,
  quantity: number,
  isInTheStock: boolean,
  images: any,
  mainImage: string,
  categoryId: number
}

export enum ProductActionTypes {
  START_REQUEST_PRODUCT = "START_REQUEST_PRODUCT",
  BAD_REQUEST_PRODUCT = "BAD_REQUEST_PRODUCT",
  SUCCESSFUL_REQUEST_MAN_PRODUCTS = "SUCCESSFUL_REQUEST_MAN_PRODUCTS",
  REMOVE_PRODUCT_SUCCESSFUL = "REMOVE_PRODUCT_SUCCESSFUL",
  SUCCESSFUL_REQUEST_GET_PRODUCT = "SUCCESSFUL_REQUEST_GET_PRODUCT",
  SUCCESSFUL_REQUEST__REMOVE_IMAGE_PRODUCT = "SUCCESSFUL_REQUEST__REMOVE_IMAGE_PRODUCT",
  SUCCESSFUL_UPDATE_PRODUCT = "SUCCESSFUL_UPDATE_PRODUCT",
  SERVER_PRODUCTS_ERROR = "SERVER_PRODUCTS_ERROR",
  SUCCESSFUL_REQUEST_LIST_PRODUCTS = "SUCCESSFUL_REQUEST_LIST_PRODUCTS",
  SUCCESSFUL_REQUEST_CREATE_PRODUCTS = "SUCCESSFUL_REQUEST_CREATE_PRODUCTS",
  SUCCESSFUL_REQUEST_CURRENT_PRODUCT= "SUCCESSFUL_REQUEST_CURRENT_PRODUCT",

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
interface SuccessfulRemoveProductAction {
  type: ProductActionTypes.REMOVE_PRODUCT_SUCCESSFUL;
  payload: any;
}
interface ServerProductsErrorAction {
  type: ProductActionTypes.SERVER_PRODUCTS_ERROR;
  payload: any;
}
interface SuccessfulRequestRemoveImageProductAction {
  type: ProductActionTypes.SUCCESSFUL_REQUEST__REMOVE_IMAGE_PRODUCT;
  payload: any;
}
interface SuccessfulUpdateProductAction {
  type: ProductActionTypes.SUCCESSFUL_UPDATE_PRODUCT;
  payload: any;
}
interface SuccessfulGetProductAction {
  type: ProductActionTypes.SUCCESSFUL_REQUEST_GET_PRODUCT;
  payload: any;
}
interface SuccessfulCreateProductAction {
  type: ProductActionTypes.SUCCESSFUL_REQUEST_CREATE_PRODUCTS;
  payload: any;
}
interface SuccessfulRequestListProductsAction {
  type: ProductActionTypes.SUCCESSFUL_REQUEST_LIST_PRODUCTS;
  payload: any;
}
interface SuccessfulRequaestCurrentProduct {
  type: ProductActionTypes.SUCCESSFUL_REQUEST_CURRENT_PRODUCT;
  payload: IItemProduct;
}


export type ProductsActions =
  | StartRequestAction
  | BadRequestAction
  | SuccessfulRequestManProductsAction
  | ServerProductsErrorAction
  | SuccessfulRequestListProductsAction
  | SuccessfulCreateProductAction
  | SuccessfulGetProductAction
  | SuccessfulUpdateProductAction
  | SuccessfulRequestRemoveImageProductAction
  | SuccessfulRemoveProductAction
  | SuccessfulRequaestCurrentProduct
