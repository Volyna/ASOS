import "./Favourites.css";
import Header_full from "../../../Header_full/Header_full";
import Footer from "../../../Footer/FooterV";
import { Link } from "react-router-dom";

const Favourites = () => {
  return (
    <>
      <Header_full />
      <div className="container-fluid">
        <div className="mainLink">
          <p className="focusCom">focus.com | Account |</p>
          <p className="focusCom basket">Favourites</p>
        </div>
        <div className="container">
          <div className="menu_item">
            <Link className="account_item" to="/account/contact-information">
              Contact information
            </Link>
            <Link className="account_item" to="/account/shopping-history-empty">
              shopping history
            </Link>
            <Link className="account_item" to="/account/returns-empty">
              returns
            </Link>
            <Link className="main_item" to="/account/favourites">
              favourites
            </Link>
            <Link className="log_out" to="/">
              log out
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favourites;
