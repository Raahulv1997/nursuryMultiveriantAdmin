import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";
// import axios from "axios";
// import { BsTrash } from "react-icons/bs";
// import { BiEdit } from "react-icons/bi";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import { json, useNavigate } from "react-router-dom";
import Loader from "../common/loader";
import useValidation from "../common/useValidation";
import { allOrder, orderAssignByAdmin, OrderStatusChange } from "../api/api";
import Sidebar from "../common/sidebar";
import moment from "moment";

const OrderList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [ordertable, setorderTable] = useState([]);
  const [apicall, setApicall] = useState(false);
  const [orderAssignAlert, setorderAssignAlert] = useState(false);
  const [statuslert, setStatusAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);
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
      width: "100px",
      center: true,
    },
    {
      name: "Order Qty",
      selector: (row) => row.total_order_product_quantity,
      sortable: true,
      width: "100px",
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
      width: "100px",
      center: true,
      style: {
        paddingLeft: "0px",
      },
    },

    {
      name: "Total GST",
      selector: (row) => row.total_gst,
      sortable: true,
      width: "100px",
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
          Order Assign for delivery
        </span>
      ),
      width: "220px",
      sortable: true,
      style: { fontSize: 18 },
    },
    {
      name: "Order date",
      selector: (row) => moment(row.order_date).format("DD-MM-YYYY"),
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "Delivery date",
      selector: (row) => moment(row.delivery_date).format("DD-MM-YYYY"),
      sortable: true,
      width: "140px",
      center: true,
    },

    {
      name: "Change Status",
      width: "140px",
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
          <option value="deliverd">Delivered</option>
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

  /*Function to assign the order */
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
    if(response.response === 'order not verify by vendor'){
      setorderAssignAlert(true);
      setAlertMessage(response.response)
    }
    if (response.affectedRows === 1) {
      setorderAssignAlert(true);
    }
  };

  /*Function to close assgin alert box */
  const closeAssignAlert = () => {
    setorderAssignAlert(false);
    setApicall(true)
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

  const { state, setState, onInputChange, errors, validate } = useValidation(
    initialFormState,
    validators
  );

/*Render method to get the order list data */
  useEffect(() => {
    OrderData();
  }, [apicall]);

  /*Function to get the oder list data */
  const OrderData = async () => {
    setLoading(true);
    const response = await allOrder();
    setorderTable(response.results);
    setLoading(false);
  };

  /*FUnction to search the order by order id */
  const submitHandler = async () => {
    setLoading(true);
    if (validate()) {
      const response = await allOrder(state.order_id);
      setorderTable(response.results);
      setLoading(false);
      setState({...state , order_id : ""})
    }
  };

  //search submit reset button
  const OnReset = () => {
    setState({ order_id: "" });
    OrderData();
    setApicall(true);
  };

  /*Function to change order status */
  const onStatusChange = async (e, order_id, user_id) => {
    let response = await OrderStatusChange(e.target.value, order_id, user_id);
    if(response.response === "status updated successfully"){
      setStatusAlert(true)
    }
  };
  /*Function o close the order stayus alert */
  const CloseStaytusAlert = () => {
    setApicall(true);
    setStatusAlert(false)
  }
  return (
    <div>
      <div className="row admin_row">
        <div className="col-lg-3 col-md-3 admin_sidebar bg-white">
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
            show={orderAssignAlert}
            title={alertMessage ? alertMessage :"Assigned Successfully"}
            text={alertMessage ? "Not Verify" :"Assign"}
            onConfirm={closeAssignAlert}
            // showCancelButton={}
            // onCancel={}
          />
           <SweetAlert
            show={statuslert}
            title={"Status Updated Successfully"}
            text={"status"}
            onConfirm={CloseStaytusAlert}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderList;
