import Header from "../../NavBar/header";
import Menu from "../../NavBar/menu";
import Footer from "../../Footer/FooterV";
import Breadcrumbs from "../../BreadCrumbs/breadCrumbs";
import "./style.css";
import BreadCrumbs from "../../BreadCrumbs/breadCrumbs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import women1 from "../../../images/women1.png";
import women2 from "../../../images/women2.png";
import women3 from "../../../images/women3.png";
import womenItem1 from "../../../images/womenItem1.png";
import womenItem2 from "../../../images/womenItem2.png";
import womenItem3 from "../../../images/womenItem3.png";
import womenItem4 from "../../../images/womenItem4.png";
import womenItem5 from "../../../images/womenItem5.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { showCategory } from "../../../store/actions/Categories/categoryAction";
import { RootState } from "../../../store/reducers/rootReducer";
import { isMobile } from "react-device-detect";
import FooterM from "../../Footer/mFooter";

const BeforeWomenPage = () => {
    const navigate = useNavigate();
    const location = useLocation().pathname;

    // const disp = useDispatch();
    // const fetchCat = async () => {
    //   const response = await axios.get(
    //     "http://localhost:5056/api/Category/getAllCategories"
    //   );
    //   disp(showCategory(response.data.payload));
    // };

    // useEffect(() => {
    //   fetchCat();
    // }, []);

    // const cat = useSelector((state: RootState) => state.allCategory.categories);

    // const categories = cat.map((category: any) => {
    //   const { id, name } = category;
    //   return (
    //     <Link to={location + "/" + name} key={id}>
    //       {name}
    //     </Link>
    //   );
    // });

    if (isMobile) {
        return (
            <>
                <Header />
                <div className="">
                    <p className="titlePage">woman</p>

                </div>
                <div className="MainblockM">
                    <img src={women1} />
                </div>
                <div className="msection">
                    <p className="headerm">holiday shop!</p>
                    <p className="textm">swimwear section! incredible clothes for incredible women  </p>
                    <button className="mbutton" onClick={() => navigate("/women/viewAll")}>view items</button>
                </div>
                <div className="MainblockM">
                    <img src={women2} />
                </div>
                <div className="red msection" style={{ border: "none" }}>
                    <p className="headerm">summer sale</p>
                    <p className="textm">up to 50% off!</p>
                    <button className="mbutton" style={{ border: "2px solid white", backgroundColor: "#F05B53", color: "white" }} onClick={() => navigate("/women")}>show more</button>
                </div>
                <div className="Mainblock">
                    <img src={women3} />
                    <button className="mbutton">show collection</button>
                </div>

                <div className="msection">
                    <p className="headerm">don't miss out on the latest news</p>
                    <p className="msmall">Subscribe to our newsletter and be aware of everything, get access to exclusive promotions and even more!</p>
                    <input className="minput" placeholder="Enter your e-mail" />
                    <button className="mbutton subs" onClick={() => navigate("/women/viewAll")}>Subscribe</button>
                </div>

                <div className="ItemsM">
                    <div className="item">
                        <img src={womenItem1} />
                        <p className="itemName">Summer pajamas</p>
                    </div>

                    <div className="item">
                        <img src={womenItem2} />
                        <p className="itemName">Beachwear</p>
                    </div>

                    <div className="item">
                        <img src={womenItem3} />
                        <p className="itemName">Jeans & Trousers</p>
                    </div>

                    <div className="item">
                        <img src={womenItem4} />
                        <p className="itemName">swimwear</p>
                    </div>
                </div>

                <FooterM />
            </>

        );
    } else {

        return (
            <>
                <div className="staticnav">
                    <Header />
                    <Menu />
                </div>

                <BreadCrumbs />



                <p className="title">WOMEN</p>

                <div className="menBlock">
                    <img src={women1} alt="mainImage" />
                    <div className="section">
                        <p className="header">Must have for this summer!</p>
                        <p className="text">
                            linen section! best choice for everyday comfort{" "}
                        </p>
                        <button
                            className="womenbtn buttons"
                            onClick={() => navigate("/women/viewAll")}
                        >
                            view swimwear
                        </button>
                    </div>

                    <img src={women2} alt="mainImage" />

                    <div className="red section">
                        <p className="header white">summer sale</p>
                        <p className="text white">Up to 50% off!</p>
                        <button className="buttons trans" onClick={() => navigate("/women/viewAll")}>
                            Show more
                        </button>
                    </div>

                    <img src={women3} alt="mainImage" />

                    <button
                        className="womenbtn buttons"
                        onClick={() => navigate("/women/viewAll")}
                    >
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
                                className="womenbtn buttons"
                                onClick={() => navigate("/women/viewAll")}
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="items">
                        <div className="item">
                            <img src={womenItem1} />
                            <p className="itemName">Summer pajamas</p>
                        </div>

                        <div className="item">
                            <img src={womenItem2} />
                            <p className="itemName">Shorts</p>
                        </div>

                        <div className="item">
                            <img src={womenItem3} />
                            <p className="itemName">Summer dresses</p>
                        </div>

                        <div className="item">
                            <img src={womenItem4} />
                            <p className="itemName">Linen trousers</p>
                        </div>

                        <div className="item">
                            <img src={womenItem5} />
                            <p className="itemName">Linen trousers</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }
};

export default BeforeWomenPage;
