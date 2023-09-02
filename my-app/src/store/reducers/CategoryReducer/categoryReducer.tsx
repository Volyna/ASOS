import { ActionTypes } from "../../actions/Categories/actionTypes"
import axios from "axios"

const initialState ={
    categories:[]
}

export const categoryReducer = (state = initialState, {type,payload}:any) => {
    switch (type){
        case ActionTypes.SHOW_CATEGORIES:
            return {...state, categories:payload};
        default:
            return state;
    }

}