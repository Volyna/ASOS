import "./CustomerService.css";
import Header_full from "../../Header_full/Header_full";
import Footer from "../../Footer/FooterV";
import BreadCrumbs from "../../BreadCrumbs/breadCrumbs";

const CustomerService = () => {
  return (
    <>
      <Header_full />
      <BreadCrumbs />
      <div className="container-fluid">
        <div className="help">
          <div className="for_help container">
            <h2 className="FAQtitle search_for">Search for help?</h2>
            <p className="questions chat_with">
              Chat with us 24/7 for answers to frequently asked questions or
              speak with a live agent if you need more support during
              <br /> our opening hours
            </p>
            <a className="link" href="">
              Contact us
            </a>
            <p className="questions try">Or try to find an answer here</p>
            <input
              className="your_request"
              type="text"
              placeholder="Enter your request"
            />
          </div>
        </div>
        <div className="container">
          <div className="parcel_tracking">
            <div className="about_order col-7">
              <h2 className="FAQtitle search_for">where my order is?</h2>
              <p className="questions">
                Enter the order number found in the order <br /> confirmation
                email or in your account (Shopping <br /> history | Order
                number)
              </p>
              <p className="questions label_number ">Order number</p>
              <input
                className="order-input"
                type="number"
                placeholder="e. g. 230976  "
              />

              <button className="btn_continue btn-shop-bag btn-Pay btn-track">
                Track my order
              </button>
            </div>
            <div className="col-6">
              <h2 className="FAQtitle search_for">want to return something?</h2>
              <p className="questions ">
                Register returns easily online. All you need is the order <br />{" "}
                number found in the order confirmation email, and the <br />{" "}
                email address used when placing your order.
              </p>
              <p className="questions try">Order number</p>
              <input
                className="order-input"
                type="number"
                placeholder="e. g. 230976  "
              />

              <button className="btn_continue btn-shop-bag btn-Pay btn-track">
                register a return
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CustomerService;
