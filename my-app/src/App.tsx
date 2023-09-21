import Home from "./components/admin/pages/home/Home";
import ListUsers from "./components/admin/pages/list/ListUsers";
import SingleUser from "./components/admin/pages/single/SingleUser";
import New from "./components/admin/pages/new/New";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { orderInputs } from "./components/admin/formSource";
import "./components/admin/style/dark.scss";
import { useContext, useEffect, useLayoutEffect } from "react";
import { DarkModeContext } from "./components/admin/context/darkModeContext";

import LoginePage from "./components/auth/login";
import RegisterPage from "./components/auth/register";
import DefaultLayout from "./components/containers/default";
import AdminLayout from "./components/containers/admin/AdminLayout";
import CategoryCreatePage from "./components/admin/components/categories/create/CategoryCreatePage";
import FAQs from "./components/Pages/FAQs/FAQs";

import Basket from "./components/Pages/BasketEmpty/BasketEmpty";
import Header from "./components/NavBar/header";
import MainPage from "./components/Pages/Main/MainPage";
import Register from "./components/auth/register";
import Men from "./components/Pages/ManAndWomanPage/MenPage";
import Women from "./components/Pages/ManAndWomanPage/WomanPage";

import ContactInf from "./components/Pages/Account/ContactInf/ContactInf";

import Payment from "./components/Pages/Account/Payment/Payment";
import PaymentEmpty from "./components/Pages/Account/PaymentEmpty/PaymentEmpty";

import Returns from "./components/Pages/Account/Returns/Returns";
import ReturnsEmpty from "./components/Pages/Account/ReturnsEmpty/ReturnsEmpty";

import Favourites from "./components/Pages/Account/Favourites/Favourites";
import CustomerService from "./components/Pages/CustomerService/CustomerService";
import Checkout from "./components/Pages/Checkout/Checkout";

import Error from "./components/Pages/Error/error";
import ProductsPage from "./components/Pages/ItemsPage/ProductsPage";
import ProductPage from "./components/Pages/Product/product";
import { useTypedSelector } from "./hooks/useTypedSelector";
import Loader from "./components/loader";
import PasswordRecovery from "./components/Pages/passwordRecovery";
import PasswordUpdateRecovery from "./components/Pages/passwordUpdateRecovery";
import Single from "./components/admin/pages/single/SingleUser";
import ListProducts from "./components/admin/pages/list/ListProducts";
import ListCategories from "./components/admin/pages/list/ListCategories";
import ListOrders from "./components/admin/pages/list/ListOrders";
import CategoryCreate from "./components/admin/components/categories/create/CategoryCreatePage";
import ProductCreate from "./components/admin/components/products/create/ProductCreatePage";
import UserCreatePage from "./components/admin/components/user/create/UserCreatePage";
import CategoryEdit from "./components/admin/components/categories/edit/CategoryEditPage";
import ProductEdit from "./components/admin/components/products/edit/ProductEditPage";

function App() {
  const { loading } = useTypedSelector((store) => store.UserReducer);
  const { darkMode } = useContext(DarkModeContext);
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      {loading == true ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/admin">
            <Route path="categoryCreate" element={<CategoryCreatePage />} />
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<ListUsers />} />
              <Route path=":userId" element={<SingleUser />} />
              <Route path="new" element={<UserCreatePage />} />
            </Route>
            <Route path="products">
              <Route index element={<ListProducts />} />
              <Route path=":id" element={<ProductEdit />} />
              <Route path="new" element={<ProductCreate />} />
            </Route>
            <Route path="categories">
              <Route index element={<ListCategories />} />
              <Route path=":id" element={<CategoryEdit />} />
              <Route path="new" element={<CategoryCreate />} />
            </Route>

            <Route path="orders">
              <Route index element={<ListOrders />} />
              <Route path=":orderId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={orderInputs} title="Add New Order" />}
              />
            </Route>
          </Route>

          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<LoginePage />} />
          <Route path="resetPassword" element={<PasswordUpdateRecovery />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgotPassword" element={<PasswordRecovery />} />
          <Route path="admin" element={<AdminLayout />} />

          <Route path="customer-care" element={<FAQs />} />
          <Route path="customer-service" element={<CustomerService />} />

          <Route path="basket" element={<Basket />} />

          <Route path="/account/contact-information" element={<ContactInf />} />

          <Route path="/account/shopping-history" element={<Payment />} />
          <Route
            path="/account/shopping-history-empty"
            element={<PaymentEmpty />}
          />

          <Route path="/account/returns" element={<Returns />} />
          <Route path="/account/returns-empty" element={<ReturnsEmpty />} />

          <Route path="/account/favourites" element={<Favourites />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/ViewAll" element={<ProductsPage />} />
          <Route path="/men/:id" element={<ProductPage />} />

          <Route path="*" element={<Error />} />
        </Routes>
      )}
    </>
  );
}

