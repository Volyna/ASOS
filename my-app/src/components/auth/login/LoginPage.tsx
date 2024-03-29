import { Link, Navigate, useNavigate } from "react-router-dom";
import LOGO_ASOS from "../../../images/asos_logo.png";
import icon_Apple from "../../../images/icon_apple.png";
import icon_Google from "../../../images/icon_google.png";
import icon_facebook from "../../../images/icon_facebook.png";
import "./loginePageStyle.css";
import { useFormik } from "formik";
import { loginBeforeUserSchema } from "../validation";
import { IBeforeLoginUser, ILoginUser, ILoginUserByGoogle } from "../types";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Footer from "../../Footer/FooterV";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { colors } from "@mui/material";
import styled from "@emotion/styled";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import { useState } from "react";
function LoginePage() {
  const [passwordShown, setPasswordShown] = useState(false);
  // const { executeRecaptcha } = useGoogleReCaptcha();
  const { email, user, isAuth } = useTypedSelector(
    (store) => store.UserReducer
  );
  let navigator = useNavigate();
  const { IsUserExist, SetEmail, LoginUserByGoogle, LoginUser } = useActions();
  const login = useGoogleLogin({
    onError: () => {
      errorGoogle();
    },
    onSuccess: async (tokenResponse) => {
      responseGoogle(tokenResponse.access_token);
    },
  });

  const onSubmitFormik = async (values: IBeforeLoginUser) => {
    // if (!executeRecaptcha) return;
    console.log("values IBeforeLoginUser: ", values);
    let resultExistUser = await IsUserExist(values);
    let isUserExits =
      resultExistUser.toString().toLowerCase() == "true" ? true : false;
    if (isUserExits == true) {
      let userData: ILoginUser = {
        email: values.email,
        password: values.password,
        RecaptchaToken: "",
        IsRemember: values.remember,
      };
      console.log("Login userData:", userData);
      LoginUser(userData);
    } else {
      console.log("Register");
      toast.error(
        "You have entered an incorrect password.\n Check your password and try again.",
        {
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    }
  };

  const initValues: IBeforeLoginUser = {
    RecaptchaToken: "",
    remember: false,
    password: "",
    email: "",
  };
  const formik = useFormik({
    initialValues: initValues,
    onSubmit: onSubmitFormik,
    validationSchema: loginBeforeUserSchema,
  });

  const responseGoogle = (resp: any) => {
    const token = resp;
    // const token = resp.credential;
    let response: ILoginUserByGoogle = {
      provider: "Google",
      token: token,
    };
    LoginUserByGoogle(response);
  };

  if (isAuth == true) {
    return <Navigate to={"/"}></Navigate>;
  }
  const errorGoogle = () => {
    toast.error("Error Google login!!!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const { values, errors, touched, handleSubmit, handleChange, setFieldValue } =
    formik;
  return (
    <>
      <div className="container-flui">
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
            <a href="login" className="logIn">
              {" "}
              Log in{" "}
            </a>
            <a href="register" className="joinL">
              Join
            </a>
          </div>

          <div className="unified-info">
            <p className="log_in_with">Log in with:</p>
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
                  ></GoogleLogin> */}
                </a>
              </li>
              <li className="social-login">
                <a className="login_with" href="">
                  <img src={icon_facebook} alt="L0gin with Facebook" />
                </a>
              </li>
            </ul>
          </div>

          <div className="main">
            <div className="signinContainer">
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div>
                    <p className="label_withEmail">Or with email:</p>
                  </div>
                  <div className="field">
                    <label className="label">Email</label>
                    <input
                      onChange={handleChange}
                      type="email"
                      className="input"
                      required
                      id="email"
                      placeholder="Enter your email"
                      autoComplete="true"
                    />
                    {errors.email && touched.email && (
                      <p className="mt-2" style={{ color: "red" }}>
                        <span className="font-medium">{errors.email}</span>
                      </p>
                    )}
                    <label className="label">Password</label>
                    <div className="password-container">
                      <input
                        onChange={handleChange}
                        type={passwordShown ? "text" : "password"}
                        className="input "
                        id="password"
                        placeholder="Enter your password"
                        minLength={8}
                        required
                        autoComplete="true"
                      />{" "}
                      <button
                        onClick={() => {
                          setPasswordShown(!passwordShown);
                        }}
                        className={
                          passwordShown
                            ? "input_password_show"
                            : "input_password_login"
                        }
                        id="input_password"
                      ></button>
                    </div>
                    {errors.password && touched.password && (
                      <p className="mt-2" style={{ color: "red" }}>
                        <span className="font-medium">{errors.password}</span>
                      </p>
                    )}
                    <div className="addition">
                      <input
                        onChange={handleChange}
                        className="checkbox"
                        type="checkbox"
                        id="remember"
                      ></input>
                      <p className="remember_me">Remember me</p>
                      <Link to={"/forgotPassword"} className="forgot">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <div className="submit">
                    <button type="submit" className="btn_logIn">
                      LOG IN
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
export default LoginePage;
