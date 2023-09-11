import { Link, Navigate } from "react-router-dom";
import LOGO_ASOS from "../../../images/asos_logo.png";
import icon_Apple from "../../../images/icon_apple.png";
import icon_Google from "../../../images/icon_google.png";
import icon_facebook from "../../../images/icon_facebook.png";
import "./RegisterPageStyle.css";
import { useFormik } from "formik";
import { ILoginUserByGoogle, IRegisterUser } from "../types";
import { registerUserSchema } from "../validation";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import Footer from "../../Footer/FooterV";
import { date } from "yup";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
function RegisterPage() {
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
      // const userInfo = await axios
      //   .get("https://www.googleapis.com/oauth2/v3/userinfo", {
      //     headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
      //   })
      //   .then((res) => res.data);
      // console.log("userInfo", userInfo);
      // responseGoogle(userInfo);
    },
  });
  const responseGoogle = (resp: any) => {
    const token = resp;
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
  if (isAuth == true) {
    return <Navigate to={"/"}></Navigate>;
  }
  const { values, errors, touched, handleSubmit, handleChange, setFieldValue } =
    formik;
  return (
    <>
      <div className="container-fluid">
        <div className="content">
          <header className="header">
            <div className="asosLogo">
              <h1>
                <Link to={"/"}>
                  <img
                    alt="ASOS Logo"
                    height={142}
                    width={272}
                    src={LOGO_ASOS}
                  />
                </Link>
              </h1>
            </div>
          </header>

          <div className="autorization">
            <a href="login" className="log_in">
              {" "}
              Log in{" "}
            </a>
            <a href="register" className="join">
              Join
            </a>
          </div>

          <div className="unified-info">
            <p className="sign_up_with">Sign up with:</p>
          </div>
          <div>
            <ul
              style={{
                listStyleType: "none",
                padding: "0",
                marginBottom: "50px",
                textAlign: "center",
              }}
            >
              <li className="social-login">
                <a className="login_with" href="">
                  <img src={icon_Apple} alt="Login with Apple" />
                </a>
              </li>
              <li className="social-login">
                <a className="login_with" href="">
                  <img
                    src={icon_Google}
                    onClick={(e) => {
                      e.preventDefault();
                      login();
                    }}
                    alt="Login with Google"
                  ></img>
                  {/* <GoogleLogin
                          onSuccess={responseGoogle}
                          onError={errorGoogle}
                          /> */}
                </a>
              </li>
              <li className="social-login">
                <a className="login_with" href="">
                  <img src={icon_facebook} alt="Login with Facebook" />
                </a>
              </li>
            </ul>
          </div>

          <div className="main">
            <div className="signinContainer">
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="unified-info">
                    <p className="label_withEmail">Or with email:</p>
                  </div>

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
                    {/* <div className="addition">
                      <input
                        className="checkbox"
                        type="checkbox"
                        id="checkbox"
                      ></input>
                      <p className="remember_me">No emails</p>
                    </div> */}

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
                            // var checkedBoxes =
                            //   document.getElementById("womenswear");
                            // checkedBoxes.setAttribute("disabled", "false");
                          }}
                          className="checkbox"
                          type="checkbox"
                          id="menswear"
                        ></input>
                        <p className="remember_me">Menswear</p>
                      </div>
                    </div>
                  </div>

                  <div className="submit">
                    <button type="submit" className="btn_join">
                      JOIN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RegisterPage;
function flatpickr(
  dateInput: HTMLElement | null,
  arg1: { dateFormat: string; locale: string }
) {
  throw new Error("Function not implemented.");
}
