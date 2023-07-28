import "./FAQs.css";
import Header_full from "../../Header_full/Header_full";
import Footer from "../../Footer/Footer";

const FAQs = () => {
  return (
    <>
      <Header_full />
      <div className="container-fluid">
        <div className="mainLink">
          <p className="focusCom">focus.com |</p>
          <p className="focusCom help"> Help</p>
        </div>
        <div className="firstBlock">
          <div className="left">
            <h1 className="title">Delivery</h1>
            <a className="questions" href="#">
              Where's my order?
            </a>
            <a className="questions" href="#">
              Shipping methods
            </a>
            <a className="questions" href="#">
              Premier Delivery shipping
            </a>
            <a className="questions showAll" href="#">
              Show all
            </a>
          </div>

          <div className="center">
            <h1 className="title">Returns & refunds</h1>
            <a className="questions" href="#">
              Our Returns Policy
            </a>
            <a className="questions" href="#">
              How to return from your country?
            </a>
            <a className="questions" href="#">
              Can I exchange?
            </a>
            <a className="questions showAll" href="#">
              Show all
            </a>
          </div>

          <div className="right order">
            <h1 className="title">order issues</h1>
            <a className="questions" href="#">
              Can I cancel an order?
            </a>
            <a className="questions" href="#">
              Missing Item
            </a>
            <a className="questions" href="#">
              Wrong item received
            </a>
            <a className="questions showAll" href="#">
              Show all
            </a>
          </div>
        </div>

        <div className="secondBlock">
          <div className="left product">
            <h1 className="title">product & stock</h1>
            <a className="questions" href="#">
              Will an item be back in stock?
            </a>
            <a className="questions" href="#">
              Product information
            </a>
            <a className="questions" href="#">
              Size guide
            </a>
            <a className="questions showAll" href="#">
              Show all
            </a>
          </div>

          <div className="center technical">
            <h1 className="title">payments, promos & gift cards</h1>
            <a className="questions" href="#">
              Payment options
            </a>
            <a className="questions" href="#">
              How to use a promo code?
            </a>
            <a className="questions" href="#">
              Student Promo Codes
            </a>
            <a className="questions showAll" href="#">
              Show all
            </a>
          </div>

          <div className="right ">
            <h1 className="title">technical</h1>
            <a className="questions" href="#">
              Trouble signing into my account
            </a>
            <a className="questions" href="#">
              Changing account details
            </a>
            <a className="questions" href="#">
              Forgotten your password?
            </a>
            <a className="questions showAll" href="#">
              Show all
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQs;
