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
function LoginePage() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { email, user } = useTypedSelector((store) => store.UserReducer);
  let navigator = useNavigate();
  const { IsUserExist, SetEmail, LoginUserByGoogle, LoginUser } = useActions();
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

  const onSubmitFormik = async (values: IBeforeLoginUser) => {
    if (!executeRecaptcha) return;
    values.RecaptchaToken = await executeRecaptcha();
    console.log("values IBeforeLoginUser: ", values);
    let resultExistUser = await IsUserExist(values);
    let isUserExits =
      resultExistUser.toString().toLowerCase() == "true" ? true : false;
    if (isUserExits == true) {
      let userData: ILoginUser = {
        email: values.email,
        password: values.password,
        RecaptchaToken: values.RecaptchaToken,
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
    console.log("token: ", token);
    let response: ILoginUserByGoogle = {
      provider: "Google",
      token: token,
    };
    console.log("responseGoogle to back end: ", response);
    LoginUserByGoogle(response);
  };
  if (user != null) {
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
                marginBottom: "100px",
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
                      id="email"
                      placeholder="Enter your email"
                      autoComplete="true"
                    />
                    {errors.email && (
                      <p className="mt-2" style={{ color: "red" }}>
                        <span className="font-medium">{errors.email}</span>
                      </p>
                    )}
                    <label className="label">Password</label>
                    <input
                      onChange={handleChange}
                      type="password"
                      className="input input_password"
                      id="password"
                      placeholder="Enter your password"
                      minLength={8}
                      required
                      autoComplete="true"
                    />{" "}
                    {errors.password && (
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
                      <a href="" className="forgot">
                        Forgot password?
                      </a>
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
