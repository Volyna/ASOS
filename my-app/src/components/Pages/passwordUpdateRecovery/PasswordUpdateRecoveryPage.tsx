import { Link, Navigate } from "react-router-dom";
import LOGO_ASOS from "../../../images/asos_logo.png";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import Footer from "../../Footer/FooterV";
import "./PasswordUpdateRecovery.css";
import { useFormik } from "formik";
import { PasswordUpdateRecoverySchema } from "../validation";
import { IRecoveryPasswordUpdate } from "../types";

function PasswordUpdateRecoveryPage() {
  const queryParameters = new URLSearchParams(window.location.search);
  const userId = queryParameters.get("userId");
  const token = queryParameters.get("token");
  const { email, user, isAuth } = useTypedSelector(
    (store) => store.UserReducer
  );

  const { RecoveryPasswordUpdate } = useActions();
  const onSubmitFormik = async (values: IRecoveryPasswordUpdate) => {
    console.log("password: ", values.password);
    console.log("passwordRepeat: ", values.confirmPassword);
    console.log("id user: ", values.userId);
    console.log("token: ", values.token);
    RecoveryPasswordUpdate(values);
  };
  const initialValues: IRecoveryPasswordUpdate = {
    password: "",
    confirmPassword: "",
    userId: userId,
    token: token,
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmitFormik,
    validationSchema: PasswordUpdateRecoverySchema,
  });
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
            <Link to="/login" className="logIn">
              {" "}
              Log in{" "}
            </Link>
            <Link to="/register" className="joinL">
              Join
            </Link>
          </div>
          <div className="main">
            <div className="signinContainer">
              <form onSubmit={handleSubmit}>
                <div className="unified-info" style={{ marginBottom: "30px" }}>
                  <p className="label_withEmail">Changing password:</p>
                </div>

                <div className="field">
                  <label className="label ">New password</label>
                  <input
                    onChange={handleChange}
                    value={formik.values.password}
                    type="password"
                    className="input"
                    id="password"
                    placeholder="Enter your new password"
                  />
                  {errors.password && touched.password && (
                    <p className="mt-2" style={{ color: "red" }}>
                      <span className="font-medium">{errors.password}</span>
                    </p>
                  )}
                </div>
                <div className="field">
                  <label className="label ">Repeat the new password</label>
                  <input
                    onChange={handleChange}
                    value={formik.values.confirmPassword}
                    style={{ marginBottom: 0 }}
                    type="password"
                    className="input"
                    id="confirmPassword"
                    placeholder="Repeat the password"
                  />
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p className="mt-2" style={{ color: "red" }}>
                      <span className="font-medium">
                        {errors.confirmPassword}
                      </span>
                    </p>
                  )}
                </div>

                <div className="submit">
                  <button type="submit" className="btn_join">
                    CONFIRM
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default PasswordUpdateRecoveryPage;
