import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import { categoryReducer } from "./CategoryReducer/categoryReducer";
import { productReducer } from "./ProductReducer/productReducer";


export const rootReducer = combineReducers({
  UserReducer,
  allCategory:categoryReducer,
  allProducts:productReducer
});

export type RootState = ReturnType<typeof rootReducer>;
