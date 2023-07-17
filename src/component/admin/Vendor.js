import React, { useEffect } from "react";
import { Button, Col, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import useValidation from "../common/useValidation";
import {
  AddVendorfunction,
  AdminVendorDelete,
  AdminVendorStatusChange,
  UpdateVendorfunction,
  VendorDetailsById,
  VendorListFunction,
} from "../api/api";
import Loader from "../common/loader";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import DataTable from "react-data-table-component";
import Sidebar from "../common/sidebar";

const Vendor = () => {
  const initialFormState = {
    owner_name: "",
    shop_name: "",
    email: "",
    mobile: "",
    shop_address: "",
    gstn: "",
    geolocation: "",
    availability: "",
    image: "",
  };
  const [loading, setLoading] = useState(false);
  const [Id, setId] = useState("");
  const [searchdata, setSearchData] = useState({
    searchName: "",
    searchShopName: "",
  });
  const [searchErr, setSearchErr] = useState(false);
  const [modalshow, setmodalshow] = useState(false);
  const [apicall, setapicall] = useState(false);
  const [vendorListData, setVendorListData] = useState([]);
  const [file, setFile] = useState();
  const [filename, setFilename] = useState("");
  const [AddVendorAlert, setAddVendorAlert] = useState(false);
  const [updateVendorAlert, setupdateVendorAlert] = useState(false);
  const [ShowDeleteAlert, setShowDeleteAlert] = useState(false);
  const validators = {
    owner_name: [
      (value) =>
        value === null || value === ""
          ? "Owner name is required"
          : /[^A-Za-z 0-9]/g.test(value)
            ? "Cannot use special character "
            : null,
    ],
    shop_name: [
      (value) =>
        value === null || value === ""
          ? "shop name is required"
          : /[^A-Za-z 0-9]/g.test(value)
            ? "Cannot use special character "
            : null,
    ],
    email: [
      (value) =>
        value === null || value === ""
          ? "Email address is required"
          : !/^\S+@\S+\.\S+$/.test(value)
            ? "Invalid email address"
            : null,
    ],
    mobile: [
      (value) =>
        value === null || value === ""
          ? "Mobile number is required"
          : // : /^(\+\d{1,3}[- ]?)?\d{10}$/g.test(value)
          // ? "Invalid Mobile number "
          value.length > 10 || value.length < 10
            ? "Mobile number should be 10 digit"
            : null,
    ],
    shop_address: [
      (value) =>
        value === null || value === ""
          ? "shop name is required"
          : /[^A-Za-z 0-9]/g.test(value)
            ? "Cannot use special character "
            : null,
    ],
    gstn: [
      (value) =>
        value === null || value === ""
          ? "GSTN is required"
          : /[^A-Za-z 0-9]/g.test(value)
            ? "Cannot use special character "
            : null,
    ],
    geolocation: [
      (value) =>
        value === null || value === ""
          ? "Geolocation is required"
          : /[^A-Za-z 0-9]/g.test(value)
            ? "Cannot use special character "
            : null,
    ],
    availability: [
      (value) =>
        value === null || value === ""
          ? "Availabilty is required"
          : /[^A-Za-z 0-9]/g.test(value)
            ? "Cannot use special character "
            : null,
    ],
  };

  //import usevalidation and some states and funtions
  const { state, setState, onInputChange, setErrors, errors, validate } =
    useValidation(initialFormState, validators);

  const columns = [
    {
      name: "Image",
      width: "100px",
      center: true,
      cell: (row) => (
        <>
          <p>
            <img
              alt={"apna_organic"}
              src={row.shop_logo === null
                || row.shop_logo === undefined
                || row.shop_logo === "undefined"
                ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                : row.shop_logo
              }
              style={{
                padding: 10,
                textAlign: "right",
                maxHeight: "100px",
                maxWidth: "100px",
              }}
            />
          </p>
        </>
      ),
    },

    {
      name: "Name",

      selector: (row) => (
        
        <span>
          <b>Owner Name: </b>
          {row.owner_name|| <b>unavailable</b>} 
          <br />
          <b>Shop Name: </b>
          {row.shop_name || <b>unavailable</b>}
        </span> 
      ) ,
      sortable: true,
      width: "200px",
      center: true,
      style: {
        paddingRight: "32px",
        paddingLeft: "0px",
      },
    },

    {
      name: "Email ",
      selector: (row) => row.email ||<b> unavailable</b>,
      sortable: true,
      width: "180px",
      center: true,
      style: {
        paddingLeft: "0px",
      },
    },
    {
      name: "Mobile ",
      selector: (row) => row.mobile ||<b> unavailable</b>,
      sortable: true,
      width: "140px",
      center: true,
      style: {
        paddingLeft: "0px",
      },
    },

    {
      name: "Shop Address",
      selector: (row) => row.shop_address ||<b> unavailable</b>,
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "GSTN",
      selector: (row) => row.gstn ||<b> unavailable</b>,
      sortable: true,
      width: "140px",
      center: true,
    },

    {
      name: "Change Status",
      selector: (row) => (
        <Form.Select
          aria-label="Search by delivery"
          size="sm"
          className="w-100"
          onChange={(e) => onStatusChange(e, row.vendor_id)}
          name="status"
          value={row.status}
        >
          <option value="">Select status</option>

          <option value="pending">Pending</option>

          <option value="active">Active </option>
          <option value="approved">Approved </option>
          <option value="block">Block </option>
        </Form.Select>
      ),
      sortable: true,
    },

    {
      name: "Action",
      width: "130px",
      style: {
        paddingRight: "12px",
        paddingLeft: "0px",
      },
      center: true,
      selector: (row) => (
        <div className={"actioncolimn"}>
          <Button
            onClick={handleEditShow.bind(this, row.vendor_id)}
            className="btn-warning"
          >
            <BiEdit />
          </Button>
          <Button
            onClick={handleAlert.bind(this, row.vendor_id)}
            className="btn-danger mx-2"
          >
            {" "}
            <BsTrash />
          </Button>
        </div>
      ),
    },
  ];

  const onStatusChange = async (e, id) => {
    setSearchErr(false)
    await AdminVendorStatusChange(e.target.value, id);
    // console.log("status response--" + JSON.stringify(response));
    setapicall(true);
  };
  const SearchOnChange = (e) => {
    setSearchErr(false)
    setSearchData({ ...searchdata, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    VendordataList();
  }, [apicall]);

  const VendordataList = async () => {
    setLoading(true);
    const response = await VendorListFunction(
      searchdata.searchName,
      searchdata.searchShopName
    );
    setVendorListData(response);
    setLoading(false);
    setapicall(false);
    // setCustomValidation(false);
    // console.log("vendor data--" + JSON.stringify(response));
  };

  const submitHandler = async () => {
    if (searchdata.searchName === "" && searchdata.searchShopName === "") {
      setSearchErr(true)
    }
    setapicall(true);
  };

  const OnReset = () => {
    setSearchData({ searchName: "", searchShopName: "" });
    setSearchErr(false)
    setapicall(true);
  };
  const OnFileUpload = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const handleAddVendor = async (e) => {
    setSearchErr(false)
    e.preventDefault();
    if (validate()) {
      const response = await AddVendorfunction(state, file, filename);
      // console.log("vendor add" + JSON.stringify(response));
      if (response.message === "add vendor successfully") {
        setAddVendorAlert(true);
      }
    }
  };

  const handleAlert = (id) => {
    setSearchErr(false)
    setShowDeleteAlert(true);
    setId(id);
  };

  const deleteVendorAlert = async () => {
    await AdminVendorDelete(Id);
    setShowDeleteAlert(false);
    setapicall(true);
  };
  const handleEditShow = async (id) => {
    setSearchErr(false)
    setLoading(true);
    const response = await VendorDetailsById(id);
    setLoading(false);
    setId(id);

    setState(response[0]);
    setmodalshow(true);
  };

  const handleShow = (e) => {
    if (e === "add") {
      setmodalshow(e);
    }
    // setProductData(pdata);
  };

  const handleUpdateVendor = async (e) => {
    setSearchErr(false)
    e.preventDefault();
    if (validate()) {
      const response = await UpdateVendorfunction(state, file, filename, Id);
      // console.log("vendor update" + JSON.stringify(response));
      if (response.message === "updated vendor successfully") {
        setupdateVendorAlert(true);
      }
    }
  };

  const ModelCloseFunction = () => {
    setErrors("");
    setState(initialFormState);
    setmodalshow(false);
  };

  const closeVendorAlert = () => {
    setErrors({});
    setAddVendorAlert(false);
    setupdateVendorAlert(false);
    setShowDeleteAlert(false);
    setState(initialFormState);
    setapicall(true);
    setmodalshow(false);

    // setShowDeleteAlert(false);
  };
  const closeDeleteAlert = () => {
    setShowDeleteAlert(false);
  };

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
                  <h4>Vendor </h4>
                  <div className=" mt-3 p-3">
                    <div className="row pb-3">
                      <div className="col-md-3 col-sm-6 aos_input mb-2">
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            className={searchErr ?
                              "form-control border border-danger" :
                              "form-control"}
                            placeholder="Search by Owner name"
                            name="searchName"
                            onChange={SearchOnChange}
                            value={searchdata.searchName}
                          />
                          {searchErr ?
                            <small className="text-danger">This feild is requried</small>
                            : null}
                        </Form.Group>
                      </div>

                      <div className="col-md-3 col-sm-6 aos_input mb-2">
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            className="form-control"
                            placeholder="Search by Shop Name"
                            name="searchShopName"
                            onChange={SearchOnChange}
                            value={searchdata.searchShopName}
                          />
                        </Form.Group>
                      </div>
                      <div className="col-md-2 col-sm-6 aos_input mb-2">
                        <div>
                          <Button
                            type="submit"
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
                          onClick={() => handleShow("add")}
                        >
                          Add Vendor
                        </Button>
                      </div>
                    </div>

                    <DataTable
                      columns={columns}
                      data={vendorListData}
                      pagination
                      highlightOnHover
                      pointerOnHover
                      className={"table_body product_table"}
                      subHeader
                    />

                    <Modal
                      size="lg"
                      show={modalshow}
                      onHide={ModelCloseFunction}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Form
                        className="p-2 addproduct_form"
                        onSubmit={
                          modalshow === "add"
                            ? (e) => handleAddVendor(e)
                            : (modalshow) => handleUpdateVendor(modalshow)
                        }
                      >
                        <Modal.Header closeButton>
                          <Modal.Title id="example-modal-sizes-title-lg">
                            {modalshow === "add"
                              ? "Add Vendor"
                              : "Update Vendor"}
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <div className="row">
                            <div className="col-md-6">
                              <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                  Owner Name{" "}
                                  <small className="text-danger">*</small>
                                </Form.Label>
                                <Form.Control
                                  className={
                                    errors.owner_name
                                      ? "form-control border border-danger"
                                      : "form-control"
                                  }
                                  type="text"
                                  value={state.owner_name}
                                  name="owner_name"
                                  onChange={onInputChange}
                                  id="owner_name"
                                />
                                {errors.owner_name
                                  ? (errors.owner_name || []).map(
                                    (error, i) => {
                                      return (
                                        <small
                                          className="text-danger"
                                          key={i}
                                        >
                                          {error}
                                        </small>
                                      );
                                    }
                                  )
                                  : null}
                              </Form.Group>
                            </div>

                            <div className="col-md-6">
                              <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                  Shop Name
                                  <small className="text-danger">*</small>
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  className={
                                    errors.shop_name
                                      ? "form-control border border-danger"
                                      : "form-control"
                                  }
                                  value={state.shop_name}
                                  name="shop_name"
                                  onChange={onInputChange}
                                  id="shop_name"
                                />
                                {errors.shop_name
                                  ? (errors.shop_name || []).map((error, i) => {
                                    return (
                                      <small className="text-danger" key={i}>
                                        {error}
                                      </small>
                                    );
                                  })
                                  : null}
                              </Form.Group>
                            </div>

                            <div className="col-md-6">
                              <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                  Email <small className="text-danger">*</small>
                                </Form.Label>
                                <Form.Control
                                  className={
                                    errors.email
                                      ? "form-control border border-danger"
                                      : "form-control"
                                  }
                                  type="text"
                                  value={state.email}
                                  name="email"
                                  onChange={onInputChange}
                                  id="email"
                                />
                                {errors.email
                                  ? (errors.email || []).map((error, i) => {
                                    return (
                                      <small className="text-danger" key={i}>
                                        {error}
                                      </small>
                                    );
                                  })
                                  : null}
                              </Form.Group>
                            </div>

                            <div className="col-md-6">
                              <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                  Mobile{" "}
                                  <small className="text-danger">*</small>
                                </Form.Label>
                                <Form.Control
                                  className={
                                    errors.mobile
                                      ? "form-control border border-danger"
                                      : "form-control"
                                  }
                                  type="number"
                                  value={state.mobile}
                                  name="mobile"
                                  onChange={onInputChange}
                                  id="mobile"
                                />
                                {errors.mobile
                                  ? (errors.mobile || []).map((error, i) => {
                                    return (
                                      <small className="text-danger" key={i}>
                                        {error}
                                      </small>
                                    );
                                  })
                                  : null}
                              </Form.Group>
                            </div>

                            <div className="col-md-6">
                              <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                  Shop Address{" "}
                                  <small className="text-danger">*</small>
                                </Form.Label>
                                <Form.Control
                                  className={
                                    errors.shop_address
                                      ? "form-control border border-danger"
                                      : "form-control"
                                  }
                                  type="text"
                                  value={state.shop_address}
                                  name="shop_address"
                                  onChange={onInputChange}
                                  id="shop_address"
                                />
                                {errors.shop_address
                                  ? (errors.shop_address || []).map(
                                    (error, i) => {
                                      return (
                                        <small
                                          className="text-danger"
                                          key={i}
                                        >
                                          {error}
                                        </small>
                                      );
                                    }
                                  )
                                  : null}
                              </Form.Group>
                            </div>

                            <div className="col-md-6">
                              <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                  GSTN <small className="text-danger">*</small>
                                </Form.Label>
                                <Form.Control
                                  className={
                                    errors.gstn
                                      ? "form-control border border-danger"
                                      : "form-control"
                                  }
                                  type="text"
                                  value={state.gstn}
                                  name="gstn"
                                  onChange={onInputChange}
                                  id="gstn"
                                />
                                {errors.gstn
                                  ? (errors.gstn || []).map((error, i) => {
                                    return (
                                      <small className="text-danger" key={i}>
                                        {error}
                                      </small>
                                    );
                                  })
                                  : null}
                              </Form.Group>
                            </div>

                            <div className="col-md-6">
                              <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                  Image
                                </Form.Label>
                                <Form.Control
                                  type="file"
                                  // value={state.gstn}
                                  name="image"
                                  onChange={(e) => OnFileUpload(e)}
                                  id="image"
                                />
                              </Form.Group>
                            </div>
                            <div className="col-md-6">
                              <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                  Geolocation{" "}
                                  <small className="text-danger">*</small>
                                </Form.Label>
                                <Form.Control
                                  className={
                                    errors.geolocation
                                      ? "form-control border border-danger"
                                      : "form-control"
                                  }
                                  type="text"
                                  value={state.geolocation}
                                  name="geolocation"
                                  onChange={onInputChange}
                                  id="geolocation"
                                />
                                {errors.geolocation
                                  ? (errors.geolocation || []).map(
                                    (error, i) => {
                                      return (
                                        <small
                                          className="text-danger"
                                          key={i}
                                        >
                                          {error}
                                        </small>
                                      );
                                    }
                                  )
                                  : null}
                              </Form.Group>
                            </div>
                            <div className="col-md-6">
                              <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                  Availabilty{" "}
                                  <small className="text-danger">*</small>
                                </Form.Label>
                                <Col sm="12">
                                  <InputGroup className="">
                                    <Form.Select
                                      aria-label="Default select example"
                                      // className="nice-select w-100"
                                      className={
                                        errors.availability
                                          ? "form-control border border-danger"
                                          : "form-control"
                                      }
                                      sm="9"
                                      name="availability"
                                      onChange={onInputChange}
                                      value={state.availability}
                                    >
                                      <option value={""}>
                                        Select Availabilty
                                      </option>
                                      <option value={"open"}>Open</option>
                                      <option value={"close"}>Close</option>
                                    </Form.Select>
                                  </InputGroup>
                                </Col>
                              </Form.Group>
                            </div>

                            <div className="col-md-3 col-sm-4 p-2 text-center">
                              <div className="manufacture_date addvariety_inputbox">
                                <Button
                                  variant="outline-success"
                                  className="addcategoryicon w-100"
                                  type={"submit"}
                                >
                                  {modalshow === "add"
                                    ? "Add Vendor"
                                    : "Update Vendor"}
                                </Button>
                              </div>
                            </div>
                            <div className="col-md-3 col-sm-4 p-2 text-center">
                              <div className="manufacture_date addvariety_inputbox">
                                <Button
                                  variant="outline-danger"
                                  className="addcategoryicon w-100"
                                  // type="submit"
                                  onClick={ModelCloseFunction}
                                >
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          </div>
                        </Modal.Body>
                        <Modal.Footer>
                          {/* <Button onClick={setLgShow(false)}>Close</Button> */}
                        </Modal.Footer>
                      </Form>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SweetAlert
        show={AddVendorAlert}
        title="Added Successfully"
        text={"Vendor Added"}
        onConfirm={closeVendorAlert}
      // showCancelButton={}
      // onCancel={}
      />

      <SweetAlert
        show={updateVendorAlert}
        title="Updated Successfully"
        text={"Vendor update"}
        onConfirm={closeVendorAlert}
      // showCancelButton={}
      // onCancel={}
      />
      <SweetAlert
        show={ShowDeleteAlert}
        title="Vendor"
        text="Are you Sure you want to delete"
        onConfirm={deleteVendorAlert}
        showCancelButton={true}
        onCancel={closeDeleteAlert}
      />
    </div>
  );
};

export default Vendor;
