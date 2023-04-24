import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import "../../../src/component/css-js/fonts/icofont/icofont.min.css";
import { fetchcartdata, userdetails } from "../api/api";
import CheckoutItem from "./checkout_item";
import payment1 from "../css-js/images/payment/png/01.png";
import CartContext from "../helper/cart";

function Checkout() {
  const [cartData, setCartData] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  const qtyValue = useContext(CartContext);
  console.log("ss--" + qtyValue);
  const [orderadd, setorderadd] = useState({
    product_id: 15,
    total_order_product_quantity: 1,
    total_amount: "1100",
    total_gst: "123",
    total_cgst: "12",
    total_sgst: "44",
    total_discount: "20",
    shipping_charges: "",
    invoice_id: 9,
    payment_mode: "cod",
    payment_ref_id: "22",
    discount_coupon: "rafaf",
    discount_coupon_value: "120",
  });

  useEffect(() => {
    cartdatafucntion();
    userdetailsFunction();
  }, []);

  const cartdatafucntion = async () => {
    const userData = await fetchcartdata();
    console.log("cart data--" + JSON.stringify(userData));
    setCartData(userData);

    let totalprice = 0;
    let discount = 0;
    let totalDiscount = 0;
    let Taxx = 0;
    let totalTaxx = 0;
    let Grand_Total = 0;
    let total_qty = 0;
    cartData.map((cdata) => {
      total_qty += cdata.cart_product_quantity;
      console.log("qtyyy--" + total_qty);
      totalprice += Number(cdata.price) * Number(cdata.cart_product_quantity);
      discount += Number(cdata.discount) * Number(cdata.cart_product_quantity);

      totalDiscount = (totalprice * discount) / 100;

      Taxx += Number(cdata.gst) * Number(cdata.cart_product_quantity);
      totalTaxx += (Taxx * totalprice) / 100;
      Grand_Total = totalprice + totalTaxx - totalDiscount;

      setorderadd({
        ...orderadd,
        product_id: "",
        total_order_product_quantity: "",
        total_amount: "",
        total_gst: "",
        total_cgst: "",
        total_sgst: "",
        total_discount: "",
        shipping_charges: "",
        invoice_id: "",
        payment_mode: "",
        payment_ref_id: "",
        discount_coupon: "",
        discount_coupon_value: "",
      });
    });
  };

  const addCartInorder = () => {};

  const userdetailsFunction = async () => {
    const userData = await userdetails();

    setUserDetails(userData[0]);
  };

  let totalprice = 0;
  let discount = 0;
  let totalDiscount = 0;
  let Taxx = 0;
  let totalTaxx = 0;
  let Grand_Total = 0;

  return (
    <div>
      <section
        class="inner-section single-banner"
        // style="background: url(images/single-banner.jpg) no-repeat center;"
      >
        <div class="container">
          <h2>checkout</h2>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="shop-4column.html">shop grid</a>
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
                  <a href="login.html">Click here to login</a>
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
                        {cartData.map((cdata) => {
                          totalprice +=
                            Number(cdata.price) *
                            Number(cdata.cart_product_quantity);
                          discount +=
                            Number(cdata.discount) *
                            Number(cdata.cart_product_quantity);

                          totalDiscount = (totalprice * discount) / 100;

                          Taxx +=
                            Number(cdata.gst) *
                            Number(cdata.cart_product_quantity);
                          totalTaxx += (Taxx * totalprice) / 100;
                          Grand_Total = totalprice + totalTaxx - totalDiscount;
                          // Grand_Total = Grand_Total - totalDiscount;
                          return <CheckoutItem cdata={cdata} />;
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
                        <span>Total Tax ({Taxx} %) :</span>
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
                <div className="account-title">
                  <h4>payment option</h4>
                  <button data-bs-toggle="modal" data-bs-target="#payment-add">
                    add card
                  </button>
                </div>
                <div className="account-content">
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
                </div>
                <div className="checkout-check">
                  <input type="checkbox" id="checkout-check" />
                  <label for="checkout-check">
                    By making this purchase you agree to our{" "}
                    <a href="#">Terms and Conditions</a>.
                  </label>
                </div>
                <div className="checkout-proced">
                  <button className="btn btn-inline">proced to checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Checkout;
