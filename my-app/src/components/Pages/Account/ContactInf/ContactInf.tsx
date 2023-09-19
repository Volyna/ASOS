import "./ContactInf.css";
import Header_full from "../../../Header_full/Header_full";
import Footer from "../../../Footer/FooterV";
import { Link, Navigate } from "react-router-dom";
import BreadCrumbs from "../../../BreadCrumbs/breadCrumbs";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { IChangeContactInfo } from "../../../auth/types";
import { useFormik } from "formik";
import { ChangeContactInfoSchema } from "../../validation";
import { useEffect, useMemo, useState } from "react";
import countryList from "react-select-country-list";
import axios from "axios";
import { Country } from "../../types";
import { getToken } from "../../../../services/setAuthToken";
import { useActions } from "../../../../hooks/useActions";
import Logo from "../../../../images/Logo.svg";
import userLogo from "../../../../images/userAcept.png";
import cart from "../../../../images/cart.png";
import like from "../../../../images/like.svg";
import search from "../../../../images/search.svg";
import Menu from "../../../NavBar/menu";
const ContactInf = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [myState, setMyState] = useState<JSX.Element | null>(null);
  const { UpdateUserProfile, LogOut } = useActions();
  const { email, user, isAuth } = useTypedSelector(
    (store) => store.UserReducer
  );

  const options = useMemo(() => countryList().getData(), []);
  const initValues: IChangeContactInfo = {
    email: user.email,
    phone: user.phone,
    firstName: user.name,
    lastName: user.surname,
    discountsAndSales: "true",
    passwordOld: "",
    passwordNew: "",
    country: user.country,
    state: user.state,
    street: user.street,
    zipCode: user.zipCode,
    city: user.city,
    homePhone: user.phone,
    isHavePassword: user.isHavePassword,
    newPasswordAnotherLogin: "",
  };
  const [countries, setCountries] = useState<Country[]>([]);
  const fetchData = async () => {
    try {
      const response = await axios.get<Country[]>(
        "https://restcountries.com/v3/all"
      );
      setCountries(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    setMyState(<span>Hi</span>);
  }, []);
  const onSubmitFormik = async (values: IChangeContactInfo) => {
    var token = getToken();
    values.discountsAndSales =
      values.discountsAndSales == "true" ? "true" : "false";
    console.log("onSubmitFormik: ", values);
    UpdateUserProfile(values);
  };

  const formik = useFormik({
    initialValues: initValues,
    onSubmit: onSubmitFormik,
    validationSchema: ChangeContactInfoSchema,
  });
  if (user == null || isAuth == false) {
    return <Navigate to={"/login"}></Navigate>;
  }
  const mapCountry = countries.map((region, index) => (
    <option defaultChecked={false} key={index} value={region.name.common}>
      {<span>{region.name.common}</span>}
    </option>
  ));
  const mapState = countries.map((region, index) => (
    <option defaultChecked={false} key={index} value={region.region}>
      {<span>{region.region}</span>}
    </option>
  ));

  const authorOptions = countries
    .filter((state, index, array) => {
      const stateIndex = array.findIndex((b) => state.region === b.region);
      return index === stateIndex;
    })
    .map((region, index) => (
      <option defaultChecked={false} key={index} value={region.region}>
        {<span>{region.region}</span>}
      </option>
    ));

  const { values, errors, touched, handleSubmit, handleChange, setFieldValue } =
    formik;
  return (
    <>
      <div className="staticnav">
        <div className="mainblock">
          <div className="first col-3">
            <div className="links">
              <Link className="headerText" to="/customer-service">
                Customer Service
              </Link>
              <Link className="headerText" to="/">
                Shopping Form
              </Link>
            </div>
            <div className="searchItem ">
              <img src={search} />
              <input className="search" />
            </div>
            <div className="line" />
          </div>
          <div className="second col-6">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="third col-3">
            <div className="links">
              <Link className="headerText" to="/">
                Newsletter
              </Link>
              <Link className="headerText" to="/customer-care">
                FAQs
              </Link>
              <Link className="headerText" to="/">
                More
              </Link>
            </div>

            <div className="userIcons">
              <Link to="/account/contact-information">
                <img src={userLogo} alt="userLogo" className="noneM userLogo" />
              </Link>

              <Link to="/basket">
                <img src={cart} alt="basket" className="noneM basketLogo" />
              </Link>
              <Link to="/account/favourites">
                <img src={like} className="favourites" alt="favourites" />
              </Link>
            </div>
          </div>
        </div>
        <Menu />
      </div>
      <BreadCrumbs />
      <div className="container-fluid">
        <div className="container">
          <div className="menu_item">
            <Link className="main_item" to="/account/contact-information">
              Contact information
            </Link>
            <Link className="account_item" to="/account/shopping-history-empty">
              shopping history
            </Link>
            <Link className="account_item" to="/account/returns-empty">
              returns
            </Link>
            <Link className="account_item" to="/account/favourites">
              favourites
            </Link>
            <Link className="log_out" onClick={LogOut} to="/">
              log out
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="contactInformation">
            <h3 className="contactTitle">personal information</h3>
            <div className="myFields">
              <div className="fields left-fields col-6">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  id="email"
                  placeholder={formik.values.email}
                  autoComplete="true"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />{" "}
                {errors.email && (
                  <p className="mt-2" style={{ color: "red" }}>
                    <span className="font-medium">{errors.email}</span>
                  </p>
                )}
                <label className="label">First name</label>
                <input
                  type="text"
                  className="input"
                  id="firstName"
                  placeholder={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                {errors.firstName && (
                  <p className="mt-2" style={{ color: "red" }}>
                    <span className="font-medium">{errors.firstName}</span>
                  </p>
                )}
                <div className="addition indent">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="discountsAndSales"
                    defaultChecked={Boolean(formik.values.discountsAndSales)}
                    onClick={(e) => {
                      formik.values.discountsAndSales = String(
                        e.currentTarget.checked
                      );
                    }}
                  ></input>
                  <p className="remember_me">Subscribe for news</p>
                </div>
              </div>
              <div className="fields right-fields col-6">
                <label className="label">Phone number</label>
                <input
                  type="phone"
                  className="input"
                  id="phone"
                  autoComplete="true"
                  placeholder={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {errors.phone && (
                  <p className="mt-2" style={{ color: "red" }}>
                    <span className="font-medium">{errors.phone}</span>
                  </p>
                )}
                <label className="label">Last name</label>
                <input
                  type="text"
                  className="input"
                  id="lastName"
                  placeholder={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                />
                {errors.lastName && (
                  <p className="mt-2" style={{ color: "red" }}>
                    <span className="font-medium">{errors.lastName}</span>
                  </p>
                )}
                <div className="addition indent">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="checkbox"
                  ></input>
                  <p className="remember_me">Receive SMS with site news</p>
                </div>
              </div>
            </div>
          </div>
          {user.isHavePassword == "true" ? (
            <div className="contactInformation">
              <h3 className="contactTitle">changing password</h3>
              <div className="myFields">
                <div className="fields left-fields col-6">
                  <label className="label">Enter old password</label>
                  <input
                    type="password"
                    className="input"
                    id="passwordOld"
                    placeholder="Old Password"
                    onChange={formik.handleChange}
                    value={formik.values.passwordOld}
                  />
                  {errors.passwordOld && (
                    <p className="mt-2" style={{ color: "red" }}>
                      <span className="font-medium">{errors.passwordOld}</span>
                    </p>
                  )}
                </div>
                <div className="fields right-fields col-6">
                  <label className="label">Enter new password</label>
                  <input
                    type="password"
                    className="input "
                    id="passwordNew"
                    placeholder="New Password"
                    minLength={8}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.passwordNew}
                  />
                  {errors.passwordNew && (
                    <p className="mt-2" style={{ color: "red" }}>
                      <span className="font-medium">{errors.passwordNew}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="contactInformation">
              <h3 className="contactTitle">Set password</h3>
              <div className="myFields">
                <div className="fields left-fields col-6">
                  <label className="label">Enter new password</label>
                  <input
                    type="password"
                    className="input"
                    id="newPasswordAnotherLogin"
                    placeholder="New Password"
                    onChange={formik.handleChange}
                    value={formik.values.newPasswordAnotherLogin}
                  />
                  {errors.newPasswordAnotherLogin && (
                    <p className="mt-2" style={{ color: "red" }}>
                      <span className="font-medium">
                        {errors.newPasswordAnotherLogin}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="contactInformation">
            <h3 className="contactTitle">address</h3>
            <div className="myFields">
              <div className="fields left-fields col-6">
                <label className="label">Country</label>
                <select
                  className="input arrow_down"
                  id="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option>
                    <span>Choose your country</span>
                  </option>
                  {mapCountry}
                </select>
                {errors.country && (
                  <p className="mt-2" style={{ color: "red" }}>
                    <span className="font-medium">{errors.country}</span>
                  </p>
                )}
                <label className="label">State</label>
                <select
                  className="input arrow_down"
                  id="state"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option>
                    <span>Choose your state</span>
                  </option>
                  {authorOptions}
                  {/* {mapState} */}
                </select>

                {errors.state && (
                  <p className="mt-2" style={{ color: "red" }}>
                    <span className="font-medium">{errors.state}</span>
                  </p>
                )}
                <label className="label">Street</label>
                <input
                  type="street-address"
                  className="input indent"
                  id="street"
                  placeholder="Enter your street"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.street}
                />
                {errors.street && (
                  <p className="mt-2" style={{ color: "red" }}>
                    <span className="font-medium">{errors.street}</span>
                  </p>
                )}
              </div>
              <div className="fields right-fields col-6">
                <label className="label">Zip code</label>
                <input
                  type="tel"
                  className="input"
                  id="zipCode"
                  placeholder="Enter your zip code"
                  autoComplete="true"
                  value={formik.values.zipCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {errors.zipCode && (
                  <p className="mt-2" style={{ color: "red" }}>
                    <span className="font-medium">{errors.zipCode}</span>
                  </p>
                )}
                <label className="label">City</label>
                <input
                  type="text"
                  className="input "
                  id="city"
                  placeholder="Choose your city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                />
                {errors.city && (
                  <p className="mt-2" style={{ color: "red" }}>
                    <span className="font-medium">{errors.city}</span>
                  </p>
                )}
                <label className="label">Home number</label>
                <input
                  type="text"
                  className="input indent"
                  id="homePhone"
                  placeholder="Enter your home number"
                  autoComplete="true"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.homePhone}
                />
                {errors.homePhone && (
                  <p className="mt-2" style={{ color: "red" }}>
                    <span className="font-medium">{errors.homePhone}</span>
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="container myButtons">
            <div className="save col-6">
              <button type="submit" className="btn_continue save_changes">
                Save changes
              </button>
            </div>
            <div className="save col-6">
              <button
                className="btn-black"
                onClick={(e) => {
                  window.location.reload();
                }}
              >
                Reset changes
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactInf;
function geocodeByAddress(selectedAddress: any) {
  throw new Error("Function not implemented.");
}
