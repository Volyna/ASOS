import { ProductActionTypes, ProductsActions, ProductsState } from "./types"

const initialState: ProductsState = {
  productsMan: [],
  productsWoman: [],
  loadingProductMan: false,
  loadingProductWoman: false
};
const ProductsReducer = (
  state = initialState,
  action: ProductsActions
): ProductsState => {
  switch (action.type) {
    case ProductActionTypes.START_REQUEST_PRODUCT: {
      return {
        ...state,
        loadingProductMan: true,
      };
    }
    case ProductActionTypes.SUCCESSFUL_REQUEST_MAN_PRODUCTS: {
      return {
        ...state,
        loadingProductMan: false,
        productsMan: action.payload
      };
    }
    case ProductActionTypes.BAD_REQUEST_PRODUCT: {
      return {
        ...state,
        loadingProductMan: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default ProductsReducer;