export default App;

// function App() {
//   const { loading } = useTypedSelector((store) => store.UserReducer);
//   const { darkMode } = useContext(DarkModeContext);
//   const { pathname } = useLocation();

//   useLayoutEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [pathname]);

//   return (
//     <>
//       {loading == true ? (
//         <Loader />
//       ) : (
//             <Routes>
//               <Route path="/" element={<MainPage />} />
//               <Route path="login" element={<LoginePage />} />
//               <Route path="resetPassword" element={<PasswordUpdateRecovery />} />
//               <Route path="register" element={<RegisterPage />} />
//               <Route path="forgotPassword" element={<PasswordRecovery />} />
//               <Route path="admin" element={<AdminLayout />} />
//           <Routes>
//             <Route path="/admin">
//               <Route index element={<Home />} />
//           {/* <Route path="login" element={<Login />} /> */}
//              <Route path="categoryCreate" element={<CategoryCreatePage />} />
//           {/* <Route path="categoryEdit" element={<CategoryEditPage />} />
//           <Route path="productCreate" element={<ProductCreatePage />} />
//           <Route path="productEdit" element={<ProductEditPage />} /> */}

//           <Route path="users">
//             <Route index element={<List />} />
//             <Route path=":userId" element={<SingleUser />} />
//             <Route
//               path="new"
//               element={<New inputs={userInputs} title="Add New User" />}
//             />
//           </Route>
//           <Route path="products">
//             <Route index element={<List />} />
//             {/* <Route path=":productId" element={<Single />} /> */}
//             <Route
//               path="new"
//               element={<New inputs={productInputs} title="Add New Product" />}
//             />
//           </Route>
//         </Route>

//         <Route path="/" element={<MainPage />} />
//         <Route path="login" element={<LoginePage />} />
//         <Route path="register" element={<RegisterPage />} />
//         {/* <Route path="admin" element={<AdminLayout />} /> */}

//           <Route path="customer-care" element={<FAQs />} />
//           <Route path="customer-service" element={<CustomerService />} />

//           <Route path="basket-empty" element={<BasketEmpty />} />
//           <Route path="basket" element={<Basket />} />

//           <Route path="/account/contact-information" element={<ContactInf />} />

//           <Route path="/account/shopping-history" element={<Payment />} />
//           <Route
//             path="/account/shopping-history-empty"
//             element={<PaymentEmpty />}
//           />

//           <Route path="/account/returns" element={<Returns />} />
//           <Route path="/account/returns-empty" element={<ReturnsEmpty />} />

//           <Route path="/account/favourites" element={<Favourites />} />
//           <Route path="/checkout" element={<Checkout />} />

//           <Route path="/men" element={<Men />} />
//           <Route path="/women" element={<Women />} />
//           <Route path="/ViewAll" element={<ProductsPage />} />
//           <Route path="/Prod" element={<ProductPage />} />

//           <Route path="*" element={<Error />} />
//         </Routes>

//     </>

//  )
// }

// export default App;
