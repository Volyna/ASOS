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
import { isMobile } from "react-device-detect";
import FooterM from "../../Footer/mFooter";

const Men = () => {
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const disp = useDispatch();
  const fetchCat = async () => {
    const response = await axios.get(
      "http://localhost:5056/api/Category/getAllCategories"
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

  if(isMobile){
    return(
    <>
      <Header/>
      <p className="titlePage">man</p>
      <div className="MainblockM">
        <img src={men1}/>
      </div>
      <div className="msection">
          <p className="headerm">must have for this summer!</p>
          <p className="textm">linen section! best choice for everyday comfort</p>
            <button className="mbutton" onClick={() => navigate("/men")}>open</button>
      </div>
      <div className="MainblockM">
        <img src={men2}/>
      </div>
      <div className="blue msection" style={{border:"none"}}>
          <p className="headerm">summer sale</p>
          <p className="textm">up to 50% off!</p>
            <button className="mbutton" style={{border:"2px solid white"}} onClick={() => navigate("/men")}>show more</button>
      </div>
      <div className="Mainblock">
          <img src={men3}/>
          <button className="mbutton">show collection</button>
      </div>

      <div className="msection">
          <p className="headerm">don't miss out on the latest news</p>
          <p className="msmall">Subscribe to our newsletter and be aware of everything, get access to exclusive promotions and even more!</p>
          <input className="minput" placeholder="Enter your e-mail"/>
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

        <FooterM/>
    </>
    );

  }else{
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );}
};

export default Men;
