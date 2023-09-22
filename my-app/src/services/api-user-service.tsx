import {
  IBeforeLoginUser,
  IChangeContactInfo,
  IGetAllUsers,
  ILoginUser,
  ILoginUserByGoogle,
  IRegisterUser,
} from "../components/auth/types";
import { IRecoveryPasswordUpdate } from "../components/Pages/types";
import { ServiceResponse } from "../store/actions/UserActions/types";
import http from "./http_common";

export async function isUserExist(email: IBeforeLoginUser) {
  const data = await http
    .post<Boolean>(`api/User/isUserExist`, email)
    .then((response) => {
      console.log(response);
      return {
        response,
      };
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}
export async function login(user: ILoginUser) {
  const data = await http
    .post(`api/User/login`, user)
    .then((response) => {
      return {
        response,
      };
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}
export async function loginByGoogle(user: ILoginUserByGoogle) {
  const data = await http
    .post<ServiceResponse>(`api/User/GoogleExternalLogin`, user)
    .then((response) => {
      return {
        response,
      };
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}
export async function register(user: IRegisterUser) {
  const data = await http
    .post(`api/User/register`, user)
    .then((response) => {
      return {
        response,
      };
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}
export async function updateUserProfile(user: IChangeContactInfo) {
  const data = await http
    .post(`api/User/updateUser`, user)
    .then((response) => {
      return {
        response,
      };
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}
export async function recoveryPassword(email: string) {
  const data = await http
    .get(`api/User/resetPassword` + "?email=" + email)
    .then((response) => {
      return {
        response,
      };
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}
export async function recoveryPasswordUpdate(model: IRecoveryPasswordUpdate) {
  const data = await http
    .post(`api/User/changePassword`, model)
    .then((response) => {
      return {
        response,
      };
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}

export async function getAllUsers() {
  const data = await http
    .post(`api/User/GetAllUsers`)
    .then((response) => {
      return {
        response,
      };
    })
    .catch((error) => {
      return error.response;
    });
  return data;
}
