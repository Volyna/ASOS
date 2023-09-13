import { Dispatch } from "react";
import { LikeActionTypes, LikeActions } from "../../reducers/likeReducer/type";
import { toast } from "react-toastify";

export const AddProductLike = (id: number) => {
    return async (dispatch: Dispatch<LikeActions>) => {

        dispatch({ type: LikeActionTypes.SUCCESSFUL_REQUEST_ADD_LIKE, payload: id });

        toast.success("The product has been added to your favorite products", {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};
export const DeleteProductLike = (id: number) => {
    return async (dispatch: Dispatch<LikeActions>) => {

        dispatch({ type: LikeActionTypes.SUCCESSFUL_REQUEST_DELETE_LIKE, payload: id });

        toast.info("The product has been removed to your favorite products", {
            position: toast.POSITION.TOP_RIGHT,
        });
    }
};
