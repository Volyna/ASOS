import { UserActionTypes, UserActions, UserState } from "./types";
const initialState: UserState = {
  user: null,
  message: null,
  loading: false,
  isAuth: false,
  email: null,
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
    default: {
      return state;
    }
  }
};
export default UserReducer;
