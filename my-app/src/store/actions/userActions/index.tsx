import { Dispatch } from "react";
import {
  IBeforeLoginUser,
  IChangeContactInfo,
  ILoginUser,
  ILoginUserByGoogle,
  IRegisterUser,
} from "../../../components/auth/types";
import { IRecoveryPasswordUpdate } from "../../../components/Pages/types";
import { UserActionTypes, UserActions } from "../../reducers/userReducer/types";
import {
  isUserExist,
  login,
  loginByGoogle,
  recoveryPassword,
  recoveryPasswordUpdate,
  register,
  updateUserProfile,
} from "../../../services/api-user-service";
import jwtDecode from "jwt-decode";
import setAuthToken, { removeTokens } from "../../../services/setAuthToken";
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
      dispatch({ type: UserActionTypes.BAG_REQUEST, payload: "" });
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
        dispatch({
          type: UserActionTypes.BAG_REQUEST,
          payload:
            "You have entered an incorrect password.\n Check your password and try again.",
        });
        toast.error(
          "You have entered an incorrect password.\n Check your password and try again.",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      }
      AuthUserToken(response.data.payload, dispatch);
    } catch (e) {
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
    window.localStorage.setItem("Token", token);
    // window.localStorage.token = token;
    console.log("Login user");
    dispatch({
      type: UserActionTypes.LOGIN_USER,
      payload: user,
    });
  } catch (e) {
    dispatch({
      type: UserActionTypes.BAG_REQUEST,
      payload: "",
    });
  }
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
        dispatch({
          type: UserActionTypes.BAG_REQUEST,
          payload: "User was register!",
        });
        toast.error("User was register!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      AuthUserToken(response.data.payload, dispatch);
    } catch (e) {
      dispatch({
        type: UserActionTypes.BAG_REQUEST,
        payload: "Error Notification !",
      });
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
      console.log("LoginUserByGoogle Data:", response.data);
      console.log("IsSuccess:", response.data.IsSuccess);
      if (response.data.isSuccess === true) {
        AuthUserToken(response.data.payload, dispatch);
      } else {
        dispatch({
          type: UserActionTypes.BAG_REQUEST,
          payload: "Error Notification !",
        });
      }
    } catch (e) {
      dispatch({
        type: UserActionTypes.BAG_REQUEST,
        payload: "Error Notification !",
      });
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const UpdateUserProfile = (model: IChangeContactInfo) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch({ type: UserActionTypes.START_REQUESTS_USER });
      console.log("Start Update Profile");
      const data = await updateUserProfile(model);
      const { response } = data;
      console.log("response UpdateUserProfile", response.data);

      if (response.data.isSuccess == true) {
        const user = jwtDecode(response.data.payload) as IUser;
        console.log("user: ", user);
        window.localStorage.setItem("Token", response.data.payload);
        dispatch({
          type: UserActionTypes.LOGIN_USER,
          payload: user,
        });

        // dispatch({ type: UserActionTypes.SUCCESSFUL_REQUEST });
        toast.success("Profile update successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        dispatch({
          type: UserActionTypes.BAG_REQUEST,
          payload: "Error Notification !",
        });
        toast.error("Error Notification !", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (e) {
      dispatch({
        type: UserActionTypes.BAG_REQUEST,
        payload: "Error Notification !",
      });
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const LogOut = () => {
  return async (dispatch: Dispatch<UserActions>) => {
    removeTokens();
    dispatch({
      type: UserActionTypes.LOGOUT_USER,
    });
  };
};
export const RecoveryPassword = (email: string) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch({ type: UserActionTypes.START_REQUESTS_USER });
      const data = await recoveryPassword(email);
      const { response } = data;
      if (response.data.isSuccess == true) {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        dispatch({ type: UserActionTypes.SUCCESSFUL_REQUEST });
      } else {
        toast.error(response.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        dispatch({
          type: UserActionTypes.BAG_REQUEST,
          payload: response.data.message,
        });
      }
    } catch (e) {
      dispatch({
        type: UserActionTypes.BAG_REQUEST,
        payload: "Error Notification !",
      });
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
export const RecoveryPasswordUpdate = (model: IRecoveryPasswordUpdate) => {
  return async (dispatch: Dispatch<UserActions>) => {
    try {
      dispatch({ type: UserActionTypes.START_REQUESTS_USER });
      const data = await recoveryPasswordUpdate(model);
      const { response } = data;
      console.log("RecoveryPasswordUpdate response: ", data);
      if (response.data.isSuccess == true) {
        toast.success("Successful Update password!!!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        // dispatch({ type: UserActionTypes.SUCCESSFUL_REQUEST });
        AuthUserToken(response.data.accessToken, dispatch);
      } else {
        toast.error("Error !!!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        dispatch({
          type: UserActionTypes.BAG_REQUEST,
          payload: response.data.message,
        });
      }
    } catch (e) {
      dispatch({
        type: UserActionTypes.BAG_REQUEST,
        payload: "Error Notification !",
      });
      toast.error("Error Notification !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
};
