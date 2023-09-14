import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import "./header.css";
import Logo from "../../images/Logo.svg";
import user from "../../images/user.svg";
import selectedUser from "../../images/selected-user.svg";
import cart from "../../images/cart.svg";
import like from "../../images/like.svg";
import search from "../../images/search.svg";
import HeaderLogo from "../../images/HeaderLogo.svg"
import { useSelector } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { isMobile } from "react-device-detect";

const Header = () => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector((store) => store.UserReducer);

  if (isMobile){
    return(
      <>
        <div className="mainblockM">
          <div className="leftbox">
            <img src={HeaderLogo}/>
          </div>

          <div className="rightbox">
            <img src={user}/> 
            <img src={cart}/> 
            <img src={like}/>
          </div>
        </div>
        <div className="sticky">
          <div className="box">
            <img src={search}/>
            <input className="search_sticky" placeholder="search"/>
          </div>
          <hr className="stick"/>
          
        </div>
      </>
    )
  }

  else{
  return (
    <>
      <div className="mainblock">
        <div className="first col-3">
          <div className="links">
            <Link className="headerText" to="/customer-service">
              Customer Service
            </Link>
            <Link className="headerText" to="/">
              Shopping Form
            </Link>
          </div>
          <div className="searchItem ">
            <img src={search} />
            <input className="search" />
          </div>
          <div className="line" />
        </div>
        <div className="second col-6">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="third col-3">
          <div className="links">
            <Link className="headerText" to="/">
              Newsletter
            </Link>
            <Link className="headerText" to="/customer-care">
              FAQs
            </Link>
            <Link className="headerText" to="/">
              More
            </Link>
          </div>

          <div className="userIcons">
            {isAuth == true ? (
              <Link className="noneM " to="/account/contact-information">
                <img src={selectedUser} alt="" />
              </Link>
            ) : (
              <Link to="/login">
                <img src={user} alt="" />
              </Link>
            )}

            <Link to="/basket">
              <img src={cart} alt="basket" className="noneM basket" />
            </Link>

            <Link to="/account/favourites">
              <img src={like} className="favourites" alt="favourites" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );}
};
export default Header;
