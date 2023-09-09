import { ActionTypes } from "./actionTypes";

export const showCategory = (categories: any) => {
  return {
    type: ActionTypes.SHOW_CATEGORIES,
    payload: categories,
  };
};
