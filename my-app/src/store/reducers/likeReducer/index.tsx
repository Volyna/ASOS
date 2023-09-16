import { LikeActionTypes, LikeActions, LikeState } from "./type";

const initialState: LikeState = {
    loader: false,
    likesProducts: []
};
const LikeReducer = (state = initialState, action: LikeActions): LikeState => {
    switch (action.type) {
        case LikeActionTypes.START_REQUESTS_LIKE: {
            return {
                ...state,
                loader: true,
            };
        }
        case LikeActionTypes.SUCCESSFUL_GET_PRODUCTS_LIKES: {
            return {
                ...state,
                loader: false,
                likesProducts: action.payload
            };
        }
        case LikeActionTypes.BAG_REQUEST_LIKE: {
            return {
                ...state,
                loader: false,
            };
        }
        case LikeActionTypes.SUCCESSFUL_REQUEST_DELETE_LIKE: {
            return {
                ...state,
                loader: false,
                likesProducts: state.likesProducts.filter(p => p.id !== action.payload)
            };
        }
        case LikeActionTypes.SUCCESSFUL_REQUEST_ADD_LIKE: {
            return {
                ...state,
                loader: false,
            };
        }
        default: {
            return state;
        }
    }
};
export default LikeReducer;