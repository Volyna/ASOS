import { Dispatch } from "react";
import { LikeActionTypes, LikeActions } from "../../reducers/LikeReducer/type";
import { toast } from "react-toastify";
import { addLikeProduct, getLikesProducts, removeLikeProduct } from "../../../services/api_likes-products-service";
import { IAddLikeProductOrRemove, IGetLikesProducts } from "../../../components/Pages/ManAndWomanPage/types";

export const AddProductLike = (model: IAddLikeProductOrRemove) => {
    return async (dispatch: Dispatch<LikeActions>) => {
        try {
            dispatch({ type: LikeActionTypes.START_REQUESTS_LIKE });
            var data = await addLikeProduct(model);
            const { response } = data;
            if (response.data.isSuccess == true) {
                dispatch({ type: LikeActionTypes.SUCCESSFUL_REQUEST_ADD_LIKE });
                toast.success("The product has been added to your favorite products", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
            else {
                dispatch({ type: LikeActionTypes.BAG_REQUEST_LIKE });
                toast.error("Something get wrong...", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        } catch (e) {
            dispatch({ type: LikeActionTypes.BAG_REQUEST_LIKE });
            toast.error("Something get wrong...", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }
};

export const DeleteProductLike = (model: IAddLikeProductOrRemove) => {
    return async (dispatch: Dispatch<LikeActions>) => {
        try {
            dispatch({ type: LikeActionTypes.START_REQUESTS_LIKE });
            var data = await removeLikeProduct(model);
            const { response } = data;
            if (response.data.isSuccess == true) {
                console.log(model);
                dispatch({ type: LikeActionTypes.SUCCESSFUL_REQUEST_DELETE_LIKE, payload: model.idProduct });
                toast.success("The product has been remover from your favorite products", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
            else {
                dispatch({ type: LikeActionTypes.BAG_REQUEST_LIKE });
                toast.error("Something get wrong...", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        } catch (e) {
            dispatch({ type: LikeActionTypes.BAG_REQUEST_LIKE });
            toast.error("Something get wrong...", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }
};
export const GetProductLikes = (model: IGetLikesProducts) => {
    return async (dispatch: Dispatch<LikeActions>) => {
        try {
            dispatch({ type: LikeActionTypes.START_REQUESTS_LIKE });
            var data = await getLikesProducts(model);
            const { response } = data;
            if (response.data.isSuccess == true) {
                dispatch({ type: LikeActionTypes.SUCCESSFUL_GET_PRODUCTS_LIKES, payload: response.data.payload });
            }
            else {
                dispatch({ type: LikeActionTypes.BAG_REQUEST_LIKE });
                toast.error("Something get wrong...", {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        } catch (e) {
            dispatch({ type: LikeActionTypes.BAG_REQUEST_LIKE });
            toast.error("Something get wrong...", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }

    }
};
