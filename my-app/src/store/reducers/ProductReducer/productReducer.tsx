import { ActionTypes } from "../../actions/Categories/actionTypes";

const initialState = {
    products:[]
}

export const productReducer = (state = initialState, {type,payload}:any) => {
    switch (type){
        case ActionTypes.SHOW_PRODUCTS:
            return {...state, products:payload};
        default:
            return state;
    }

}