import React, { useEffect, useState } from "react";
import "./Order_details.css";
import moment from "moment";
import { BsTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import axios from "axios";
import { AiOutlineFileText } from "react-icons/ai";
import Form from "react-bootstrap/Form";
import statusJson from "./json/statusJson";

const OrderDetail = () => {
  let orderid = localStorage.getItem("orderid");
  let userid = localStorage.getItem("userid");
  let [apicall, setApicall] = useState(false);
  const [getuserData, setGetuserData] = useState([]);

  const [order, setOrder] = useState([]);
  const [allorderDetails, setAllorderDetails] = useState([]);
  const UserData = () => {
    axios
      .get(`${process.env.REACT_APP_BASEURL_0}/all_user/${userid}`)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        // let data = response.data;
        setGetuserData(response.data[0]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/order_list/${orderid}`)
      .then((response) => {
        console.log("order_details----" + JSON.stringify(response.data));
        setAllorderDetails(response.data[0]);
        setOrder(response.data);

        setApicall(false);
        UserData();
      })
      .catch(function (error) {
        console.log(error);
      });

    // UserData();
  }, [apicall]);
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
                console.log("---" + orderdata.name);
                return (
                  <div className="d-flex justify-content-between mb-3 align-items-center">
                    <div className="product_img d-flex">
                      <img
                        src={
                          orderdata.image !== "no image"
                            ? orderdata.image
                            : "https://t3.ftcdn.net/jpg/05/37/73/58/360_F_537735846_kufBp10E8L4iV7OLw1Kn3LpeNnOIWbvf.jpg"
                        }
                        alt="apnaorganic"
                      />
                      <div className="product_name_detial ps-3">
                        <h6> Name: </h6>
                        {/* {console.log("orderdata.color--" + orderdata.unit)}  */}
                        {/* {orderdata.unit === "gms" ? (
                            <p>weight:{orderdata.unit_quantity} grm</p>
                          ) : orderdata.unit === "ml" ? (
                            <p>Volume:{orderdata.unit_quantity} ml</p>
                          ) : orderdata.unit === "pcs" ? (
                            <>
                              <p>color:{orderdata.colors}</p>
                              <p>size:{orderdata.size}</p>
                            </>
                          ) : null} */}
                      </div>
                    </div>

                    <div className="product_price">
                      {" "}
                      MRP-₹7
                      <br /> Discount- ₹
                      <br />
                      Product Price- ₹
                    </div>

                    <div className="product_quantity">
                      Price without tax- <br />₹
                      <br /> Tax -₹
                    </div>

                    <div className="product_quantity">
                      Sale Price-
                      <br />₹
                    </div>

                    <div className="product_quantity">QTY-</div>
                    <div className="total_amount">
                      {" "}
                      Total Price- <br />₹
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
            </div>
            <div className="payment_summary">
              <h5 className="pb-3">Payment Summary</h5>
              <div className="payment_summary_total d-flex justify-content-between align-items-center">
                <div className="Subtotal">
                  <p>Total Price(Excluding Tax)</p>
                </div>
                <div className="">
                  ₹
                  {/* <span className=""> = {total_tax.toFixed(2) * qty}</span> */}
                </div>
              </div>

              <div className="payment_summary_total d-flex justify-content-between align-items-center">
                <div className="Subtotal">
                  <p> Total Tax (Tax x Qty) </p>
                </div>
                <div className="">
                  {/* {total_tax.toFixed(2)} x {total_qty} Qty */}
                  <span className=""> ₹ </span>
                </div>
              </div>
              <div className="payment_summary_total d-flex justify-content-between align-items-center">
                <div className="Subtotal">
                  <p>
                    Subtotal
                    <span>( items)(Include all Taxes)</span>
                  </p>
                </div>
                <div className="">₹</div>
              </div>
              <div className="payment_summary_total d-flex justify-content-between align-items-center">
                <div className="Subtotal">
                  <p>Delivery Charges</p>
                </div>
                <div className="">
                  ₹
                  <div className="payment_summary_total d-flex justify-content-between align-items-center">
                    <div className="Subtotal">
                      <p> Discont Coupon Ammount </p>
                    </div>
                    <div className="">₹</div>
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
                      <strong>₹</strong>
                    </div>
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
