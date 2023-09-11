import BreadCrumbs from "../../BreadCrumbs/breadCrumbs";
import Footer from "../../Footer/FooterV";
import Header_full from "../../Header_full/Header_full";
import { Link, NavLink } from "react-router-dom";
import "./ProductsPage.css";
import item1 from "../../../images/viewAll_1.png";
import like from "../../../images/like.svg";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { showCategory } from "../../../store/actions/Categories/categoryAction";

import { useLocation } from "react-router-dom";
import { showProducts } from "../../../store/actions/Products/productAction";
import { RootState } from "../../../store/reducers/rootReducer";

const ProductsPage = () => {
  const colors = ["grey", "blue"];

  const location = useLocation().pathname;

  const disp = useDispatch();
  const fetchCat = async () => {
    const response = await axios.get(
      "https://basos.itstep.click/api/Category/getAllCategories"
    );
    disp(showCategory(response.data.payload));
  };

  useEffect(() => {
    fetchCat();
  }, []);

  const cat = useSelector((state: RootState) => state.allCategory.categories);

  const categories = cat.map((category: any) => {
    const { id, name } = category;
    return (
      <Link to={location + "/" + name} key={id}>
        {name}
      </Link>
    );
  });

  const fetchProd = async () => {
    const response = await axios.get(
      "http://localhost:5056/api/Product/GetProducts"
    );
    disp(showProducts(response.data.payload));
  };

  useEffect(() => {
    fetchProd();
  }, []);

  //   const pro = useSelector((state: RootState) => state.allProducts.products);

  //   const prod = pro.map((products: any) => {
  //     const {
  //       id,
  //       name,
  //       price,
  //       discount,
  //       description,
  //       color,
  //       size,
  //       brand,
  //       quantity,
  //       inStock,
  //       isFavourite,
  //       image,
  //       categ,
  //     } = products;
  //     console.log(image);

  //     return (
  //       <div className="itemName">
  //         <div className="itemImg">
  //           <img
  //             className="titleImg"
  //             src={"data:image/jpeg;base64," + `${image}`}
  //           />
  //           <img className="like" src={like} />
  //         </div>

  //         <div className="info">
  //           <p className="headerText" id="name">
  //             {name}
  //           </p>
  //           <p className="headerText" id="price">
  //             {price}$
  //           </p>
  //           <span className="dot" style={{ backgroundColor: color }} />
  //         </div>
  //       </div>
  //     );
  //   });

  return (
    <>
      <Header_full />
      <BreadCrumbs />

      <div className="categors">{categories}</div>

      <div className="prodBlock">
        <Link to="/Prod">{/* <div className="prd">{prod}</div> */}</Link>
      </div>

      <Footer />
    </>
  );
};

export default ProductsPage;
