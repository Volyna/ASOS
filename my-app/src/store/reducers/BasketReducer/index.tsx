import { BasketActionTypes, BasketActions, IBasketState } from "./types";

const initialState: IBasketState = {
  isBasketUpdate: false,
  products: [],
  isBasketLoading: false,
};

const BasketReducer = (
  state = initialState,
  action: BasketActions
): IBasketState => {
  switch (action.type) {
    case BasketActionTypes.START_REQUESTS_BASKET: {
      return {
        ...state,
        isBasketLoading: true,
      };
    }
    case BasketActionTypes.SUCCEED_REQUEST_GET_BASKETS: {
      return {
        ...state,
        isBasketLoading: false,
        products: action.payload,
      };
    }
    case BasketActionTypes.END_REQUESTS_BASKET: {
      return {
        ...state,
        isBasketLoading: false,
      };
    }
    case BasketActionTypes.MINUS_PRODUCT_COUNT_BASKET: {
      return {
        ...state,
        isBasketLoading: false,
        products: action.payload,
      };
    }
    case BasketActionTypes.ADD_PRODUCT_COUNT_BASKET: {
      return {
        ...state,
        isBasketLoading: false,
        products: action.payload,
      };
    }
    case BasketActionTypes.REMOVE_PRODUCT_BASKET: {
      return {
        ...state,
        isBasketLoading: false,
        products: action.payload,
      };
    }
    case BasketActionTypes.BAG_REQUEST_BASKET: {
      return {
        ...state,
        isBasketLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default BasketReducer;
