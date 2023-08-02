import "./PaymentEmpty.css";
import Header_full from "../../../Header_full/Header_full";
import Footer from "../../../Footer/FooterV";
import { Link, useNavigate } from "react-router-dom";

const PaymentEmpty = () => {
  const navigate = useNavigate();
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

        <div className="content col-12">
          <p className="basket_text">Ops, you haven’t made any orders yet!</p>
          <button onClick={() => navigate("/")} className="btn_continue">
            continue shopping
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentEmpty;
