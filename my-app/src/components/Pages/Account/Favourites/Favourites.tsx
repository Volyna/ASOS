import "./Favourites.css";
import Header_full from "../../../Header_full/Header_full";
import Footer from "../../../Footer/FooterV";
import Liked from "../../../../images/liked.png";
import Card1 from "../../../../images/favourite_card1.png";
import userLogo from "../../../../images/user.svg";
import cart from "../../../../images/cart.png";
import likeProduct from "../../../../images/liked.png";
import like from "../../../../images/favouritesAccept.png";
import search from "../../../../images/search.svg";
import Logo from "../../../../images/Logo.svg";
import Menu from "../../../NavBar/menu";
import { Link, Navigate, useNavigate } from "react-router-dom";
import BreadCrumbs from "../../../BreadCrumbs/breadCrumbs";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";
import { useEffect } from "react";
import { IAddLikeProductOrRemove, IGetLikesProducts } from "../../ManAndWomanPage/types";
import { IItemProductLike } from "../../../../store/reducers/LikeReducer/type";
import { group } from "console";
import { IBasketCreate, IBasketRemove } from "./types";
import { toast } from "react-toastify";

const Favourites = () => {
  const { LogOut, GetProductLikes, DeleteProductLike, CreateBasket, RemoveBasketFromLike, ChangeIsOnBasketLikes } = useActions();
  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector((store) => store.UserReducer);
  const { loader, likesProducts } = useTypedSelector((store) => store.LikeReducer);
  const initLikeGetProduct: IGetLikesProducts = {
    idUser: user.id
  };
  useEffect(() => {
    GetProductLikes(initLikeGetProduct);
  }, []);
  if (isAuth == false) {
    toast.error("First log in to the site", {
      position: toast.POSITION.TOP_RIGHT,
    });
    return <Navigate to={"/login"} />
  }
  const SwitchLike = (e: React.MouseEvent<HTMLImageElement, MouseEvent>, idProduct: number) => {
    var nameClass = (e.target as Element).className;
    const initDataLike: IAddLikeProductOrRemove = {
      idProduct: idProduct,
      idUser: user.id
    }

    DeleteProductLike(initDataLike);

  }
  const AddTobasketProduct = (idProduct: number) => {
    const initDataCreateBasket: IBasketCreate = {
      countProducts: 1,
      userIdOrder: user.id,
      productId: idProduct
    };
    CreateBasket(initDataCreateBasket);
    ChangeIsOnBasketLikes(likesProducts);
  }
  const RemoveFromBasketProduct = (idProduct: number) => {
    const initDataCreateBasket: IBasketRemove = {
      countProducts: 1,
      userIdOrder: user.id,
      productId: idProduct
    };
    RemoveBasketFromLike(initDataCreateBasket);
    ChangeIsOnBasketLikes(likesProducts);
  }
  var dataLikesProduct = likesProducts.map((item, index) => {
    return (
      <li className="col-2 " key={index}>
        <div className="favouriteBorder">
          <div className="likesLi">
            <div className="favouriteCard">
              <div className="likeFavourite">
                <img width={30} height={30} src={likeProduct} onClick={(e) => { SwitchLike(e, item.id) }} className="favourites" alt="favourites" />
              </div>
              <div className="imageFavourite"><img
                width={272}
                height={402}
                src={`data:image/png;base64,${item.mainImage}`}
                alt=""
              /></div>
              <div className="nameFavourite"><p>{item.name}</p></div>
              {item.discount == 0 ?
                <div className="row priceFavourite">
                  <div className="col-5 priceFavouriteCol">
                    <div className="newPriceFavouriteOne"><p>{item.price - item.discount}$</p></div>
                  </div>

                </div>
                : <div className="row priceFavourite">
                  <div className="col-5 priceFavouriteCol"><div className="newPriceFavourite"><p>{item.price - item.discount}$</p></div>
                    <div className="oldPriceFavourite"><p>{item.price}$</p></div></div>

                </div>}

              <div className="colorsFavourite">  </div>
              {item.quantity <= 0 ? <div className="basketBtnFavourite"><button
                style={{ paddingTop: "6px", fontSize: "19px" }}
                className="btnFavourite">The product is out of stock
              </button></div> : <div className="basketBtnFavourite"><button
                onClick={(e) => { if (item.isOnBasket == true) { item.isOnBasket = false; RemoveFromBasketProduct(item.id); } else { item.isOnBasket = true; AddTobasketProduct(item.id) } }}
                className="btnFavourite">
                {item.isOnBasket == true ? "Remove from basket" : "Add to basket"}</button></div>}

            </div>
          </div>
        </div>

      </li>)

  });


  return (
    <>
      <div className="staticnav">
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
              <Link to="/account/contact-information">
                <img src={userLogo} alt="userLogo" className="noneM userLogo" />
              </Link>

              <Link to="/basket">
                <img src={cart} alt="basket" className="noneM " />
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
      <div className="container">
        <div className="menu_item">
          <Link className="account_item" to="/account/contact-information">
            Contact information
          </Link>
          <Link className="account_item" to="/account/shopping-history-empty">
            shopping history
          </Link>
          <Link className="account_item" to="/account/returns-empty">
            returns
          </Link>
          <Link className="account_item main_item " to="/account/favourites">
            favourites
          </Link>
          <Link className="log_out" onClick={LogOut} to="/">
            log out
          </Link>
        </div>
      </div>
      <div style={{ padding: 0 }} className="container-fluid favouritesContent">
        <div className="favouritesCards ">
          <div className="row">

            {loader == true ? <div className="loaderLike">
              <div className="spinner-border" role="status"></div>
            </div> : likesProducts.length == 0 || likesProducts == null ? <div className="favouritesContentIsEmpty"> <p className="basket_text">No items added to favorites.</p>
              <button
                onClick={() => navigate("/")}
                className="btn_continue"
              >
                continue shopping
              </button></div> : <ul>{dataLikesProduct}</ul>}
          </div>
        </div>
      </div >
      <Footer />
    </>
  );
};

export default Favourites;
