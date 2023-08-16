import "./BasketEmpty.css";
import Header from "../../NavBar/header";
import Footer from "../../Footer/FooterV";
import Menu from "../../NavBar/menu";
import BreadCrumbs from "../../BreadCrumbs/breadCrumbs";
import { Link, useNavigate } from "react-router-dom";

const BasketEmpty = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="staticnav">
        <Header />
        <Menu />
      </div>
      <BreadCrumbs />

      <div className="container-fluid">
        <div className="mainInformation">
          <div className="content col-8">
            <p className="basket_text">Ops, your basket is empty(((</p>
            <button onClick={() => navigate("/")} className="btn_continue">
              continue shopping
            </button>
          </div>
          <div className="total col-4">
            <h1 className="textH1">total</h1>
            <div className="subColumns ">
              <p className="result col-3 ">Sub-total</p>
              <p className="money col-2 ">00.00 $</p>
            </div>
            <div className="subColumns ">
              <p className="result col-3 ">Shipping</p>
              <a href="" className="link col-2">
                Learn more
              </a>
            </div>
            <div className="subColumns">
              <p className="result col-3  ">Sales tax</p>
              <a href="" className="link col-2">
                Learn more
              </a>
            </div>
            <p className="discount">
              Add your discount code in the next step if you have <br />
              any.
            </p>
            <p className="favorite">
              *Items are reserved for 24 hours than you can find them in <br />{" "}
              your favorites
            </p>
            <button className="btn-buy">button</button>
            <p className="shipping">Standard shipping</p>
            <p className="pFaster">
              Faster delivery options available to most countries.
            </p>
            <a href="" className="link end">
              Learn more
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default BasketEmpty;
