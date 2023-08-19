import { Link, Navigate } from "react-router-dom";
import LOGO_ASOS from "../../../images/asos_logo.png";
import icon_Apple from "../../../images/icon_apple.png";
import icon_Google from "../../../images/icon_google.png";
import icon_facebook from "../../../images/icon_facebook.png";
import "./RegisterPageStyle.css";
import { useFormik } from "formik";
import { IRegisterUser } from "../types";
import { registerUserSchema } from "../validation";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import Footer from "../../Footer/FooterV";
import { date } from "yup";

function RegisterPage() {
  const { email, user } = useTypedSelector((store) => store.UserReducer);
  const { RegisterUser } = useActions();
  const initValues: IRegisterUser = {
    email: email,
    password: "",
    firstName: "",
    lastName: "",
    dataBirdth: new Date("22-07-2001"),
    mostlyInterested: "womenswear",
    discountsAndSales: false,
    newStuff: false,
    yourExclusives: false,
    asosPartners: false,
  };
  function SubscribeSubscriptions(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    var checkedBoxes = document.getElementsByClassName("checkbox");
    if (e.currentTarget.textContent?.trim() == "SELECT ALL") {
      e.currentTarget.textContent = "CLEAR";
      for (var i = 0, l = checkedBoxes.length; i < l; ++i) {
        (checkedBoxes[i] as HTMLInputElement).checked = true;
      }
      formik.values.discountsAndSales = true;
      formik.values.newStuff = true;
      formik.values.yourExclusives = true;
      formik.values.asosPartners = true;
    } else {
      e.currentTarget.textContent = "SELECT ALL";
      for (var i = 0, l = checkedBoxes.length; i < l; ++i) {
        (checkedBoxes[i] as HTMLInputElement).checked = false;
      }
      formik.values.discountsAndSales = false;
      formik.values.newStuff = false;
      formik.values.yourExclusives = false;
      formik.values.asosPartners = false;
    }
  }

  const onSubmitFormik = async (values: IRegisterUser) => {
    console.log(values);
    // RegisterUser(values);
  };

  const formik = useFormik({
    initialValues: initValues,
    onSubmit: onSubmitFormik,
    validationSchema: registerUserSchema,
  });
  if (user != null) {
    return <Navigate to={"/asos"}></Navigate>;
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
                      placeholder="Enter first name"
                      onChange={handleChange}
                      value={values.firstName}
                    />
                    {errors.firstName && (
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
                    {errors.lastName && (
                      <p className="mt-2" style={{ color: "red" }}>
                        <span className="font-medium">{errors.lastName}</span>
                      </p>
                    )}

                    <label className="label">Password</label>
                    <input
                      onChange={handleChange}
                      value={values.password}
                      type="password"
                      className="input input_password"
                      id="password"
                      placeholder="Enter your password"
                      minLength={8}
                      required
                      autoComplete="true"
                    />
                    {errors.password && (
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
                        id="date"
                      />
                      {errors.dataBirdth && touched.dataBirdth && (
                        <p className="mt-2" style={{ color: "red" }}>
                          <span className="font-medium">
                            Date is't correct!!!
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
                        className="checkbox"
                        type="checkbox"
                        id="checkbox"
                      ></input>
                      <p className="remember_me">Discount and sales</p>
                    </div>
                    <div className="addition">
                      <input
                        className="checkbox"
                        type="checkbox"
                        id="checkbox"
                      ></input>
                      <p className="remember_me">New arrivals</p>
                    </div>
                    <div className="addition">
                      <input
                        className="checkbox"
                        type="checkbox"
                        id="checkbox"
                      ></input>
                      <p className="remember_me">Your exclusives</p>
                    </div>
                    <div className="addition">
                      <input
                        className="checkbox"
                        type="checkbox"
                        id="checkbox"
                      ></input>
                      <p className="remember_me">Our partners</p>
                    </div>
                    <div className="addition">
                      <input
                        className="checkbox"
                        type="checkbox"
                        id="checkbox"
                      ></input>
                      <p className="remember_me">No emails</p>
                    </div>

                    <div className="field">
                      <label className="label interested">
                        Choose a category you mostly interested in:
                      </label>
                      <div className="addition">
                        <input
                          className="checkbox"
                          type="checkbox"
                          id="checkbox"
                        ></input>
                        <p className="remember_me">Womenswear</p>
                      </div>
                      <div className="addition">
                        <input
                          className="checkbox"
                          type="checkbox"
                          id="checkbox"
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
