export interface LikeState {
    likesProducts: Array<IItemProduct>;
    loader: boolean;
}
interface IItemProduct {
    id: number;
    name: string,
    price: number,
    discount: number,
    description: string,
    color: Array<string>,
    size: Array<string>,
    brand: string,
    quantity: number,
    isInTheStock: boolean,
    mainImage: string,
    category_id: number
}
export enum LikeActionTypes {
    START_REQUESTS_LIKE = "START_REQUESTS_LIKE",
    SUCCESSFUL_REQUEST_ADD_LIKE = "SUCCESSFUL_REQUEST_ADD_LIKE",
    SUCCESSFUL_REQUEST_DELETE_LIKE = "SUCCESSFUL_REQUEST_DELETE_LIKE",
    SUCCESSFUL_GET_PRODUCTS_LIKES = "SUCCESSFUL_GET_PRODUCTS_LIKES",
    BAG_REQUEST_LIKE = "BAG_REQUEST_LIKE",
}


interface StartAction {
    type: LikeActionTypes.START_REQUESTS_LIKE;
}
interface SuccessfulRequestGetProductLikesAction {
    type: LikeActionTypes.SUCCESSFUL_GET_PRODUCTS_LIKES;
    payload: Array<IItemProduct>;
}
interface SuccessfulRequestAddLikeAction {
    type: LikeActionTypes.SUCCESSFUL_REQUEST_ADD_LIKE;
}
interface SuccessfulRequestDeleteLikeAction {
    type: LikeActionTypes.SUCCESSFUL_REQUEST_DELETE_LIKE;
}
interface BadrequestAction {
    type: LikeActionTypes.BAG_REQUEST_LIKE;
}

export type LikeActions =
    StartAction | SuccessfulRequestAddLikeAction | BadrequestAction | SuccessfulRequestDeleteLikeAction | SuccessfulRequestGetProductLikesAction;
