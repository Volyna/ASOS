import "./BasketEmpty.css";
import Header from "../../NavBar/header";
import Footer from "../../Footer/FooterV";
import Menu from "../../NavBar/menu";
import BreadCrumbs from "../../BreadCrumbs/breadCrumbs";
import { Link, useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useEffect, useState } from "react";
import Plus from "../../../images/plus.png";
import Arrow_down from "../../../images/arrow-down.png";
import Minus from "../../../images/minus.png";
import Delete from "../../../images/delete.png";
import Loader from "../../loader";
const BasketEmpty = () => {
  var [totalPrice, setTotalPrice] = useState(0);
  var [mybasketData, setMyState] = useState<JSX.Element[] | null>(null);
  const navigate = useNavigate();
  const { GetBasketsByid } = useActions();
  const { isBasketLoading, products } = useTypedSelector(
    (store) => store.BasketReducer
  );
  var [productBasket, setProductBasket] = useState(products);
  const { user } = useTypedSelector((store) => store.UserReducer);
  var resultBasketData = productBasket.map((item, index) => {
    return (
      <>
        <div className="orderContent" key={index}>
          <div className="col-2">
            <img
              width={119}
              height={175}
              src={`data:image/png;base64,${item.images}`}
              alt=""
            />
          </div>

          <div className="col-9">
            <div className="row">
              <h3 className="productName">Draped jersey dress</h3>
            </div>
            <div className="row productInfo">
              <p className="col-2 productInfoColor">Color: Black</p>
              <p className="col-2 productInfoSize">Size: M</p>
              <div className="col-1 productInfoArrow">
                <img height={20} width={20} src={Arrow_down} alt="arrow" />
              </div>
            </div>
            <div className="row productPrice">
              <p className="newPrice col-1">{item.price - item.discount}</p>
              <p className="oldPrice productPriceDiscount col-1">
                {item.price}
              </p>
            </div>
            <div className="row btnBasketProduct">
              <div className="flexDisplay">
                <span className="minus ">
                  <img src={Minus} alt="minus" />
                </span>
                <button className="btnProductBasket ">
                  <p className="btnProductBasketCount">1</p>
                </button>
                <span
                  onClick={(e) => {
                    plusProduct(item.productId);
                  }}
                  className="plus "
                >
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
        <div className="lineBasket"></div>
      </>
    );
  });
  useEffect(() => {
    GetBasketsByid(user.id);
    setMyState(resultBasketData);
  }, []);

  var calculateTotalPrice = () => {
    const totalPrice = products.reduce(
      (total: number, item) =>
        total + (item.price - item.discount) * item.countProducts,
      0
    );
    return totalPrice;
  };
  var plusProduct = (idProduct: number) => {
    var prodcutsTemp = productBasket;
    prodcutsTemp[idProduct].countProducts += 1;
    console.log("plusProduct", prodcutsTemp);
    setProductBasket(prodcutsTemp);
  };

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
            {mybasketData == null ? (
              <>
                {" "}
                <p className="basket_text">Ops, your basket is empty(((</p>
                <button onClick={() => navigate("/")} className="btn_continue">
                  continue shopping
                </button>
              </>
            ) : (
              mybasketData
            )}
          </div>
          <div className="total col-4">
            <h1 className="textH1">total</h1>
            <div className="subColumns ">
              <p className="result col-3 ">Sub-total</p>
              <p className="money col-2 ">{calculateTotalPrice()} $</p>
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
