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
import { MultiSelect } from 'primereact/multiselect';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

const Men = () => {
  const [selectedFilterBy, setSelectedFilterBy] = useState(null);
  const [selectedFilterSize, setSelectedFilterSize] = useState(null);
  const [selectedFilterColor, setSelectedFilterColor] = useState(null);
  var [countShowProduct, setCountShowProduct] = useState(20);
  const { GetAllProductMan, AddProductLike, DeleteProductLike } = useActions();
  const { loading, products } = useTypedSelector(
    (store) => store.ProductsReducer
  );
  useEffect(() => {
    GetAllProductMan();
  }, []);

  const MoreCountProdcutShow = () => {
    setCountShowProduct(countShowProduct + 20);
  }
  const SwitchLike = (e: React.MouseEvent<HTMLImageElement, MouseEvent>, idProduct: number) => {
    var nameClass = (e.target as Element).className;
    if (nameClass == "favourites") {
      (e.target as Element).className = "likeImage";
      AddProductLike(idProduct);
    } else {
      (e.target as Element).className = "favourites";
      DeleteProductLike(idProduct);
    }
    console.log("nameClass: ", nameClass);
  }
  const dataProduct = products.slice(0, countShowProduct).map((item) => {

    return (

      <li key={item.id} className="ulITem">
        <div className="oneItemProduct">
          <div className="likeProductItem">
            <img src={like} onClick={(e) => { SwitchLike(e, item.id); }} className="favourites" alt="favourites" />
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
  const dataFilterBy = [
    { name: "Newest" },
    { name: "Recommended" },
    { name: "Lowest price" },
    { name: "Highest price" },
  ];
  const dataFilterSize = [
    { name: "XS" },
    { name: "S" },
    { name: "M" },
    { name: "L" },
    { name: "XL" },
    { name: "XXL" },
    { name: "XXXL" },
  ];
  const dataFilterColor = [
    { name: "Red" },
    { name: "Orange" },
    { name: "Yellow" },
    { name: "Green" },
    { name: "Blue" },
    { name: "Navy" },
    { name: "Beige" },
    { name: "Gray" },
    { name: "Purple" },
    { name: "Pink" },
    { name: "Turquoise" },
    { name: "Brown" },
    { name: "White" },
    { name: "black" },
    { name: "Multicolor" },
  ];


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
                        <MultiSelect value={selectedFilterBy} onChange={(e) => { setSelectedFilterBy(e.value) }} optionLabel="name" options={dataFilterBy}
                          filter maxSelectedLabels={4} className="filterProdcutSelect" />
                      </div>
                      <div className="FilterProductSize prodcutFlex">
                        <p>size</p>
                        <MultiSelect value={selectedFilterSize} onChange={(e) => { setSelectedFilterSize(e.value) }} optionLabel="name" options={dataFilterSize}
                          filter maxSelectedLabels={7} className="filterProdcutSelect" />
                      </div>
                      <div className="FilterProductColor prodcutFlex">
                        <p>color</p>
                        <MultiSelect value={selectedFilterColor} onChange={(e) => { setSelectedFilterSize(e.value) }} optionLabel="name" options={dataFilterColor}
                          filter maxSelectedLabels={20} className="filterProdcutSelect" />
                      </div>
                      <div className="FilterProductType prodcutFlex">
                        <p>product type</p>
                        <select className="styleArrowSelect">
                          <option value={0}>{null}</option>
                          <option value={2}>2</option>
                        </select>
                      </div>
                      <div className="FilterProductBrand prodcutFlex">
                        <p>brand</p>
                        <select className="styleArrowSelect">
                          <option value={0}>{null}</option>
                          <option value={2}>2</option>
                        </select>
                      </div>
                      <div className="FilterProductOtherFilter prodcutFlex">
                        <p>other filters</p>
                        <select className="styleArrowSelect">
                          <option value={0}>{null}</option>
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
