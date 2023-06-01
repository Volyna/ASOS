import { Link } from "react-router-dom";
import LOGO_ASOS from "../../../images/asos_logo.png";
import "./RegisterPageStyle.css";

function RegisterPage() {
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
                  <div className="unified-info-board ">
                    <h2>We love new faces :)</h2>
                    <h2>
                      Fill in some quick details below to get started and place
                      your first order
                    </h2>
                  </div>
                  <div className="field">
                    <label style={{ margin: "0 3% 11px 0" }}>FIRST NAME:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firsName"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="field">
                    <label style={{ margin: "0 3% 11px 0" }}>Last Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastdName"
                      placeholder="Enter last name"
                    />
                  </div>
                  <div className="field">
                    <label style={{ margin: "0 3% 11px 0" }}>Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter password"
                    />
                    <span className="hint">Must be 10 or more characters</span>
                  </div>
                  <div className="field">
                    <label style={{ margin: "0 3% 11px 0" }}>
                      Date of birth:
                    </label>
                    <div className="dataBirdth">
                      <div className="birthDay">
                        <select className="form-select-day">
                          <option selected value="0">
                            DD
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </select>
                      </div>
                      <div className="birthMonth">
                        <select className="form-select-month">
                          <option selected value="0">
                            Month
                          </option>
                          <option value="1">January</option>
                          <option value="2">February</option>
                          <option value="3">March</option>
                          <option value="4">April</option>
                          <option value="5">May</option>
                          <option value="6">June</option>
                          <option value="7">July</option>
                          <option value="8">August</option>
                          <option value="9">September</option>
                          <option value="10">October</option>
                          <option value="11">November</option>
                          <option value="12">December</option>
                        </select>
                      </div>
                      <div className="birthYear">
                        <select className="form-select-year">
                          <option selected value="0">
                            YYY
                          </option>
                          <option value="2007">2007</option>
                          <option value="2006">2006</option>
                          <option value="2005">2005</option>
                          <option value="2004">2004</option>
                          <option value="2003">2003</option>
                          <option value="2002">2002</option>
                          <option value="2001">2001</option>
                          <option value="2000">2000</option>
                          <option value="1999">1999</option>
                          <option value="1998">1998</option>
                          <option value="1997">1997</option>
                          <option value="1996">1996</option>
                          <option value="1995">1995</option>
                          <option value="1994">1994</option>
                          <option value="1993">1993</option>
                          <option value="1992">1992</option>
                          <option value="1991">1991</option>
                          <option value="1990">1990</option>
                          <option value="1989">1989</option>
                          <option value="1988">1988</option>
                          <option value="1987">1987</option>
                          <option value="1986">1986</option>
                          <option value="1985">1985</option>
                          <option value="1984">1984</option>
                          <option value="1983">1983</option>
                          <option value="1982">1982</option>
                          <option value="1981">1981</option>
                          <option value="1980">1980</option>
                          <option value="1979">1979</option>
                          <option value="1978">1978</option>
                          <option value="1977">1977</option>
                          <option value="1976">1976</option>
                          <option value="1975">1975</option>
                          <option value="1974">1974</option>
                          <option value="1973">1973</option>
                          <option value="1972">1972</option>
                          <option value="1971">1971</option>
                          <option value="1970">1970</option>
                          <option value="1969">1969</option>
                          <option value="1968">1968</option>
                          <option value="1967">1967</option>
                          <option value="1966">1966</option>
                          <option value="1965">1965</option>
                          <option value="1964">1964</option>
                          <option value="1963">1963</option>
                          <option value="1962">1962</option>
                          <option value="1961">1961</option>
                          <option value="1960">1960</option>
                          <option value="1959">1959</option>
                          <option value="1958">1958</option>
                          <option value="1957">1957</option>
                          <option value="1956">1956</option>
                          <option value="1955">1955</option>
                          <option value="1954">1954</option>
                          <option value="1953">1953</option>
                          <option value="1952">1952</option>
                          <option value="1951">1951</option>
                          <option value="1950">1950</option>
                        </select>
                      </div>
                    </div>
                    <span className="hint">
                      You need to be 16 or over to use ASOS
                    </span>
                  </div>

                  <div className="field">
                    <label style={{ margin: "0 3% 11px 0" }}>
                      MOSTLY INTERESTED IN:
                    </label>

                    <div className="gender-female">
                      <div className="form-check womenswear">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="flexRadioDefault"
                          id="womenswear"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="womenswear"
                        >
                          Womenswear
                        </label>
                      </div>
                      <div className="form-check menswear">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="menswear"
                          checked
                        />
                        <label className="form-check-label" htmlFor="menswear">
                          Menswear
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="field">
                    <legend className="col-xs-12">
                      <h2>Contact preferences</h2>
                    </legend>
                    <div className="consent-preferences-multi-option">
                      <div className="container-all-checkbox">
                        <div className="col-md-8">
                          <span>Tell us which emails you’d like:</span>
                        </div>
                        <div className="all-check">
                          <button className="btn btn-secondary" type="button">
                            SELECT ALL
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="checkboxlist-container">
                      <div className="form-box">
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Discounts and sales
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Discounts and sales"
                          id="flexCheckDefault"
                        />
                      </div>
                      <div className="form-box">
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          New stuff
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="New stuff"
                          id="flexCheckDefault"
                        />
                      </div>
                      <div className="form-box">
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Your exclusives
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="Your exclusives"
                          id="flexCheckDefault"
                        />
                      </div>
                      <div className="form-box">
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          ASOS partners
                        </label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value="ASOS partners"
                          id="flexCheckDefault"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="submit">
                    <button
                      type="button"
                      style={{ width: "100%" }}
                      className="btn btn-dark"
                    >
                      JOIN ASOS
                    </button>
                  </div>
                </form>
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
export default RegisterPage;
