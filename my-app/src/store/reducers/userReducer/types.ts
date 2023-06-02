import { IUser } from "../../actions/userActions/types";

export interface UserState {
    email:string | null;
    user: IUser | null;
    message: null | string;
    loading: boolean;
    isAuth: boolean;
  }

  export enum UserActionTypes {
    START_REQUESTS_USER = "START_REQUESTS_USER",
  }
  interface StartRequestUserAction {
    type: UserActionTypes.START_REQUESTS_USER;
  }
  export type UserActions =
  | StartRequestUserAction;
 