import { ProductActionTypes, ProductsActions, ProductsState } from "./types";

const initialState: ProductsState = {
  products: [],
  message: null,
  loading: false,
  productForUpdate: {
    id: 0,
    name: "",
    price: 0,
    discount: 0,
    description: "",
    color: "",
    size: 0,
    brand: "",
    quantity: 0,
    isInTheStock: false,
    images: [],
    category_id: 0,
  },
};
const ProductsReducer = (
  state = initialState,
  action: ProductsActions
): ProductsState => {
  switch (action.type) {
    case ProductActionTypes.REMOVE_PRODUCT_SUCCESSFUL: {
      const { products } = state;
      return {
        ...state,
        loading: false,
        products: products.filter((item) => item.id !== action.payload),
      };
    }
    case ProductActionTypes.START_REQUEST_PRODUCT: {
      return {
        ...state,
        productForUpdate: {
          id: 0,
          name: "",
          price: 0,
          discount: 0,
          description: "",
          color: "",
          size: 0,
          brand: "",
          quantity: 0,
          isInTheStock: false,
          images: [],
          category_id: 0,
        },
        message: "",
        loading: true,
      };
    }
    case ProductActionTypes.SUCCESSFUL_UPDATE_PRODUCT: {
      return {
        ...state,
        productForUpdate: {
          id: 0,
          name: "",
          price: 0,
          discount: 0,
          description: "",
          color: "",
          size: 0,
          brand: "",
          quantity: 0,
          isInTheStock: false,
          images: [],
          category_id: 0,
        },
        message: action.payload.message,
        loading: false,
      };
    }
    case ProductActionTypes.SUCCESSFUL_REQUEST_LIST_PRODUCTS: {
      return {
        ...state,
        message: action.payload.message,
        products: action.payload.payload,
        loading: false,
      };
    }
    case ProductActionTypes.SERVER_PRODUCTS_ERROR: {
      return {
        ...state,
        message: action.payload.message,
        loading: false,
      };
    }
    case ProductActionTypes.SUCCESSFUL_REQUEST_CREATE_PRODUCTS: {
      return {
        ...state,
        message: action.payload.message,
        loading: false,
      };
    }
    case ProductActionTypes.SUCCESSFUL_REQUEST_GET_PRODUCT: {
      return {
        ...state,
        message: action.payload.message,
        loading: false,
        productForUpdate: action.payload.payload,
      };
    }
    case ProductActionTypes.SUCCESSFUL_REQUEST__REMOVE_IMAGE_PRODUCT: {
      const { productForUpdate } = state;
      return {
        ...state,
        productForUpdate: {
          ...productForUpdate,
          images: productForUpdate.images.filter(
            (item) => item !== action.payload
          ),
        },
      };
    }

    default: {
      return state;
    }
  }
};
export default ProductsReducer;
