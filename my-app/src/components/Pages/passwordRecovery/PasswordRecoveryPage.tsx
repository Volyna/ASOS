import { Link, Navigate } from "react-router-dom";
import LOGO_ASOS from "../../../images/asos_logo.png";
import icon_Apple from "../../../images/icon_apple.png";
import icon_Google from "../../../images/icon_google.png";
import icon_facebook from "../../../images/icon_facebook.png";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import Footer from "../../Footer/FooterV";
import "./PasswordRecovery.css";
import { useFormik } from "formik";
import { ReceivePasswordSchema } from "../validation";

function PasswordRecoveryPage() {
  const { email, user, isAuth } = useTypedSelector(
    (store) => store.UserReducer
  );
  const { RecoveryPassword } = useActions();
  const onSubmitFormik = async (values: any) => {
    console.log(values.email);
    RecoveryPassword(values.email);
  };
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: onSubmitFormik,
    validationSchema: ReceivePasswordSchema,
  });
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
          <div className="main">
            <div className="signinContainer">
              <form onSubmit={handleSubmit}>
                <div className="unified-info" style={{ marginBottom: "30px" }}>
                  <p className="label_withEmail">Changing password:</p>
                </div>

                <div className="field">
                  <label className="label ">
                    We will send you an email or SMS
                  </label>
                  <input
                    onChange={handleChange}
                    value={formik.values.email}
                    style={{ marginBottom: 0 }}
                    type="email"
                    className="input"
                    id="email"
                    placeholder="Enter your email"
                  />
                  {errors.email && touched.email && (
                    <p className="mt-2" style={{ color: "red" }}>
                      <span className="font-medium">{errors.email}</span>
                    </p>
                  )}
                </div>

                <div className="submit">
                  <button
                    type="submit"
                    style={{ marginBottom: "50px" }}
                    className="btn_join"
                  >
                    CONFIRM
                  </button>
                </div>
                <div className="unified-info">
                  <Link to={"/login"} className="label_withEmail">
                    Remembered your password?
                  </Link>
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
export default PasswordRecoveryPage;
