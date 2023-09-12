import Footer from "../../Footer/FooterV";
import "./style.css";
import BreadCrumbs from "../../BreadCrumbs/breadCrumbs";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Header_full from "../../Header_full/Header_full";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Loader from "../../loader";
import like from "../../../images/like.svg";
import { IItemProduct } from "../../../store/reducers/BasketReducer/types";
const Men = () => {
  var [countShowProduct, setCountShowProduct] = useState(20);



  const { GetAllProductMan } = useActions();
  const { loading, products } = useTypedSelector(
    (store) => store.ProductsReducer
  );
  if (products.length == 0 && loading == false) {
    GetAllProductMan();
  }
  const MoreCountProdcutShow = () => {
    setCountShowProduct(countShowProduct + 20);
  }
  const dataProduct = products.slice(0, countShowProduct).map((item) => {

    return (

      <li key={item.id} className="ulITem">
        <div className="oneItemProduct">
          <div className="likeProductItem">
            <img src={like} className="favourites" alt="favourites" />
          </div>
          <div key={item.mainImage} className="imageProductItem"> <img
            width={272}
            height={402}
            src={`data:image/png;base64,${item.mainImage}`}
            alt=""
          /></div>
          <div key={item.name} className="nameProductItem"><p>{item.name}</p></div>
          <div key={item.price} className="priceProductItem"><p>{item.price} $</p></div>
          <div className="colorProductItem"><span className="red">red</span></div>
        </div>
      </li>

    )
  })


  return (
    <>
      <div>
        <Header_full />
        <BreadCrumbs />

        <div className="content">

          <div className="row">
            <div className="col-2">
              <div className="contentProductTypeInfo">
                <Link to={"newIn"} className="newInTypeInfo" >
                  <span>New in</span>
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
                        <p>5|2 </p>
                      </div>
                      <div className="prodcuttotalItems">
                        <p> {products.length} items</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="itemsProducts">
                <div className="row rowItemsProducts">
                  {loading == true ? <div className="basketLoader">
                    <div className="spinner-border" role="status"></div>
                  </div> : products.length == 0 ? (<>zero</>) : (<ul>{dataProduct}</ul>)}
                </div>
              </div>
              <div className="moreProduct"><button onClick={() => { MoreCountProdcutShow(); }} className="btn">load more</button></div>
            </div>
          </div>

        </div>

      </div>



      <Footer />
    </>
  );
};

export default Men;
