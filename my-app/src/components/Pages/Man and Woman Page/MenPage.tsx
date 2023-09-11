import Header from "../../NavBar/header";
import Menu from "../../NavBar/menu";
import Footer from "../../Footer/FooterV";
import Breadcrumbs from "../../BreadCrumbs/breadCrumbs";
import "./style.css";
import BreadCrumbs from "../../BreadCrumbs/breadCrumbs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import men1 from "../../../images/men1.png";
import men2 from "../../../images/men2.png";
import men3 from "../../../images/men3.png";
import menItem1 from "../../../images/menItem1.png";
import menItem2 from "../../../images/menItem2.png";
import menItem3 from "../../../images/menItem3.png";
import menItem4 from "../../../images/menItem4.png";
import menItem5 from "../../../images/menItem5.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { showCategory } from "../../../store/actions/Categories/categoryAction";
import { AnyARecord } from "dns";
import { store } from "../../../store";
import { RootState } from "../../../store/reducers/rootReducer";
import { NavigateBefore } from "@mui/icons-material";

const Men = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  return (
    <>
      <div className="staticnav">
        <Header />
        <Menu />
      </div>

      <BreadCrumbs />

      <div className="categors">{categories}</div>

      <p className="title">MEN</p>

      <div className="menBlock">
        <img src={men1} alt="mainImage" />
        <div className="section">
          <p className="header">Must have for this summer!</p>
          <p className="text">
            linen section! best choice for everyday comfort{" "}
          </p>
          <button className="menbtn buttons" onClick={() => navigate("/women")}>
            Open
          </button>
        </div>

        <img src={men2} alt="mainImage" />

        <div className=" blue section">
          <p className="header white">summer sale</p>
          <p className="text white">Up to 50% off!</p>
          <button className="buttons " onClick={() => navigate("/men")}>
            Men
          </button>
        </div>

        <img src={men3} alt="mainImage" />

        <button className="menbtn buttons" onClick={() => navigate("/ViewAll")}>
          show collection
        </button>

        <div className="section">
          <p className="header">don't miss out on the latest news </p>

          <div className="spam">
            <p className="text left">
              Subscribe to our newsletter and be aware of everything, get access
              to exclusive promotions and even more!
            </p>
            <input></input>
            <button
              className="menbtn buttons"
              onClick={() => navigate("/women")}
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="items">
          <div className="item">
            <img src={menItem1} />
            <p className="itemName">Summer pajamas</p>
          </div>

          <div className="item">
            <img src={menItem2} />
            <p className="itemName">Shorts</p>
          </div>

          <div className="item">
            <img src={menItem3} />
            <p className="itemName">Summer dresses</p>
          </div>

          <div className="item">
            <img src={menItem4} />
            <p className="itemName">Linen trousers</p>
          </div>

          <div className="item">
            <img src={menItem5} />
            <p className="itemName">Linen trousers</p>
                <Link to="ViewAll">
                  <span>Dresses</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Shoes</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Accessories</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Face&Body</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Topshop</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Sportswear</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Brands</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Outlet</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Marketplace</span>
                </Link>
              </ul>
            </div>
          </div>
          <div className="col-10">
            <div className="titleProductInfo">
              <h5>view all</h5>
            </div>
            <div className="FilterProductInfo">
              <div className="row filterProductRow">
                <div className="col-10">
                  <div className="FilterProduct">
                    <div className="FilterProductSortBy prodcutFlex">
                      <p>sort by</p>
                      <select>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                      </select>
                    </div>
                    <div className="FilterProductSize prodcutFlex">
                      <p>size</p>
                      <select>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                      </select>
                    </div>
                    <div className="FilterProductColor prodcutFlex">
                      <p>color</p>
                      <select>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                      </select>
                    </div>
                    <div className="FilterProductType prodcutFlex">
                      <p>product type</p>
                      <select>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                      </select>
                    </div>
                    <div className="FilterProductBrand prodcutFlex">
                      <p>brand</p>
                      <select>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                      </select>
                    </div>
                    <div className="FilterProductOtherFilter prodcutFlex">
                      <p>other filters</p>
                      <select>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-2">
                  <div className="productCountPage">
                    <div className="prodcuttotaPage">
                      <p>5|2</p>
                    </div>
                    <div className="prodcuttotalItems">
                      <p>113 items</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Men;
