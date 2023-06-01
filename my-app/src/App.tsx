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
import DefaultLayout from "./components/containers/default";
import AdminLayout from "./components/containers/admin/AdminLayout";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<LoginePage />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Home />} />
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              </Route>

              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
              </Route>
            </Route>
          </Routes>

        </BrowserRouter>
      </div>
    </>
  );
}

export default App;