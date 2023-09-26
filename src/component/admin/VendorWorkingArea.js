import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import DataTable from "react-data-table-component";

// import { BsTrash } from "react-icons/bs";

import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";

import useValidation from "../common/useValidation";
import Loader from "../common/loader";

import Sidebar from "../common/sidebar";
import {
  AddpicodeVendor,
  AddWorkingArea,
  VendorDetailsFuntion,
} from "../api/api";

const VendorWorkingArea = () => {
  // add Admin data json
  const initialFormState = {
    pin: "",
  };

  const [apicall, setapicall] = useState(false);

  const [AdminAlert, setAdminAlert] = useState(false);

  const [AreaList, setAreaList] = useState([]);
  const [VendorDetails, setVendorDetails] = useState([]);
  const [showmodel, setShowmodel] = useState(false);
  const [loading, setLoading] = useState(false);

  const [pinError, setPinError] = useState(false);
  const [areaNameError, setAreaNameError] = useState(false);

  // search state data---------
  const [searchdata, setsearchData] = useState({
    pin: "",
    area_name: "",
  });

  //   Admin data table coloumn-----
  const columns = [
    {
      name: "Pincode",

      selector: (row) => row.pin || <b>unavailable</b>,
      sortable: true,
      width: "150px",
      center: true,
      style: {
        paddingRight: "32px",
        paddingLeft: "0px",
      },
    },
    {
      name: "City",
      selector: (row) => row.city || <b>unavailable</b>,
      sortable: true,
      width: "150px",
      center: true,
      style: {
        paddingRight: "32px",
        paddingLeft: "0px",
      },
    },

    {
      name: "Status",
      selector: (row) => (
        <>
          <span
            className={
              row.status === 1
                ? "badge bg-primary"
                : row.status === 0
                ? "badge bg-danger"
                : "badge bg-dark"
            }
          >
            {row.status === 1 ? "Active" : row.status === 0 ? "Deactive" : null}
          </span>
        </>
      ),
      sortable: true,
      width: "250px",
      center: true,
      style: {
        paddingLeft: "0px",
      },
    },

    {
      name: "Area Name ",
      selector: (row) => row.area_name || <b>unavailable</b>,
      sortable: true,
      width: "160px",
      center: true,
      style: {
        paddingLeft: "0px",
      },
    },
  ];

  //   // Admin  validation---------------
  const validators = {
    pin: [
      (value) =>
        value === null || value === ""
          ? "Pincode is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
  };

  //   //custom validation import--------------
  const { state, setState, onInputChange, errors, setErrors, validate } =
    useValidation(initialFormState, validators);

  //   // search  inputfield onchange
  const searchValueHandler = (e) => {
    setsearchData({ ...searchdata, [e.target.name]: e.target.value });
    setPinError(false);
    setAreaNameError(false);
  };

  //   //search submit button
  const submitHandler = async () => {
    if (searchdata.pin === "" && searchdata.area_name === "") {
      setPinError("pinEmpty");
      setAreaNameError("areaEmpty");
    } else {
      setLoading(true);
      const response = await AddWorkingArea(
        searchdata.pin,
        searchdata.area_name
      );
      setLoading(false);
      setapicall(false);
      setAreaList(response.response);
    }
  };

  //   // reset button
  const OnReset = () => {
    setsearchData({
      pin: "",
      area_name: "",
    });
    // getAllAreaList();
    setapicall(true);
    setPinError(false);
    setAreaNameError(false);
  };

  //get all Admin list useEffect -----
  useEffect(() => {
    getAllAreaList();
    getVendorDetails();
  }, [apicall]);

  //   // get all Admin list funtion-------------
  const getAllAreaList = async () => {
    setLoading(true);
    const response = await AddWorkingArea();

    setLoading(false);
    setapicall(false);
    setAreaList(response.response);
  };

  const getVendorDetails = async () => {
    setLoading(true);
    const response = await VendorDetailsFuntion();

    setLoading(false);
    setapicall(false);

    setVendorDetails(response[0]);
  };

  //   // add Admin submit button---------------
  const handleAddAdmin = async (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("state--" + JSON.stringify(state));
      setLoading(true);
      const response = await AddpicodeVendor(state);
      setLoading(false);
      console.log("respose--" + JSON.stringify(response));
      if (response.response === "area_id not matched") {
        setPinError("notMatched");
      }
      if (response.response === "already selected") {
        setPinError("already");
      }
      if (response.response === "succefull added your sevice area") {
        setAdminAlert(true);
      }
    }
  };

  //   // Admin model show
  const handleShow = () => {
    setShowmodel(true);
  };

  //   //Admin registraion model close function-----------------
  const ModelCloseFunction = () => {
    setShowmodel(false);
    setPinError(false);
    setState(initialFormState);
    setErrors({});
  };

  //   // all alert close fuction
  const closeAdminAlert = () => {
    setAdminAlert(false);
    setShowmodel(false);
    setapicall(true);
  };

  return (
    <div>
      {loading === true ? <Loader /> : null}

      <div className="row admin_row">
        <div className="col-lg-3 col-md-6 col-sm-7 col-10">
          <Sidebar style={{ message: "workingArea" }} />
        </div>
        <div className="col-lg-9  admin_content_bar mt-5">
          <div className="main_content_div">
            <div
              className="dashboard-main-container mt-df25 mt-lg-31"
              id="dashboard-body"
            >
              <div className="">
                <div className="page_main_contant">
                  <h4> Working Area </h4>
                  <div className=" mt-3 p-3">
                    <div className="row pb-3">
                      <div className="col-md-3 col-sm-6 aos_input mb-2">
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Search by PinCode"
                            name="pin"
                            onChange={searchValueHandler}
                            value={searchdata.pin}
                          />
                        </Form.Group>
                        {pinError === "pinEmpty" ? (
                          <span className="text-danger">
                            {" "}
                            Pincode is required...
                          </span>
                        ) : null}
                      </div>

                      <div className="col-md-3 col-sm-6 aos_input mb-2">
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            placeholder="Search by area name"
                            name="area_name"
                            onChange={searchValueHandler}
                            value={searchdata.area_name}
                          />
                        </Form.Group>
                        {areaNameError === "areaEmpty" ? (
                          <span className="text-danger">
                            {" "}
                            Area Name is required..
                          </span>
                        ) : null}
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
                      <div className="col-md-2 col-sm-6 aos_input mb-2">
                        <Button
                          className="button btn-success  main_button w-100"
                          onClick={() => handleShow()}
                        >
                          Add PINCODE
                        </Button>
                      </div>
                    </div>

                    <div className="row mb-4">
                      <h4 className="mb-5"> Vendor Profile</h4>
                      <div className="col-3">
                        <b>Vendor Name:</b>
                        {VendorDetails.owner_name}{" "}
                      </div>
                      <div className="col-3">
                        {" "}
                        <b>Shop Name:</b> {VendorDetails.shop_name}{" "}
                      </div>

                      <div className="col-3">
                        {" "}
                        <b>Email:</b> {VendorDetails.email}{" "}
                      </div>
                      <div className="col-3">
                        {" "}
                        <b>Password:</b> {VendorDetails.password}{" "}
                      </div>
                      <div className="col-3">
                        {" "}
                        <b>mobile:</b> {VendorDetails.mobile}{" "}
                      </div>
                      <div className="col-3">
                        {" "}
                        <b>Shop address:</b> {VendorDetails.shop_address}{" "}
                      </div>
                      <div className="col-3">
                        {" "}
                        <b>Geolocation:</b> {VendorDetails.geolocation}{" "}
                      </div>
                      <div className="col-3">
                        {" "}
                        <b>GSTN:</b> {VendorDetails.gstn}{" "}
                      </div>
                    </div>

                    <DataTable
                      columns={columns}
                      data={AreaList}
                      pagination
                      highlightOnHover
                      pointerOnHover
                      className={"table_body Admin_table"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        size="md"
        show={showmodel}
        onHide={ModelCloseFunction}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Form className="p-2 addAdmin_form" onSubmit={(e) => handleAddAdmin(e)}>
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Add Pincodes
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label className="" column sm="12">
                    Pincode <small className="text-danger">*</small>
                  </Form.Label>
                  <Form.Control
                    className={
                      errors.pin
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    type="number"
                    value={state.pin}
                    name="pin"
                    onChange={(v) => {
                      if (v.target.value.length <= 6) {
                        onInputChange(v);
                        setPinError(false);
                      }
                    }}
                    id="pin"
                  />

                  {errors.pin
                    ? (errors.pin || []).map((error) => {
                        return <small className="text-danger">{error}</small>;
                      })
                    : null}
                  {pinError === "notMatched" ? (
                    <span className="text-danger">
                      {" "}
                      Pincode not Matched with data...
                    </span>
                  ) : null}
                  {pinError === "already" ? (
                    <span className="text-danger"> Already Added...</span>
                  ) : null}
                </Form.Group>
              </div>

              <div className="col-md-3 mt-5">
                <Button
                  variant="outline-success"
                  className="addcategoryicon w-100"
                  type={"submit"}
                >
                  Add
                </Button>
              </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button onClick={() => setShowmodel(false)}>Close</Button>
          </Modal.Footer> */}
        </Form>
      </Modal>

      <SweetAlert
        show={AdminAlert}
        title="Pincode Addedd Successfully"
        text={"Admin Added"}
        onConfirm={closeAdminAlert}
      />
    </div>
  );
};
export default VendorWorkingArea;
