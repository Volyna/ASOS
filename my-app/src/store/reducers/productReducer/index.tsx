import { ProductActionTypes, ProductsActions, ProductsState } from "./types";

const initialState: ProductsState = {
  products: [],
  loading: false,
};
const ProductsReducer = (
  state = initialState,
  action: ProductsActions
): ProductsState => {
  switch (action.type) {
    case ProductActionTypes.START_REQUEST_PRODUCT: {
      return {
        ...state,
        loading: true,
      };
    }
    case ProductActionTypes.GET_ALL_PRODUCTS_MAN: {
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    }
    case ProductActionTypes.BAD_REQUEST_PRODUCT: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
export default ProductsReducer;
