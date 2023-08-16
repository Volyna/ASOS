import "./ContactInf.css";
import Header_full from "../../../Header_full/Header_full";
import Footer from "../../../Footer/FooterV";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../../BreadCrumbs/breadCrumbs";

const ContactInf = () => {
  return (
    <>
      <Header_full />
      <BreadCrumbs/>
      <div className="container-fluid">
        <div className="container">
          <div className="menu_item">
            <Link className="main_item" to="/account/contact-information">
              Contact information
            </Link>
            <Link className="account_item" to="/account/shopping-history-empty">
              shopping history
            </Link>
            <Link className="account_item" to="/account/returns-empty">
              returns
            </Link>
            <Link className="account_item" to="/account/favourites">
              favourites
            </Link>
            <Link className="log_out" to="/">
              log out
            </Link>
          </div>
        </div>
        <div className="contactInformation">
          <h3 className="contactTitle">personal information</h3>
          <div className="myFields">
            <div className="fields left-fields col-6">
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                id="email"
                placeholder="Martaa@gmail.com"
                autoComplete="true"
              />
              <label className="label">First name</label>
              <input
                type="text"
                className="input"
                id="firstName"
                placeholder="Marta"
              />
              <div className="addition indent">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="checkbox"
                ></input>
                <p className="remember_me">Receive SMS with site news</p>
              </div>
            </div>
            <div className="fields right-fields col-6">
              <label className="label">Phone number</label>
              <input
                type="tel"
                className="input"
                id="phone"
                placeholder="+380670000000"
                autoComplete="true"
              />
              <label className="label">Last name</label>
              <input
                type="text"
                className="input"
                id="lastName"
                placeholder="Blavatna"
              />
              <div className="addition indent">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="checkbox"
                ></input>
                <p className="remember_me">Subscribe for news</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contactInformation">
          <h3 className="contactTitle">changing password</h3>
          <div className="myFields">
            <div className="fields left-fields col-6">
              <label className="label">Enter old password</label>
              <input
                type="password"
                className="input input_password indent"
                id="password"
                placeholder="Password"
                minLength={8}
                required
                autoComplete="true"
              />
            </div>
            <div className="fields right-fields col-6">
              <label className="label">Enter new password</label>
              <input
                type="password"
                className="input input_password indent"
                id="password"
                placeholder="Password"
                minLength={8}
                required
                autoComplete="true"
              />
            </div>
          </div>
        </div>

        <div className="contactInformation">
          <h3 className="contactTitle">address</h3>
          <div className="myFields">
            <div className="fields left-fields col-6">
              <label className="label">Country</label>

              <input
                type="country"
                className="input arrow_down"
                id="country"
                placeholder="Choose your country"
                autoComplete="true"
              />
              <label className="label">State</label>
              <input
                type="text"
                className="input arrow_down"
                id="firstName"
                placeholder="Choose your state"
              />
              <label className="label">Street</label>
              <input
                type="street-address"
                className="input indent"
                id="firstName"
                placeholder="Enter your street"
              />
            </div>
            <div className="fields right-fields col-6">
              <label className="label">Zip code</label>
              <input
                type="tel"
                className="input"
                id="phone"
                placeholder="Enter your zip code"
                autoComplete="true"
              />
              <label className="label">City</label>
              <input
                type="text"
                className="input arrow_down"
                id="lastName"
                placeholder="Choose your city"
              />
              <label className="label">Home number</label>
              <input
                type="text"
                className="input indent"
                id="lastName"
                placeholder="Enter your home number"
              />
            </div>
          </div>
        </div>

        <div className="container myButtons">
          <div className="save col-6">
            <button className="btn_continue save_changes">Save changes</button>
          </div>
          <div className="save col-6">
            <button className="btn-black">Reset changes</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactInf;
