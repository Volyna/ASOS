import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import { IsLoadingReducer } from "./isLoadingReducer";
import CategoryReducer from "./CategoryReducer";
import ProductsReducer from "./productReducer";
import { categoryReducer } from "./CategoryReducer/categoryReducer";

export const rootReducer = combineReducers({
  UserReducer,
  CategoryReducer,
  allCategory:categoryReducer,
  ProductsReducer,
  IsLoadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
