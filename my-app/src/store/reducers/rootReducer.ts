import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import CategoryReducer from "./CategoryReducer";
import { categoryReducer } from "./CategoryReducer/categoryReducer";
import BasketReducer from "./BasketReducer";
import { IsLoadingReducer } from "./isLoadingReducer";
import LikeReducer from "./LikeReducer";
import ProductsReducer from "./ProductReducer";
export const rootReducer = combineReducers({
  UserReducer,
  CategoryReducer,
  allCategory: categoryReducer,
  ProductsReducer,
  BasketReducer,
  IsLoadingReducer,
  LikeReducer,

});

export type RootState = ReturnType<typeof rootReducer>;
