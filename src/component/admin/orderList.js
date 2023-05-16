import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";
import axios from "axios";
import { BsTrash } from "react-icons/bs";
// import { BiEdit } from "react-icons/bi";

import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import { useNavigate } from "react-router-dom";

import useValidation from "../common/useValidation";
import { allOrder, orderAssignByAdmin, OrderStatusChange } from "../api/api";
import Sidebar from "../common/sidebar";

const OrderList = () => {
  const navigate = useNavigate();

  const [ordertable, setorderTable] = useState([]);
  const [apicall, setApicall] = useState(false);
  const [orderAssignAlert, setorderAssignAlert] = useState(false);
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
      width: "150px",
      center: true,
      style: {
        paddingRight: "32px",
        paddingLeft: "0px",
      },
    },
    {
      name: "Order Quantity",
      selector: (row) => row.total_order_product_quantity,
      sortable: true,
      width: "150px",
      center: true,
      style: {
        paddingRight: "32px",
        paddingLeft: "0px",
      },
    },

    {
      name: "Total amount",
      selector: (row) => row.total_amount,
      sortable: true,
      width: "140px",
      center: true,
      style: {
        paddingLeft: "0px",
      },
    },

    {
      name: "Total GST",
      selector: (row) => row.total_gst,
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "Payment mode",
      selector: (row) => row.payment_mode,
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "Order assign",
      selector: (row) => (
        <span
          className={"badge bg-primary"}
          onClick={onOrderAssignClick.bind(
            this,
            row.order_id,
            row.total_amount,
            row.payment_mode,
            row.delivery_verify_code
          )}
        >
          Order Assign for delivery admin
        </span>
      ),
      width: "200px",
      sortable: true,
    },
    {
      name: "Order date",
      selector: (row) => row.order_date,
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "Delivery date",
      selector: (row) => row.delivery_date,
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <span
          className={
            row.status_order === "placed"
              ? "badge bg-warning"
              : row.status_order === "pending"
              ? "badge bg-secondary"
              : row.status_order === "shipped"
              ? "badge bg-primary"
              : row.status_order === "delivered"
              ? "badge bg-success"
              : row.status_order === "packed"
              ? "badge bg-primary"
              : row.status_order === "cancel"
              ? "badge bg-danger"
              : row.status_order === "approved"
              ? "badge bg-info"
              : "badge bg-dark"
          }
        >
          {row.status_order === "placed"
            ? "placed"
            : row.status_order === "delivered"
            ? "delivered"
            : row.status_order === "shipped"
            ? "shipped"
            : row.status_order === "packed"
            ? "packed"
            : row.status_order === "cancel"
            ? "cancel"
            : row.status_order === "approved"
            ? "approved"
            : row.status_order === "pending"
            ? "pending"
            : "return"}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Change Status",
      selector: (row) => (
        <Form.Select
          aria-label="Search by delivery"
          size="sm"
          className="w-100"
          onChange={(e) => onStatusChange(e, row.order_id, row.user_id)}
          name="status_order"
          value={row.status_order}
        >
          <option value="">Select status</option>
          <option value="placed">Placed</option>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="packed">Packed</option>
          <option value="cancel">Cancel</option>
          <option value="approved">Approved </option>
          <option value="return">Return </option>
        </Form.Select>
      ),
      sortable: true,
    },
  ];

  const onOrderClick = (id) => {
    localStorage.setItem("orderid", id[0]);
    localStorage.setItem("userid", id[1]);

    navigate("/admin/orderDetails");
  };
  //order search data function----

  const onOrderAssignClick = async (
    order_id,
    total_amount,
    payment_mode,
    delivery_verify_code
  ) => {
    const response = await orderAssignByAdmin(
      order_id,
      total_amount,
      payment_mode,
      delivery_verify_code
    );
    if (response.affectedRows === 1) {
      setorderAssignAlert(true);
    }
  };

  const closeAssignAlert = () => {
    setorderAssignAlert(false);
  };

  const validators = {
    order_id: [
      (value) =>
        value === null || value === ""
          ? "Please Fill...."
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
  };

  const { state, setState, onInputChange, setErrors, errors, validate } =
    useValidation(initialFormState, validators);

  //order searchd data useEffect....
  useEffect(() => {
    OrderData();
  }, [apicall]);

  const OrderData = async () => {
    const response = await allOrder();

    setorderTable(response.results);
  };
  //search submit button

  const submitHandler = async () => {
    if (validate()) {
      const response = await allOrder(state.order_id);

      setorderTable(response.results);
    }
  };

  //search submit reset button
  const OnReset = () => {
    setState({ order_id: "" });
    OrderData();
    setApicall(true);
  };

  const onStatusChange = async (e, order_id, user_id) => {
    const response = await OrderStatusChange(e.target.value, order_id, user_id);
    // console.log("respo--" + response);
    OrderData();
    setApicall(true);
  };

  return (
    <div>
      <div className="row admin_row">
        <div className="col-lg-3 col-md-3 admin_sidebar">
          <Sidebar />
        </div>
        <div className="col-lg-9 col-md-9 admin_content_bar">
          <div className="main_content_div">
            <div
              className="dashboard-main-container mt-df25 mt-lg-31"
              id="dashboard-body"
            >
              <div className="">
                <div className="page_main_contant">
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
                          ? (errors.order_id || []).map((error) => {
                              return (
                                <small className="text-danger">{error}</small>
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
            show={orderAssignAlert}
            title="Assigned Successfully"
            text={"Assign"}
            onConfirm={closeAssignAlert}
            // showCancelButton={}
            // onCancel={}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderList;
