import { IUser } from "../../actions/userActions/types";

export interface UserState {
    email:string;
    user: IUser | null;
    message: null | string;
    loading: boolean;
    isAuth: boolean;
  }

  export enum UserActionTypes {
    START_REQUESTS_USER = "START_REQUESTS_USER",
    SET_USER_EMAIL = "SET_USER_EMAIL",
    LOGIN_USER = "LOGIN_USER",
    REGISTER_USER = "REGISTER_USER",
  }
  interface StartRequestUserAction {
    type: UserActionTypes.START_REQUESTS_USER;
  }
  interface StartSetUserEmailAction {
    type: UserActionTypes.SET_USER_EMAIL;
    payload:string;
  }
  interface  SuccessfulRequestRegisterUserAction {
    type: UserActionTypes.REGISTER_USER;
    payload:IUser;
  }
  interface SuccessfulRequestLoginUserAction {
    type: UserActionTypes.LOGIN_USER;
    payload: IUser;
  }
  export type UserActions =
  | StartRequestUserAction
  | StartSetUserEmailAction
  | SuccessfulRequestLoginUserAction
  |SuccessfulRequestRegisterUserAction;
 