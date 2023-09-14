import "./Favourites.css";
import Header_full from "../../../Header_full/Header_full";
import Footer from "../../../Footer/FooterV";
import Liked from "../../../../images/liked.png";
import Card1 from "../../../../images/favourite_card1.png";
import Card2 from "../../../../images/favourite_card2.png";
import Card3 from "../../../../images/favourite_card3.png";
import Card4 from "../../../../images/favourite_card4.png";
import Card5 from "../../../../images/favourite_card5.png";
import Card6 from "../../../../images/favourite_card6.png";
import userLogo from "../../../../images/user.svg";
import cart from "../../../../images/cart.png";
import like from "../../../../images/liked.png";
import search from "../../../../images/search.svg";
import Logo from "../../../../images/Logo.svg";
import Menu from "../../../NavBar/menu";
import { Link } from "react-router-dom";
import BreadCrumbs from "../../../BreadCrumbs/breadCrumbs";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

const Favourites = () => {
  const { isAuth } = useTypedSelector((store) => store.UserReducer);
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
        <div className="favourites-cards">
          <div className="favourite-card col-2">
            <div className="liked">
              <img src={Liked} alt="" />
            </div>
            <div className="favourite-image">
              <img src={Card1} alt="" />
            </div>
            <p className="questions favourites-title distance">
              Oversized blazer
            </p>
            <div className="row">
              <p className="card-new-price distance col-2">42.00$</p>
              <p className="oldPrice card-old-price col-2">62.00$</p>
            </div>
            <div className="distance ellipse card1"></div>
            <div className="add_to_basket">
              <button className="btn-buy btn-favourites">add to basket</button>
            </div>
          </div>
          <div className="favourite-card col-2">
            <div className="liked">
              <img src={Liked} alt="" />
            </div>
            <div className="favourite-image">
              <img src={Card2} alt="" />
            </div>
            <p className="questions distance favourites-title">
              Linen-blend shirt dress
            </p>
            <p className="distance favourite-price col-2">29.99$</p>
            <div className=" colors ">
              <div className="distance ellipse card2_1"></div>
              <div className="ellipse card2_2"></div>
            </div>
            <div className="add_to_basket">
              <button className="btn-buy btn-favourites">add to basket</button>
            </div>
          </div>
          <div className="favourite-card col-2">
            <div className="liked">
              <img src={Liked} alt="" />
            </div>
            <div className="favourite-image">
              <img src={Card3} alt="" />
            </div>
            <p className="questions distance favourites-title">
              Slim High Jeans
            </p>
            <p className="favourite-price distance col-2">34.99$</p>
            <div className="distance colors ">
              <div className="ellipse card3_1"></div>
              <div className="ellipse card3_2"></div>
            </div>
            <div className="add_to_basket">
              <button className="btn-buy btn-favourites">add to basket</button>
            </div>
          </div>
          <div className="favourite-card col-2">
            <div className="liked">
              <img src={Liked} alt="" />
            </div>
            <div className="favourite-image">
              <img src={Card4} alt="" />
            </div>
            <p className="questions distance favourites-title">
              Flounced shaping swimsuit
            </p>
            <p className="favourite-price distance col-2">29.99$</p>
            <div className=" colors distance ">
              <div className="ellipse card4_1"></div>
              <div className="ellipse card4_2"></div>
              <div className="ellipse card4_3"></div>
            </div>
            <div className="add_to_basket">
              <button className="btn-buy btn-favourites">add to basket</button>
            </div>
          </div>
          <div className="favourite-card col-2">
            <div className="liked">
              <img src={Liked} alt="" />
            </div>
            <div className="favourite-image">
              <img src={Card5} alt="" />
            </div>
            <p className="questions distance favourites-title">
              Oversized T-shirt
            </p>
            <p className="favourite-price distance col-2">19.00$</p>
            <div className="distance colors ">
              <div className="ellipse card5_1"></div>
              <div className="ellipse card5_2"></div>
              <div className="ellipse card5_3"></div>
              <div className="more_color">+1</div>
            </div>
            <div className="add_to_basket">
              <button className="btn-buy btn-favourites">add to basket</button>
            </div>
          </div>

          <div className="favourite-card without-border col-2">
            <div className="liked">
              <img src={Liked} alt="" />
            </div>
            <div className="favourite-image">
              <img src={Card6} alt="" />
            </div>
            <p className="questions distance favourites-title">
              Linen-blend cargo trousers
            </p>
            <p className="favourite-price distance col-2">35.00$</p>
            <div className="distance colors ">
              <div className="ellipse card6_1"></div>
              <div className="ellipse card6_2"></div>
              <div className="ellipse card6_3"></div>
            </div>
            <div className="add_to_basket">
              <button className="btn-buy btn-favourites">add to basket</button>
            </div>
          </div>
          <div className="favourite-card without-border col-2">
            <div className="liked">
              <img src={Liked} alt="" />
            </div>
            <div className="favourite-image">
              <img src={Card6} alt="" />
            </div>
            <p className="questions distance favourites-title">
              Linen-blend cargo trousers
            </p>
            <p className="favourite-price distance col-2">35.00$</p>
            <div className="distance colors ">
              <div className="ellipse card6_1"></div>
              <div className="ellipse card6_2"></div>
              <div className="ellipse card6_3"></div>
            </div>
            <div className="add_to_basket">
              <button className="btn-buy btn-favourites">add to basket</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favourites;
