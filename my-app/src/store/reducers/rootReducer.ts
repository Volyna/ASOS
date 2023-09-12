import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import { IsLoadingReducer } from "./isLoadingReducer";

import { categoryReducer } from "./CategoryReducer/categoryReducer";
import CategoryReducer from "./CategoryReducer";
import BasketReducer from "./BasketReducer";
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
