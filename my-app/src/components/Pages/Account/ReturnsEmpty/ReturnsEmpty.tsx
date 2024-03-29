import "./ReturnsEmpty.css";
import Header_full from "../../../Header_full/Header_full";
import Footer from "../../../Footer/FooterV";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../../BreadCrumbs/breadCrumbs";

const ReturnsEmpty = () => {
  return (
    <>
      <Header_full />
      <BreadCrumbs/>
      <div className="container-fluid">
        <div className="container">
          <div className="menu_item">
            <Link className="account_item" to="/account/contact-information">
              Contact information
            </Link>
            <Link className="account_item" to="/account/shopping-history-empty">
              shopping history
            </Link>
            <Link className="main_item" to="/account/returns-empty">
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
        <div className="payment_menu">
          <label className="col-2">Date</label>
          <label className="col-2">Amount</label>
          <label className="col-2">Order number</label>
          <label className="col-2">Total</label>
          <label className="col-2">Read more information</label>
        </div>

        <div className="content col-12">
          <p className="basket_text returns">
            Great news, you haven’t asked for returns yet!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReturnsEmpty;
