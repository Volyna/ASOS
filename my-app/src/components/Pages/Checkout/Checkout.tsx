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
import BreadCrumbs from "../../BreadCrumbs/breadCrumbs";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { IBasketRemove } from "../Account/Favourites/types";
import { IChecout, IOrderChecout, IResponseListProductToOrder } from "./types";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Country } from "../types";
import axios from "axios";
import { CheckoutInfoSchema } from "../validation";
import { boolean } from "yup";
import { toast } from "react-toastify";
import { store } from "../../../store";
import { Navigate, useNavigate } from "react-router-dom";

const Checkout = () => {
  const expriy_format = (value: string) => {
    const expdate = value;
    const expDateFormatter =
      expdate.replace(/\//g, "").substring(0, 2) +
      (expdate.length > 2 ? "/" : "") +
      expdate.replace(/\//g, "").substring(2, 4);

    return expDateFormatter;
  };
  const navigate = useNavigate();
  const { user } = useTypedSelector((store) => store.UserReducer);
  const { GetBasketsByid, AddCountProductBasket, RemoveProductBasket, MinusCountProductBasket, CreateOrderProduct } =
    useActions();
  const { isBasketLoading, products } = useTypedSelector(
    (store) => store.BasketReducer
  );
  const [countries, setCountries] = useState<Country[]>([]);
  const [canChangeMinus, setCanChangeMinus] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get<Country[]>(
        "https://restcountries.com/v3/all"
      );
      setCountries(response.data);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);
  const mapCountry = countries.map((region, index) => (
    <option defaultChecked={false} key={index} value={region.name.common}>
      {<span>{region.name.common}</span>}
    </option>
  ));
  const mapState = countries.map((region, index) => (
    <option defaultChecked={false} key={index} value={region.region}>
      {<span>{region.region}</span>}
    </option>
  ));
  const initValues: IChecout = {
    country: user.country,
    state: user.state,
    street: user.street,
    zipCode: user.zipCode,
    city: user.city,
    homePhone: user.phone,
    userId: user.id,
    cardNumber: "",
    cardDate: "",
    cardCvv: ""
  }
  const onSubmitFormik = async (values: IChecout) => {
    const dataResonse: IOrderChecout = {
      userId: user.id,
      country: values.country,
      state: values.state,
      street: values.street,
      zipCode: values.zipCode,
      city: values.city,
      homeNumber: values.homePhone,
      cardNumber: values.cardNumber,
      ExpirationDate: values.cardDate,
      Cvv: values.cardCvv,
      totalPrice: calculateTotalPrice() + 10,
      orders: []
    }
    products.forEach(item => {
      var dataOrderProduct: IResponseListProductToOrder = {
        productId: item.productId,
        countProducts: item.countProducts,
        price: item.price,
        discount: item.discount,
      }
      dataResonse.orders.push(dataOrderProduct);

    })
    console.log("Product to response order: ", dataResonse);
    CreateOrderProduct(dataResonse);
    navigate("/basket");
  };

  const formik = useFormik({
    initialValues: initValues,
    onSubmit: onSubmitFormik,
    validationSchema: CheckoutInfoSchema
  });
  if (products.length <= 0) {
    return <Navigate to={"/basket"} />
  }
  var calculateTotalPrice = () => {
    const totalPrice = products.reduce(
      (total: number, item) =>
        total + (item.price - item.discount) * item.countProducts,
      0
    );
    return totalPrice;
  };
  var plusProduct = (idProduct: number) => {
    var tempArray = products;
    tempArray.forEach((i) => {
      if (i.productId == idProduct && i.countProducts + 1 <= i.quantity) {
        i.countProducts += 1;
      }
    });
    AddCountProductBasket(tempArray);
  };
  var minusProduct = (idProduct: number) => {
    var tempArray = products;
    tempArray.forEach((i) => {
      if (i.productId == idProduct && i.countProducts != 1) {
        i.countProducts -= 1;
        setCanChangeMinus(true);
      }
    });

  };
  var removeProduct = (idProduct: number) => {
    console.log("removeProduct");
    var result = products.filter((i) => i.productId != idProduct);
    const initDataRemove: IBasketRemove = {
      countProducts: 1,
      userIdOrder: user.id,
      productId: idProduct
    }
    RemoveProductBasket(result, initDataRemove);
  };
  var dataChekout = products.map((item, index) => {
    return (
      <div key={item.productId}>
        <div className="row orderContent">
          <div className="col-2">
            <img
              width={119}
              height={175}
              src={`data:image/png;base64,${item.images}`}
              alt=""
            />
          </div>

          <div className="col-9">
            <div className="row">
              <h3 className="productName">{item.name}</h3>
            </div>
            <div className="row productInfo">
              <div className="col-3 productInfoColor">
                <p>Color: {item.color}</p>
              </div>

              <div className="col-3 productInfoSize">
                <p style={{ marginRight: "3px" }}> Size:</p>

                <select
                  name="size"
                  id="size_select"
                  className="size_select"
                >
                  {item.size.filter((element, index) => element.indexOf(element) === index).map(size => <option key={size} value={size}>{size}</option>)}

                  {/* <option key={index} value={i}>
                        {i}
                      </option> */}


                </select>
              </div>
            </div>
            <div className="row productPrice">
              <p className="newPrice col-2">
                {(item.price - item.discount) *
                  item.countProducts}
                $
              </p>

              {item.discount == 0 ? null : <p className="oldPrice productPriceDiscount productPriceDiscountChecout col-1">
                {item.price * item.countProducts}$
              </p>}
            </div>
            <div className="row btnBasketProduct">
              <div className="flexDisplay">
                <span
                  className="minus minusImage"
                  onClick={(e) => {
                    minusProduct(item.productId);
                  }}
                >
                  <img src={Minus} alt="minus" />
                </span>
                <button className="btnProductBasket ">
                  <p className="btnProductBasketCount">
                    {item.countProducts}
                  </p>
                </button>
                <span
                  onClick={(e) => {
                    plusProduct(item.productId);
                  }}
                  className="plus plusImage"
                >
                  <img src={Plus} alt="plus" />
                </span>
              </div>
            </div>
          </div>

          <div className="col-1">
            <img
              onClick={(e) => {
                removeProduct(item.productId);
              }}
              className="removeProduct"
              width={30}
              height={30}
              src={Delete}
              alt="remove"
            />
          </div>
        </div>
        <div className="lineBasket" key={index}></div>
      </div>
    );
  });


  const { values, errors, touched, handleSubmit, handleChange, setFieldValue } =
    formik;
  return (
    <>
      <Header_full />

      <div className="container-fluid">
        <div className="mainLinkChecout mainLinkCheckout">
          <p className="focusCom">focus.com |</p>
          <p className="focusCom basket">Checkout</p>
        </div>
        <h1 className="h1_checkout">Checkout</h1>
        <form onSubmit={handleSubmit}>
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
                    value={user.email}
                    disabled
                    type="email"
                    className="input checkout-input"
                    id="email"
                    placeholder="Martaa@gmail.com"
                    autoComplete="true"
                  />
                  <label className="label checkout-label">First name</label>
                  <input
                    value={user.name}
                    disabled
                    type="text"
                    className="input checkout-input bottom"
                    id="firstName"
                    placeholder="Marta"
                  />
                </div>
                <div className="col-6">
                  <label className="label checkout-label">Phone number</label>
                  <input
                    value={user.phone}
                    disabled
                    type="tel"
                    className="input checkout-input"
                    id="phone"
                    placeholder="+380670000000"
                    autoComplete="true"
                  />
                  <label className="label checkout-label">Last name</label>
                  <input
                    value={user.surname}
                    disabled
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

                  <select
                    className="input arrow_down ckeckoutCountry"
                    id="country"
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option>
                      <span>Choose your country</span>
                    </option>
                    {mapCountry}
                  </select>
                  {errors.country && formik.touched.country && (
                    <p className="mt-2" style={{ color: "red" }}>
                      <span className="font-medium">{errors.country}</span>
                    </p>
                  )}
                  <label className="label checkout-label">State</label>
                  <select
                    className="input arrow_down ckeckoutCountry"
                    id="state"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option>
                      <span>Choose your state</span>
                    </option>
                    {mapState}
                  </select>

                  {errors.state && formik.touched.state && (
                    <p className="mt-2" style={{ color: "red" }}>
                      <span className="font-medium">{errors.state}</span>
                    </p>
                  )}
                  <label className="label checkout-label">Street</label>
                  <input
                    value={formik.values.street}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="street-address"
                    className="input checkout-input bottom "
                    id="street"
                    placeholder="Enter your street"
                  />
                  {errors.street && formik.touched.street && (
                    <p className="mt-2" style={{ color: "red" }}>
                      <span className="font-medium">{errors.street}</span>
                    </p>
                  )}
                </div>
                <div className="col-6">
                  <label className="label checkout-label">Zip code</label>
                  <input
                    value={formik.values.zipCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="tel"
                    className="input checkout-input"
                    id="zipCode"
                    placeholder="Enter your zip code"
                    autoComplete="true"
                  />
                  {errors.zipCode && formik.touched.zipCode && (
                    <p className="mt-2" style={{ color: "red" }}>
                      <span className="font-medium">{errors.zipCode}</span>
                    </p>
                  )}
                  <label className="label checkout-label">City</label>
                  <input

                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    className="input checkout-input "
                    id="city"
                    placeholder="Choose your city"
                  />

                  {errors.city && formik.touched.city && (
                    <p className="mt-2" style={{ color: "red" }}>
                      <span className="font-medium">{errors.city}</span>
                    </p>
                  )}
                  <label className="label checkout-label">Home number</label>
                  <input
                    value={formik.values.homePhone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    className="input checkout-input"
                    id="homePhone"
                    placeholder="Enter your home number"
                  />
                  {errors.homePhone && formik.touched.homePhone && (
                    <p className="mt-2" style={{ color: "red" }}>
                      <span className="font-medium">{errors.homePhone}</span>
                    </p>
                  )}
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
                    value={formik.values.cardNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="input checkout-input"
                    maxLength={16}
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"

                  />
                  {errors.cardNumber && formik.touched.cardNumber && (
                    <p className="mt-2" style={{ color: "red" }}>
                      <span className="font-medium">{errors.cardNumber}</span>
                    </p>
                  )}
                </div>
                <div className="col-2">
                  <label className="label checkout-label">Expiration date</label>
                  <input
                    value={expriy_format(formik.values.cardDate)}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="input exDate-input"
                    maxLength={5}
                    type="text"

                    id="cardDate"
                    placeholder="mm / yy"
                  />
                  {errors.cardDate && formik.touched.cardDate && (
                    <p className="ErrorCheckout" style={{ color: "red" }}>
                      <span>{errors.cardDate}</span>
                    </p>
                  )}
                </div>
                <div style={{ marginLeft: "15px" }} className="col-3">
                  <label className="label checkout-label">CVV </label>
                  <input
                    value={formik.values.cardCvv}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    type="text"
                    className="input payment-input"
                    id="cardCvv"
                    maxLength={3}
                    placeholder="000"
                  />
                  {errors.cardCvv && formik.touched.cardCvv && (
                    <p className="mt-2" style={{ color: "red" }}>
                      <span className="font-medium">{errors.cardCvv}</span>
                    </p>
                  )}
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

                {dataChekout}



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
                <p className="amount normal col-2 ">{calculateTotalPrice()} $</p>
              </div>
              <div className="subColumns ">
                <p className="purchase-inf col-10 ">Delivery</p>
                <p className="amount normal col-2 ">10.00 $</p>
              </div>
              <div className="subColumns">
                <p className="purchase-inf bold col-10 ">Total to pay</p>
                <p className="amount col-2 ">{calculateTotalPrice() + 10} $</p>
              </div>
              <button type="submit" className="btn_continue btn-shop-bag btn-Pay">pay</button>
              <button onClick={(e) => { navigate("/basket") }} className="btn-buy btn-shop-bag btn-Buy">back</button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
