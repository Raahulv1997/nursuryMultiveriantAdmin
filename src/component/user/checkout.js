import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import "../../../src/component/css-js/fonts/icofont/icofont.min.css";
import {
  AddUserOrder,
  AlternateAddressUpdateFunction,
  cart_delete_api,
  CreateTransaction,
  fetchcartdata,
  userdetails,
} from "../api/api";
// import CheckoutItem from "./checkout_item";
import payment1 from "../css-js/images/payment/png/01.png";
import CartContext from "../helper/cart";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import Header from "../common/header";
import Footer from "../common/footer";
import Loader from "../common/loader";
import { Accordion, Button, Col, Form, InputGroup } from "react-bootstrap";
// import CartContext from "../helper/cart";
import Modal from "react-bootstrap/Modal";

function Checkout() {
  const databyID = [];

  let totalprice = 0;
  let discount = 0;
  let totalDiscount = 0;
  let Taxx = 0;
  let totalTaxx = 0;
  let Grand_Total = 0;
  let total_qty = 0;
  let totalSgst = 0;
  let totalCgst = 0;
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [onActiveClass, setOnActiveClass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apicall, setapicall] = useState(false);
  const [ShowOrderAlert, setShowOrderAlert] = useState(false);
  const [cartqty, setCartQty] = useState(false);
  const [ShowOrderErrorAlert, setShowOrderErrorAlert] = useState(false);
  const [ShowDeleteAlert, setShowDeleteAlert] = useState(false);
  const ContextValue = useContext(CartContext);
  const [cartData, setCartData] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [cartProductId, setCartProductId] = useState("");
  const [cartProductQty, setCartProductQty] = useState("");
  const [orderAddress, setOrderAddres] = useState("");
  const [paymentMetod, setPaymentMethod] = useState("");
  const [alternateAddress, setAlternateAddress] = useState("");
  const [addressErrorMsg, setAddressErrorMsg] = useState(false);

  const cartdatafucntion = async () => {
    setLoading(true);
    const userData = await fetchcartdata();

    setCartData(userData);
    ContextValue.setapicall(false);
    setLoading(false);
    cartData.map((cdata) => {
      total_qty += cdata.cart_product_quantity;
      totalprice += Number(cdata.price) * Number(cdata.cart_product_quantity);
      discount += Number(cdata.discount);
      totalDiscount = Number(totalprice * discount) / 100;
      Taxx += Number(cdata.gst);
      totalTaxx = Number(Taxx * totalprice) / 100;
      totalSgst = totalTaxx / 2;
      totalCgst = totalTaxx / 2;
      Grand_Total = totalprice + totalTaxx - totalDiscount;
      return {};
    });
  };

  useEffect(() => {
    cartdatafucntion();
    userdetailsFunction();
  }, [ContextValue.state]);

  const OnPaymentChange = (e) => {
    setPaymentMethod(e.target.value);
    setAddressErrorMsg(false);
  };

  const addCartInorder = async () => {
    if (orderAddress === "") {
      setAddressErrorMsg("addError");
    } else if (paymentMetod === "") {
      setAddressErrorMsg("paymentError");
    } else {
      console.log("add---" + orderAddress);
      console.log("pay---" + paymentMetod);
      cartData.map((cdata) => {
        databyID.push({
          product_id: cdata.product_id,
          vendor_id: cdata.vendor_id,
          total_order_product_quantity: total_qty,
          total_amount: Grand_Total,
          total_gst: totalTaxx,
          total_cgst: totalCgst,
          total_sgst: totalSgst,
          total_discount: totalDiscount,
          shipping_charges: "0",
          invoice_id: "12345",
          payment_mode: paymentMetod,
          payment_ref_id: "refrf",
          discount_coupon: "12",
          discount_coupon_value: "150",
          current_address: orderAddress,
        });
        return {};
      });
      console.log("add order json--" + JSON.stringify(databyID));
      const response = await AddUserOrder(databyID);
      const { order_id, user_id, status } = response;
      console.log("order id--" + JSON.stringify(order_id));
      console.log("userid--" + JSON.stringify(user_id));
      console.log("status--" + JSON.stringify(status));
      console.log("order response---" + JSON.stringify(response));

      if (order_id.length > 0) {
        // setIntialState({
        //   ...intialState,
        //   user_id: user_id,
        //   order_id: order_id,
        //   amount: Grand_Total,
        //   payment_method: paymentMetod,
        //   transection_id: "212123777",
        //   is_payment_done: "ok-done",
        // });
        // // order_id.map((item) => {
        // //   transationArray.push({
        // //     user_id: user_id,
        // //     order_id: item,
        // //     amount: Grand_Total,
        // //     payment_method: paymentMetod,
        // //     transection_id: "212123777",
        // //     is_payment_done: "ok-done",
        // //   });
        // //   return {};
        // // });
        // console.log("Transaction---" + JSON.stringify(intialState));
        const resultTransaction = await CreateTransaction(
          user_id,
          order_id,
          Grand_Total,
          paymentMetod
        );
        console.log("resultTransaction---" + JSON.stringify(resultTransaction));
        if (resultTransaction.status === true) {
          setShowOrderAlert(true);
        } else {
          setShowOrderErrorAlert(true);
        }
      } else {
        console.log("ordder id not get");
      }
    }
  };

  const OrderPlacedFucntion = () => {
    return Promise.resolve(setShowOrderAlert(false));

    // navigate("/orderDetails");
    // setShowOrderAlert(false);
  };
  const userdetailsFunction = async () => {
    const userData = await userdetails();

    setUserDetails(userData[0]);
  };

  function product_full_detaile(product_id) {
    localStorage.setItem("productID", product_id);
    navigate("/product_detail");
  }

  const handleAlert = (id) => {
    setCartProductId(id[0]);
    setCartProductQty(id[1]);
    setShowDeleteAlert(true);
  };

  const deleteProductAlert = async () => {
    await cart_delete_api(cartProductId, cartProductQty);

    setShowDeleteAlert(false);
    ContextValue.setapicall(true);
  };
  const closeProductAlert = () => {
    setShowDeleteAlert(false);
  };

  const OnAddressClick = () => {
    setOnActiveClass("currentActive");
    setOrderAddres(userDetails.address);
    setAddressErrorMsg(false);
  };

  const OnAlterAddressClick = () => {
    setOnActiveClass("AlternateActive");
    setOrderAddres(userDetails.alternate_address);
    setAddressErrorMsg(false);
  };

  const onAddressChangeClick = () => {
    setAlternateAddress(userDetails.alternate_address);
    setShow(true);
  };

  const modelCloseFunction = () => {
    setShow(false);
  };
  const onAlternateAddressChange = (e) => {
    setAlternateAddress(e.target.value);
  };

  const onAddressSubmit = async (e) => {
    e.preventDefault();
    const response = await AlternateAddressUpdateFunction(alternateAddress);
    console.log(JSON.stringify(response));
    setapicall(true);
    setShow(false);
  };

  return (
    <div>
      <Header
        cartqty={cartqty}
        setCartQty={setCartQty}
        productapicall={apicall}
        setproductapicall={setapicall}
      />
      <section
        className="inner-section single-banner"
        // style="background: url(images/single-banner.jpg) no-repeat center;"
      >
        <div className="container">
          <h2>checkout</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/shop">shop</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              checkout
            </li>
          </ol>
        </div>
      </section>
      {loading === true ? <Loader /> : null}
      <section className="inner-section checkout-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="alert-info">
                <p>
                  Returning customer?{" "}
                  <Link to="login.html">Click here to login</Link>
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>Your order</h4>
                </div>
                <div className="account-content">
                  <div className="table-scroll">
                    <table className="table-list">
                      <thead>
                        <tr>
                          <th scope="col">Serial</th>
                          <th scope="col">Product</th>
                          <th scope="col">Name</th>

                          <th scope="col">Price</th>
                          <th scope="col">brand</th>
                          <th scope="col">quantity</th>
                          <th scope="col">total Price</th>
                          <th scope="col">action</th>
                        </tr>
                      </thead>
                      <tbody id="cartAlldata">
                        {cartData.map((cdata, id) => {
                          total_qty += cdata.cart_product_quantity;
                          totalprice +=
                            Number(cdata.price) *
                            Number(cdata.cart_product_quantity);
                          discount += Number(cdata.discount);

                          totalDiscount = (totalprice * discount) / 100;

                          Taxx += Number(cdata.gst);

                          totalTaxx = (Taxx * totalprice) / 100;
                          // console.log("taxx--" + totalTaxx);
                          totalSgst = totalTaxx / 2;
                          totalCgst = totalTaxx / 2;
                          Grand_Total = totalprice + totalTaxx - totalDiscount;
                          // Grand_Total = Grand_Total - totalDiscount;
                          return (
                            <>
                              <tr key={id}>
                                <td className="table-serial">
                                  <h6>{id + 1}</h6>
                                </td>
                                <td className="table-image">
                                  <img
                                    src={cdata.cover_image}
                                    alt="product"
                                    style={{
                                      height: "80px",
                                      borderRadius: "10px",
                                    }}
                                  />
                                </td>
                                <td className="table-name">
                                  <h6>{cdata.name}</h6>
                                </td>

                                <td className="table-price">
                                  <h6>₹ {cdata.price} </h6>
                                </td>
                                <td className="table-brand">
                                  <h6>{cdata.brand}</h6>
                                </td>
                                <td className="table-price">
                                  <h6> {cdata.cart_product_quantity}</h6>
                                </td>
                                <td className="table-brand">
                                  <h6>
                                    {Number(
                                      cdata.cart_product_quantity * cdata.price
                                    ).toFixed(2)}
                                  </h6>
                                </td>
                                <td className="table-action">
                                  <button
                                    className="view"
                                    onClick={product_full_detaile.bind(
                                      this,
                                      cdata.product_id
                                    )}
                                  >
                                    <i className="fas fa-eye"></i>
                                  </button>
                                  <Link
                                    className="trash"
                                    title="Remove Wishlist"
                                    onClick={handleAlert.bind(this, [
                                      cdata.product_id,
                                      cdata.cart_product_quantity,
                                    ])}
                                  >
                                    <i className="icofont-trash"></i>
                                  </Link>
                                </td>
                              </tr>
                            </>
                          );

                          // <CheckoutItem cdata={cdata} />;
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className="chekout-coupon">
                    <button className="coupon-btn">
                      Do you have a coupon code?
                    </button>
                    <form className="coupon-form">
                      <input type="text" placeholder="Enter your coupon code" />
                      <button type="submit">
                        <span>apply</span>
                      </button>
                    </form>
                  </div>
                  <div className="checkout-charge">
                    <ul>
                      <li>
                        <span>Sub total :</span>
                        <span> ₹ {Number(totalprice).toFixed(2)}</span>
                      </li>
                      <li>
                        <span>delivery fee :</span>
                        <span>₹ 0</span>
                      </li>
                      <li>
                        <span> Total discount ({discount} %) :</span>
                        <span> ₹{Number(totalDiscount).toFixed(2)}</span>
                      </li>
                      <li>
                        <span>Total Tax ({Taxx} %):</span>
                        <span> ₹{Number(totalTaxx).toFixed(2)}</span>
                      </li>
                      <li>
                        <span>
                          Total<small>(Incl.Tax) :</small>
                        </span>
                        <span> ₹ {Number(Grand_Total).toFixed(2)}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>Delivery Schedule</h4>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card schedule active">
                        <h6>express</h6>
                        <p>90 min express delivery</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card schedule">
                        <h6>8am-10pm</h6>
                        <p>8.00 AM - 10.00 PM</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card schedule">
                        <h6>Next day</h6>
                        <p>Next day or Tomorrow</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>contact number</h4>
                  {/* <button data-bs-toggle="modal" data-bs-target="#contact-add">
                    add contact
                  </button> */}
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card contact active">
                        <h6>Mobile</h6>
                        <p>{userDetails.phone_no}</p>
                        <ul>
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#contact-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card contact">
                        <h6>secondary</h6>
                        <p>+8801941101915</p>
                        <ul>
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#contact-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card contact">
                        <h6>secondary</h6>
                        <p>+8801747875727</p>
                        <ul>
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#contact-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>delivery address</h4>
                  {/* <button data-bs-toggle="modal" data-bs-target="#address-add">
                    add address
                  </button> */}
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div
                        onClick={OnAddressClick}
                        className={
                          onActiveClass === "currentActive"
                            ? "profile-card address active"
                            : "profile-card address"
                        }
                      >
                        <h6>Home</h6>
                        <p>{userDetails.address}</p>
                        {/* <ul className="user-action">
                          <li>
                            <button
                           
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#address-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul> */}
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div
                        onClick={OnAlterAddressClick}
                        className={
                          onActiveClass === "AlternateActive"
                            ? "profile-card address active"
                            : "profile-card address"
                        }
                      >
                        <h6>Alternate Address</h6>
                        <p>{userDetails.alternate_address}</p>
                        <ul className="user-action">
                          <li>
                            <button
                              onClick={onAddressChangeClick}
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#address-edit"
                            ></button>
                          </li>
                          {/* <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                    {/* <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card address">
                        <h6>Bussiness</h6>
                        <p>
                          kawran bazar, dhaka-1100. word no-02, road no-13/d,
                          house no-7/m
                        </p>
                        <ul className="user-action">
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#address-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                    {addressErrorMsg === "addError" ? (
                      <small className="text-danger">
                        Please select Address
                      </small>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card mb-0">
                <div className="account-title">
                  <h4>payment option</h4>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className=" col-lg-12 order-xxl-1 order-lg-2 order-md-1">
                      <div
                        className="accordion accordion-flush custom-accordion"
                        id="accordionFlushExample"
                      >
                        <div className="accordion-item">
                          <Accordion>
                            <Accordion.Item eventKey="2">
                              <Accordion.Header>
                                <div className="custom-form-check form-check mb-0">
                                  <label
                                    className="form-check-label d-flex align-items-center  gap-3"
                                    htmlFor="credit"
                                  >
                                    <input
                                      className="form-check-input mt-0"
                                      type="radio"
                                      value="card"
                                      onChange={(e) => OnPaymentChange(e)}
                                      name="payment"
                                    />
                                    <span
                                      className="pe-2"
                                      style={{ marginRight: "6px" }}
                                    >
                                      Credit or Debit Card
                                    </span>
                                  </label>
                                </div>{" "}
                              </Accordion.Header>
                              <Accordion.Body>
                                <div className="row">
                                  <div className="row d-flex  justify-content-end  my-2">
                                    {" "}
                                    <button className="btn btn-success col-2 ">
                                      add card
                                    </button>
                                  </div>

                                  <div className="col-md-6 col-lg-4 alert fade show">
                                    <div className="payment-card payment active">
                                      <img src={payment1} alt="payment" />
                                      <h4>card number</h4>
                                      <p>
                                        <span>****</span>
                                        <span>****</span>
                                        <span>****</span>
                                        <sup>1876</sup>
                                      </p>
                                      <h5>miron mahmud</h5>
                                      <button
                                        className="trash icofont-ui-delete"
                                        title="Remove This"
                                        data-bs-dismiss="alert"
                                      ></button>
                                    </div>
                                  </div>

                                  <div className="col-md-6 col-lg-4 alert fade show">
                                    <div className="payment-card payment active">
                                      <img src={payment1} alt="payment" />
                                      <h4>card number</h4>
                                      <p>
                                        <span>****</span>
                                        <span>****</span>
                                        <span>****</span>
                                        <sup>1876</sup>
                                      </p>
                                      <h5>miron mahmud</h5>
                                      <button
                                        className="trash icofont-ui-delete"
                                        title="Remove This"
                                        data-bs-dismiss="alert"
                                      ></button>
                                    </div>
                                  </div>

                                  <div className="col-md-6 col-lg-4 alert fade show">
                                    <div className="payment-card payment active">
                                      <img src={payment1} alt="payment" />
                                      <h4>card number</h4>
                                      <p>
                                        <span>****</span>
                                        <span>****</span>
                                        <span>****</span>
                                        <sup>1876</sup>
                                      </p>
                                      <h5>miron mahmud</h5>
                                      <button
                                        className="trash icofont-ui-delete"
                                        title="Remove This"
                                        data-bs-dismiss="alert"
                                      ></button>
                                    </div>
                                  </div>
                                </div>
                                {/* <div
                                  id="flush-collapseOne"
                                  className="accordion-collapse collapse show"
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <div className="accordion-body">
                                    <div className="row g-2">
                                      <div className="col-12">
                                        <div className="payment-method">
                                          <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                            <input
                                              type="text"
                                              className="form-control"
                                              id="credit2"
                                              placeholder="Enter Credit & Debit Card Number"
                                            />
                                            <label htmlFor="credit2">
                                              Enter Credit & Debit Card Number
                                            </label>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="col-xxl-4">
                                        <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="expiry"
                                            placeholder="Enter Expiry Date"
                                          />
                                          <label htmlFor="expiry">
                                            Expiry Date
                                          </label>
                                        </div>
                                      </div>

                                      <div className="col-xxl-4">
                                        <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="cvv"
                                            placeholder="Enter CVV Number"
                                          />
                                          <label htmlFor="cvv">
                                            CVV Number
                                          </label>
                                        </div>
                                      </div>

                                      <div className="col-xxl-4">
                                        <div className="form-floating mb-lg-3 mb-2 theme-form-floating">
                                          <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter Password"
                                          />
                                          <label htmlFor="password">
                                            Password
                                          </label>
                                        </div>
                                      </div>

                                      <div className="button-group mt-0">
                                        <ul>
                                          <li>
                                            <button className="btn btn-light shopping-button">
                                              Cancel
                                            </button>
                                          </li>

                                          <li>
                                            <button className="btn btn-animation">
                                              Use This Card
                                            </button>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>

                        <div className="accordion-item">
                          <Accordion>
                            <Accordion.Item eventKey="2">
                              <Accordion.Header>
                                {" "}
                                <div className="custom-form-check form-check mb-0">
                                  <label
                                    className="form-check-label"
                                    htmlFor="banking"
                                  >
                                    <input
                                      className="form-check-input mt-0"
                                      type="radio"
                                      value="netbanking"
                                      name="payment"
                                      onChange={(e) => OnPaymentChange(e)}
                                    />
                                    Net Banking
                                  </label>
                                </div>
                              </Accordion.Header>
                              {/* <Accordion.Body>
                                    <div className="accordion-body">
                                      <h5 className="text-uppercase mb-4">
                                        Select Your Bank
                                      </h5>
                                      <div className="row g-2">
                                        <div className="col-md-6">
                                          <div className="custom-form-check form-check">
                                            <input
                                              className="form-check-input mt-0"
                                              type="radio"
                                              value="choice1"
                                              onChange={func}
                                              name="button"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="bank1"
                                            >
                                              Industrial & Commercial Bank
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="custom-form-check form-check">
                                            <input
                                              className="form-check-input mt-0"
                                              type="radio"
                                              onChange={func}
                                              value="choice2"
                                              name="button"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="bank2"
                                            >
                                              Agricultural Bank
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="custom-form-check form-check">
                                            <input
                                              className="form-check-input mt-0"
                                              type="radio"
                                              value="choice3"
                                              name="button"
                                              onChange={func}
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="bank3"
                                            >
                                              Bank of America
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="custom-form-check form-check">
                                            <input
                                              className="form-check-input mt-0"
                                              type="radio"
                                              value="choice4"
                                              onChange={func}
                                              name="button"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="bank4"
                                            >
                                              Construction Bank Corp.
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="custom-form-check form-check">
                                            <input
                                              className="form-check-input mt-0"
                                              type="radio"
                                              value="choice5"
                                              name="button"
                                              onChange={func}
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="bank5"
                                            >
                                              HSBC Holdings
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-md-6">
                                          <div className="custom-form-check form-check">
                                            <input
                                              className="form-check-input mt-0"
                                              type="radio"
                                              value="choice6"
                                              name="button"
                                              onChange={func}
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="bank6"
                                            >
                                              JPMorgan Chase & Co.
                                            </label>
                                          </div>
                                        </div>

                                        <div className="col-12">
                                          <div className="select-option">
                                            <div className="form-floating theme-form-floating">
                                              <select
                                                className="form-select theme-form-select"
                                                aria-label="Default select example"
                                              >
                                                <option value="hsbc">
                                                  HSBC Holdings
                                                </option>
                                                <option value="loyds">
                                                  Lloyds Banking Group
                                                </option>
                                                <option value="natwest">
                                                  Nat West Group
                                                </option>
                                                <option value="Barclays">
                                                  Barclays
                                                </option>
                                                <option value="other">
                                                  Others Bank
                                                </option>
                                              </select>
                                              <label>Select Other Bank</label>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Accordion.Body> */}
                            </Accordion.Item>
                          </Accordion>
                        </div>

                        <div className="accordion-item">
                          <Accordion>
                            <Accordion.Item eventKey="2">
                              <Accordion.Header>
                                <div className="custom-form-check form-check mb-0">
                                  <label
                                    className="form-check-label"
                                    htmlFor="wallet"
                                  >
                                    <input
                                      className="form-check-input mt-0"
                                      type="radio"
                                      value="wallet"
                                      onChange={(e) => OnPaymentChange(e)}
                                      name="payment"
                                    />
                                    My Wallet
                                  </label>
                                </div>
                              </Accordion.Header>
                              <Accordion.Body>
                                <div className="accordion-body">
                                  <h5 className="text-uppercase mb-4">
                                    Select Your Wallet
                                  </h5>
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <label
                                          className="form-check-label"
                                          htmlFor="amazon"
                                        >
                                          <input
                                            className="form-check-input mt-0"
                                            type="radio"
                                            value="choice10"
                                            // onChange={func}
                                            name="button"
                                          />
                                          Amazon Pay
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          // onChange={func}
                                          value="choice11"
                                          name="button"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="gpay"
                                        >
                                          Google Pay
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          value="choice12"
                                          // onChange={func}
                                          name="button"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="airtel"
                                        >
                                          Airtel Money
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          value="choice12"
                                          // onChange={func}
                                          name="button"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="paytm"
                                        >
                                          Paytm Pay
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          value="choice13"
                                          // onChange={func}
                                          name="button"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="jio"
                                        >
                                          JIO Money
                                        </label>
                                      </div>
                                    </div>

                                    <div className="col-md-6">
                                      <div className="custom-form-check form-check">
                                        <input
                                          className="form-check-input mt-0"
                                          type="radio"
                                          value="choice14"
                                          // onChange={func}
                                          name="button"
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="free"
                                        >
                                          Freecharge
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </div>

                        <div className="accordion-item">
                          <Accordion>
                            <Accordion.Item eventKey="2">
                              <Accordion.Header>
                                <div className="custom-form-check form-check mb-0">
                                  <label
                                    className="form-check-label"
                                    htmlFor="cash"
                                  >
                                    <input
                                      className="form-check-input mt-0"
                                      type="radio"
                                      value="cod"
                                      onChange={(e) => OnPaymentChange(e)}
                                      name="payment"
                                    />
                                    Cash On Delivery
                                  </label>
                                </div>
                              </Accordion.Header>
                              {/* <Accordion.Body>
                                <div className="accordion-body">
                                  <h5 className="cod-review">
                                    Pay digitally with SMS Pay Link. Cash may
                                    not be accepted in COVID restricted areas.{" "}
                                    <Link to="/">Know more.</Link>
                                  </h5>
                                </div>
                              </Accordion.Body> */}
                            </Accordion.Item>
                          </Accordion>
                        </div>
                      </div>
                    </div>
                  </div>
                  {addressErrorMsg === "paymentError" ? (
                    <small className="text-danger">
                      Please select any payment option
                    </small>
                  ) : null}
                </div>
                {/* <div className="checkout-check">
                  <input type="checkbox" id="checkout-check" required />
                  <label for="checkout-check">
                    By making this purchase you agree to our{" "}
                    <Link to="">Terms and Conditions</Link>.
                  </label>
                </div> */}
                <div className="checkout-proced">
                  <button
                    className="btn btn-outline mt-3"
                    onClick={addCartInorder}
                  >
                    proced to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal show={show} onHide={modelCloseFunction}>
          <Modal.Header closeButton>
            <Modal.Title>Delivery Address Change</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => onAddressSubmit(e)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Alternate address</Form.Label>
                <Col sm="12">
                  <InputGroup classNameName="">
                    <Form.Control
                      rows={5}
                      as="textarea"
                      className="h-auto"
                      name="address"
                      aria-label="With textarea"
                      onChange={onAlternateAddressChange}
                      value={alternateAddress}
                    />
                  </InputGroup>
                </Col>
              </Form.Group>
              <Button variant="secondary" onClick={modelCloseFunction}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </section>
      <SweetAlert
        show={ShowDeleteAlert}
        title="Cart Delete"
        text="Are you Sure  delete from cart"
        onConfirm={deleteProductAlert}
        showCancelButton={true}
        onCancel={closeProductAlert}
      />

      <SweetAlert
        show={ShowOrderAlert}
        title="Order Added"
        text="Order successfully placed.."
        onConfirm={() =>
          OrderPlacedFucntion().then(() => {
            navigate("/order_list");
          })
        }
      />

      <SweetAlert
        show={ShowOrderErrorAlert}
        title="Order"
        text="Order not placed"
        onConfirm={() => setShowOrderErrorAlert(false)}
      />
      <Footer />
    </div>
  );
}

export default Checkout;
