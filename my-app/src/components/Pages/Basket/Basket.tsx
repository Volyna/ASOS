import "./Basket.css";
import Header from "../../NavBar/header";
import Footer from "../../Footer/FooterV";
import Clothes1 from "../../../images/firstProduct.png";
import Clothes2 from "../../../images/secondProduct.png";
import Clothes3 from "../../../images/thirdProduct.png";
import Delete from "../../../images/delete.png";
import Minus from "../../../images/minus.png";
import Plus from "../../../images/plus.png";
import Menu from "../../NavBar/menu";
import BreadCrumbs from "../../BreadCrumbs/breadCrumbs";

const Basket = () => {
  return (
    <>
      <div className="staticnav">
        <Header />
        <Menu/>
      </div>
      <div className="container-fluid">

      <BreadCrumbs/>
        
        <div className="mainInformation">
          {/* <div className="orderContent col-8">
            <img width={119} height={175} src={Clothes1} alt="" />
            <div>
              <h3 className="productName col-8">Draped jersey dress</h3>
              <img width={30} height={30} src={Delete} alt="" />
            </div>

            <div className="content">
              <p>Color: Black</p>
              <p>Size: M</p>
            </div>
          </div> */}

          <div className="allOrders col-8">
            <div className="orderContent col-9">
              <div className="col-2">
                <img width={119} height={175} src={Clothes1} alt="" />
              </div>
              <div className="col-9">
                <div className="row text-muted">
                  <h3 className="productName ">Draped jersey dress</h3>
                </div>
                <div className="row">
                  <p className="col-2">Color: Black</p>
                  <p className="col-2">Size: M</p>
                </div>
                <div className="row">
                  <p className="newPrice col-2">55.00$</p>
                  <p className="oldPrice col-1">65.00$</p>
                </div>
                <div className="row">
                  <div>
                    <span className="minus col-1">
                      <img src={Minus} alt="minus" />
                    </span>
                    <button className="num">1</button>
                    <span className="plus col-1">
                      <img src={Plus} alt="plus" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-1">
                <img
                  className="removeProduct"
                  width={30}
                  height={30}
                  src={Delete}
                  alt="remove"
                />
              </div>
            </div>

            <div className="orderContent col-9">
              <div className="col-2">
                <img width={119} height={175} src={Clothes2} alt="" />
              </div>
              <div className="col-9">
                <div className="row text-muted">
                  <h3 className="productName">Double-weave blouse</h3>
                </div>
                <div className="row">
                  <p className="col-2">Color: Blue</p>
                  <p className="col-2">Size: M</p>
                </div>
                <div className="row">
                  <p className="price col-2">39.00$</p>
                </div>
                <div className="row">
                  <div>
                    <span className="minus col-1">
                      <img src={Minus} alt="minus" />
                    </span>
                    <button className="num">1</button>
                    <span className="plus col-1">
                      <img src={Plus} alt="plus" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-1">
                <img
                  className="removeProduct"
                  width={30}
                  height={30}
                  src={Delete}
                  alt="remove"
                />
              </div>
            </div>

            <div className="orderContent col-9">
              <div className="col-2">
                <img width={119} height={175} src={Clothes3} alt="" />
              </div>
              <div className="col-9">
                <div className="row text-muted">
                  <h3 className="productName">Oversized T-shirt</h3>
                </div>
                <div className="row">
                  <p className="col-3">Color: Dark grey</p>
                  <p className="col-2">Size: M</p>
                </div>
                <div className="row">
                  <p className="newPrice col-2">15.00$</p>
                  <p className="oldPrice col-1">19.00$</p>
                </div>
                <div className="row">
                  <div>
                    <span className="minus col-1">
                      <img src={Minus} alt="minus" />
                    </span>
                    <button className="num">1</button>
                    <span className="plus col-1">
                      <img src={Plus} alt="plus" />
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-1">
                <img
                  className="removeProduct"
                  width={30}
                  height={30}
                  src={Delete}
                  alt="remove"
                />
              </div>
            </div>
          </div>

          <div className="total col-4">
            <h1 className="textH1">total</h1>
            <div className="subColumns ">
              <p className="result col-3 ">Sub-total</p>
              <p className="money col-2 ">109.00 $</p>
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
            <button className="btn-checkout">Checkout</button>
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

export default Basket;
