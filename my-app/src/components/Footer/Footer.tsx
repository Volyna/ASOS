import './Footer.css'

import footer_instagram from "../../images/footer_instagram.png"
import footer_youtube from "../../images/footer_youtube.png"
import footer_pinterest from "../../images/footer_pinterest.png"
import footer_facebook from "../../images/footer_facebook.png"

const Footer = () =>{
    return(
        <>
        <footer className="footer ">
        <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h4 className="main_title">SHOP</h4>
                <a href="#" className="shop_information">New in</a>
                <a href="#" className="shop_information">Sale</a>
                <a href="#" className="shop_information">Clothing</a>
                <a href="#" className="shop_information">Shoes</a>
                <a href="#" className="shop_information">Accessories</a>
                <a href="#" className="shop_information">Face&Body</a>
                <a href="#" className="shop_information">Topshop</a>
                <a href="#" className="shop_information">Brands</a>
                <a href="#" className="shop_information">Outlet</a>
                <a href="#" className="shop_information">Marketplace</a>
              </div>

              <div className="col-md-4">
                <h4 className="main_title">HELP & INFORMATION</h4>
                <a href="#" className="shop_information">Customer Service</a>
                <a href="#" className="shop_information">My Account</a>
                <a href="#" className="shop_information">Store Locator</a>
                <a href="#" className="shop_information">Become a member</a>
                <a href="#" className="shop_information">Legal & Privacy</a>
                <a href="#" className="shop_information">Contact</a>
                <a href="#" className="shop_information">Gift Cards</a>
                <a href="#" className="shop_information">Cookie Settings</a>
              </div>

              <div className="col-md-4">
                <h4 className="main_title">ABOUT US</h4>
                <a href="#" className="shop_information mr-3">Career at focus</a>
                <a href="#" className="shop_information">About brand</a>
                <a href="#" className="shop_information">Investor Relations</a>
                <a href="#" className="shop_information">Press</a>
                <a href="#" className="shop_information">Corporate Governance</a>
              </div>
            </div> 
            <div className="row">
              <div className="col">
                <div className="footer_icons">
                  <a href="https://www.instagram.com/"> <img className="indents-right" src={footer_instagram} alt="instargram"/></a>
                  <a href="https://www.youtube.com/"><img className="indents-right" src={footer_youtube} alt="youtube"/></a>
                  <a href="https://www.pinterest.com/"><img className="indents-right" src={footer_pinterest} alt="pinterest"/></a>
                  <a href="https://www.facebook.com/"> <img className="indents-left" src={footer_facebook} alt="facebook"/></a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="united_states">United States|$</p>
              </div>
            </div>
            </div>
          </footer>
        
        </>
    )

}

export default Footer