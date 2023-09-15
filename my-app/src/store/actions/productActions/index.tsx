import { Dispatch } from "react";
import { toast } from "react-toastify";
import {
  IProductCreate,
  IProductEditPost,
} from "../../../components/admin/components/products/types";
import {
  createProduct,
  getByIdProduct,
  getProductsCategories,
  removeProduct,
  updateProduct,
} from "../../../services/api-products-service";
import { ProductActionTypes, ProductsActions } from "../../reducers/productReducer/types";

export const GetProductsCategories = (idCategory: number) => {
  return async (dispatch: Dispatch<ProductsActions>) => {
    try {
      dispatch({ type: ProductActionTypes.START_REQUEST_PRODUCT });
      const data = await getProductsCategories(idCategory);
      const { response } = data;
      dispatch({
        type: ProductActionTypes.SUCCESSFUL_REQUEST_LIST_PRODUCTS,
        payload: response.data,
      });
    } catch (e) {
      toast.error("Some problems", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({
        type: ProductActionTypes.SERVER_PRODUCTS_ERROR,
        payload: "Unknown error",
      });
    }
  };
};

export const CreateProduct = (model: IProductCreate) => {
  return async (dispatch: Dispatch<ProductsActions>) => {
    try {
      dispatch({ type: ProductActionTypes.START_REQUEST_PRODUCT });

      const data = await createProduct(model);
      const { response } = data;
      console.log("DATA:", data);

      dispatch({
        type: ProductActionTypes.SUCCESSFUL_REQUEST_CREATE_PRODUCTS,
        payload: response.data,
      });
    } catch (e) {
      toast.error("Something get wrong...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({
        type: ProductActionTypes.SERVER_PRODUCTS_ERROR,
        payload: "Unknown error",
      });
      return Promise.reject();
    }
  };
};

export const RemoveImageFileProduct = (image: String) => {
  return async (dispatch: Dispatch<ProductsActions>) => {
    try {
      dispatch({
        type: ProductActionTypes.SUCCESSFUL_REQUEST__REMOVE_IMAGE_PRODUCT,
        payload: image,
      });
    } catch (e) {
      toast.error("Something get wrong...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({
        type: ProductActionTypes.SERVER_PRODUCTS_ERROR,
        payload: "Unknown error",
      });
    }
  };
};
export const GetByIdProduct = (id: number) => {
  return async (dispatch: Dispatch<ProductsActions>) => {
    try {
      dispatch({ type: ProductActionTypes.START_REQUEST_PRODUCT });

      const data = await getByIdProduct(id);
      const { response } = data;
      dispatch({
        type: ProductActionTypes.SUCCESSFUL_REQUEST_GET_PRODUCT,
        payload: response.data,
      });
    } catch (e) {
      toast.error("Something get wrong...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({
        type: ProductActionTypes.SERVER_PRODUCTS_ERROR,
        payload: "Unknown error",
      });
    }
  };
};
export const UpdateProduct = (id: number, model: IProductEditPost) => {
  return async (dispatch: Dispatch<ProductsActions>) => {
    try {
      dispatch({ type: ProductActionTypes.START_REQUEST_PRODUCT });
      console.log("UpdateProduct before");
      const data = await updateProduct(id, model);
      console.log("UpdateProduct after: ", data.response);
      const { response } = data;
      dispatch({
        type: ProductActionTypes.SUCCESSFUL_UPDATE_PRODUCT,
        payload: response.data,
      });
    } catch (e) {
      toast.error("Some problems", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({
        type: ProductActionTypes.SERVER_PRODUCTS_ERROR,
        payload: "Unknown error",
      });
    }
  };
};
export const RemoveProduct = (id: number) => {
  return async (dispatch: Dispatch<ProductsActions>) => {
    try {
      const data = await removeProduct(id);

      const { response } = data;

      console.log(response.data);

      dispatch({
        type: ProductActionTypes.REMOVE_PRODUCT_SUCCESSFUL,
        payload: id,
      });
    } catch (e) {
      toast.error("Some problems", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({
        type: ProductActionTypes.SERVER_PRODUCTS_ERROR,
        payload: "Unknown error",
      });
      return Promise.reject();
    }
  };
};
export const StartReques = () => {
  return async (dispatch: Dispatch<ProductsActions>) => {
    dispatch({ type: ProductActionTypes.START_REQUEST_PRODUCT });
  };
};
