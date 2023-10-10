import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";
// import axios from "axios";
// import { BsTrash } from "react-icons/bs";
// import { BiEdit } from "react-icons/bi";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import { useNavigate } from "react-router-dom";
import Loader from "../common/loader";
import useValidation from "../common/useValidation";
import { allOrder, OrderStatusChange, OrderVendorChange } from "../api/api";
import Sidebar from "../common/sidebar";
import moment from "moment";

const OrderList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [ordertable, setorderTable] = useState([]);
  const [apicall, setApicall] = useState(false);

  const [statuslert, setStatusAlert] = useState(false);
  const [statusErrorAlert, setStatusErrorAlert] = useState(false);

  const initialFormState = {
    search: "",
    order_id: "",
    vendor_id: "",
    category: "",
    brand: "",
    user_id: "",
  };
  //order data table column----
  const columns = [
    {
      name: "Order No",
      selector: (row) => (
        <p onClick={onOrderClick.bind(this, [row.order_id, row.user_id])}>
          {row.order_id}
        </p>
      ),
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "Order Qty",
      selector: (row) => row.total_order_product_quantity || <b>unavailable</b>,
      sortable: true,
      width: "140px",
      center: true,
      style: {
        paddingRight: "32px",
        paddingLeft: "0px",
      },
    },

    {
      name: "Total amount",
      selector: (row) => (
        <span>
          <span>
            {" "}
            <b>Total Amount:</b>
            {row.total_amount || <b>unavailable</b>}
          </span>
          <br />
          <span>
            {" "}
            <b>Total GST:</b>
            {row.total_gst || <b>unavailable</b>}
          </span>
          <br />
          <span>
            {" "}
            <b>Payment mode:</b>
            {row.payment_mode || <b>unavailable</b>}
          </span>
        </span>
      ),
      sortable: true,
      width: "160px",
      center: true,
      style: {
        paddingLeft: "0px",
      },
    },

    {
      name: "Date",
      selector: (row) => (
        <span>
          <span>
            {" "}
            <b>Order Date:</b>
            {moment(row.order_date).format("DD-MM-YYYY") || <b>unavailable</b>}
          </span>
          <br />
          <span>
            {" "}
            <b>Delivery Date:</b>
            {moment(row.delivery_date).format("DD-MM-YYYY") || (
              <b>unavailable</b>
            )}
          </span>
        </span>
      ),

      sortable: true,
      width: "200px",
      center: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <span
          className={
            row.status_order === "approved"
              ? "badge bg-primary"
              : row.status_order === "pending"
              ? "badge bg-secondary"
              : row.status_order === "accepted_by_vendor"
              ? "badge bg-primary"
              : row.status_order === "Pickuped"
              ? "badge bg-warning"
              : row.status_order === "ready_to_pickup"
              ? "badge bg-primary"
              : row.status_order === "Delivered"
              ? "badge bg-success"
              : row.status_order === "rejected_by_vendor"
              ? "badge bg-danger"
              : row.status_order === "Failed_Delivery_Attempts"
              ? "badge bg-dark"
              : row.status_order === "cancel"
              ? "badge bg-dark"
              : row.status_order === "Rejected_by_customer"
              ? "badge bg-info"
              : "badge bg-dark"
          }
        >
          {row.status_order === "placed"
            ? "placed"
            : row.status_order === "accepted_by_vendor"
            ? "Accepted by vendor"
            : row.status_order === "Pickuped"
            ? "Pickuped"
            : row.status_order === "ready_to_pickup"
            ? "Ready to pickup"
            : row.status_order === "Delivered"
            ? "Delivered"
            : row.status_order === "rejected_by_vendor"
            ? "Rejected by vendor"
            : row.status_order === "Failed_Delivery_Attempts"
            ? "Failed Delivery Attempts"
            : row.status_order === "cancel"
            ? "Cancel"
            : row.status_order === "Rejected_by_customer"
            ? "Rejected by customer"
            : row.status_order === "pending"
            ? "pending"
            : row.status_order === "approved"
            ? "Accepted by Admin"
            : "return"}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Change Status",
      width: "140px",
      selector: (row) => {
        if (row.status_order === "Delivered") {
        } else {
          if (row.status_order === "pending") {
            return (
              <Form.Select
                aria-label="Search by delivery"
                size="sm"
                className="w-100"
                onChange={(e) => onVendorChange(e, row.order_id)}
                name="status_order"
                value={row.status_order}
              >
                <option>Status</option>
                <option value="accepted">Accepted </option>
                <option value="rejected">Rejected </option>
              </Form.Select>
            );
          } else if (
            row.status_order === "approved" ||
            row.status_order === "accepted_by_vendor" ||
            row.status_order === "ready_to_pickup" ||
            row.status_order === "ready_to_packing"
          ) {
            return (
              <Form.Select
                aria-label="Search by delivery"
                size="sm"
                className="w-100"
                onChange={(e) => onStatusChange(row.order_id)}
                name="status_order"
                value={row.status_order}
              >
                <option>Status</option>
                <option value="Pickuped">Pickuped</option>
              </Form.Select>
            );
          } else {
          }
        }
      },

      sortable: true,
    },
  ];

  const onOrderClick = (id) => {
    localStorage.setItem("orderid", id[0]);
    localStorage.setItem("userid", id[1]);

    navigate("/orderDetails");
  };

  /*Function to close assgin alert box */

  const validators = {
    order_id: [
      (value) =>
        value === null || value === ""
          ? "This feild is requried"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
  };

  const { state, setState, onInputChange, setErrors, errors, validate } =
    useValidation(initialFormState, validators);

  /*Render method to get the order list data */
  useEffect(() => {
    OrderData();
  }, [apicall]);

  /*Function to get the oder list data */
  const OrderData = async () => {
    setLoading(true);
    const response = await allOrder();
    setorderTable(response.results);
    setApicall(false);
    setLoading(false);
  };

  /*FUnction to search the order by order id */
  const submitHandler = async () => {
    setLoading(true);
    if (validate()) {
      const response = await allOrder(state.order_id);
      setorderTable(response.results);
      setLoading(false);
      // setState({ ...state, order_id: "" });
    } else {
      setLoading(false);
    }
  };

  //search submit reset button
  const OnReset = () => {
    setState({ order_id: "" });
    setErrors("");
    OrderData();
    setApicall(true);
  };

  /*Function to change order status */
  const onVendorChange = async (e, order_id) => {
    setErrors("");
    let response = await OrderVendorChange(e.target.value, order_id);
    console.log("vendor acted- response-" + JSON.stringify(response));
    if (response.response === "order accepted successfull") {
      setStatusAlert(true);
    }
    if (response.response === "status updated successfully") {
      setStatusAlert(true);
    }
  };

  const onStatusChange = async (order_id) => {
    setErrors("");
    let response = await OrderStatusChange(order_id);
    console.log("vendor acted- response-" + JSON.stringify(response));
    // setStatusAlert(true);
    if (response.response === "order status updated successfull") {
      setStatusAlert(true);
    }
    if (
      response.response ===
      "Maybe driver not assigned or order for pickup not received"
    ) {
      setStatusErrorAlert(true);
    }
  };

  /*Function o close the order stayus alert */
  const CloseStaytusAlert = () => {
    setApicall(true);
    setStatusAlert(false);
    setStatusErrorAlert(false);
  };
  return (
    <div>
      <div className="row admin_row">
        <div className="col-lg-3 col-md-3 admin_sidebar bg-white">
          <Sidebar style={{ message: "customerOrder" }} />
        </div>
        <div className="col-lg-9 col-md-9 admin_content_bar">
          <div className="main_content_div">
            <div
              className="dashboard-main-container mt-df25 mt-lg-31"
              id="dashboard-body"
            >
              <div className="">
                <div className="page_main_contant">
                  {loading === true ? <Loader /> : null}
                  <h4>Order List</h4>
                  <div className=" mt-3 p-3">
                    <div className="row pb-3">
                      <div className="col-md-3 col-sm-6 aos_input mb-2">
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            className={
                              errors.order_id
                                ? "form-control border border-danger"
                                : "form-control"
                            }
                            placeholder="Search by order no."
                            name="order_id"
                            onChange={onInputChange}
                            value={state.order_id}
                          />
                        </Form.Group>
                        {errors.order_id
                          ? (errors.order_id || []).map((error, i) => {
                              return (
                                <small className="text-danger" key={i}>
                                  {error}
                                </small>
                              );
                            })
                          : null}
                      </div>

                      <div className="col-md-2 col-sm-6 aos_input mb-2">
                        <div>
                          <Button
                            type=""
                            name=""
                            value=""
                            className="button  btn-success main_button w-100"
                            onClick={submitHandler}
                          >
                            Search
                          </Button>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-6 aos_input mb-2">
                        <div>
                          <Button
                            type="reset"
                            name=""
                            value=""
                            className="button btn-success  main_button w-100"
                            onClick={OnReset}
                          >
                            Reset
                          </Button>
                        </div>
                      </div>
                    </div>

                    <DataTable
                      columns={columns}
                      data={ordertable}
                      pagination
                      highlightOnHover
                      pointerOnHover
                      className={"table_body product_table"}
                      subHeader
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SweetAlert
            show={statuslert}
            title={"Status Updated Successfully"}
            text={"status"}
            onConfirm={CloseStaytusAlert}
          />

          <SweetAlert
            show={statusErrorAlert}
            title={"Maybe driver not assigned or order for pickup not received"}
            text={"status"}
            onConfirm={CloseStaytusAlert}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderList;
