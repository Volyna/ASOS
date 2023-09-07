import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import { IsLoadingReducer } from "./isLoadingReducer";

import { categoryReducer } from "./CategoryReducer/categoryReducer";
import CategoryReducer from "./CategoryReducer";
import ProductsReducer from "./ProductReducer";

export const rootReducer = combineReducers({
  UserReducer,
  CategoryReducer,
  allCategory:categoryReducer,
  ProductsReducer,
  IsLoadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
