import Footer from "../../Footer/FooterV";
import Header from "../../NavBar/header";
import Menu from "../../NavBar/menu";
import './error.css'

const Error = () =>{
    return(
        <>
        <div className="staticnav">
            <Header/>
            <Menu/>
        </div>

        <div className="gif">
            <img src={require('../../../images/error.gif')}/>
            <p className="error_text">ps...</p>
        </div>
        <p className="error">Something goes wrong</p>
        

        <Footer/>
        </>

    )
}

export default Error;
