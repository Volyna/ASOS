import { Link } from "react-router-dom";
import LOGO_ASOS from "../../../images/asos_logo.png";
import "./loginePageStyle.css";
import { useFormik } from "formik";
import { loginUserSchema } from "../validation";
import { IBeforeLoginUser } from "../types";

function LoginePage() {
  const onSubmitFormik = async (values: IBeforeLoginUser) => {
    console.log("Email User: ", values);
  };
  const initValues: IBeforeLoginUser = { email: "" };

  const formik = useFormik({
    initialValues: initValues,
    onSubmit: onSubmitFormik,
    validationSchema: loginUserSchema,
  });
  const { values, errors, touched, handleSubmit, handleChange, setFieldValue } =
    formik;
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="header">
            <div className="asosLogo">
              <h1>
                <Link to={"/"}>
                  <img alt="ASOS Logo" height={28} width={93} src={LOGO_ASOS} />
                </Link>
              </h1>
            </div>
          </div>

          <div className="main">
            <div className="signinContainer">
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="unified-info">
                    <h2>Welcome</h2>
                    <span>Enter your email to sign in or join</span>
                  </div>
                  <div className="field">
                    <label style={{ margin: "0 3% 11px 0" }}>
                      Email address:
                    </label>
                    <input
                      onChange={handleChange}
                      value={values.email}
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter email"
                      autoComplete="true"
                    />
                    {errors.email && (
                      <p className="mt-2" style={{ color: "red" }}>
                        <span className="font-medium">{errors.email}</span>
                      </p>
                    )}
                  </div>
                  <div className="submit">
                    <button
                      type="submit"
                      style={{ width: "100%" }}
                      className="btn btn-dark"
                    >
                      CONTINUE
                    </button>
                  </div>
                </form>

                <div className="info-centre unified-info-center">
                  <h2 className="unified-social-title">
                    <span style={{ background: "#fff", padding: "0 10px" }}>
                      Or sign in with...
                    </span>
                  </h2>
                </div>
                <div className="unified-info">
                  <h2 className="unified-social-subtitle">
                    Choose a social option to sign in or to join
                  </h2>
                </div>
              </div>
              <div className="info info-centre">
                <div className="options three-buttons ">
                  <ul style={{ listStyleType: "none", padding: "0" }}>
                    <li className="social-register">
                      <button
                        type="button"
                        className="btn btn-dark social-link"
                      >
                        Google
                      </button>
                    </li>
                    <li className="social-register">
                      <button
                        type="button"
                        className="btn btn-dark social-link"
                      >
                        Apple
                      </button>
                    </li>
                    <li className="social-register">
                      <button
                        type="button"
                        className="btn btn-dark social-link"
                      >
                        Facebook
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="twitter-gone">
                  <Link to={"/"}>Where has Twitter Gone?</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="terms">
            <label>
              <Link to={"/"}>Privacy Policy</Link> |{" "}
              <Link to={"/"}>Terms and Conditions</Link>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginePage;
