import { toast } from "react-toastify";
import { Dispatch } from "redux";
import { getProductsMan } from "../../../services/api-products-service";
import { ProductActionTypes, ProductsActions } from "../../reducers/productReducer/types";



export const GetAllProductMan = () => {
  return async (dispatch: Dispatch<ProductsActions>) => {
    try {
      dispatch({ type: ProductActionTypes.START_REQUEST_PRODUCT });
      const data = await getProductsMan();
      const { response } = data;
      console.log("response", response)
      if (response.data.isSuccess == true) {
        dispatch({ type: ProductActionTypes.SUCCESSFUL_REQUEST_MAN_PRODUCTS, payload: response.data.payload });
      } else {
        dispatch({ type: ProductActionTypes.BAD_REQUEST_PRODUCT });
        toast.error("Something get wrong...", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }

    } catch (e) {
      dispatch({ type: ProductActionTypes.BAD_REQUEST_PRODUCT });
      toast.error("Something get wrong...", {
        position: toast.POSITION.TOP_RIGHT,
      });

    }
  };
};