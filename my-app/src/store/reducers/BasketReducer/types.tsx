import { IItemProductLike } from "../LikeReducer/type";

export interface IBasketState {
  isBasketUpdate: boolean;
  products: Array<IItemProduct>;
  productsOrder: Array<IItemOrder>;
  isBasketLoading: boolean;
}

export interface IItemProduct {
  id: number;
  name: string;
  price: number;
  discount: number;
  description: string;
  color: string;
  size: Array<string>;
  brand: string;
  quantity: number;
  isInTheStock: boolean;
  images: string;
  category_id: number;
  countProducts: number;
  productId: number;
  userIdOrder: number;
}
export interface IItemOrder {
  date: string,
  amount: number,
  orderNumber: string,
  orderStatus: string,
}

export enum BasketActionTypes {
  START_REQUESTS_BASKET = "START_REQUESTS_BASKET",
  CREATE_BASKET = "CREATE_BASKET",
  END_REQUESTS_BASKET = "END_REQUESTS_BASKET",
  SUCCEED_REQUEST_GET_BASKETS = "SUCCEED_REQUEST_GET_BASKETS",
  BAG_REQUEST_BASKET = "BAG_REQUEST_BASKET",
  ADD_PRODUCT_COUNT_BASKET = "ADD_PRODUCT_COUNT_BASKET",
  SUCCED_REMOVE_FROM_LIKE_BASKET = "SUCCED_REMOVE_FROM_LIKE_BASKET",
  MINUS_PRODUCT_COUNT_BASKET = "MINUS_PRODUCT_COUNT_BASKET",
  REMOVE_PRODUCT_BASKET = "REMOVE_PRODUCT_BASKET",
  SUCCEED_CREATE_ORDER = "SUCCEED_CREATE_ORDER",
  SUCCEED_GET_ORDERS = "SUCCEED_GET_ORDERS",
}
interface StartRequestBasketAction {
  type: BasketActionTypes.START_REQUESTS_BASKET;
}
interface SucceedCreatedOrderRequestBasketAction {
  type: BasketActionTypes.SUCCEED_CREATE_ORDER;
}
interface AddProductCountBasketAction {
  type: BasketActionTypes.ADD_PRODUCT_COUNT_BASKET;
  payload: IItemProduct[];
}
interface SuccedRemoveFromLikeBasketAction {
  type: BasketActionTypes.SUCCED_REMOVE_FROM_LIKE_BASKET;
}
interface CreateBasketAction {
  type: BasketActionTypes.CREATE_BASKET;
}
interface RemoveProductBasketAction {
  type: BasketActionTypes.REMOVE_PRODUCT_BASKET;
  payload: IItemProduct[];
}
interface SuccedGetOrdersBasketAction {
  type: BasketActionTypes.SUCCEED_GET_ORDERS;
  payload: IItemOrder[];
}
interface MinusProductCountBasketAction {
  type: BasketActionTypes.MINUS_PRODUCT_COUNT_BASKET;
  payload: IItemProduct[];
}
interface EndRequestBasketAction {
  type: BasketActionTypes.END_REQUESTS_BASKET;
}
interface BadRequestBasketAction {
  type: BasketActionTypes.BAG_REQUEST_BASKET;
  payload: any;
}
interface SucceedRequestGetBasketsAction {
  type: BasketActionTypes.SUCCEED_REQUEST_GET_BASKETS;
  payload: Array<IItemProduct>;
}
export type BasketActions =
  | StartRequestBasketAction
  | SucceedRequestGetBasketsAction
  | BadRequestBasketAction
  | EndRequestBasketAction
  | AddProductCountBasketAction
  | MinusProductCountBasketAction
  | RemoveProductBasketAction
  | CreateBasketAction
  | SuccedRemoveFromLikeBasketAction
  | SucceedCreatedOrderRequestBasketAction
  | SuccedGetOrdersBasketAction;
