export interface LikeState {
    likesProductsId: Array<number>;
    loader: boolean;
}
export enum LikeActionTypes {
    START_REQUESTS_LIKE = "START_REQUESTS_LIKE",
    SUCCESSFUL_REQUEST_ADD_LIKE = "SUCCESSFUL_REQUEST_ADD_LIKE",
    SUCCESSFUL_REQUEST_DELETE_LIKE = "SUCCESSFUL_REQUEST_DELETE_LIKE",
    BAG_REQUEST_LIKE = "BAG_REQUEST_LIKE",
}

interface StartAction {
    type: LikeActionTypes.START_REQUESTS_LIKE;
}
interface SuccessfulRequestAddLikeAction {
    type: LikeActionTypes.SUCCESSFUL_REQUEST_ADD_LIKE;
    payload: number;
}
interface SuccessfulRequestDeleteLikeAction {
    type: LikeActionTypes.SUCCESSFUL_REQUEST_DELETE_LIKE;
    payload: number;
}
interface BadrequestAction {
    type: LikeActionTypes.BAG_REQUEST_LIKE;
}

export type LikeActions =
    StartAction | SuccessfulRequestAddLikeAction | BadrequestAction | SuccessfulRequestDeleteLikeAction;
