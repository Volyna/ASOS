import { Link, Navigate, useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import { ILoginUserByGoogle, IRegisterUser } from "../../../../auth/types";
import { registerUserSchema } from "../../../../auth/validation";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { useActions } from "../../../../../hooks/useActions";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useGoogleLogin } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import icon_Google from "../../../../../images/icon_google.png";
const UserCreatePage = () => {
  const navigator = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { email, user, isAuth } = useTypedSelector(
    (store) => store.UserReducer
  );
  const { RegisterUser, LoginUserByGoogle } = useActions();
  const initValues: IRegisterUser = {
    email: email,
    password: "",
    firstName: "",
    lastName: "",
    dataBirdth: null,
    mostlyInterested: "womenswear",
    discountsAndSales: false,
    newStuff: false,
    yourExclusives: false,
    asosPartners: false,
    RecaptchaToken: "",
  };

  const onSubmitFormik = async (values: IRegisterUser) => {
    console.log(values);
    if (!executeRecaptcha) return;
    values.RecaptchaToken = await executeRecaptcha();

    RegisterUser(values);
  };
  const formik = useFormik({
    initialValues: initValues,
    onSubmit: onSubmitFormik,
    validationSchema: registerUserSchema,
  });
  const login = useGoogleLogin({
    onError: () => {
      errorGoogle();
    },
    onSuccess: async (tokenResponse) => {
      responseGoogle(tokenResponse.access_token);
    },
  });
  const responseGoogle = (resp: any) => {
    const token = resp;
    // const token = resp.credential;
    console.log("token: ", token);
    let response: ILoginUserByGoogle = {
      provider: "Google",
      token: token,
    };
    console.log("responseGoogle to back end: ", response);
    LoginUserByGoogle(response);
  };
  const errorGoogle = () => {
    toast.error("Error Google login!!!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
    setFieldValue,
    isValid,
    dirty,
  } = formik;
  return (
    <>
      <ToastContainer draggable={false} autoClose={3000} />
      <div className="new">
        <Sidebar />
        <div className="newContainer">
          <Navbar />
          <div className="top">
            <h1>ADD USER</h1>
          </div>
          <div className="bottom">
            <form onSubmit={handleSubmit}>
              <div className="container">
                <div>
                  <h1 className="header">ADD USER</h1>

                  <div className="field">
                    <label className="label ">Email</label>
                    <input
                      onChange={handleChange}
                      value={values.email}
                      type="email"
                      className="input"
                      id="email"
                      placeholder="Enter your email"
                      autoComplete="true"
                    />
                    {errors.email && touched.email && (
                      <p className="mt-2" style={{ color: "red" }}>
                        <span className="font-medium">{errors.email}</span>
                      </p>
                    )}

                    <label className="label">First name</label>
                    <input
                      type="text"
                      className="input"
                      id="firstName"
                      placeholder="Enter first name"
                      onChange={handleChange}
                      value={values.firstName}
                    />
                    {errors.firstName && touched.firstName && (
                      <p className="mt-2" style={{ color: "red" }}>
                        <span className="font-medium">{errors.firstName}</span>
                      </p>
                    )}

                    <label className="label">Last name</label>
                    <input
                      type="text"
                      className="input"
                      id="lastName"
                      placeholder="Enter last name"
                      onChange={handleChange}
                      value={values.lastName}
                    />
                    {errors.lastName && touched.lastName && (
                      <p className="mt-2" style={{ color: "red" }}>
                        <span className="font-medium">{errors.lastName}</span>
                      </p>
                    )}

                    <label className="label">Password</label>
                    <div className="password-container">
                      <input
                        onChange={handleChange}
                        value={values.password}
                        type={passwordShown ? "text" : "password"}
                        className="input"
                        id="password"
                        placeholder="Enter your password"
                        minLength={8}
                        required
                        autoComplete="true"
                      ></input>
                      <button
                        onClick={() => {
                          setPasswordShown(!passwordShown);
                        }}
                        className={
                          passwordShown
                            ? "input_password_show"
                            : "input_password"
                        }
                        id="input_password"
                      ></button>
                    </div>
                    {errors.password && touched.password && (
                      <p className="mt-2" style={{ color: "red" }}>
                        <span className="font-medium">{errors.password}</span>
                      </p>
                    )}
                    <span className="hint">
                      Must contain 8 or more characters
                    </span>
                  </div>

                  <div className="field">
                    <label className="label">Date of birth</label>
                    <div className="dataBirdth">
                      <input
                        onChange={handleChange}
                        type="date"
                        className="input date"
                        id="dataBirdth"
                        placeholder="dd.mm.yyyy"
                      />
                      {errors.dataBirdth && touched.dataBirdth && (
                        <p className="mt-2" style={{ color: "red" }}>
                          <span className="font-medium">
                            {errors.dataBirdth}
                          </span>
                        </p>
                      )}
                    </div>
                    <span className="hint">
                      You need to be 18 or over to use Focus
                    </span>
                  </div>

                  <div className="field">
                    <label className="label">Receive emails about:</label>

                    <div className="addition">
                      <input
                        onChange={handleChange}
                        className="checkbox"
                        type="checkbox"
                        id="discountsAndSales"
                      ></input>
                      <p className="remember_me">Discount and sales</p>
                    </div>
                    <div className="addition">
                      <input
                        onChange={handleChange}
                        className="checkbox"
                        type="checkbox"
                        id="newStuff"
                      ></input>
                      <p className="remember_me">New arrivals</p>
                    </div>
                    <div className="addition">
                      <input
                        onChange={handleChange}
                        className="checkbox"
                        type="checkbox"
                        id="yourExclusives"
                      ></input>
                      <p className="remember_me">Your exclusives</p>
                    </div>
                    <div className="addition">
                      <input
                        onChange={handleChange}
                        className="checkbox"
                        type="checkbox"
                        id="asosPartners"
                      ></input>
                      <p className="remember_me">Our partners</p>
                    </div>

                    <div className="field">
                      <label className="label interested">
                        Choose a category you mostly interested in:
                      </label>
                      <div className="addition">
                        <input
                          name="womenswear"
                          onChange={(e) => {
                            setFieldValue(
                              "mostlyInterested",
                              "womenswear",
                              false
                            );
                            var checkedBoxes = document.getElementById(
                              "menswear"
                            ) as HTMLInputElement;
                            checkedBoxes.checked = false;
                          }}
                          defaultChecked={true}
                          className="checkbox"
                          type="checkbox"
                          id="womenswear"
                        ></input>
                        <p className="remember_me">Womenswear</p>
                      </div>
                      <div className="addition">
                        <input
                          name="menswear"
                          onChange={(e) => {
                            setFieldValue(
                              "mostlyInterested",
                              "menswear",
                              false
                            );
                            var checkedBoxes = document.getElementById(
                              "womenswear"
                            ) as HTMLInputElement;
                            checkedBoxes.checked = false;
                          }}
                          className="checkbox"
                          type="checkbox"
                          id="menswear"
                        ></input>
                        <p className="remember_me">Menswear</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-x-4 mt-8">
                    <button
                      type="submit"
                      className="womenbtn buttons"
                      disabled={!(isValid && dirty)}
                    >
                      Create
                    </button>
                    <button
                      className="buttons"
                      onClick={() => navigator("/admin/users")}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCreatePage;
