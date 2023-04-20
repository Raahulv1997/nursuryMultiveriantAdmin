import React, { useEffect, useState } from "react";
import "./Order_details.css";
import moment from "moment";
import { BsTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import axios from "axios";
import { AiOutlineFileText } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import statusJson from "./json/statusJson";
import { allOrder, fetchUserData } from "../api/api";

const OrderDetail = () => {
  let orderid = localStorage.getItem("orderid");
  let userid = localStorage.getItem("userid");
  let [apicall, setApicall] = useState(false);
  const [getuserData, setGetuserData] = useState([]);

  const [order, setOrder] = useState([]);
  const [allorderDetails, setAllorderDetails] = useState([]);
  const searchdata = "";

  useEffect(() => {
    getOrderData();
    UserData();
  }, [apicall]);

  const UserData = async () => {
    const response = await fetchUserData(searchdata, userid);
    console.log("user------" + JSON.stringify(response));

    setGetuserData(response[0]);
  };

  const getOrderData = async () => {
    const response = await allOrder(orderid);
    console.log("order------" + JSON.stringify(response));
    setAllorderDetails(response.results[0]);
    setOrder(response.results);
  };

  var total = 0;
  var sub_total = 0;
  var total_tax = 0;
  let qty = 0;

  let total_tax_with_qty = 0;
  let total_priceWithout_tax = 0;
  return (
    <>
      <div className="order_detail">
        <h4>Orders Detail</h4>
        <div className="row">
          <div className="col-lg-8">
            <div className="left_side">
              <div className="top_bar d-flex justify-content-between text-center">
                <div className="order_id d-flex flex-column">
                  <div className="order_info_heading">
                    <span>Order Id</span>
                  </div>
                  <div>
                    <span>{allorderDetails.order_id}</span>
                  </div>
                </div>
                <div className="d-flex flex-column text-center">
                  <div className="order_info_heading">Payment</div>
                  <div className="badge bg-success">cod</div>
                </div>
                <div className="d-flex flex-column text-center">
                  <div className="order_info_heading">Order Status</div>

                  <Form.Select
                    aria-label="Floating label select example"
                    //   onChange={onStatusChangee}
                    name="status"
                    value={allorderDetails.status_order}
                  >
                    <option value={""}>Select Order Status</option>
                    {statusJson.status_order.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </Form.Select>
                </div>
                <div className="d-flex flex-column text-center">
                  <div className="order_info_heading">Order Date & Time</div>
                  <div className="date_time">
                    {moment(allorderDetails.order_date).format("YYYY-MM-DD")}
                  </div>
                </div>

                <div className="d-flex flex-column text-center">
                  <div className="order_info_heading">Delivery Date</div>
                  <div className="date_time">
                    {moment(allorderDetails.delivery_date).format("YYYY-MM-DD")}
                  </div>
                </div>
              </div>
            </div>

            <div className="product_img_price">
              <div className="product_image_price"></div>

              {/* //  order items details div end here  */}
              {order.map((orderdata, key) => {
                orderdata.gst == "null" ||
                orderdata.gst == "undefined" ||
                orderdata.gst == ""
                  ? (orderdata.gst = "0")
                  : Number(orderdata.gst);
                orderdata.sgst == "null" ||
                orderdata.sgst == "undefined" ||
                orderdata.sgst == ""
                  ? (orderdata.sgst = "0")
                  : Number(orderdata.sgst);
                orderdata.cgst == "null" ||
                orderdata.cgst == "undefined" ||
                orderdata.cgst == ""
                  ? (orderdata.cgst = "0")
                  : Number(orderdata.cgst);
                orderdata.mrp == "undefined" ||
                orderdata.mrp == "null" ||
                orderdata.mrp == ""
                  ? (orderdata.mrp = "0")
                  : Number(orderdata.mrp);
                let discont = (orderdata.mrp * orderdata.discount) / 100;
                let tax =
                  (Number(orderdata.price) * Number(orderdata.gst)) / 100;
                console.log(" tax--" + tax);

                qty = orderdata.total_order_product_quantity;

                let total_price = orderdata.price * qty;

                let Total_taxMultiply_qty = tax * qty;
                // console.log("textt--" + Total_taxMultiply_qty);
                total_tax_with_qty += Number(Total_taxMultiply_qty);
                let price_without_tax =
                  Number(orderdata.price).toFixed(2) - tax;
                console.log("price without tax--" + price_without_tax);
                let pricewithout_tax_with_qty = price_without_tax * qty;

                total_priceWithout_tax += Number(pricewithout_tax_with_qty);

                total += Number(total_price);
                sub_total += Number(orderdata.price);
                total_tax += Number(tax);

                return (
                  <div className="d-flex justify-content-between mb-3 align-items-center">
                    <div className="product_img d-flex">
                      <img
                        src={
                          orderdata.cover_image
                            ? orderdata.cover_image
                            : "https://t3.ftcdn.net/jpg/05/37/73/58/360_F_537735846_kufBp10E8L4iV7OLw1Kn3LpeNnOIWbvf.jpg"
                        }
                        alt="apnaorganic"
                      />
                      <div className="product_name_detial ps-3">
                        <h6> Name: </h6>
                        {orderdata.name}
                        <br />
                        <p>
                          {" "}
                          {orderdata.unit}:{orderdata.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="product_price">
                      {" "}
                      MRP-₹{orderdata.mrp} ({Number(orderdata.discount)}% )
                      <br /> Discount- ₹ {discont}
                      <br />
                      Product Price- ₹{Number(orderdata.price).toFixed(2)}
                    </div>

                    <div className="product_quantity">
                      Price without tax- <br />₹ {price_without_tax.toFixed(2)}
                      <br /> Tax -₹ {tax.toFixed(2)}
                    </div>

                    <div className="product_quantity">
                      Price-
                      <br />₹{Number(orderdata.price).toFixed(2)}
                      <br />
                    </div>

                    <div className="product_quantity">QTY- {qty}</div>
                    <div className="total_amount">
                      Total Price- <br />₹{Number(total_price).toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
            {/* order items details div end here */}

            <div className="delivery_charges">
              <h5 className="pb-3">Delivery</h5>
              <div className="d-flex justify-content-between align-items-center">
                <div className="delivery_img d-flex ">
                  <img
                    src="https://media.istockphoto.com/vectors/express-delivery-symbol-vector-id1175078000?b=1&k=20&m=1175078000&s=612x612&w=0&h=2Y5FLXleVSLyaEfZztp2Mhf2pVV6BbqNYkXYs1KHpik="
                    alt="apnaorganic"
                  />
                  <div className="delivery_componay ps-3">
                    <h6>E-Kart</h6>
                    <p>Speed post package</p>
                  </div>
                </div>
                <div className="delivery_payment">00</div>
              </div>
              <div className="payment_summary">
                <h5 className="pb-3">Payment Summary</h5>
                <div className="payment_summary_total d-flex justify-content-between align-items-center">
                  <div className="Subtotal">
                    <p>Total Price(Excluding Tax)</p>
                  </div>
                  <div className="">
                    ₹
                    {(
                      Number(allorderDetails.total_amount) -
                      Number(allorderDetails.total_gst)
                    ).toFixed(2)}
                    {/* <span className=""> = {total_tax.toFixed(2) * qty}</span> */}
                  </div>
                </div>

                <div className="payment_summary_total d-flex justify-content-between align-items-center">
                  <div className="Subtotal">
                    <p> Total Tax (Tax x Qty) </p>
                  </div>
                  <div className="">
                    {/* {total_tax.toFixed(2)} x {total_qty} Qty */}₹
                    {Number(allorderDetails.total_gst).toFixed(2)}
                  </div>
                </div>
                <div className="payment_summary_total d-flex justify-content-between align-items-center">
                  <div className="Subtotal">
                    <p>
                      Subtotal
                      <span>( {qty} items )(Include all Taxes)</span>
                    </p>
                  </div>
                  <div className="">₹ {sub_total.toFixed(2)}</div>
                </div>
                <div className="payment_summary_total d-flex justify-content-between align-items-center">
                  <div className="Subtotal">
                    <p>Delivery Charges</p>
                  </div>
                  <div className="">₹{allorderDetails.shipping_charges}</div>
                </div>
                <div className="payment_summary_total d-flex justify-content-between align-items-center">
                  <div className="Subtotal">
                    <p> Discont Coupon Ammount </p>
                  </div>
                  <div className="">
                    {" "}
                    ₹{Number(allorderDetails.discount_coupon_value).toFixed(2)}
                  </div>
                </div>
                <div className="payment_summary_total d-flex justify-content-between align-items-center">
                  <div className="Subtotal">
                    <p>
                      <strong>
                        Total paid by customer ( SubTotal - Coupon Discount)
                      </strong>
                    </p>
                  </div>
                  <div className="">
                    <strong>
                      ₹{Number(allorderDetails.total_amount).toFixed(2)}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="right_side">
              <div className="customer_name_address">
                <div className="customer_info">
                  <div className="customer">Customer Details</div>

                  <div className="customer_name_img d-flex py-3">
                    {/* <img src={Profile} alt={"apnaorganic"} /> */}
                    <div className="customer_name ps-4 my-auto">
                      {getuserData.first_name} {getuserData.last_name}
                    </div>
                  </div>
                  <div className="customer_orders d-flex py-3">
                    <AiOutlineFileText className="order_icon p-1" />

                    <div className="customer_orders_no ps-4 my-auto">
                      5 {/* {order.total_quantity} */}
                    </div>
                  </div>
                </div>
                <div className="contact py-3">
                  <div className="contact_heading pb-3">
                    <h5>Contact Info</h5>
                  </div>
                  <div className="email py-2">
                    <BsFillEnvelopeFill />
                    <span>{getuserData.email}</span>
                  </div>
                  <div className="number py-2">
                    <BsTelephoneFill />
                    <span>{getuserData.phone_no}</span>
                  </div>
                </div>
                <div className="ship_Address py-3">
                  <h5>Ship Address</h5>
                  <div className="address">
                    <p> </p>

                    <p>Address: {getuserData.address}</p>
                    <p> Alternate Address: {getuserData.alternate_address}</p>
                    <p>City:{getuserData.city}</p>
                    <p>Pin:{getuserData.pincode}</p>
                    <p>Phone: {getuserData.phone_no}</p>
                  </div>
                </div>
                <div className="bill_Address py-3">
                  <h5>Bill Address</h5>
                  <div className="address">
                    <p>Address: {getuserData.address}</p>
                    <p> Alternate Address: {getuserData.alternate_address}</p>
                    <p>City:{getuserData.city}</p>
                    <p>Pin:{getuserData.pincode}</p>
                    <p>Phone: {getuserData.phone_no}</p>
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
