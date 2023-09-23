import "./BasketEmpty.css";
import Header from "../../NavBar/header";
import Footer from "../../Footer/FooterV";
import Menu from "../../NavBar/menu";
import BreadCrumbs from "../../BreadCrumbs/breadCrumbs";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Dispatch, useEffect, useState } from "react";
import Plus from "../../../images/plus.png";
import Arrow_down from "../../../images/arrow-down.png";
import Minus from "../../../images/minus.png";
import Delete from "../../../images/delete.png";
import Logo from "../../../images/Logo.svg";
import userLogo from "../../../images/user.svg";
import cart from "../../../images/basketAccept.png";
import like from "../../../images/like.svg";
import search from "../../../images/search.svg";
import Loader from "../../loader";
import { IItemProduct } from "../../../store/reducers/BasketReducer/types";
import {
  BasketActionTypes,
  BasketActions,
} from "../../../store/reducers/BasketReducer/types";
import { getBasketsById } from "../../../services/api-basket-service";
import http from "../../../services/http_common";
import { IBasketRemove } from "../Account/Favourites/types";
import { toast } from "react-toastify";
const BasketEmpty = () => {
  const { isAuth } = useTypedSelector((store) => store.UserReducer);
  const navigate = useNavigate();
  const { GetBasketsByid, AddCountProductBasket, RemoveProductBasket, MinusCountProductBasket } =
    useActions();
  const { isBasketLoading, products } = useTypedSelector(
    (store) => store.BasketReducer
  );
  var [loader, setLouder] = useState(true);
  const { user } = useTypedSelector((store) => store.UserReducer);
  useEffect(() => {
    GetBasketsByid(user.id);
  }, []);
  if (isAuth == false) {
    toast.error("First log in to the site", {
      position: toast.POSITION.TOP_RIGHT,
    });
    return <Navigate to={"/login"} />
  }

  var calculateTotalPrice = () => {
    const totalPrice = products.reduce(
      (total: number, item) =>
        total + (item.price - item.discount) * item.countProducts,
      0
    );
    return totalPrice;
  };
  var plusProduct = (idProduct: number) => {
    var tempArray = products;
    tempArray.forEach((i) => {
      if (i.productId == idProduct && i.countProducts + 1 <= i.quantity) {
        i.countProducts += 1;
      }
    });
    AddCountProductBasket(tempArray);
  };
  var minusProduct = (idProduct: number) => {
    var tempArray = products;
    tempArray.forEach((i) => {
      if (i.productId == idProduct && i.countProducts != 1) {
        i.countProducts -= 1;
      }
    });
    MinusCountProductBasket(tempArray);
  };
  var removeProduct = (idProduct: number) => {
    console.log("removeProduct");
    var result = products.filter((i) => i.productId != idProduct);
    const initDataRemove: IBasketRemove = {
      countProducts: 1,
      userIdOrder: user.id,
      productId: idProduct
    }
    RemoveProductBasket(result, initDataRemove);
  };
  var dataBasket = products.map((item, index) => {
    return (
      <div key={item.productId}>
        <div className="row orderContent">
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
              <h3 className="productName">{item.name}</h3>
            </div>
            <div className="row productInfo">
              <div className="col-2 productInfoColor">
                <p>Color: {item.color}</p>
              </div>

              <div className="col-2 productInfoSize">
                <p style={{ marginRight: "3px" }}> Size:</p>

                <select
                  name="size"
                  id="size_select"
                  className="size_select"
                >
                  {item.size.filter((element, index) => element.indexOf(element) === index).map(size => <option key={size} value={size}>{size}</option>)}

                  {/* <option key={index} value={i}>
                        {i}
                      </option> */}


                </select>
              </div>
            </div>


            {item.discount == 0 ? <div className="row productPrice"><p className="newPrice col-1">
              {(item.price - item.discount) *
                item.countProducts}
              $
            </p></div> : <div className=""> <p className="newPrice col-1">
              {(item.price - item.discount) *
                item.countProducts}
              $
            </p>

              <p className="oldPrice productPriceDiscount col-1">
                {item.price * item.countProducts}$
              </p></div>}


            <div className="row btnBasketProduct">
              <div className="flexDisplay">
                <span
                  className="minus minusImage"
                  onClick={(e) => {
                    minusProduct(item.productId);
                  }}
                >
                  <img src={Minus} alt="minus" />
                </span>
                <button className="btnProductBasket ">
                  <p className="btnProductBasketCount">
                    {item.countProducts}
                  </p>
                </button>
                <span
                  onClick={(e) => {
                    plusProduct(item.productId);
                  }}
                  className="plus plusImage"
                >
                  <img src={Plus} alt="plus" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-1">
            <img
              onClick={(e) => {
                removeProduct(item.productId);
              }}
              className="removeProduct"
              width={30}
              height={30}
              src={Delete}
              alt="remove"
            />
          </div>
        </div>
        <div className="lineBasket" key={index}></div>
      </div>
    );
  });

  return (
    <>
      <div style={{ zIndex: 1 }} className="staticnav">
        <div className="mainblock">
          <div className="first col-3">
            <div className="links">
              <Link className="headerText" to="/customer-service">
                Customer Service
              </Link>
              <Link className="headerText" to="/">
                Shopping Form
              </Link>
            </div>
            <div className="searchItem ">
              <img src={search} />
              <input className="search" />
            </div>
            <div className="line" />
          </div>
          <div className="second col-6">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className="third col-3">
            <div className="links">
              <Link className="headerText" to="/">
                Newsletter
              </Link>
              <Link className="headerText" to="/customer-care">
                FAQs
              </Link>
              <Link className="headerText" to="/">
                More
              </Link>
            </div>

            <div className="userIcons">
              {isAuth == true ? (
                <Link to="/account/contact-information">
                  <img
                    src={userLogo}
                    alt="userLogo"
                    className="noneM userLogo"
                  />
                </Link>
              ) : (
                <Link to="/login">
                  <img
                    src={userLogo}
                    alt="userLogo"
                    className="noneM userLogo"
                  />
                </Link>
              )}

              <Link to="/basket">
                <img src={cart} alt="basket" className="noneM basket" />
              </Link>
              <Link to="/account/favourites">
                <img src={like} className="favourites" alt="favourites" />
              </Link>
            </div>
          </div>
        </div>
        <Menu />
      </div>
      <BreadCrumbs />

      <div className="container-fluid">
        <div className="mainInformation">
          <div className="content col-8">
            {isBasketLoading == true ? (
              <div className="basketLoader">
                <div className="spinner-border" role="status"></div>
              </div>
            ) : (
              <>
                {products.length == 0 || products == null ? (

                  <div className="basketContentIsEmpty"> <p className="basket_text">Ops, your basket is empty(((</p>
                    <button
                      onClick={() => navigate("/")}
                      className="btn_continue"
                    >
                      continue shopping
                    </button></div>

                ) : (
                  dataBasket
                )}
              </>
            )}
          </div>

          <div className="col-1"></div>
          <div className="total col-3">
            <div className="totalText">
              <h1 className="textH1">total</h1>
            </div>

            <div className="subColumns ">
              <p className="result">Sub-total</p>
              <p className="money">{calculateTotalPrice()} $</p>
            </div>
            <div className="subColumns ">
              <p className="result  ">Shipping</p>
              <a href="" className="link">
                Learn more
              </a>
            </div>
            <div className="subColumns">
              <p className="result ">Sales tax</p>
              <a href="" className="link ">
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
            <Link to={"/checkout"}> <button className="btn-buy">checkout</button></Link>
            <div className="standard">
              <p className="shipping">Standard shipping</p>
              <p className="pFaster">
                Faster delivery options available to most countries.
              </p>
            </div>

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
