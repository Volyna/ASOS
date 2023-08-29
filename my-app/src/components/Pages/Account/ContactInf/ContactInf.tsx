import "./ContactInf.css";
import Header_full from "../../../Header_full/Header_full";
import Footer from "../../../Footer/FooterV";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../../BreadCrumbs/breadCrumbs";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { IChangeContactInfo } from "../../../auth/types";
import { useFormik } from "formik";
import { ChangeContactInfoSchema } from "../../validation";
import { useEffect, useMemo, useState } from "react";
import countryList from "react-select-country-list";
import axios from "axios";
import { Country } from "../../types";

const ContactInf = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>(
    "Select Your Country"
  );
  const [myState, setMyState] = useState<JSX.Element | null>(null);
  const { email, user } = useTypedSelector((store) => store.UserReducer);
  const options = useMemo(() => countryList().getData(), []);
  const initValues: IChangeContactInfo = {
    email: user!.email,
    phone: user!.phone,
    firstName: user!.name,
    lastName: user!.surname,
    discountsAndSales: user!.discountsAndSales,
    passwordOld: "",
    passwordNew: "",
    Country: user!.Country,
    State: user!.State,
    Street: user!.Street,
    ZipCode: user!.ZipCode,
    City: user!.City,
    homePhone: user!.phone,
  };
  const [countries, setCountries] = useState<Country[]>([]);
  const fetchData = async () => {
    try {
      const response = await axios.get<Country[]>(
        "https://restcountries.com/v3/all"
      );
      setCountries(response.data);
      console.log("Data Countries: ", response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
    setMyState(<span>Hi</span>);
  }, []);
  const onSubmitFormik = async (values: IChangeContactInfo) => {};

  const formik = useFormik({
    initialValues: initValues,
    onSubmit: onSubmitFormik,
    validationSchema: ChangeContactInfoSchema,
  });
  const mapCountry = countries.map((region, index) => (
    <option defaultChecked={false} key={index} value={region.name.common}>
      {<span>{region.name.common}</span>}
    </option>
  ));

  const { values, errors, touched, handleSubmit, handleChange, setFieldValue } =
    formik;
  return (
    <>
      <Header_full />
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
            <Link className="log_out" to="/">
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
                  ></input>
                  <p className="remember_me">Receive SMS with site news</p>
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
                  <p className="remember_me">Subscribe for news</p>
                </div>
              </div>
            </div>
          </div>

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
                  onBlur={formik.handleBlur}
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
                  required
                  autoComplete="true"
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

          <div className="contactInformation">
            <h3 className="contactTitle">address</h3>
            <div className="myFields">
              <div className="fields left-fields col-6">
                <label className="label">Country</label>
                <select
                  className="input arrow_down"
                  id="regionSelect"
                  value={selectedRegion}
                  // onChange={(e) => setSelectedRegion(e.target.value)}
                  defaultValue={selectedRegion}
                >
                  {mapCountry}
                </select>
                {errors.Country && (
                  <p className="mt-2" style={{ color: "red" }}>
                    <span className="font-medium">{errors.Country}</span>
                  </p>
                )}
                <label className="label">State</label>
                <input
                  type="text"
                  className="input arrow_down"
                  id="state"
                  placeholder="Choose your state"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.State}
                />
                {errors.State && (
                  <p className="mt-2" style={{ color: "red" }}>
                    <span className="font-medium">{errors.State}</span>
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
                  value={formik.values.Street}
                />
                {errors.Street && (
                  <p className="mt-2" style={{ color: "red" }}>
                    <span className="font-medium">{errors.Street}</span>
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
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.ZipCode}
                />{" "}
                {errors.ZipCode && (
                  <p className="mt-2" style={{ color: "red" }}>
                    <span className="font-medium">{errors.ZipCode}</span>
                  </p>
                )}
                <label className="label">City</label>
                <input
                  type="text"
                  className="input arrow_down"
                  id="city"
                  placeholder="Choose your city"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.City}
                />
                {errors.City && (
                  <p className="mt-2" style={{ color: "red" }}>
                    <span className="font-medium">{errors.City}</span>
                  </p>
                )}
                <label className="label">Home number</label>
                <input
                  type="text"
                  className="input indent"
                  id="Homephone"
                  placeholder="Enter your home number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.homePhone}
                />{" "}
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
              <button className="btn_continue save_changes">
                Save changes
              </button>
            </div>
            <div className="save col-6">
              <button className="btn-black">Reset changes</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactInf;
