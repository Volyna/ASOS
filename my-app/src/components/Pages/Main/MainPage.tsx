import Header from "../../NavBar/header";
import "./style.css";
import main1 from "../../../images/main1.png";
import main2 from "../../../images/main2.png";
import main3 from "../../../images/main3.png";
import item1 from "../../../images/item2.png";
import item2 from "../../../images/item1.png";
import item3 from "../../../images/item3.png";
import item4 from "../../../images/item4.png";
import main_1 from "../../../images/main_1.png"
import main_2 from "../../../images/main_2.png"
import main_3 from "../../../images/main_3.png"
import main_4 from "../../../images/main_4.png"
import main_5 from "../../../images/main_5.png"

import man from "../../../images/man.png";
import woman from "../../../images/woman.png";
import Footer from "../../Footer/FooterV";
import FooterM from "../../Footer/mFooter";
import { Link, useNavigate } from "react-router-dom";
import { isMobile } from "react-device-detect"
import { useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const MainPage = () => {
  const navigate = useNavigate();

  const { productsMan, loadingProductMan, productsWoman } = useTypedSelector(
    (store) => store.ProductsReducer
  );
  const { GetAllProductMan, GetAllProductWomen } = useActions();
  const { user } = useTypedSelector(
    (store) => store.UserReducer
  );
  useEffect(() => {
    if (productsMan.length == 0 && loadingProductMan == false) {
      GetAllProductMan(user.id);
    } else if (productsWoman.length == 0 && loadingProductMan == false) {
      GetAllProductWomen(user.id);
    }
    // GetAllProductMan();
  }, []);

  if (isMobile) {
    return (
      <>
        <Header />
        <div className="Mainblock">
          <img src={main_1} />
          <button className="mbutton">Shop now</button>
        </div>
        <div className="msection">
          <p className="headerm">new arrivals</p>
          <p className="textm">meet this summer stylishly with focus</p>
          <div className="mbuttons">
            <button className="womenbtn mbutton" onClick={() => navigate("/women")}>Women</button>
            <button className="menbtn mbutton" onClick={() => navigate("/men")}>Men</button>
          </div>
        </div>

        <div className="MainblockM">
          <img src={main_2} />
          <button className="mbutton">woman</button>
        </div>

        <div className="MainblockM">
          <img src={main_3} />
          <button className="mbutton">man</button>
        </div>

        <div className="MainblockM">
          <p className="headerm">new vintage inspired collection</p>
          <img src={main_4} />
          <button className="mbutton">show more</button>
        </div>

        <div className="msection black">
          <p className="headerm">summer sale</p>
          <p className="textm">up to 50% off!</p>
          <div className="mbuttons">
            <button className="womenbtn mbutton" onClick={() => navigate("/women")}>Women</button>
            <button className="menbtn mbutton" onClick={() => navigate("/men")}>Men</button>
          </div>
        </div>

        <div className="MainblockM">
          <img src={main_5} />
          <button className="mbutton">sunglasses</button>
        </div>

        <div className="msection">
          <p className="headerm">linen clothes collection</p>
          <p className="textm">get ready for sun and warmer temperatures with us</p>
          <div className="mbuttons">
            <button className="womenbtn mbutton" onClick={() => navigate("/women")}>Women</button>
            <button className="menbtn mbutton" onClick={() => navigate("/men")}>Men</button>
          </div>
        </div>

        <div className="ItemsM">
          <div className="item">
            <img src={item1} />
            <p className="itemName">Summer pajamas</p>
          </div>

          <div className="item">
            <img src={item2} />
            <p className="itemName">Shorts</p>
          </div>

          <div className="item">
            <img src={item3} />
            <p className="itemName">Summer dresses</p>
          </div>

          <div className="item">
            <img src={item4} />
            <p className="itemName">Linen trousers</p>
          </div>
        </div>


        <FooterM />
      </>
    )

  } else {
    return (
      <>
        <Header />
        <div className="Mainblock">
          <img src={main1} alt="mainImage" />
        </div>
        <div className="section">
          <p className="header">new arrivals</p>
          <p className="text">meet this summer stylishly with focus</p>
          <div className="wbuttons">
            <button
              className="womenbtn buttons"
              onClick={() => navigate("/women")}
            >
              Women
            </button>
            <button className="menbtn buttons" onClick={() => navigate("/men")}>
              Men
            </button>
          </div>
        </div>
        {/* <div className="section">
                <p className="header">HOLIDAY SHOP! </p>
                <p className="text">Get ready for sun and warmer temperatures with us</p>
                <button className="buttons">Show more</button>
            </div> */}
        <div className="genres">
          <div className="women col-6">
            <img src={woman} />
            <button
              className=" womenbtn buttons"
              onClick={() => navigate("/women")}
            >
              Women
            </button>
          </div>

          <div className="men col-6">
            <img src={man} />
            <button className="menbtn buttons" onClick={() => navigate("/men")}>
              Men
            </button>
          </div>
        </div>
        <div className="Mainblock">
          <p className="header">New vintage inspired collection</p>
          <img src={main2} alt="mainImage" />
          <button className="buttons">Show more</button>
        </div>
        <div className=" red section">
          <p className="header white">summer sale</p>
          <p className="text white">Up to 50% off!</p>
          <div className="wbuttons">
            <button className="buttons trans" onClick={() => navigate("/women")}>
              Women
            </button>
            <button className="buttons trans" onClick={() => navigate("/men")}>
              Men
            </button>
          </div>
        </div>
        <div className="Mainblock">
          <p className="header">complete your look with bright details!</p>
          <img src={main3} alt="sunglasses" />
          <button className="buttons">sunglasses</button>
        </div>
        <div className="section">
          <p className="header">Linen clothes collection!</p>
          <p className="text">
            Get ready for sun and warmer temperatures with us
          </p>
          <div className="wbuttons">
            <button
              className="womenbtn buttons"
              onClick={() => navigate("/women")}
            >
              Women
            </button>
            <button className="menbtn buttons" onClick={() => navigate("/men")}>
              Men
            </button>
          </div>
        </div>
        <div className="items">
          <div className="item">
            <img src={item1} />
            <p className="itemName">Summer pajamas</p>
          </div>

          <div className="item">
            <img src={item2} />
            <p className="itemName">Shorts</p>
          </div>

          <div className="item">
            <img src={item3} />
            <p className="itemName">Summer dresses</p>
          </div>

          <div className="item">
            <img src={item4} />
            <p className="itemName">Linen trousers</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
};

export default MainPage;
