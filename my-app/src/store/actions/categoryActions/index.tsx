import { toast } from "react-toastify";
import { Dispatch } from "redux";
import {
  ICategoryCreate,
  ICategoryUpdate,
} from "../../../components/admin/components/categories/types";
import {
  createCategory,
  getCategories,
  getCategoriesById,
  removeCategory,
  updateCategory,
} from "../../../services/api-categories-service";
import {
  CategoryesActions,
  CategoryActionTypes,
} from "../../reducers/CategoryReducer/types";

export const GetCategories = () => {
  return async (dispatch: Dispatch<CategoryesActions>) => {
    try {
      dispatch({ type: CategoryActionTypes.START_REQUEST_CATEGORY });
      const data = await getCategories();
      const { response } = data;

      dispatch({
        type: CategoryActionTypes.SUCCESSFUL_REQUEST_LIST_CATEGORYES,
        payload: response.data,
      });
    } catch (e) {
      toast.error("Something get wrong...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({
        type: CategoryActionTypes.SERVER_CATEGORY_ERROR,
        payload: "Unknown error",
      });
    }
  };
};
export const GetCategoriesById = (id: number) => {
  return async (dispatch: Dispatch<CategoryesActions>) => {
    try {
      dispatch({ type: CategoryActionTypes.START_REQUEST_CATEGORY });
      const data = await getCategoriesById(id);
      const { response } = data;
      console.log("response: ", response);

      dispatch({
        type: CategoryActionTypes.SUCCESSFUL_REQUEST_CATEGORY_BY_ID,
        payload: response.data,
      });
    } catch (e) {
      toast.error("Something get wrong...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({
        type: CategoryActionTypes.SERVER_CATEGORY_ERROR,
        payload: "Unknown error",
      });
    }
  };
};

export const SetCategoriForUpdate = (id: number) => {
  return async (dispatch: Dispatch<CategoryesActions>) => {
    try {
      dispatch({
        type: CategoryActionTypes.SET_ID_CATEGORY_FOR_UPDATE_CATEGORY,
        payload: id,
      });
    } catch (e) {
      toast.error("Something get wrong...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({
        type: CategoryActionTypes.SERVER_CATEGORY_ERROR,
        payload: "Unknown error",
      });
    }
  };
};

export const CreateCategory = (model: ICategoryCreate) => {
  return async (dispatch: Dispatch<CategoryesActions>) => {
    try {
      dispatch({ type: CategoryActionTypes.START_REQUEST_CATEGORY });

      const data = await createCategory(model);
      const { response } = data;

      dispatch({
        type: CategoryActionTypes.SUCCESSFUL_REQUEST_CREATE_CATEGORY,
        payload: response.data,
      });
    } catch (e) {
      toast.error("Something get wrong...", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({
        type: CategoryActionTypes.SERVER_CATEGORY_ERROR,
        payload: "Unknown error",
      });
      return Promise.reject();
    }
  };
};

export const UpdateCategory = (model: ICategoryUpdate) => {
  return async (dispatch: Dispatch<CategoryesActions>) => {
    try {
      dispatch({ type: CategoryActionTypes.START_REQUEST_CATEGORY });

      const data = await updateCategory(model);

      const { response } = data;

      console.log("UpdateCategory: ", response.data);

      dispatch({
        type: CategoryActionTypes.SUCCESSFUL_REQUEST_UPDATE_CATEGORY,
        payload: response.data,
      });
    } catch (e) {
      toast.error("Some problems!!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({
        type: CategoryActionTypes.SERVER_CATEGORY_ERROR,
        payload: "Unknown error",
      });
      return Promise.reject();
    }
  };
};
export const RemoveCategory = (id: number) => {
  return async (dispatch: Dispatch<CategoryesActions>) => {
    try {
      const data = await removeCategory(id);

      const { response } = data;

      console.log(response.data);

      dispatch({
        type: CategoryActionTypes.SUCCESSFUL_REMOVE_CATEGORY,
        payload: id,
      });
    } catch (e) {
      toast.error("Some problems!!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      dispatch({
        type: CategoryActionTypes.SERVER_CATEGORY_ERROR,
        payload: "Unknown error",
      });
      return Promise.reject();
    }
  };
};
