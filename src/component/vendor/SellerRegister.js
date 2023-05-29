import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Logo from "../css-js/images/logo.png";
import { Button, Col, InputGroup } from "react-bootstrap";
import useValidation from "../common/useValidation";
import Modal from "react-bootstrap/Modal";
import { UpdateVendorByToken, VendorDetailsBytoken } from "../api/api";
import { Link, useNavigate } from "react-router-dom";
const SellerRegister = () => {
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
  const navigate = useNavigate();

  const [file, setFile] = useState();
  const [filename, setFilename] = useState("");
  const [showmodel, setShowmodel] = useState(false);

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

  const { state, setState, onInputChange, errors, validate } = useValidation(
    initialFormState,
    validators
  );

  const OnFileUpload = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  useEffect(() => {
    vendorDetails();
  }, []);

  const vendorDetails = async () => {
    const response = await VendorDetailsBytoken();
    // console.log("response---" + JSON.stringify(response));
    setState(response[0]);
  };

  const handleUpdateVendor = async (e) => {
    e.preventDefault();
    if (validate()) {
      const response = await UpdateVendorByToken(state, file, filename);
      const { message, vendor_detaile } = response;
      // console.log("vendor update" + JSON.stringify(response));
      if (
        message === "updated vendor successfully" &&
        vendor_detaile[0].status === "pending"
      ) {
        localStorage.removeItem("vendor_token");
        setShowmodel(true);
      }
    }
  };

  const handleClose = () => {
    setShowmodel(false);
    navigate("/");
  };
  return (
    <div>
      <section className="user-form-part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-12 col-lg-12 col-xl-10">
              <div className="user-form-logo">
                <Link to="index.html">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="user-form-card">
                <div className="user-form-title">
                  <h2>welcome!</h2>
                  <p>Use your credentials to access</p>
                </div>
                <div className="user-form-group">
                  <Form
                    className="p-2 addproduct_form"
                    onSubmit={(e) => handleUpdateVendor(e)}
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <Form.Group className="mb-3">
                          <Form.Label className="" column sm="12">
                            Owner Name <small className="text-danger">*</small>
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
                            ? (errors.owner_name || []).map((error, i) => {
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
                            Shop Name<small className="text-danger">*</small>
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
                            Mobile <small className="text-danger">*</small>
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
                            ? (errors.shop_address || []).map((error, i) => {
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
                            Geolocation <small className="text-danger">*</small>
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
                            ? (errors.geolocation || []).map((error, i) => {
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
                            Availabilty <small className="text-danger">*</small>
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
                                <option value={""}>Select Availabilty</option>
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
                            {" "}
                            Add
                            {/* {modalshow === "add"
                              ? "Add Vendor"
                              : "Update Vendor"} */}
                          </Button>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4 p-2 text-center"></div>
                    </div>
                    {/* </Modal.Body> */}
                  </Form>
                </div>
                <Modal show={showmodel} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Message for Seller</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Your Profile successfully Updated.. and wait for approvel
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SellerRegister;
