import { ProductActionTypes, ProductsActions, ProductsState } from "./types";

const initialState: ProductsState = {
  productsMan: [],
  productsWoman: [],
  productCurrent: {
    id: 0,
    name: "",
    price: 0,
    discount: 0,
    description: "",
    color: [],
    size: [],
    brand: "",
    quantity: 0,
    isInTheStock: false,
    mainImage: "",
    images: "",
    categoryId: 0,
    productType: "",
    material: "",
    pattern: "",
    fit: "",
    shop: "",
    isLikeUser: false,
  },
  loadingProductMan: false,
  loadingProductWoman: false,
  products: [],
  message: null,
  loading: false,
  productForUpdate: {
    id: 0,
    name: "",
    productType: "",
    material: "",
    pattern: "",
    fit: "",
    shop: "",
    price: 0,
    discount: 0,
    description: "",
    color: [],
    size: [],
    brand: "",
    quantity: 0,
    isInTheStock: false,
    mainImage: "",
    images: "",
    categoryId: 0,
    isLikeUser: false,
  },
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
        productsMan: action.payload,
      };
    }
    case ProductActionTypes.BAD_REQUEST_PRODUCT: {
      return {
        ...state,
        loadingProductMan: false,
      };
    }
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
          productType: "",
          material: "",
          pattern: "",
          fit: "",
          shop: "",
          price: 0,
          discount: 0,
          description: "",
          color: [],
          size: [],
          brand: "",
          quantity: 0,
          isInTheStock: false,
          mainImage: "",
          images: "",
          categoryId: 0,
          isLikeUser: false,
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
          productType: "",
          material: "",
          pattern: "",
          fit: "",
          shop: "",
          price: 0,
          discount: 0,
          description: "",
          color: [],
          size: [],
          brand: "",
          quantity: 0,
          isInTheStock: false,
          mainImage: "",
          images: "",
          categoryId: 0,
          isLikeUser: false,
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
            (item: any) => item !== action.payload
          ),
        },
      };
    }
    case ProductActionTypes.SUCCESSFUL_REQUEST_CURRENT_PRODUCT: {
      return {
        ...state,
        productCurrent: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
export default ProductsReducer;
