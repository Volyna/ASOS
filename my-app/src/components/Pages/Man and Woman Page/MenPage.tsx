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
import { DropdownList } from "react-widgets/cjs";
import Select from "react-select";
const Men = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="staticnav">
        <Header />
        <Menu />
      </div>

      <BreadCrumbs />
      <div className="content">
        <div className="row">
          <div className="col-2">
            <div className="contentProductTypeInfo">
              <Link to={"newIn"}>
                <h1 className="newInTypeInfo">New in</h1>
              </Link>
              <ul>
                <Link to="ViewAll">
                  <span>View all</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Clothing</span>
                </Link>
              </ul>
              <ul>
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
                  <span>Activewear</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Tops</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Face + Body</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Accessories</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Skirts</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Shorts</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Lingerie and Nightwear</span>
                </Link>
              </ul>
            </div>
            <div className="contentCategoryTypeInfo">
              <ul>
                <Link to="ViewAll">
                  <span>View all</span>
                </Link>
              </ul>
              <ul>
                <Link to="ViewAll">
                  <span>Clothing</span>
                </Link>
              </ul>
              <ul>
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
