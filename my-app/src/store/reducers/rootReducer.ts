import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import { IsLoadingReducer } from "./isLoadingReducer";
import CategoryReducer from "./categoryReducer";
import ProductsReducer from "./productReducer";

export const rootReducer = combineReducers({
  UserReducer,
  CategoryReducer,
  ProductsReducer,
  IsLoadingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
