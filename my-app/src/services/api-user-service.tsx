import {
  IBeforeLoginUser,
  IChangeContactInfo,
  ILoginUser,
  ILoginUserByGoogle,
  IRegisterUser,
} from "../components/auth/types";
import { ServiceResponse } from "../store/actions/userActions/types";
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
