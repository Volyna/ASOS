import Footer from "../../Footer/FooterV";
import "./style.css";
import "./types";
import BreadCrumbs from "../../BreadCrumbs/breadCrumbs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header_full from "../../Header_full/Header_full";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import Loader from "../../loader";
import like from "../../../images/like.svg";
import men1 from "../../../images/men1.png";
import men2 from "../../../images/men2.png";
import men3 from "../../../images/men3.png";
import menItem1 from "../../../images/menItem1.png";
import menItem2 from "../../../images/menItem2.png";
import menItem3 from "../../../images/menItem3.png";
import menItem4 from "../../../images/menItem4.png";
import menItem5 from "../../../images/menItem5.png";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
//left panel Cat
import { PanelMenu } from "primereact/panelmenu";
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import { IAddLikeProductOrRemove } from "./types";
import { isMobile } from "react-device-detect";
import FooterM from "../../Footer/mFooter";
import Menu from "../../NavBar/menu";
import Header from "../../NavBar/header";
const Men = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [selectedFilterBy, setSelectedFilterBy] = useState([]);
  const [selectedFilterSize, setSelectedFilterSize] = useState(null);
  const [selectedFilterColor, setSelectedFilterColor] = useState(null);
  const [selectedFilterBand, setSelectedFilterBand] = useState(null);
  const [selectedFilterProductType, setSelectedFilterProductType] = useState(null);
  var [countShowProduct, setCountShowProduct] = useState(20);
  const { GetAllProductMan, AddProductLike, DeleteProductLike } = useActions();
  const { loadingProductMan, productsMan } = useTypedSelector(
    (store) => store.ProductsReducer
  );
  const { user } = useTypedSelector(
    (store) => store.UserReducer
  );

  useEffect(() => {
    GetAllProductMan(user.id);
  }, []);
  if (isMobile) {
    return (
      <>
        <Header />
        <p className="titlePage">man</p>
        <div className="MainblockM">
          <img src={men1} />
        </div>
        <div className="msection">
          <p className="headerm">must have for this summer!</p>
          <p className="textm">linen section! best choice for everyday comfort</p>
          <button className="mbutton" onClick={() => navigate("/men")}>open</button>
        </div>
        <div className="MainblockM">
          <img src={men2} />
        </div>
        <div className="blue msection" style={{ border: "none" }}>
          <p className="headerm">summer sale</p>
          <p className="textm">up to 50% off!</p>
          <button className="mbutton" style={{ border: "2px solid white" }} onClick={() => navigate("/men")}>show more</button>
        </div>
        <div className="Mainblock">
          <img src={men3} />
          <button className="mbutton">show collection</button>
        </div>

        <div className="msection">
          <p className="headerm">don't miss out on the latest news</p>
          <p className="msmall">Subscribe to our newsletter and be aware of everything, get access to exclusive promotions and even more!</p>
          <input className="minput" placeholder="Enter your e-mail" />
          <button className="mbutton subs" onClick={() => navigate("/men")}>Subscribe</button>
        </div>

        <div className="ItemsM">
          <div className="item">
            <img src={menItem1} />
            <p className="itemName">Shorts</p>
          </div>

          <div className="item">
            <img src={menItem2} />
            <p className="itemName">Cardigans & jackets</p>
          </div>

          <div className="item">
            <img src={menItem3} />
            <p className="itemName">Linen shorts</p>
          </div>

          <div className="item">
            <img src={menItem4} />
            <p className="itemName">T-shirt</p>
          </div>
        </div>

        <FooterM />
      </>
    );
  }

  const MoreCountProdcutShow = () => {
    setCountShowProduct(countShowProduct + 20);
  }
  const SwitchLike = (e: React.MouseEvent<HTMLImageElement, MouseEvent>, idProduct: number) => {
    var nameClass = (e.target as Element).className;
    const initDataLike: IAddLikeProductOrRemove = {
      idProduct: idProduct,
      idUser: user.id
    }

    if (nameClass == "favourites") {
      (e.target as Element).className = "likeImage";

      AddProductLike(initDataLike);
    } else {
      (e.target as Element).className = "favourites";
      DeleteProductLike(initDataLike);
    }
    console.log("nameClass: ", nameClass);
  }
  const dataProduct = productsMan.slice(0, countShowProduct).map((item) => {

    return (

      <li key={item.id} >
        <div className="">
          <div className="oneItemProduct">
            <div className="likeProductItem">
              <img src={like} style={{}} onClick={(e) => { SwitchLike(e, item.id); }} className={item.isLikeUser === true ? "likeImage" : "favourites"} alt="favourites" />
            </div>
            <div key={item.mainImage} className="imageProductItem"> <img
              width={272}
              height={402}
              src={`data:image/png;base64,${item.mainImage}`}
              alt=""
            /></div>
            <div key={item.name} className="nameProductItem"><p>{item.name}</p></div>
            <div key={item.price} className="priceProductItem"><p>{item.price} $</p></div>
            <div className="colorProductItem">

              {item.color.length > 3 ?
                item.color.slice(0, 3).map(item => <span style={{ background: item }} className="circleProduct" />)
                : null}
              {item.color.length > 3 ? "+" + item.color.length : null}

            </div>
          </div>
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
  const dataFilterProductType = [
    { name: "Swimwear" },
    { name: "Tops" },
    { name: "T-shirts" },
    { name: "Dresses" },
    { name: "Skirts" },
    { name: "Shorts" },
    { name: "Jeans" },
    { name: "Trousers" },
    { name: "Cardigans" },
    { name: "Jackets" },
    { name: "Hoodies" },
    { name: "Sweaters" },
    { name: "Shoes" },
  ];
  const dataFilterColor = [
    { name: "Topshop" },
    { name: "Nike" },
    { name: "Adidas" },
    { name: "Breshka" },
    { name: "Pull & Bear" },
    { name: "Stradivalius" },
    { name: "Monki" },
    { name: "The North Face" },
    { name: "Converse" },
    { name: "River Island" },
  ];
  const dataFilterBand = [
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

  const colorsTemplate = (option: any) => {
    return (<div style={{ display: "flex", alignItems: "center" }}>
      <span className="colorEllipse"></span>
      <div>{option.name}</div>
    </div>);
  };
  const sortByTemplate = (option: any) => {
    return (<div onClick={(e) => { console.log("Clik", option.name) }} style={{ display: "flex", alignItems: "center" }}>
      {option.name}
    </div>);
  };
  const items = [
    {
      label: "New in",
      items: [
        {
          label: 'View all',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
          // }

        },
        {
          label: 'Clothing',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Shoes',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Accessories',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Face & Body',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
      ]
    },
    {
      label: "sale",
      items: [
        { label: "View al" },
        { label: "Tops & T-shirts" },
        { label: "Two-piece sets" },
        { label: "Pants & Leggings" },
        { label: "Shorts" },
        { label: "Activewear" },
        { label: "Coats & Jackets" },
        { label: "Hoodies & Sweatshirts" },
        { label: "Jeans $ Trousers" },
        { label: "Sweaters & Cardigans" },
        { label: "Sneakers" },
        { label: "Hats" },
        { label: "Scarves" },


      ]
    },
    {
      label: "clothing",
      items: [
        {
          label: 'View all',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated', life: 3000 });
          // }

        },
        {
          label: 'New in',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Tops & T-shirts',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Two-piece sets',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Shorts',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Swimwear & Beachwear',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Activewear',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Coats & Jackets',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Jeans & Trousers',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Sweaters & Cardigans',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Nightwear & Loungewear',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Multipacks',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Socks',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Suits',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
        {
          label: 'Plus size',
          icon: 'dropMenuItemProduct',
          // command: () => {
          //     this.toast.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted', life: 3000 });
          // }
        },
      ]
    },
    {
      label: "shoes",
      items: [
        { icon: 'dropMenuItemProduct', label: "View all" },
        { icon: 'dropMenuItemProduct', label: "New in" },
        { icon: 'dropMenuItemProduct', label: "Sneakers" },
        { icon: 'dropMenuItemProduct', label: "Sandals" },
        { icon: 'dropMenuItemProduct', label: "Boots" },
        { icon: 'dropMenuItemProduct', label: "Loafers" },
        { icon: 'dropMenuItemProduct', label: "Mules" },
      ]

    },
    {
      label: "Accessories",
      items: [
        { icon: 'dropMenuItemProduct', label: "View all" },
        { icon: 'dropMenuItemProduct', label: "New in" },
        { icon: 'dropMenuItemProduct', label: "Synglasses" },
        { icon: 'dropMenuItemProduct', label: "Belts" },
        { icon: 'dropMenuItemProduct', label: "Caps" },
        { icon: 'dropMenuItemProduct', label: "Bucket Hats" },
        { icon: 'dropMenuItemProduct', label: "Hats" },
        { icon: 'dropMenuItemProduct', label: "Socks & Tights" },
        { icon: 'dropMenuItemProduct', label: "Scarves" },
        { icon: 'dropMenuItemProduct', label: "Gifts" },
      ]
    },
    {
      label: "Face&Body",
      items: [
        { icon: 'dropMenuItemProduct', label: "View all" },
        { icon: 'dropMenuItemProduct', label: "New in" },
        { icon: 'dropMenuItemProduct', label: "Makeup" },
        { icon: 'dropMenuItemProduct', label: "Skin care" },
        { icon: 'dropMenuItemProduct', label: "Body cate" },
        { icon: 'dropMenuItemProduct', label: "Hair care" },
        { icon: 'dropMenuItemProduct', label: "Tools & Accessories" },
        { icon: 'dropMenuItemProduct', label: "Suncare & Tanning" },
        { icon: 'dropMenuItemProduct', label: "Gifts" },
        { icon: 'dropMenuItemProduct', label: "Wellness" },
        { icon: 'dropMenuItemProduct', label: "Minis" },
      ]
    },
    {
      label: "BRANDS",
      items: [
        { icon: 'dropMenuItemProduct', label: "Topshop" },
        { icon: 'dropMenuItemProduct', label: "Nike" },
        { icon: 'dropMenuItemProduct', label: "Adidas" },
        { icon: 'dropMenuItemProduct', label: "Bershka" },
        { icon: 'dropMenuItemProduct', label: "Pull & Bear" },
        { icon: 'dropMenuItemProduct', label: "Stradivarius" },
        { icon: 'dropMenuItemProduct', label: "Monki" },
        { icon: 'dropMenuItemProduct', label: "The North Face" },
        { icon: 'dropMenuItemProduct', label: "Converse" },
        { icon: 'dropMenuItemProduct', label: "River Island" },
      ]
    },
    {
      label: "OUTLET",
      items: [
        { icon: 'dropMenuItemProduct', label: "View all" },
        { icon: 'dropMenuItemProduct', label: "Top & T-shirts" },
        { icon: 'dropMenuItemProduct', label: "Dresses & Skirts" },
        { icon: 'dropMenuItemProduct', label: "Pants & Leggings" },
        { icon: 'dropMenuItemProduct', label: "Shorts" },
        { icon: 'dropMenuItemProduct', label: "Swimwear & Beachwear" },
        { icon: 'dropMenuItemProduct', label: "Activewear" },
        { icon: 'dropMenuItemProduct', label: "Coats & Jackets" },
        { icon: 'dropMenuItemProduct', label: "Hoodies & Sweatshirts" },
        { icon: 'dropMenuItemProduct', label: "Jeans $ Trousers" },
        { icon: 'dropMenuItemProduct', label: "Sweaters & Cardigans" },
        { icon: 'dropMenuItemProduct', label: "Lingerie & Sleepwear" },
        { icon: 'dropMenuItemProduct', label: "Shirts & Blouses" },
        { icon: 'dropMenuItemProduct', label: "Socks & Tights" },
        { icon: 'dropMenuItemProduct', label: "Suits" },
        { icon: 'dropMenuItemProduct', label: "Accessories" },
        { icon: 'dropMenuItemProduct', label: "Bags & Purses" },
        { icon: 'dropMenuItemProduct', label: "Designer brands" },
        { icon: 'dropMenuItemProduct', label: "Jewelry & Watches" },
        { icon: 'dropMenuItemProduct', label: "Face + Body" },
        { icon: 'dropMenuItemProduct', label: "Shoes" },
        { icon: 'dropMenuItemProduct', label: "Gifts" },
      ]
    },
    {
      label: "MARKETPLACE",
      items: [
        { icon: 'dropMenuItemProduct', label: "View all" },
        { icon: 'dropMenuItemProduct', label: "Bags" },
      ]
    }

  ];
  const getSortBy = () => {
    console.log("selectedFilterBy.length: ", selectedFilterBy.length)
    if (selectedFilterBy.length != 0) {
      var nameSort = selectedFilterBy[0];
      console.log("getSortBy: ", nameSort)
    }
  }

  return (
    <>
      <div>
        <Header_full />
        <BreadCrumbs />

        <div className="content">

          <div className="row">
            <div className="col-2">
              <div className="contentProductNavBar">
                <div className="contentProductNavBarSecond">
                  <div className="contentCategoryTypeInfo">
                    <PanelMenu model={items} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-10">
              <div className="titleProductInfo">
                <h5>view all</h5>
              </div>
              <div className="FilterProductInfo">
                <div className="row filterProductRow">
                  <div className="col-8">
                    <div className="FilterProduct">
                      <div className="FilterProductSortBy prodcutFlex">
                        <p>sort by</p>
                        <MultiSelect
                          selectionLimit={1}
                          value={selectedFilterBy}
                          onChange={(e) => {
                            setSelectedFilterBy(e.value);
                          }}
                          itemTemplate={sortByTemplate}
                          optionLabel="name"
                          options={dataFilterBy}
                          maxSelectedLabels={1} className="filterProdcutSelect" />
                      </div>
                      <div className="FilterProductSize prodcutFlex">
                        <p>size</p>
                        <MultiSelect value={selectedFilterSize} onChange={(e) => { setSelectedFilterSize(e.value) }} optionLabel="name" options={dataFilterSize}
                          filter maxSelectedLabels={7} className="filterProdcutSelect" />
                      </div>
                      <div className="FilterProductColor prodcutFlex">
                        <p>color</p>
                        <MultiSelect value={selectedFilterColor} options={dataFilterColor}
                          onChange={(e) => { setSelectedFilterProductType(e.value) }}
                          optionLabel="name"
                          itemTemplate={colorsTemplate}
                          filter maxSelectedLabels={20} className="filterProdcutSelect" />
                      </div>
                      <div className="FilterProductType prodcutFlex">
                        <p>product type</p>
                        <MultiSelect value={selectedFilterProductType} options={dataFilterProductType}
                          onChange={(e) => { setSelectedFilterColor(e.value) }}
                          optionLabel="name"
                          filter maxSelectedLabels={20} className="filterProdcutSelect" />
                      </div>
                      <div className="FilterProductBrand prodcutFlex">
                        <p>brand</p>
                        <MultiSelect value={selectedFilterBand} options={dataFilterBand}
                          onChange={(e) => { setSelectedFilterBand(e.value) }}
                          optionLabel="name"
                          filter maxSelectedLabels={20} className="filterProdcutSelect" />
                      </div>
                      <div className="FilterProductOtherFilter prodcutFlex">
                        <p>other filters</p>
                        <select className="styleArrowSelect">

                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-1">
                    <div className="productCountPage">
                      <div className="prodcuttotaPage">
                        <p>5|2 </p>
                      </div>
                      <div className="prodcuttotalItems">
                        <p>{productsMan.length} items</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="itemsProducts">
                <div className="rowItemsProducts">
                  {loadingProductMan == true ? <div className="basketLoader">
                    <div className="spinner-border" role="status"></div>
                  </div> : productsMan.length == 0 ? null : (<ul>{dataProduct}</ul>)}
                </div>
              </div>
              {loadingProductMan == true || productsMan.length == 0 ? null : <div className="moreProduct"><button onClick={() => { MoreCountProdcutShow(); }} className="btn">load more</button></div>}

            </div>
          </div>

        </div>

      </div>



      <Footer />
    </>
  );
};

export default Men;
