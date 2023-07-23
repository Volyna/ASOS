import { Link, Navigate, useNavigate } from "react-router-dom";
import LOGO_ASOS from "../../../images/asos_logo.png";
import "./AuthorizationPageStyle.css";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ILoginUser } from "../types";
import { useFormik } from "formik";
import { loginUserSchema } from "../validation";
import { useActions } from "../../../hooks/useActions";

function AuthorizationPage() {
  const { email, user } = useTypedSelector((store) => store.UserReducer);
  const { LoginUser } = useActions();
  const initValues: ILoginUser = {
    email: email,
    password: "",
  };

  const onSubmitFormik = async (values: ILoginUser) => {
    console.log(values);
    LoginUser(values);
  };
  const formik = useFormik({
    initialValues: initValues,
    onSubmit: onSubmitFormik,
    validationSchema: loginUserSchema,
  });
  if (email == "") {
    return <Navigate to={"/"}></Navigate>;
  }
  if (user != null) {
    return <Navigate to={"/asos"}></Navigate>;
  }
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
                  </div>
                  <div className="field">
                    <label style={{ margin: "0 3% 11px 0" }}>
                      Email:
                    </label>
                    <div className="edit-email-area">
                      <span>{email}</span>
                      <Link
                        to={"/"}
                        style={{ textDecoration: "none" }}
                        className="edit-email-button"
                      >
                        <span>Edit</span>
                      </Link>
                    </div>
                  </div>
                  <div className="field">
                    <label style={{ margin: "0 3% 11px 0" }}>Password:</label>
                    <input
                      onChange={handleChange}
                      value={values.password}
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                      autoComplete="true"
                    />
                    {errors.password && (
                      <p className="mt-2" style={{ color: "red" }}>
                        <span className="font-medium">{errors.password}</span>
                      </p>
                    )}
                  </div>
                  <div className="submit">
                    <button
                      type="submit"
                      style={{ width: "100%" }}
                      className="btn btn-dark"
                    >
                      SIGN IN
                    </button>
                  </div>
                </form>
              </div>
              <div className="info info-centre">
                <div className="forgotten-password">
                  <Link to={"/"}>Forgot password?</Link>
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
export default AuthorizationPage;
