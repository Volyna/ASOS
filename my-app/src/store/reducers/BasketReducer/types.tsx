export interface IBasketState {
  isBasketUpdate: boolean;
  products: Array<IItemProduct>;
  isBasketLoading: boolean;
}

export interface IItemProduct {
  id: number;
  name: string;
  price: number;
  discount: number;
  description: string;
  color: string;
  size: number;
  brand: string;
  quantity: number;
  isInTheStock: boolean;
  images: string;
  category_id: number;
  countProducts: number;
  productId: number;
  userIdOrder: number;
}

export enum BasketActionTypes {
  START_REQUESTS_BASKET = "START_REQUESTS_BASKET",
  SUCCEED_REQUEST_GET_BASKETS = "SUCCEED_REQUEST_GET_BASKETS",
  BAG_REQUEST_BASKET = "BAG_REQUEST_BASKET",
}
interface StartRequestBasketAction {
  type: BasketActionTypes.START_REQUESTS_BASKET;
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
  | BadRequestBasketAction;
