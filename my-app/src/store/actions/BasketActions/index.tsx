import { Dispatch } from "react";
import {
  BasketActionTypes,
  BasketActions,
  IItemProduct,
} from "../../reducers/BasketReducer/types";
import { createBasket, createOrder, getBasketsById, getOrders, removeBasket } from "../../../services/api-basket-service";
import { toast } from "react-toastify";
import { IBasketCreate, IBasketRemove } from "../../../components/Pages/Account/Favourites/types";
import { IItemProductLike } from "../../reducers/LikeReducer/type";
import { IOrderChecout } from "../../../components/Pages/Checkout/types";

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
export const AddCountProductBasket = (array: IItemProduct[]) => {
  return async (dispatch: Dispatch<BasketActions>) => {
    dispatch({
      type: BasketActionTypes.ADD_PRODUCT_COUNT_BASKET,
      payload: array,
    });
  };
};
export const MinusCountProductBasket = (array: IItemProduct[]) => {
  return async (dispatch: Dispatch<BasketActions>) => {
    dispatch({
      type: BasketActionTypes.MINUS_PRODUCT_COUNT_BASKET,
      payload: array,
    });
  };
};
// export const RemoveProductBasket = (array: IItemProduct[]) => {
//   return async (dispatch: Dispatch<BasketActions>) => {
//     dispatch({
//       type: BasketActionTypes.REMOVE_PRODUCT_BASKET,
//       payload: array,
//     });
//   };
// };
export const CreateBasket = (array: IBasketCreate) => {
  return async (dispatch: Dispatch<BasketActions>) => {
    try {
      dispatch({ type: BasketActionTypes.START_REQUESTS_BASKET });
      const data = await createBasket(array);
      const { response } = data;
      console.log("Res :", response);
      if (response.data.isSuccess == true) {
        dispatch({
          type: BasketActionTypes.CREATE_BASKET,
        });
        toast.success("The product has been added to the cart", {
          position: toast.POSITION.TOP_RIGHT,
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
export const RemoveProductBasket = (array: IItemProduct[], model: IBasketRemove) => {
  return async (dispatch: Dispatch<BasketActions>) => {
    try {
      dispatch({ type: BasketActionTypes.START_REQUESTS_BASKET });
      const data = await removeBasket(model);
      const { response } = data;
      console.log("Res :", response);
      if (response.data.isSuccess == true) {
        dispatch({
          type: BasketActionTypes.REMOVE_PRODUCT_BASKET,
          payload: array
        });
        toast.success("The product has been removed from basket", {
          position: toast.POSITION.TOP_RIGHT,
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
export const RemoveBasketFromLike = (model: IBasketRemove) => {
  return async (dispatch: Dispatch<BasketActions>) => {
    try {
      dispatch({ type: BasketActionTypes.START_REQUESTS_BASKET });
      const data = await removeBasket(model);
      const { response } = data;
      if (response.data.isSuccess == true) {
        dispatch({
          type: BasketActionTypes.SUCCED_REMOVE_FROM_LIKE_BASKET,
        });
        toast.success("The product has been removed from basket", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        dispatch({
          type: BasketActionTypes.BAG_REQUEST_BASKET,
          payload: "Error !!!",
        });
      }

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
export const CreateOrderProduct = (model: IOrderChecout) => {
  return async (dispatch: Dispatch<BasketActions>) => {
    try {
      dispatch({ type: BasketActionTypes.START_REQUESTS_BASKET });
      const data = await createOrder(model);
      const { response } = data;
      if (response.data.isSuccess == true) {
        dispatch({
          type: BasketActionTypes.SUCCEED_CREATE_ORDER,
        });
        toast.success("The order has been placed", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        dispatch({
          type: BasketActionTypes.BAG_REQUEST_BASKET,
          payload: "Error !!!",
        });
      }

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
export const GetOrderProduct = (idUser: number) => {
  return async (dispatch: Dispatch<BasketActions>) => {
    try {
      dispatch({ type: BasketActionTypes.START_REQUESTS_BASKET });
      const data = await getOrders(idUser);
      const { response } = data;
      if (response.data.isSuccess == true) {
        dispatch({
          type: BasketActionTypes.SUCCEED_GET_ORDERS,
          payload: response.data.payload,
        });
      } else {
        dispatch({
          type: BasketActionTypes.BAG_REQUEST_BASKET,
          payload: "Error !!!",
        });
      }

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
