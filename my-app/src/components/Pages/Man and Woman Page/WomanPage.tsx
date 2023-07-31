import Header from "../../NavBar/header";
import Menu from "../../NavBar/menu";
import Footer from "../../Footer/FooterV";
import Breadcrumbs from "../../BreadCrumbs/breadCrumbs"
import "./style.css"
import BreadCrumbs from "../../BreadCrumbs/breadCrumbs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import women1 from '../../../images/women1.png'
import women2 from '../../../images/women2.png'
import women3 from '../../../images/women3.png'
import womenItem1 from '../../../images/womenItem1.png'
import womenItem2 from '../../../images/womenItem2.png'
import womenItem3 from '../../../images/womenItem3.png'
import womenItem4 from '../../../images/womenItem4.png'
import womenItem5 from '../../../images/womenItem5.png'
import { useState } from "react";







const Women = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="staticnav">
                <Header/>
                <Menu/>
            </div>


            <BreadCrumbs/>


            <div className="categors">
                <Link to='/'>New in</Link>
                <Link to='/'>clothing</Link>
                <Link to='/'>dresses</Link>
                <Link to='/'>shoes</Link>
                <Link to='/'>accessories</Link>
                <Link to='/'>face&body</Link>
                <Link to='/'>topshop</Link>
                <Link to='/'>sportswear</Link>
                <Link to='/'>brands</Link>
                <Link to='/'>outlet</Link>
                <Link to='/'>marketplace</Link>
            </div>

            <p className="title">WOMEN</p>

                

            <div className="menBlock">
                <img src={women1} alt="mainImage" />
                <div className="section">
                    <p className="header">Must have for this summer!</p>
                    <p className="text">linen section! best choice for everyday comfort  </p>
                    <button className="womenbtn buttons" onClick={()=> navigate('/women')}>view swimwear</button>
                </div>

                <img src={women2} alt="mainImage" />
            
                <div className="red section">
                    <p className="header white">summer sale</p>
                    <p className="text white">Up to 50% off!</p>
                        <button className="buttons trans" onClick={()=> navigate('/women')}>Show more</button>
                </div>

                <img src={women3} alt="mainImage" />

                <button className="womenbtn buttons"  onClick={()=> navigate('/men')}>show collection</button>


                <div className="section">
                    <p className="header">don't miss out on the latest news </p>
                    

                    <div className="spam">
                        <p className="text left">Subscribe to our newsletter and be aware of everything, get access to exclusive promotions and even more!</p>
                        <input></input>
                        <button className="womenbtn buttons" onClick={()=> navigate('/women')}>Subscribe</button>
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
            <Footer/>
            
        </>
    )
}

export default Women;