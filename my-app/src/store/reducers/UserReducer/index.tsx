import { IUser } from "../../actions/UserActions/types";
import { UserActionTypes, UserActions, UserState } from "./types";

const userTemp: IUser = {
  id: 0,
  name: "",
  surname: "",
  email: "",
  phone: "",
  image: "",
  roles: "",
  discountsAndSales: "false",
  country: "",
  state: "",
  street: "",
  zipCode: "",
  city: "",
  isHavePassword: "",
};
const initialState: UserState = {
  message: null,
  loading: false,
  isAuth: false,
  email: "",
  user: userTemp,
  users: [],
};

const UserReducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionTypes.START_REQUESTS_USER: {
      return {
        ...state,
        loading: true,
        message: null,
        users: [],
      };
    }
    case UserActionTypes.SET_USER_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case UserActionTypes.LOGIN_USER: {
      return {
        ...state,
        user: action.payload,
        isAuth: true,
        loading: false,
        email: "",
        message: "",
      };
    }
    case UserActionTypes.LOGOUT_USER: {
      return {
        ...state,
        user: userTemp,
        isAuth: false,
        loading: false,
        email: "",
        message: "",
      };
    }
    case UserActionTypes.REGISTER_USER: {
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    }
    case UserActionTypes.SUCCESSFUL_REQUEST: {
      return {
        ...state,
        loading: false,
      };
    }

    case UserActionTypes.LIST_USERS: {
      return { ...state, loading: false, users: action.payload };
    }
    case UserActionTypes.BAG_REQUEST: {
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
export default UserReducer;
