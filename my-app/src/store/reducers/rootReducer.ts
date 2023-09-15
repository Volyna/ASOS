import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import CategoryReducer from "./CategoryReducer";
import { categoryReducer } from "./CategoryReducer/categoryReducer";
import CategoryReducer from "./CategoryReducer";
import ProductsReducer from "./ProductReducer";
import BasketReducer from "./BasketReducer";

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
