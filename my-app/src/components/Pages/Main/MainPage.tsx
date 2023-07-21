import Header from "../../NavBar/header"
import './style.css'
import main1 from '../../../images/main1.png'
import main2 from '../../../images/main2.png'
import main3 from '../../../images/main3.png'
import item1 from '../../../images/item2.png'
import item2 from '../../../images/item1.png'
import item3 from '../../../images/item3.png'
import item4 from '../../../images/item4.png'

import man from '../../../images/man.png'
import woman from '../../../images/woman.png'
import Footer from "../../Footer/Footer"


const MainPage = () => {
    return(
        <>
            <Header/>

            <div className="Mainblock">
                <img src={main1} alt="mainImage" />
            </div>

            <div className="section">
                <p className="header">new arrivals</p>
                <p className="text">meet this summer stylishly with focus</p>
                <div className="wbuttons">
                    <button className="buttons">Women</button>
                    <button className="buttons">Men</button>
                </div>
                
            </div>

            {/* <div className="section">
                <p className="header">HOLIDAY SHOP! </p>
                <p className="text">Get ready for sun and warmer temperatures with us</p>
                <button className="buttons">Show more</button>
            </div> */}

            <div className="genres">

                <div className="women col-6">
                    <img src={woman}/>
                    <button className="buttons">Women</button>
                </div>

                <div className="men col-6">
                    <img src={man}/>
                    <button className="buttons">Men</button>
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
                <button className="btn-red buttons red">Show more</button>
            </div>

            <div className="Mainblock">
                <p className="header">complete your look with bright details!</p>
                <img src={main3} alt="sunglasses" />
                <button className="buttons">sunglasses</button>
            </div>

            <div className="section">
                <p className="header">Linen clothes collection!</p>
                <p className="text">Get ready for sun and warmer temperatures with us</p>
                <div className="wbuttons">
                    <button className="buttons">Women</button>
                    <button className="buttons">Men</button>
                </div>   
            </div>

            <div className="items">
                <div className="item">
                    <img src={item1} />
                    <p className="itemName">Summer pajamas</p>
                    <button className="buttons">Open</button>
                </div>

                <div className="item">
                    <img src={item2} />
                    <p className="itemName">Shorts</p>
                    <button className="buttons">Open</button>
                </div>

                <div className="item">
                    <img src={item3} />
                    <p className="itemName">Summer dresses</p>
                    <button className="buttons">Open</button>
                </div>

                <div className="item">
                    <img src={item4} />
                    <p className="itemName">Linen trousers</p>
                    <button className="buttons">Open</button>
                </div>
            </div>

            
            <Footer/>
            

                
        </>
    )
} 

export default MainPage
