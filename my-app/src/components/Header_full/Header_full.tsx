import "./Header_full.css";
import { Link } from "react-router-dom";
import Logo_main from "../../images/logo_main.png";
import Header from "../NavBar/header";
import Search from "../../images/search.png";
import User from "../../images/user.png";
import Cart from "../../images/cart.png";
import Like from "../../images/like.png";
import { Container } from "@mui/material";
import Menu from "../NavBar/menu";

const Header_full = () => {
  return (
    <>
      <Header/>
      <Menu/>
    </>
  );
};
export default Header_full;
