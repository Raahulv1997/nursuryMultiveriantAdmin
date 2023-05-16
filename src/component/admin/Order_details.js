import React, { useEffect, useState } from "react";
import "./Order_details.css";
import moment from "moment";
import { BsTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import axios from "axios";
import { AiOutlineFileText } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import statusJson from "./json/statusJson";
import { allOrder, fetchUserData, OrderByNo } from "../api/api";
import Sidebar from "../common/sidebar";

const OrderDetail = () => {
  const orderIDD = localStorage.getItem("orderId");

  const [orderData, setOrderData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    getOrderDetail();
  }, []);

  // let orderid = localStorage.getItem("orderid");
  // let userid = localStorage.getItem("userid");
  // let [apicall, setApicall] = useState(false);
  // const [getuserData, setGetuserData] = useState([]);

  // const [order, setOrder] = useState([]);
  // const [allorderDetails, setAllorderDetails] = useState([]);
  // const searchdata = "";

  // useEffect(() => {
  //   getOrderData();
  //   UserData();
  // }, [apicall]);

  // const UserData = async () => {
  //   const response = await fetchUserData(searchdata, userid);
  //   console.log("user------" + JSON.stringify(response));
  //   if (response === []) {
  //     setGetuserData([]);
  //   } else {
  //     setGetuserData(response[0]);
  //   }
  // };

  // const getOrderData = async () => {
  //   const response = await allOrder(orderid);
  //   console.log("order------" + JSON.stringify(response));
  //   setAllorderDetails(response.results[0]);
  //   setOrder(response.results);
  // };

  var total = 0;
  var sub_total = 0;
  var total_tax = 0;
  let qty = 0;

  let total_tax_with_qty = 0;
  let total_priceWithout_tax = 0;

  const getOrderDetail = async () => {
    const response = await OrderByNo(orderIDD);

    const { order_detaile, order_product_detaile, user_detaile } = response;
    // console.log("user  data----" + JSON.stringify(user_detaile));
    setOrderData(order_detaile[0]);
    setUserData(user_detaile[0]);
    setProductData(order_product_detaile);
    // console.log("product  data----" + JSON.stringify(order_product_detaile));
  };

  return (
    <>
      <div className="row admin_row mt-3">
        <div className="col-lg-3 col-md-3 admin_sidebar">
          <Sidebar />
        </div>
        <div className="col-lg-9 col-md-9 admin_content_bar">
          <div className="main_content_div">
            <div className="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="account-card">
                    <div class="account-title">
                      <h4>order recieved</h4>
                    </div>
                    <div class="account-content">
                      <div class="invoice-recieved">
                        <h6>
                          order number <span>{orderData.order_id}</span>
                        </h6>
                        <h6>
                          order date{" "}
                          <span>
                            {moment(orderData.order_date).format("DD-MM-YYYY")}
                          </span>
                        </h6>
                        <h6>
                          total amount{" "}
                          <span>
                            {Number(orderData.total_amount).toFixed(2)}
                          </span>
                        </h6>
                        <h6>
                          payment method{" "}
                          <span>
                            {orderData.payment_mode === "cod"
                              ? "Case on Delivery"
                              : null}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="account-card">
                    <div class="account-title">
                      <h4>User Details</h4>
                    </div>
                    <div class="account-content">
                      <div class="invoice-recieved">
                        <h6>
                          Name{" "}
                          <span>
                            {userData.first_name} {userData.last_name}
                          </span>
                        </h6>

                        <h6>
                          Email <span>{userData.email}</span>
                        </h6>
                        <h6>
                          Phone No. <span>{userData.phone_no}</span>
                        </h6>
                        <h6>
                          Pincode <span>{userData.pincode}</span>
                        </h6>
                        <h6>
                          City <span>{userData.city}</span>
                        </h6>
                        <h6>
                          Address <span>{userData.address}</span>
                        </h6>
                        <h6>
                          Alternate Address{" "}
                          <span>{userData.alternate_address}</span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="table-scroll mb-4">
                    <table class="table-list">
                      <thead>
                        <tr>
                          <th scope="col">Serial</th>
                          <th scope="col">Product</th>
                          <th scope="col">Name</th>
                          <th scope="col">Price</th>
                          <th scope="col">brand</th>
                          {/* <th scope="col">quantity</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        {productData.map((pdata, id) => {
                          return (
                            <>
                              <tr>
                                <td class="table-serial">
                                  <h6>{id + 1}</h6>
                                </td>
                                <td class="table-image">
                                  <img src={pdata.cover_image} alt="product" />
                                </td>
                                <td class="table-name">
                                  <h6>{pdata.name}</h6>
                                </td>
                                <td class="table-price">
                                  <h6>
                                    ₹ {pdata.price}
                                    <small>/{pdata.unit}</small>
                                  </h6>
                                </td>
                                <td class="table-brand">
                                  <h6>{pdata.brand}</h6>
                                </td>
                                {/* <td class="table-quantity">
                              <h6>3</h6>
                            </td> */}
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="account-card">
                    <div class="account-title">
                      <h4>Order Details</h4>
                    </div>
                    <div class="account-content">
                      <ul class="invoice-details">
                        <li>
                          <h6>Total Item </h6>
                          <p> {orderData.total_order_product_quantity}Items</p>
                        </li>
                        <li>
                          <h6>Order Time</h6>
                          <p>
                            {" "}
                            {moment(orderData.order_date).format("h:mm:ss a")}
                          </p>
                        </li>
                        <li>
                          <h6>Delivery Time</h6>
                          <p>
                            {moment(orderData.delivery_date).format(
                              "h:mm:ss a"
                            )}
                          </p>
                        </li>
                        <li>
                          <h6>Delivery Location</h6>
                          <p>{userData.address}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="account-card">
                    <div class="account-title">
                      <h4>Amount Details</h4>
                    </div>
                    <div class="account-content">
                      <ul class="invoice-details">
                        {/* <li>
                      <h6>Sub Total</h6>
                      <p>$10,864.00</p>
                    </li> */}
                        <li>
                          <h6>discount</h6>
                          <p>{Number(orderData.total_discount).toFixed(2)}</p>
                        </li>
                        <li>
                          <h6>Total Tax</h6>
                          <p>₹{Number(orderData.total_gst).toFixed(2)}</p>
                        </li>
                        <li>
                          <h6>Payment Method</h6>
                          <p>
                            {" "}
                            {orderData.payment_mode === "cod"
                              ? "Cash on Delivery"
                              : null}
                          </p>
                        </li>
                        <li>
                          <h6>
                            Total<small>(Incl. VAT)</small>
                          </h6>
                          <p>₹{Number(orderData.total_amount).toFixed(2)}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderDetail;
