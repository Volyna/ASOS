import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { DarkModeContextProvider } from "./components/admin/context/darkModeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import { getToken } from "./services/setAuthToken";
import { AuthUserToken } from "./store/actions/userActions";
import Loader from "./components/loader";
const token = getToken();
if (token) {
  AuthUserToken(token, store.dispatch);
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="579487123707-nsn0hncgmdfrptb3ensmn85v08g8aubf.apps.googleusercontent.com">
        <React.StrictMode>
          <ToastContainer />
          <DarkModeContextProvider>
            <App />
          </DarkModeContextProvider>
        </React.StrictMode>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </Provider>
);
