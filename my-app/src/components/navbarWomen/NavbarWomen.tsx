import { Link } from "react-router-dom";
import LOGO_ASOS from "../../images/asos_logo.png";
import "./styleWomen.css";
import SaleComponent from "./componentsNavbarWomen/saleComponent";
const Navbar = () => {
  return (
    <>
      <div className="header">
        <nav
          style={{ display: "block" }}
          className="navbar navbar-expand-lg navbar-light"
        >
          <div className="container">
            <Link to={"/"} className="navbar-brand">
              <img alt="ASOS Logo" height={28} width={93} src={LOGO_ASOS} />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-4 mb-2 mb-lg-0 categoriesPeople">
                <li className="nav-item ">
                  <Link className="nav-link women" to={"/women"}>
                    WOMEN
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to={"/men"}>
                    MEN
                  </Link>
                </li>
              </ul>
              <form className="d-flex search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search for items and brands"
                  aria-label="Search"
                />
              </form>

              <ul className="infoPeople">
                <li>Профіль</li>
                <li>Серце</li>
                <li>Кошик</li>
              </ul>
            </div>
          </div>

          <div
            className="collapse navbar-collapse secondNav"
            id="navbarSupportedContent"
          >
            <div className="container">
              <SaleComponent />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
