import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { DarkModeContextProvider } from "./components/admin/context/darkModeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <DarkModeContextProvider>
          <App />
        </DarkModeContextProvider>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);


