import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import "./header.css";
import Logo from "../../images/Logo.svg";
import user from "../../images/user.svg";
import cart from "../../images/cart.svg";
import like from "../../images/like.svg";
import search from "../../images/search.svg";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mainblock">
        <div className="first col-3">
          <div className="links">
            <Link className="headerText" to="/">
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
            <Link className="headerText" to="/help">
              FAQs
            </Link>
            <Link className="headerText" to="/">
              More
            </Link>
          </div>

          <div className="userIcons">
            <Link to="/account/contact-information">
              <img src={user} alt="" className="noneM" />
            </Link>
            <Link to="/basket-empty">
              <img src={cart} alt="" className="noneM" />
            </Link>
            <Link to="/">
              <img src={like} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header