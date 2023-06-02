import { UserActionTypes, UserActions, UserState } from "./types";
const initialState: UserState = {
  user: null,
  message: null,
  loading: false,
  isAuth: false,
  email: "",
};

const UserReducer = (state = initialState, action: UserActions): UserState => {
  switch (action.type) {
    case UserActionTypes.START_REQUESTS_USER: {
      return {
        ...state,
        loading: true,
        message: null,
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
      };
    }
    case UserActionTypes.REGISTER_USER: {
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    }
    default: {
      return state;
    }
  }
};
export default UserReducer;
