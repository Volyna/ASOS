import { Dispatch } from "react";
import {
  IBeforeLoginUser,
  ILoginUser,
  IRegisterUser,
} from "../../../components/auth/types";
import { UserActionTypes, UserActions } from "../../reducers/userReducer/types";
import {
  isUserExist,
  login,
  register,
} from "../../../services/api-user-service";
import jwtDecode from "jwt-decode";
import setAuthToken from "../../../services/setAuthToken";
import { IUser } from "./types";

export const IsUserExist = (email: IBeforeLoginUser) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch({ type: UserActionTypes.START_REQUESTS_USER });
      const data = await isUserExist(email);
      const { response } = data;
      return response.data;
    } catch (e: any) {
      console.log(e);
    }
  };
};
export const SetEmail = (email: string) => {
  return async (dispatch: Dispatch<UserActions>) => {
    dispatch({ type: UserActionTypes.SET_USER_EMAIL, payload: email });
  };
};
export const LoginUser = (user: ILoginUser) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch({ type: UserActionTypes.START_REQUESTS_USER });
      const data = await login(user);
      const { response } = data;
      console.log("response", response.data.payload);
      AuthUserToken(response.data.payload, dispatch);
    } catch (e) {}
  };
};
export const AuthUserToken = (
  token: string,
  dispatch: Dispatch<UserActions>
) => {
  try {
    const user = jwtDecode(token) as IUser;
    setAuthToken(token);
    localStorage.token = token;

    dispatch({
      type: UserActionTypes.LOGIN_USER,
      payload: user,
    });
  } catch (e) {}
};
export const RegisterUser = (user: IRegisterUser) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch({ type: UserActionTypes.START_REQUESTS_USER });
      const data = await register(user);
      const { response } = data;
      console.log(response.data.payload);
      AuthUserToken(response.data.payload, dispatch);
    } catch (e) {}
  };
};
