import { Dispatch } from "react";
import {
  IBeforeLoginUser,
  ILoginUser,
  ILoginUserByGoogle,
  IRegisterUser,
} from "../../../components/auth/types";
import { UserActionTypes, UserActions } from "../../reducers/userReducer/types";
import {
  isUserExist,
  login,
  loginByGoogle,
  register,
} from "../../../services/api-user-service";
import jwtDecode from "jwt-decode";
import setAuthToken from "../../../services/setAuthToken";
import { IUser } from "./types";
import { toast } from "react-toastify";
export const IsUserExist = (email: IBeforeLoginUser) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch({ type: UserActionTypes.START_REQUESTS_USER });
      const data = await isUserExist(email);
      const { response } = data;
      return response.data;
    } catch (e: any) {
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
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
      console.log("response LoginUser:", response.data.payload);
      if (response.data.payload === "Password incorrect !") {
        toast.error(
          "You have entered an incorrect password.\n Check your password and try again.",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      }
      AuthUserToken(response.data.payload, dispatch);
    } catch (e) {
      console.log("sad");
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
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
      console.log("Response", response);
      console.log("RegisterUser:", response.data.payload);
      if (response.data.payload === "User was register") {
        toast.error("User was register!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      AuthUserToken(response.data.payload, dispatch);
    } catch (e) {
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const LoginUserByGoogle = (model: ILoginUserByGoogle) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch({ type: UserActionTypes.START_REQUESTS_USER });
      const data = await loginByGoogle(model);
      const { response } = data;
      // console.log("response LoginUserByGoogle", response.data.payload);

      AuthUserToken(response.data.payload, dispatch);
    } catch (e) {
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
