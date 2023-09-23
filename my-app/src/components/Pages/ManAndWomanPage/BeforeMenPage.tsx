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

const BeforeMenPage = () => {
    const navigate = useNavigate();
    const location = useLocation().pathname;

    const disp = useDispatch();
    useEffect(() => {

    }, []);



    return (
        <>
            <div className="staticnav">
                <Header />
                <Menu />
            </div>

            <BreadCrumbs />

            {/* <div className="categors">{categories}</div> */}

            <p className="title">MEN</p>

            <div className="menBlock">
                <img src={men1} alt="mainImage" />
                <div className="section">
                    <p className="header">Must have for this summer!</p>
                    <p className="text">
                        linen section! best choice for everyday comfort{" "}
                    </p>
                    <button className="menbtn buttons" onClick={() => navigate("/men/viewAll")}>
                        Open
                    </button>
                </div>

                <img src={men2} alt="mainImage" />

                <div className=" blue section">
                    <p className="header white">summer sale</p>
                    <p className="text white">Up to 50% off!</p>
                    <button className="buttons " onClick={() => navigate("/men/viewAll")}>
                        Men
                    </button>
                </div>

                <img src={men3} alt="mainImage" />

                <button className="menbtn buttons" onClick={() => navigate("/men/viewAll")}>
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
    );
};
export default BeforeMenPage;