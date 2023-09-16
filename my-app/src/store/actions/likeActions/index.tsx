import { Dispatch } from "react";
import { LikeActionTypes, LikeActions } from "../../reducers/likeReducer/type";
import { toast } from "react-toastify";
import { IAddLikeProductOrRemove } from "../../../components/Pages/Man and Woman Page/types";
import { addLikeProduct } from "../../../services/api_likes-products-service";

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

    }
};
export const GetProductLikes = (idUser: number) => {
    return async (dispatch: Dispatch<LikeActions>) => {
        try {
            dispatch({ type: LikeActionTypes.START_REQUESTS_LIKE });

        } catch (e) {
            dispatch({ type: LikeActionTypes.BAG_REQUEST_LIKE });
            toast.error("Something get wrong...", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }



    }
};
