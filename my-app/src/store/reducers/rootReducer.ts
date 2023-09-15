import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import CategoryReducer from "./CategoryReducer";
import { categoryReducer } from "./CategoryReducer/categoryReducer";
import BasketReducer from "./BasketReducer";
import { IsLoadingReducer } from "./isLoadingReducer";
import ProductsReducer from "./productReducer";


export const rootReducer = combineReducers({
  UserReducer,
  CategoryReducer,
  allCategory: categoryReducer,
  ProductsReducer,
  BasketReducer,
  IsLoadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
