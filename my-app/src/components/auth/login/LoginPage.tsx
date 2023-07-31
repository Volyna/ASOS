import { Link, Navigate, useNavigate } from "react-router-dom";
import LOGO_ASOS from "../../../images/asos_logo.png";
import icon_Apple from "../../../images/icon_apple.png";
import icon_Google from "../../../images/icon_google.png";
import icon_facebook from "../../../images/icon_facebook.png";
import "./loginePageStyle.css";
import { useFormik } from "formik";
import { loginBeforeUserSchema } from "../validation";
import { IBeforeLoginUser, ILoginUserByGoogle } from "../types";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Footer from "../../Footer/FooterV";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { colors } from "@mui/material";
import styled from "@emotion/styled";
function LoginePage() {
  const { email, user } = useTypedSelector((store) => store.UserReducer);
  let navigator = useNavigate();
  const { IsUserExist, SetEmail, LoginUserByGoogle } = useActions();
  const onSubmitFormik = async (values: IBeforeLoginUser) => {
    let resultExistUser = await IsUserExist(values);
    let isUserExits =
      resultExistUser.toString().toLowerCase() == "true" ? true : false;
    if (isUserExits == true) {
      SetEmail(values.email);
      navigator("/login");
    } else {
      SetEmail(values.email);
      navigator("/register");
    }
  };

  const initValues: IBeforeLoginUser = { email: email.trim() };
  const formik = useFormik({
    initialValues: initValues,
    onSubmit: onSubmitFormik,
    validationSchema: loginBeforeUserSchema,
  });
  const responseGoogle = (resp: any) => {
    const token = resp.credential;
    let response: ILoginUserByGoogle = {
      provider: "Google",
      token: token,
    };
    LoginUserByGoogle(response);
  };
  if (user != null) {
    return <Navigate to={"/asos"}></Navigate>;
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
                  <img src={icon_Google} alt="Login with Google" />
                  {/* <GoogleLogin
                          onSuccess={responseGoogle}
                          onError={errorGoogle}
                          /> */}
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
                      value={values.email}
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
                    />

                    <div className="addition">
                      <input
                        className="checkbox"
                        type="checkbox"
                        id="checkbox"
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
