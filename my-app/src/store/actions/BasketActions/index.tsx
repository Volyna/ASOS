import { Dispatch } from "react";
import {
  BasketActionTypes,
  BasketActions,
  IItemProduct,
} from "../../reducers/BasketReducer/types";
import { getBasketsById } from "../../../services/api-basket-service";
import { toast } from "react-toastify";

export const GetBasketsByid = (idUser: number) => {
  return async (dispatch: Dispatch<BasketActions>) => {
    try {
      dispatch({ type: BasketActionTypes.START_REQUESTS_BASKET });
      const data = await getBasketsById(idUser);
      const { response } = data;
      if (response.data.isSuccess == true) {
        dispatch({
          type: BasketActionTypes.SUCCEED_REQUEST_GET_BASKETS,
          payload: response.data.payload,
        });
      } else {
        dispatch({
          type: BasketActionTypes.BAG_REQUEST_BASKET,
          payload: "Error with server or basket empty!!!",
        });
      }
      console.log("Response", response.data);
    } catch (e) {
      dispatch({
        type: BasketActionTypes.BAG_REQUEST_BASKET,
        payload: "Error with server !!!",
      });
      toast.error("Some problems with server !!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
