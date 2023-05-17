import { Link, useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import "../../../src/component/css-js/fonts/icofont/icofont.min.css";
import {
  AddUserOrder,
  cart_delete_api,
  fetchcartdata,
  userdetails,
} from "../api/api";
// import CheckoutItem from "./checkout_item";
// import payment1 from "../css-js/images/payment/png/01.png";
import CartContext from "../helper/cart";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import Header from "../common/header";
import Footer from "../common/footer";
// import CartContext from "../helper/cart";

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
  const [ShowOrderAlert, setShowOrderAlert] = useState(false);
  const [ShowOrderErrorAlert, setShowOrderErrorAlert] = useState(false);
  const [ShowDeleteAlert, setShowDeleteAlert] = useState(false);
  const ContextValue = useContext(CartContext);
  const [cartData, setCartData] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [cartProductId, setCartProductId] = useState("");
  const [cartProductQty, setCartProductQty] = useState("");

  useEffect(() => {
    cartdatafucntion();
    userdetailsFunction();
  }, [ContextValue.state]);

  const cartdatafucntion = async () => {
    const userData = await fetchcartdata();

    setCartData(userData);
    ContextValue.setapicall(false);

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
    });

    // console.log("qtyyy--" + JSON.stringify(kk));
  };

  // console.log("qtyyy--" + JSON.stringify(orderadd));

  const addCartInorder = async () => {
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
        payment_mode: "cod",
        payment_ref_id: "refrf",
        discount_coupon: "12",
        discount_coupon_value: "150",
      });
    });
    // console.log("add order json--" + JSON.stringify(databyID));
    const response = await AddUserOrder(databyID);
    // console.log("order response---" + JSON.stringify(response));
    if (response.status === "ok") {
      setShowOrderAlert(true);
    } else {
      setShowOrderErrorAlert(true);
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

    navigate("/product_detaile");
  }

  const handleAlert = (id) => {
    setCartProductId(id[0]);
    setCartProductQty(id[1]);
    setShowDeleteAlert(true);
  };

  const deleteProductAlert = async () => {
    const responce = await cart_delete_api(cartProductId, cartProductQty);
    // console.log("delerte respoce--" + JSON.stringify(responce));
    setShowDeleteAlert(false);
    ContextValue.setapicall(true);
  };
  const closeProductAlert = () => {
    setShowDeleteAlert(false);
  };

  return (
    <div>
      <Header />
      <section
        class="inner-section single-banner"
        // style="background: url(images/single-banner.jpg) no-repeat center;"
      >
        <div class="container">
          <h2>checkout</h2>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <Link to="index.html">Home</Link>
            </li>
            <li class="breadcrumb-item">
              <Link to="shop-4column.html">shop grid</Link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              checkout
            </li>
          </ol>
        </div>
      </section>
      <section className="inner-section checkout-part">
        <div className="container">
          <div className="row">
            <div class="col-lg-12">
              <div class="alert-info">
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
                              <tr>
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
                                  <a
                                    className="view"
                                    onClick={product_full_detaile.bind(this, [
                                      cdata.product_id,
                                    ])}
                                    title="Quick View"
                                    data-bs-toggle="modal"
                                    data-bs-target="#product-view"
                                  >
                                    <i className="fas fa-eye"></i>
                                  </a>
                                  <a
                                    className="trash"
                                    title="Remove Wishlist"
                                    onClick={handleAlert.bind(this, [
                                      cdata.product_id,
                                      cdata.cart_product_quantity,
                                    ])}
                                  >
                                    <i className="icofont-trash"></i>
                                  </a>
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
                  <button data-bs-toggle="modal" data-bs-target="#contact-add">
                    add contact
                  </button>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card contact active">
                        <h6>primary</h6>

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
                    </div> */}
                    {/* <div className="col-md-6 col-lg-4 alert fade show">
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
                  <button data-bs-toggle="modal" data-bs-target="#address-add">
                    add address
                  </button>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card address active">
                        <h6>Address </h6>
                        <p>{userDetails.address}</p>
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
                    </div>
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card address">
                        <h6>Alternate Address</h6>
                        <p>{userDetails.alternate_address}</p>
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card mb-0">
                {/* <div className="account-title">
                  <h4>payment option</h4>
                  <button data-bs-toggle="modal" data-bs-target="#payment-add">
                    add card
                  </button>
                </div> */}
                {/* <div className="account-content">
                  <div className="row">
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
                      <div className="payment-card payment">
                        <img src="images/payment/png/02.png" alt="payment" />
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
                      <div className="payment-card payment">
                        <img src="images/payment/png/03.png" alt="payment" />
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
                      <div className="payment-card payment">
                        <input type="radio" id="checkout-check" />
                        Case On delivery
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="checkout-check">
                  <input type="checkbox" id="checkout-check" />
                  <label for="checkout-check">
                    By making this purchase you agree to our{" "}
                    <Link to="#">Terms and Conditions</Link>.
                  </label>
                </div>
                <div className="checkout-proced">
                  <button className="btn btn-inline " onClick={addCartInorder}>
                    proced to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
