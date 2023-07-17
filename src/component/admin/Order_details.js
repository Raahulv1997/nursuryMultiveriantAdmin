import React, { useEffect, useState } from "react";
import "./Order_details.css";
import moment from "moment";
import Loader from "../common/loader";
import { OrderByNo } from "../api/api";
import Sidebar from "../common/sidebar";
import productImg from "../../image/product_demo.png"
const OrderDetail = () => {
  const orderIDD = localStorage.getItem("orderid");
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const getOrderDetail = async () => {
      setLoading(true);
      const response = await OrderByNo(orderIDD);
      if (response.response === "not found") {
        setOrderData([]);
        setUserData([]);
        setProductData([]);
        setLoading(false);
      } else {
        const { order_detaile, order_product_detaile, user_detaile } = response;
        setOrderData(order_detaile[0]);
        setUserData(user_detaile[0]);
        setProductData(order_product_detaile);
        setLoading(false);
      }

      // console.log("product  data----" + JSON.stringify(order_product_detaile));
    };
    getOrderDetail();
  }, [orderIDD]);

  /*FUnction to get the image from tht muliple image with dpouble commas */
  const CoverImg = (img) => {
    const result = img.replace(/,+/g, ',');
    return result.split(",")[0];
  };
  return (
    <>
      <div className="row admin_row mt-3">
        <div className="col-lg-3 col-md-3 admin_sidebar bg-white">
          <Sidebar />
        </div>
        {loading === true ? <Loader /> : null}
        <div className="col-lg-9 col-md-9 admin_content_bar">
          <div className="main_content_div">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="account-card">
                    <div className="account-title">
                      <h4>order recieved</h4>
                    </div>
                    <div className="account-content">
                      <div className="invoice-recieved">
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
                <div className="col-lg-12">
                  <div className="account-card">
                    <div className="account-title">
                      <h4>User Details</h4>
                    </div>
                    <div className="account-content">
                      <div className="invoice-recieved">
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
                <div className="col-lg-12">
                  <div className="table-scroll mb-4">
                    <table className="table-list">
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
                              <tr key={id}>
                                <td className="table-serial">
                                  <h6>{id + 1}</h6>
                                </td>
                                <td className="table-image">
                                  <img src={pdata.cover_image === null
                                    || pdata.cover_image === undefined
                                    || pdata.cover_image === "undefined"
                                    ? productImg : CoverImg(pdata.cover_image)} alt="product" />
                                </td>
                                <td className="table-name">
                                  <h6>{pdata.name}</h6>
                                </td>
                                <td className="table-price">
                                  <h6>
                                    ₹ {pdata.price}
                                    <small>/{pdata.unit}</small>
                                  </h6>
                                </td>
                                <td className="table-brand">
                                  <h6>{pdata.brand}</h6>
                                </td>
                                {/* <td className="table-quantity">
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
                <div className="col-lg-6">
                  <div className="account-card">
                    <div className="account-title">
                      <h4>Order Details</h4>
                    </div>
                    <div className="account-content">
                      <ul className="invoice-details">
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
                <div className="col-lg-6">
                  <div className="account-card">
                    <div className="account-title">
                      <h4>Amount Details</h4>
                    </div>
                    <div className="account-content">
                      <ul className="invoice-details">
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
