import { url } from "inspector";
import { Link } from "react-router-dom";
import LOGO_ASOS from "../../../images/asos_logo.png";
import "./AuthorizationPageStyle.css";

function AuthorizationPage() {
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
                <form>
                  <div className="unified-info">
                    <h2>Welcome</h2>
                  </div>
                  <div className="field">
                    <label style={{ margin: "0 3% 11px 0" }}>
                      EMAIL ADDRESS:
                    </label>
                    <div className="edit-email-area">
                      <span>user.user@gmail.com</span>
                      <button className="edit-email-button">
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                  <div className="field">
                    <label style={{ margin: "0 3% 11px 0" }}>Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="submit">
                    <button
                      type="button"
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
