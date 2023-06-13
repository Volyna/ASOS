import { Link } from "react-router-dom";
import LOGO_ASOS from "../../images/asos_logo.png";
import "./style.css";
const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="navBar">
          <div className="container">
            <Link to={"/"}>
              <img alt="ASOS Logo" height={28} width={93} src={LOGO_ASOS} />
            </Link>
            <ul className="categoriesPeople">
              <li>
                <Link to={"/women"}>WOMEN</Link>
              </li>
              <li>
                <Link to={"/men"}>MEN</Link>
              </li>
            </ul>
            <div className="search">
              <input></input>
            </div>
            <ul>
              <li>Профіль</li>
              <li>Серце</li>
              <li>Кошик</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
