import "./Checkout.css";
import Header_full from "../../Header_full/Header_full";
import Edit from "../../../images/edit.png";
import Mastercard from "../../../images/mastercard.png";
import Visa from "../../../images/visa.png";
import PayPal from "../../../images/paypal.png";
import Clothes1 from "../../../images/firstProduct.png";
import Clothes2 from "../../../images/secondProduct.png";
import Clothes3 from "../../../images/thirdProduct.png";
import Delete from "../../../images/delete.png";
import Minus from "../../../images/minus.png";
import Plus from "../../../images/plus.png";
import Arrow_down from "../../../images/arrow-down.png";
import Menu from "../../NavBar/menu";
import Footer from "../../Footer/FooterV";

const Checkout = () => {
  return (
    <>
      <Header_full />
      <div className="container-fluid">
        <div className="mainLink">
          <p className="focusCom">focus.com |</p>
          <p className="focusCom basket">Checkout</p>
        </div>
        <h1 className="h1_checkout">Checkout</h1>
        <div className="mainInformation">
          <div className="checkout-information col-7">
            <div className="contact-inf">
              <h3 className="h3_checkout col-10">Contact information</h3>
              <div className="col-2">
                <img className="edit-img " src={Edit} alt="" />
              </div>
            </div>
            <div className="myFields">
              <div className="col-6">
                <label className="label checkout-label">Email</label>
                <input
                  type="email"
                  className="input checkout-input"
                  id="email"
                  placeholder="Martaa@gmail.com"
                  autoComplete="true"
                />
                <label className="label checkout-label">First name</label>
                <input
                  type="text"
                  className="input checkout-input bottom"
                  id="firstName"
                  placeholder="Marta"
                />
              </div>
              <div className="col-6">
                <label className="label checkout-label">Phone number</label>
                <input
                  type="tel"
                  className="input checkout-input"
                  id="phone"
                  placeholder="+380670000000"
                  autoComplete="true"
                />
                <label className="label checkout-label">Last name</label>
                <input
                  type="text"
                  className="input checkout-input"
                  id="lastName"
                  placeholder="Blavatna"
                />
              </div>
            </div>
            <h3 className="h3_checkout ">Delivery</h3>
            <div className="additional-inf">
              <input
                className="checkout-checkbox"
                type="checkbox"
                id="checkbox"
              ></input>
              <p className="remember_me">
                Free standard shipping to the post office
              </p>
            </div>
            <div className="additional-inf">
              <input
                className="checkout-checkbox"
                type="checkbox"
                id="checkbox"
              ></input>
              <p className="remember_me">Courier delivery</p>
            </div>
            <div className="additional-inf">
              <input
                className="checkout-checkbox"
                type="checkbox"
                id="checkbox"
              ></input>
              <p className="remember_me">Click & collect</p>
            </div>
            <div className="checkout-delivery-inf">
              <div className="col-6">
                <p className="checkout-p">
                  Get unlimited next day delivery for a year for just 30$
                </p>
                <a className="link">Learn more</a>
              </div>
              <div className="col-6">
                <button className="btn-buy btn-delivery">Add to basket</button>
              </div>
            </div>
            <h3 className="h3_checkout ">shipping details</h3>

            <div className="myFields">
              <div className="col-6">
                <label className="label checkout-label">Country</label>

                <input
                  type="country"
                  className="input checkout-input arrow_down"
                  id="country"
                  placeholder="Choose your country"
                  autoComplete="true"
                />
                <label className="label checkout-label">State</label>
                <input
                  type="text"
                  className="input checkout-input arrow_down"
                  id="firstName"
                  placeholder="Choose your state"
                />
                <label className="label checkout-label">Street</label>
                <input
                  type="street-address"
                  className="input checkout-input bottom "
                  id="firstName"
                  placeholder="Enter your street"
                />
              </div>
              <div className="col-6">
                <label className="label checkout-label">Zip code</label>
                <input
                  type="tel"
                  className="input checkout-input"
                  id="phone"
                  placeholder="Enter your zip code"
                  autoComplete="true"
                />
                <label className="label checkout-label">City</label>
                <input
                  type="text"
                  className="input checkout-input arrow_down"
                  id="lastName"
                  placeholder="Choose your city"
                />
                <label className="label checkout-label">Home number</label>
                <input
                  type="text"
                  className="input checkout-input"
                  id="lastName"
                  placeholder="Enter your home number"
                />
              </div>
            </div>
            <div className="contact-inf">
              <h3 className="h3_checkout col-9">payment</h3>
              <div className="col-2">
                <img className="payment-img " src={Mastercard} alt="" />
                <img className="payment-img " src={Visa} alt="" />
                <img className="payment-img " src={PayPal} alt="" />
              </div>
            </div>
            <div className="myFields">
              <div className="col-6">
                <label className="label checkout-label">Card number</label>
                <input
                  className="input checkout-input"
                  maxLength={19}
                  type="tel"
                  pattern="\d*"
                  placeholder="e. g. 1234 5678 9012 3456"
                />
              </div>
              <div className="col-2">
                <label className="label checkout-label">Expiration date</label>
                <input
                  className="input exDate-input"
                  maxLength={7}
                  type="tel"
                  pattern="\d*"
                  placeholder="e. g. 05 / 27"
                />
              </div>
              <div className="col-3">
                <label className="label checkout-label">CVV </label>
                <input
                  type="tel"
                  className="input payment-input"
                  id="cvv"
                  pattern="\d*"
                  maxLength={3}
                  placeholder="e. g. 111"
                />
              </div>
            </div>
            <div className="payment-checkboxes">
              <div className="additional-inf col-6">
                <input
                  className="checkout-checkbox"
                  type="checkbox"
                  id="checkbox"
                ></input>
                <p className="remember_me">Save card for this account</p>
              </div>
              <div className="additional-inf col-6">
                <input
                  className="checkout-checkbox"
                  type="checkbox"
                  id="checkbox"
                ></input>
                <p className="remember_me">I accept terms of Privacy policy</p>
              </div>
            </div>
          </div>

          <div className="shopping-bag col-5">
            <h3 className="h3_checkout col-9">Shopping bag</h3>
            <div className="allOrders col-12">
              <div className="ordersContent col-12">
                <div className="col-2">
                  <img width={119} height={175} src={Clothes1} alt="" />
                </div>
                <div className="col-9">
                  <div className="row text-muted">
                    <h3 className="productName ">Draped jersey dress</h3>
                  </div>
                  <div className="row">
                    <p className="col-2">Color: Black</p>
                    <p className="col-2">Size: M</p>
                    <div className="col-1">
                      <img height={20} width={20} src={Arrow_down} alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <p className="newPrice col-2">55.00$</p>
                    <p className="oldPrice col-1">65.00$</p>
                  </div>
                  <div className="row">
                    <div>
                      <span className="minus col-1">
                        <img src={Minus} alt="minus" />
                      </span>
                      <button className="number">1</button>
                      <span className="plus col-1">
                        <img src={Plus} alt="plus" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-1">
                  <img
                    className="removeProduct"
                    width={30}
                    height={30}
                    src={Delete}
                    alt="remove"
                  />
                </div>
              </div>

              <div className="ordersContent col-12">
                <div className="col-2">
                  <img width={119} height={175} src={Clothes2} alt="" />
                </div>
                <div className="col-9">
                  <div className="row text-muted">
                    <h3 className="productName">Double-weave blouse</h3>
                  </div>
                  <div className="row">
                    <p className="col-2">Color: Blue</p>
                    <p className="col-2">Size: M</p>

                    <div className="col-1">
                      <img height={20} width={20} src={Arrow_down} alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <p className="price col-2">39.00$</p>
                  </div>
                  <div className="row">
                    <div>
                      <span className="minus col-1">
                        <img src={Minus} alt="minus" />
                      </span>
                      <button className="number">1</button>
                      <span className="plus col-1">
                        <img src={Plus} alt="plus" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-1">
                  <img
                    className="removeProduct"
                    width={30}
                    height={30}
                    src={Delete}
                    alt="remove"
                  />
                </div>
              </div>

              <div className="ordersContent col-12">
                <div className="col-2">
                  <img width={119} height={175} src={Clothes3} alt="" />
                </div>
                <div className="col-9">
                  <div className="row text-muted">
                    <h3 className="productName">Oversized T-shirt</h3>
                  </div>
                  <div className="row">
                    <p className="col-3">Color: Dark grey</p>
                    <p className="col-2">Size: M</p>
                    <div className="col-1">
                      <img height={20} width={20} src={Arrow_down} alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <p className="newPrice col-2">15.00$</p>
                    <p className="oldPrice col-1">19.00$</p>
                  </div>
                  <div className="row">
                    <div>
                      <span className="minus col-1">
                        <img src={Minus} alt="minus" />
                      </span>
                      <button className="number">1</button>
                      <span className="plus col-1">
                        <img src={Plus} alt="plus" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-1">
                  <img
                    className="removeProduct"
                    width={30}
                    height={30}
                    src={Delete}
                    alt="remove"
                  />
                </div>
              </div>
            </div>

            <label className="label checkout-label">Discount code</label>
            <input
              type="email"
              className="input discount-input"
              id="email"
              placeholder="Enter a discount code"
              autoComplete="true"
            />
            <div className="subColumns ">
              <p className="purchase-inf col-10 ">Subtotal</p>
              <p className="amount normal col-2 ">109.00 $</p>
            </div>
            <div className="subColumns ">
              <p className="purchase-inf col-10 ">Delivery</p>
              <p className="amount normal col-2 ">10.00 $</p>
            </div>
            <div className="subColumns">
              <p className="purchase-inf bold col-10 ">Total to pay</p>
              <p className="amount col-2 ">119.00 $</p>
            </div>
            <button className="btn_continue btn-shop-bag">pay</button>
            <button className="btn-buy btn-shop-bag">back</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
