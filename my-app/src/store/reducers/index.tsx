import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import { categoryReducer } from "./CategoryReducer/categoryReducer";

export const rootReducer = combineReducers({
  UserReducer,
  allCategory:categoryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
