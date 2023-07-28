import "./Header_full.css";
import { Link } from "react-router-dom";
import Logo_main from "../../images/logo_main.png";
import Header from "../NavBar/header";
import Search from "../../images/search.png";
import User from "../../images/user.png";
import Cart from "../../images/cart.png";
import Like from "../../images/like.png";
import { Container } from "@mui/material";

const Header_full = () => {
  return (
    <>
      <Header />
      <header className="header">
        <div className="container-fluid">
          {/* <div className="menu_wrapper">
            <ul className="leftColumn">
              <li>
                <a className="headerText customerService" href="#">
                  Customer Service
                </a>
              </li>
              <li>
                <a className="headerText" href="#">
                  Shopping Form
                </a>
              </li>
            </ul>
            <ul className="rightColumn">
              <li>
                {" "}
                <a className="headerText indent" href="#">
                  Newsletter
                </a>
              </li>
              <li>
                {" "}
                <a className="headerText indent" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a className="headerText indent more" href="#">
                  More
                </a>
              </li>
            </ul>
          </div>
          <div className="icons">
            <div className="searchItem ">
              <input className="search" type="search" />
            </div>
            <div className="logo">
              <h1>
                <Link to={"/"}>
                  <img
                    alt="ASOS Logo"
                    height={80}
                    width={259}
                    src={Logo_main}
                  />
                </Link>
              </h1>
            </div>
            <div className="userIcons">
              <Link to="/">
                <img src={User} alt="" />
              </Link>
              <Link to="/">
                <img src={Cart} alt="" className="iconsHeader" />
              </Link>
              <Link to="/">
                <img src={Like} alt="" className="iconsHeader" />
              </Link>
            </div>
          </div> */}

          <div className="categories">
            <a className="items" href="#">
              Women
            </a>
            <a className="items" href="#">
              New in
            </a>
            <a className="items" href="#">
              Sale
            </a>
            <a className="items" href="#">
              Clothing
            </a>
            <a className="items" href="#">
              Shoes
            </a>
            <a className="items" href="#">
              Accessories
            </a>
            <a className="items" href="#">
              Face & Body
            </a>
            <a className="items" href="#">
              Brands
            </a>
            <a className="items" href="#">
              Outlet
            </a>
            <a className="items" href="#">
              Marketplace
            </a>
            <a className="items" href="#">
              Men
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header_full;
