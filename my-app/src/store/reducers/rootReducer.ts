import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import CategoryReducer from "./CategoryReducer";
import { categoryReducer } from "./CategoryReducer/categoryReducer";
import ProductsReducer from "./ProductReducer";
import BasketReducer from "./BasketReducer";
import { IsLoadingReducer } from "./isLoadingReducer";


export const rootReducer = combineReducers({
  UserReducer,
  CategoryReducer,
  allCategory:categoryReducer,
  ProductsReducer,
  BasketReducer,
  IsLoadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
