import Home from "./components/admin/pages/home/Home";
import Login from "./components/admin/pages/login/Login";
import List from "./components/admin/pages/list/List";
import Single from "./components/admin/pages/single/Single";
import New from "./components/admin/pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./components/admin/formSource";
import "./components/admin/style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./components/admin/context/darkModeContext";

import LoginePage from "./components/auth/login";
import AuthorizationPage from "./components/auth/login/AuthorizationPage";
import RegisterPage from "./components/auth/register";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<LoginePage />} />
          {/* <Route index element={<AuthorizationPage />} /> */}
          {/* <Route index element={<RegisterPage />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
