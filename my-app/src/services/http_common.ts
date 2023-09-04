import axios from "axios";
import { APP_ENV } from "../env";
import { store } from "../store";
import { IsLoadingActionsTypes } from "../store/reducers/isLoadingReducer";

const http = axios.create({
  baseURL: APP_ENV.REMOTE_HOST_NAME,
    headers: {
        "Content-Type": "application/json"
    }

    
});

// http.interceptors.request.use(
//   (config: any) => {
//     store.dispatch({ type: IsLoadingActionsTypes.SET_LOADING, payload: true });
//     return config;
//   },
//   (err) => {
//     store.dispatch({ type: IsLoadingActionsTypes.SET_LOADING, payload: false });
//   }
// );

// http.interceptors.response.use(
//   (res: any) => {
//     store.dispatch({ type: IsLoadingActionsTypes.SET_LOADING, payload: false });
//     return res;
//   },
//   (err) => {
//     store.dispatch({ type: IsLoadingActionsTypes.SET_LOADING, payload: false });
//   }
// );

export default http;