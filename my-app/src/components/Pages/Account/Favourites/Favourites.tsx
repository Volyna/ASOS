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
import { Link } from "react-router-dom";
import { Card } from "@mui/material";

const Favourites = () => {
  return (
    <>
      <Header_full />
      <div className="container-fluid">
        <div className="mainLink">
          <p className="focusCom">focus.com | Account |</p>
          <p className="focusCom basket">Favourites</p>
        </div>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favourites;
