import "./Payment.css";
import Header_full from "../../../Header_full/Header_full";
import Footer from "../../../Footer/FooterV";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <>
      <Header_full />
      <div className="container-fluid">
        <div className="mainLink">
          <p className="focusCom">focus.com | Account |</p>
          <p className="focusCom basket"> Shopping history</p>
        </div>
        <div className="container">
          <div className="menu_item">
            <Link className="account_item" to="/account/contact-information">
              Contact information
            </Link>
            <Link className="main_item" to="/account/shopping-history-empty">
              shopping history
            </Link>
            <Link className="account_item" to="/">
              returns
            </Link>
            <Link className="account_item" to="/">
              favourites
            </Link>
            <Link className="log_out" to="/">
              log out
            </Link>
          </div>
        </div>
        <div className="payment_menu">
          <label className="col-2">Date</label>
          <label className="col-2">Amount</label>
          <label className="col-2">Order number</label>
          <label className="col-2">Order status</label>
          <label className="col-2">Parcel tracking number</label>
        </div>
        <div className="user_payment">
          <p className="col-2">07.07.2023</p>
          <p className="col-2">123.00$</p>
          <p className="col-2">527297</p>
          <p className="col-2">Payed</p>
          <a href="" className="link col-2">
            Learn more
          </a>
        </div>
        <div className="user_payment">
          <p className="col-2">07.07.2023</p>
          <p className="col-2">123.00$</p>
          <p className="col-2">527297</p>
          <p className="col-2">Payed</p>
          <a href="" className="link col-2">
            Learn more
          </a>
        </div>
        <div className="user_payment">
          <p className="col-2">07.07.2023</p>
          <p className="col-2">123.00$</p>
          <p className="col-2">527297</p>
          <p className="col-2">Payed</p>
          <a href="" className="link col-2">
            Learn more
          </a>
        </div>
        <div className="user_payment">
          <p className="col-2">07.07.2023</p>
          <p className="col-2">123.00$</p>
          <p className="col-2">527297</p>
          <p className="col-2">Payed</p>
          <a href="" className="link col-2">
            Learn more
          </a>
        </div>
        <div className="user_payment">
          <p className="col-2">07.07.2023</p>
          <p className="col-2">123.00$</p>
          <p className="col-2">527297</p>
          <p className="col-2">Payed</p>
          <a href="" className="link col-2">
            Learn more
          </a>
        </div>
        <div className="user_payment">
          <p className="col-2">07.07.2023</p>
          <p className="col-2">123.00$</p>
          <p className="col-2">527297</p>
          <p className="col-2">Payed</p>
          <a href="" className="link col-2">
            Learn more
          </a>
        </div>
        <div className="user_payment">
          <p className="col-2">07.07.2023</p>
          <p className="col-2">123.00$</p>
          <p className="col-2">527297</p>
          <p className="col-2">Payed</p>
          <a href="" className="link col-2">
            Learn more
          </a>
        </div>
        <div className="user_payment">
          <p className="col-2">07.07.2023</p>
          <p className="col-2">123.00$</p>
          <p className="col-2">527297</p>
          <p className="col-2">Payed</p>
          <a href="" className="link col-2">
            Learn more
          </a>
        </div>
        <div className="save show ">
          <button className="btn_continue show_more">Show more</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
