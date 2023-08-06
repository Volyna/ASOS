import BreadCrumbs from "../../BreadCrumbs/breadCrumbs";
import Footer from "../../Footer/FooterV";
import Header_full from "../../Header_full/Header_full";
import {Link} from 'react-router-dom'
import "./ProductsPage.css"
import item1 from "../../../images/viewAll_1.png"
import like from "../../../images/like.svg"

const ProductsPage = () => {

    const colors = ['grey', 'blue']

    return(

        <>
            <Header_full/>
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


        <div className="prodBlock">

            <div className="prd">
                
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="info">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="info">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="info">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="info">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="info">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="info">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="info">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="info">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="info">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="info">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="info">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="info">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="info">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
                <div className="itemName">
                    <div className="itemImg">
                        <img className="titleImg" src={item1}/>
                        <img className='like' src={like}/>
                    </div>

                    <div className="info">
                        <p className='headerText' id="name">Linen-blend pull-on trousers</p>
                        <p className='headerText' id="price">54.99$</p>
                        <span className="dot" style={{backgroundColor:colors[0]}}/> 
                        <span className="dot" style={{backgroundColor:colors[1]}}/> 
                    </div>
                </div>
               
                
            </div>
        </div>

        


            

            <Footer/>


            
        
        </>

    )
}

export default ProductsPage;