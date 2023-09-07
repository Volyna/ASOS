import { ActionTypes } from "../Categories/actionTypes"

export const showProducts = (products:any) =>{
    return{
        type:ActionTypes.SHOW_PRODUCTS,
        payload:products,
    }
}