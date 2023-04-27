import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useValidation from "../common/useValidation";
import { userdetails, UserUpdatefunction } from "../api/api";
import { Form, Modal } from "react-bootstrap";
import { Button, Col, InputGroup } from "react-bootstrap";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
/* eslint-disable no-unused-vars */
const Profile = () => {
  const [modalshow, setmodalshow] = useState(false);
  const [apicall, setapicall] = useState(false);
  const [getUserData, setGetuserData] = useState([]);
  const [userUpdateAlert, setUserUpdateAlert] = useState(false);
  const initialFormState = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone_no: "",
    pincode: "",
    image: "",
    city: "",
    address: "",
    alternate_address: "",
    created_on: "",
    updated_on: "",
    is_deleted: "",
  };

  const [file, setFile] = useState();
  const [filename, setFilename] = useState("");

  const validators = {
    first_name: [
      (value) =>
        value === "" || value.trim() === ""
          ? "Name is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
    last_name: [
      (value) =>
        value === "" || value.trim() === ""
          ? "Last name is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
    pincode: [
      (value) =>
        value === "" || value.trim() === ""
          ? "Designation is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
    email: [
      (value) =>
        value === "" || value.trim() === ""
          ? "Email address is required"
          : !/^\S+@\S+\.\S+$/.test(value)
          ? "Invalid email address"
          : null,
    ],
    password: [
      (value) =>
        value === "" || value.trim() === ""
          ? "Designation is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
    phone_no: [
      (value) =>
        value === "" || value === "null" || value.trim() === ""
          ? "Mobile number is required"
          : /^(\+\d{1,3}[- ]?)?\d{10}$/g.test(value)
          ? "Invalid Mobile number "
          : null,
    ],
  };
  // CUSTOM VALIDATIONS IMPORT
  const { state, setState, onInputChange, setErrors, errors, validate } =
    useValidation(initialFormState, validators);
  // USER CARRER PROFILE SUBMIT BUTTON

  const OnFileUpload = (e) => {
    // console.log("imge--" + JSON.stringify(e));
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onCarrerProfileClick = async (event) => {
    event.preventDefault();
    if (validate()) {
      const response = await UserUpdatefunction(state, file, filename);

      // console.log("API CALL");
      if (response.message === "updated user successfully") {
        setUserUpdateAlert(true);
      }
    }
  };

  const UserData = async () => {
    const userData = await userdetails();
    console.log("user update----" + JSON.stringify(userData));
    setGetuserData(userData[0]);
    setState(userData[0]);
  };
  useEffect(() => {
    if (
      localStorage.getItem("user_token") === "" ||
      localStorage.getItem("user_token") === undefined ||
      localStorage.getItem("user_token") === null
    ) {
      setState(initialFormState);
    } else {
      UserData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem("user_token"), apicall]);

  const handleShow = (e) => {
    setmodalshow(true);
    UserData();
  };
  const ModelCloseFunction = () => {
    setmodalshow(false);
    setErrors({});
  };

  const closeUpdateAlert = () => {
    setUserUpdateAlert(false);
    setmodalshow(false);
    setapicall(true);
  };
  return (
    <div>
      <section
        className="inner-section single-banner"
        //   style="background: url(images/single-banner.jpg) no-repeat center"
      >
        <div className="container">
          <h2>my profile</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              profile
            </li>
          </ol>
        </div>
      </section>
      <section className="inner-section profile-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>Your Profile</h4>
                  <Link to={"/order_list"}>
                    <h4>Your Orders</h4>
                  </Link>
                  <button
                    onClick={() => handleShow()}
                    data-bs-toggle="modal"
                    data-bs-target="#profile-edit"
                  >
                    edit profile
                  </button>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-8">
                      <div className="row">
                        <div className="col-md-4 col-lg-4">
                          <div className="form-group">
                            <label className="form-label">Fisrt Name :</label>
                            <label className="form-label">
                              {getUserData.first_name}
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                          <div className="form-group">
                            <label className="form-label">Last Name :</label>
                            <label className="form-label">
                              {getUserData.last_name}
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                          <div className="form-group">
                            <label className="form-label">Email :</label>
                            <label className="form-label">
                              {getUserData.email}
                            </label>
                          </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                          <div className="form-group">
                            <label className="form-label">Mobile no. :</label>
                            <label className="form-label">
                              {getUserData.phone_no}
                            </label>
                          </div>
                        </div>

                        <div className="col-md-4 col-lg-4">
                          <div className="form-group">
                            <label className="form-label">Pin Code :</label>
                            <label className="form-label">
                              {getUserData.pincode}
                            </label>
                          </div>
                        </div>

                        <div className="col-md-4 col-lg-4">
                          <div className="form-group">
                            <label className="form-label">City :</label>
                            <label className="form-label">
                              {getUserData.city}
                            </label>
                          </div>
                        </div>

                        {/* <div className="col-lg-12">
                      <div className="profile-btn form-button">
                        <button classNameName="" onClick={onCarrerProfileClick}>
                          Save
                        </button>
                      </div>
                    </div> */}
                      </div>
                    </div>
                    <div className="col-4 ">
                      <div className="form-group table-image d-flex justify-content-end ">
                        <div
                          className="form-label"
                          style={{
                            borderRadius: "6px",
                            overflow: "hidden",
                          }}
                        >
                          <img src={getUserData.image} alt="profile" />
                        </div>
                        <div
                          className="form-label   "
                          style={{ textAlign: "end" }}
                        >
                          profile Pic :
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>contact number</h4>
                  {/* <button data-bs-toggle="modal" data-bs-target="#contact-add">
                    add contact
                  </button> */}
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card contact active">
                        <h6>Mobile</h6>
                        <p>{getUserData.phone_no}</p>
                        <ul>
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#contact-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card contact">
                        <h6>secondary</h6>
                        <p>+8801941101915</p>
                        <ul>
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#contact-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card contact">
                        <h6>secondary</h6>
                        <p>+8801747875727</p>
                        <ul>
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#contact-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card">
                <div className="account-title">
                  <h4>delivery address</h4>
                  {/* <button data-bs-toggle="modal" data-bs-target="#address-add">
                    add address
                  </button> */}
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card address active">
                        <h6>Home</h6>
                        <p>{getUserData.address}</p>
                        <ul className="user-action">
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#address-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card address">
                        <h6>Alternate Address</h6>
                        <p>{getUserData.alternate_address}</p>
                        <ul className="user-action">
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#address-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="profile-card address">
                        <h6>Bussiness</h6>
                        <p>
                          kawran bazar, dhaka-1100. word no-02, road no-13/d,
                          house no-7/m
                        </p>
                        <ul className="user-action">
                          <li>
                            <button
                              className="edit icofont-edit"
                              title="Edit This"
                              data-bs-toggle="modal"
                              data-bs-target="#address-edit"
                            ></button>
                          </li>
                          <li>
                            <button
                              className="trash icofont-ui-delete"
                              title="Remove This"
                              data-bs-dismiss="alert"
                            ></button>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="account-card mb-0">
                <div className="account-title">
                  <h4>payment option</h4>
                  <button data-bs-toggle="modal" data-bs-target="#payment-add">
                    add card
                  </button>
                </div>
                <div className="account-content">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="payment-card payment active">
                        <img src="images/payment/png/01.png" alt="payment" />
                        <h4>card number</h4>
                        <p>
                          <span>****</span>
                          <span>****</span>
                          <span>****</span>
                          <sup>1876</sup>
                        </p>
                        <h5>miron mahmud</h5>
                        <button
                          className="trash icofont-ui-delete"
                          title="Remove This"
                          data-bs-dismiss="alert"
                        ></button>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="payment-card payment">
                        <img src="images/payment/png/02.png" alt="payment" />
                        <h4>card number</h4>
                        <p>
                          <span>****</span>
                          <span>****</span>
                          <span>****</span>
                          <sup>1876</sup>
                        </p>
                        <h5>miron mahmud</h5>
                        <button
                          className="trash icofont-ui-delete"
                          title="Remove This"
                          data-bs-dismiss="alert"
                        ></button>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 alert fade show">
                      <div className="payment-card payment">
                        <img src="images/payment/png/03.png" alt="payment" />
                        <h4>card number</h4>
                        <p>
                          <span>****</span>
                          <span>****</span>
                          <span>****</span>
                          <sup>1876</sup>
                        </p>
                        <h5>miron mahmud</h5>
                        <button
                          className="trash icofont-ui-delete"
                          title="Remove This"
                          data-bs-dismiss="alert"
                        ></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal fade" id="contact-add">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="icofont-close"></i>
            </button>
            <form className="modal-form">
              <div className="form-title">
                <h3>add new contact</h3>
              </div>
              <div className="form-group">
                <label className="form-label">title</label>
                <select className="form-select">
                  <option selected>choose title</option>
                  <option value="primary">primary</option>
                  <option value="secondary">secondary</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">number</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your number"
                />
              </div>
              <button className="form-btn" type="submit">
                save contact info
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="address-add">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="icofont-close"></i>
            </button>
            <form className="modal-form">
              <div className="form-title">
                <h3>add new address</h3>
              </div>
              <div className="form-group">
                <label className="form-label">title</label>
                <select className="form-select">
                  <option selected>choose title</option>
                  <option value="home">home</option>
                  <option value="office">office</option>
                  <option value="Bussiness">Bussiness</option>
                  <option value="academy">academy</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">address</label>
                <textarea
                  className="form-control"
                  placeholder="Enter your address"
                ></textarea>
              </div>
              <button className="form-btn" type="submit">
                save address info
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="payment-add">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="icofont-close"></i>
            </button>
            <form className="modal-form">
              <div className="form-title">
                <h3>add new payment</h3>
              </div>
              <div className="form-group">
                <label className="form-label">card number</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your card number"
                />
              </div>
              <button className="form-btn" type="submit">
                save card info
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="profile-edit">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="icofont-close"></i>
            </button>
            <form className="modal-form">
              <div className="form-title">
                <h3>edit profile info</h3>
              </div>
              <div className="form-group">
                <label className="form-label">profile image</label>
                <input className="form-control" type="file" />
              </div>
              <div className="form-group">
                <label className="form-label">name</label>
                <input
                  className="form-control"
                  type="text"
                  value="Miron Mahmud"
                />
              </div>
              <div className="form-group">
                <label className="form-label">email</label>
                <input
                  className="form-control"
                  type="text"
                  value="mironcoder@gmail.com"
                />
              </div>
              <button className="form-btn" type="submit">
                save profile info
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="contact-edit">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="icofont-close"></i>
            </button>
            <form className="modal-form">
              <div className="form-title">
                <h3>edit contact info</h3>
              </div>
              <div className="form-group">
                <label className="form-label">title</label>
                <select className="form-select">
                  <option value="primary" selected>
                    primary
                  </option>
                  <option value="secondary">secondary</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">number</label>
                <input
                  className="form-control"
                  type="text"
                  value="+8801838288389"
                />
              </div>
              <button className="form-btn" type="submit">
                save contact info
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="modal fade" id="address-edit">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <button className="modal-close" data-bs-dismiss="modal">
              <i className="icofont-close"></i>
            </button>
            <form className="modal-form">
              <div className="form-title">
                <h3>edit address info</h3>
              </div>
              <div className="form-group">
                <label className="form-label">title</label>
                <select className="form-select">
                  <option value="home" selected>
                    home
                  </option>
                  <option value="office">office</option>
                  <option value="Bussiness">Bussiness</option>
                  <option value="academy">academy</option>
                  <option value="others">others</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">address</label>
                <textarea
                  className="form-control"
                  placeholder="jalkuri, fatullah, narayanganj-1420. word no-09, road no-17/A"
                ></textarea>
              </div>
              <button className="form-btn" type="submit">
                save address info
              </button>
            </form>
          </div>
        </div>
      </div>
      <Modal
        size="lg"
        show={modalshow}
        onHide={ModelCloseFunction}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form
          classNameName="p-2 addproduct_form"
          onSubmit={(e) => onCarrerProfileClick(e)}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Update your Profile
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div classNameName="row">
              <div classNameName="col-md-6">
                <Form.Group classNameName="mb-3">
                  <Form.Label classNameName="" column sm="12">
                    First Name <small classNameName="text-danger">*</small>
                  </Form.Label>
                  <Form.Control
                    classNameName={
                      errors.first_name
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    type="text"
                    value={state.first_name}
                    name="first_name"
                    onChange={onInputChange}
                    id="first_name"
                  />
                  {errors.first_name
                    ? (errors.first_name || []).map((error) => {
                        return (
                          <small classNameName="text-danger">{error}</small>
                        );
                      })
                    : null}
                </Form.Group>
              </div>

              <div classNameName="col-md-6">
                <Form.Group classNameName="mb-3">
                  <Form.Label classNameName="" column sm="12">
                    Last Name <small classNameName="text-danger">*</small>
                  </Form.Label>
                  <Form.Control
                    classNameName={
                      errors.last_name
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    type="text"
                    value={state.last_name}
                    name="last_name"
                    onChange={onInputChange}
                    id="last_name"
                  />
                  {errors.last_name
                    ? (errors.last_name || []).map((error) => {
                        return (
                          <small classNameName="text-danger">{error}</small>
                        );
                      })
                    : null}
                </Form.Group>
              </div>

              <div classNameName="col-md-6">
                <Form.Group classNameName="mb-3">
                  <Form.Label classNameName="" column sm="12">
                    Email <small classNameName="text-danger">*</small>
                  </Form.Label>
                  <Form.Control
                    classNameName={
                      errors.email
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    type="email"
                    value={state.email}
                    name="email"
                    onChange={onInputChange}
                    id="email"
                  />
                  {errors.email
                    ? (errors.email || []).map((error) => {
                        return (
                          <small classNameName="text-danger">{error}</small>
                        );
                      })
                    : null}
                </Form.Group>
              </div>

              <div classNameName="col-md-6">
                <Form.Group classNameName="mb-3">
                  <Form.Label classNameName="" column sm="12">
                    Password <small classNameName="text-danger">*</small>
                  </Form.Label>
                  <Form.Control
                    classNameName={
                      errors.password
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    type="password"
                    value={state.password}
                    name="password"
                    onChange={onInputChange}
                    id="password"
                  />
                  {errors.password
                    ? (errors.password || []).map((error) => {
                        return (
                          <small classNameName="text-danger">{error}</small>
                        );
                      })
                    : null}
                </Form.Group>
              </div>
              <div classNameName="col-md-6">
                <Form.Group classNameName="mb-3">
                  <Form.Label classNameName="" column sm="12">
                    Mobile : <small classNameName="text-danger">*</small>
                  </Form.Label>
                  <Form.Control
                    classNameName={
                      errors.phone_no
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    type="text"
                    value={state.phone_no}
                    name="phone_no"
                    onChange={onInputChange}
                    id="phone_no"
                  />
                  {errors.phone_no
                    ? (errors.phone_no || []).map((error) => {
                        return (
                          <small classNameName="text-danger">{error}</small>
                        );
                      })
                    : null}
                </Form.Group>
              </div>

              <div classNameName="col-md-6">
                <Form.Group classNameName="mb-3">
                  <Form.Label classNameName="" column sm="12">
                    Image:
                  </Form.Label>
                  <Form.Control
                    type="file"
                    // value={image}
                    name="image"
                    onChange={(e) => OnFileUpload(e)}
                    id="image"
                  />
                </Form.Group>
              </div>
              <div classNameName="col-md-6">
                <Form.Group classNameName="mb-3">
                  <Form.Label classNameName="" column sm="12">
                    Pin Code <small classNameName="text-danger">*</small>
                  </Form.Label>
                  <Form.Control
                    classNameName={
                      errors.pincode
                        ? "form-control border border-danger"
                        : "form-control"
                    }
                    type="text"
                    value={state.pincode}
                    name="pincode"
                    onChange={onInputChange}
                    id="pincode"
                  />
                  {errors.pincode
                    ? (errors.pincode || []).map((error) => {
                        return (
                          <small classNameName="text-danger">{error}</small>
                        );
                      })
                    : null}
                </Form.Group>
              </div>

              <div classNameName="col-md-6">
                <Form.Group classNameName="mb-3">
                  <Form.Label classNameName="" column sm="12">
                    City
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name={"city"}
                    onChange={onInputChange}
                    value={state.city}
                    id="review"
                  />
                </Form.Group>
              </div>

              <div classNameName="col-md-12">
                <Form.Group classNameName="mb-3">
                  <Form.Label classNameName="" column sm="12">
                    Address
                    {/* <span classNameName="text-danger">*</span> */}
                  </Form.Label>
                  <Col sm="12">
                    <InputGroup classNameName="">
                      <Form.Control
                        size="lg"
                        as="textarea"
                        name="address"
                        aria-label="With textarea"
                        onChange={onInputChange}
                        value={state.address}
                      />
                    </InputGroup>
                  </Col>
                </Form.Group>
              </div>

              <div classNameName="col-md-12">
                <Form.Group classNameName="mb-3">
                  <Form.Label classNameName="" column sm="12">
                    Alternate Address
                    {/* <span classNameName="text-danger">*</span> */}
                  </Form.Label>
                  <Col sm="12">
                    <InputGroup classNameName="">
                      <Form.Control
                        size="lg"
                        as="textarea"
                        name="alternate_address"
                        aria-label="With textarea"
                        onChange={onInputChange}
                        value={state.alternate_address}
                      />
                    </InputGroup>
                  </Col>
                </Form.Group>
              </div>

              <div classNameName="col-md-3 col-sm-4 p-2 text-center">
                <div classNameName="manufacture_date addvariety_inputbox">
                  <Button
                    variant="outline-success"
                    classNameName="addcategoryicon w-100"
                    type="submit"
                    // onClick={ModelCloseFunction}
                  >
                    Update
                  </Button>
                </div>
              </div>
              <div classNameName="col-md-3 col-sm-4 p-2 text-center">
                <div classNameName="manufacture_date addvariety_inputbox">
                  <Button
                    variant="outline-danger"
                    classNameName="addcategoryicon w-100"
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

      <SweetAlert
        show={userUpdateAlert}
        title="Updated Successfully"
        text={"Profile update"}
        onConfirm={closeUpdateAlert}
        // showCancelButton={}
        // onCancel={}
      />
    </div>
  );
};

export default Profile;
