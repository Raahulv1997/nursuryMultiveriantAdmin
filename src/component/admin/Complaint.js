import React, { useEffect, useState } from "react";
import Sidebar from "../common/sidebar";

import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";
import Loader from "../common/loader";
import moment from "moment";
import {
  AssginToVendor,
  GetComplaintList,
  VendorListFunction,
} from "../api/api";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import useValidation from "../common/useValidation";
import { Button } from "react-bootstrap";
import { BiEdit } from "react-icons/bi";
import UpdateComplaintModel from "./Modal/UpdateComplaintModel";

export default function Complaint() {
  const [loading, setLoading] = useState(false);
  const [apicall, setApicall] = useState(false);
  const [complaintId, setComplaintID] = useState("");
  const [complaintStatus, setComplaintStatus] = useState("");
  const [ResolveDescription, setResolveDescription] = useState("");

  const [showUpdateComplaintModel, setShowUpdateComplaintModel] =
    useState(false);
  const [vendorData, setVendorData] = useState([]);
  const [statusAlert, setStatusAlert] = useState(false);
  const [updateAlertMessage, setupdateAlertMessage] = useState(false);
  const [CompData, setCompData] = useState([]);
  /*Initial state and validation to search Complaint by product and status */
  const initialFormState = {
    status: "",
  };

  const { state, setState, onInputChange, setErrors, errors } =
    useValidation(initialFormState);

  /*Search function  */
  const OnSearch = async () => {
    if (state.status === "") {
      setErrors("empty");
    } else {
      GetComplaintData(state.product_name, state.status);
    }
  };

  /*Function to reset the search feilds */
  const OnReset = () => {
    setState(initialFormState);
    setErrors("");
    setApicall(true);
  };

  /*Function to get the Complaint list */
  const GetComplaintData = async (name, status) => {
    setLoading(true);
    let response = await GetComplaintList(name, status);

    setCompData(response.result);
    setLoading(false);
  };

  const GetVendorList = async () => {
    let response = await VendorListFunction();
    if (response) {
      // Filter out objects where owner_name is not null
      var filtered = response.filter(function (el) {
        return el.owner_name !== null;
      });

      setVendorData(filtered);
    } else {
      setVendorData([]);
    }
  };

  /*Render method to get the Complaint list */
  useEffect(() => {
    GetComplaintData();
    GetVendorList();
    if (apicall === true) {
      setApicall(false);
    }
  }, [apicall]);

  /*Complaint Table Data */
  const columns = [
    {
      name: "User Info",
      selector: (row) => {
        return (
          <span>
            <b>Name:</b> {row.first_name + row.last_name || <b>unavailable</b>}
            <br />
            <b>Email:</b> {row.email || <b>unavailable</b>}
            <br />
            <b>Phone:</b> {row.contect_no || <b>unavailable</b>}
            <br />
          </span>
        );
      },
      sortable: true,
      width: "250px",
      style: {
        paddingLeft: "5px",
        paddingTop: "15px",
        paddingBottom: "15px",
        paddingRight: "px",
        marginRight: "0px",
      },
    },

    {
      name: "Complain",
      selector: (row) => {
        return (
          <span>
            <b>Order No:</b> {row.order_id || <b>unavailable</b>}
            <br />
            <b>Subject:</b> {row.subject || <b>unavailable</b>}
            <br />
            <b>Description:</b> {row.description || <b>unavailable</b>}
            <br />
            <b>Releted to:</b> {row.for_complain || <b>unavailable</b>}
            <br />
          </span>
        );
      },
      sortable: true,
      width: "270px",
      center: true,
    },

    {
      name: "Complaint date",
      selector: (row) =>
        moment(row.created_on).format("DD-MM-YYYY") || <b>unavailable</b>,
      sortable: true,
      width: "150px",
      center: true,
    },
    {
      name: "Assign to vendor",
      width: "150px",
      selector: (row) => (
        <Form.Select
          aria-label="Complaint"
          size="sm"
          className="w-100"
          disabled
          onChange={(e) => onVendorChange(e, row.id)}
          name="status_order"
          value={row.assigned_to}
        >
          {" "}
          <option>No Vendor</option>
          {vendorData.map((item, i) => {
            return (
              <React.Fragment key={i}>
                <option value={item.vendor_id}>{item.owner_name}</option>
              </React.Fragment>
            );
          })}
        </Form.Select>
      ),
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <span
          className={
            row.status_ === "pending"
              ? "badge bg-secondary"
              : row.status_ === "resolved"
              ? "badge bg-success"
              : "badge bg-dark"
          }
        >
          {row.status_ === "pending"
            ? "Pending"
            : row.status_ === "resolved"
            ? "Resolved"
            : "Pending"}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Action",
      width: "100px",
      style: {
        paddingRight: "12px",
        paddingLeft: "0px",
      },
      center: true,
      selector: (row) => (
        <div className={"actioncolimn"}>
          <Button
            className="btn-warning mx-2"
            onClick={EditComplaintModal.bind(
              this,
              row.id,
              row.status_,
              row.resolve_description
            )}
          >
            {" "}
            <BiEdit />
          </Button>
          {/* <button
            type="button"
            className="btn btn-danger"
            onClick={HandelDeletAlert.bind(this, row.id)}
          >
            <BsTrash />
          </button> */}
        </div>
      ),
    },
  ];

  const EditComplaintModal = (id, status, resolve_description) => {
    setComplaintID(id);
    setComplaintStatus(status);
    console.log("ID--" + id);
    console.log("Status--" + status);

    console.log("ResolveDescription--" + resolve_description);
    if (resolve_description === null) {
      setResolveDescription("");
    } else {
      setResolveDescription(resolve_description);
    }

    setShowUpdateComplaintModel(true);
  };

  const onVendorChange = async (e, id) => {
    let response = await AssginToVendor(e.target.value, id);
    if (response.response === "Succesfully Update Complaint") {
      setStatusAlert(true);
    }
  };

  /*Function to close alert box */
  const CloseAlert = () => {
    setStatusAlert(false);
    setupdateAlertMessage(false);
    setApicall(true);
  };
  return (
    <div>
      <div className="row admin_row">
        <div className="col-lg-3 col-md-3 admin_sidebar bg-white">
          <Sidebar style={{ message: "complaint" }} />
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
                  <h4>Complaint List</h4>
                  <div className=" mt-3 p-3">
                    <div className="row pb-3">
                      <div className="col-md-3 col-sm-6 aos_input mb-2">
                        <Form.Group className="mb-3">
                          <Form.Select
                            type="text"
                            className={"form-control"}
                            placeholder="Search by Product name"
                            name="status"
                            onChange={onInputChange}
                            value={state.status}
                          >
                            <option>Select status</option>
                            <option value="pending">Pending</option>
                            <option value="resolved">Resolved </option>
                          </Form.Select>
                        </Form.Group>
                        {errors === "empty" ? (
                          <small className="text-danger">
                            Status is required
                          </small>
                        ) : null}
                      </div>
                      <div className="col-md-2 col-sm-6 aos_input mb-2">
                        <div>
                          <Button
                            type=""
                            name=""
                            value=""
                            className="button  btn-success main_button w-100"
                            onClick={OnSearch}
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
                      data={CompData}
                      keyField="id"
                      pagination
                      pointerOnHover
                      className="complain_table"
                      subHeader
                      style={{ tr: { backgroundColor: "transparent" } }}
                    />

                    {/* <DataTable
                      columns={columns}
                      data={CompData}
                      pagination
                      highlightOnHover
                      pointerOnHover
                      className={"table_body product_table"}
                      subHeader
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showUpdateComplaintModel ? (
            <UpdateComplaintModel
              show={showUpdateComplaintModel}
              close={() => setShowUpdateComplaintModel(false)}
              setApiCall={setApicall}
              id={complaintId}
              status={complaintStatus}
              ResolveDescription={ResolveDescription}
              setupdateAlertMessage={setupdateAlertMessage}
            />
          ) : null}

          <SweetAlert
            show={statusAlert}
            title={"Status Updated successfully"}
            text={"Status"}
            onConfirm={() => CloseAlert()}
            className="text-capitalize"
          />

          <SweetAlert
            show={updateAlertMessage}
            title={"Updated complaint successfully"}
            text={"Complaint"}
            onConfirm={() => CloseAlert()}
            className="text-capitalize"
          />
        </div>
      </div>
    </div>
  );
}
