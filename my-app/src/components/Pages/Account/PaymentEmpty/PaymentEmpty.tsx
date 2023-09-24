import Header_full from "../../../Header_full/Header_full";
import Footer from "../../../Footer/FooterV";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumbs from "../../../BreadCrumbs/breadCrumbs";
import axios from "axios";
import { useEffect } from "react";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";
import "./Payment.css";
const PaymentEmpty = () => {
  const navigate = useNavigate();
  const { user } = useTypedSelector(
    (store) => store.UserReducer
  );
  const { productsOrder } = useTypedSelector(
    (store) => store.BasketReducer
  );
  const { GetOrderProduct } = useActions();
  useEffect(() => {
    GetOrderProduct(user.id);

  }, []);
  var dataHistory = productsOrder.map((item) => {
    return (
      <div className="OrderedData row">
        <div className="dataNameOrder col-2"> <div className=""><p >{item.date}</p></div></div>
        <div className="dataTotalOrder col-2"><div style={{ paddingRight: "65px" }}><p>{item.amount}</p></div></div>
        <div style={{ paddingLeft: "50px" }} className="dataNumberOrder col-2"><p>{item.orderNumber}</p></div>
        <div style={{ padding: "0" }} className="dataStatusOrder col-2"><p>{item.orderStatus}</p></div>
        <div className="dataViewAllOrder col-2"><Link to="#">View order</Link></div>
      </div>
    )
  })
  return (
    <>
      <Header_full />
      <BreadCrumbs />
      <div className="container-fluid">
        <div className="container">
          <div className="menu_item">
            <Link className="account_item" to="/account/contact-information">
              Contact information
            </Link>
            <Link className="main_item" to="/account/shopping-history-empty">
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
        <div className="payment_menu">
          <label className="col-2">Date</label>
          <label className="col-2">Amount</label>
          <label className="col-2">Order number</label>
          <label className="col-2">Order status</label>
          <label style={{ minWidth: "228px" }} className="col-2">Parcel tracking number</label>
        </div>

        {productsOrder.length <= 0 ? <div className="content col-12">

          <p className="basket_text">Ops, you haven’t made any orders yet!</p>
          <button onClick={() => navigate("/")} className="btn_continue">
            continue shopping
          </button>

        </div> : dataHistory}



      </div>
      <Footer />
    </>
  );
};

export default PaymentEmpty;
