import React, { useEffect, useState } from "react";
import { Button, Col, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import unitJson from "../json/unitJson";
import "sweetalert/dist/sweetalert.css";
import {
  AddProductVerient,
  UpdateProductVerient,
  AllproductDatawithVarient,
} from "../../api/api";
import useValidation from "../../common/useValidation";

export default function AddProductVarientModal(props) {
  let product_id = localStorage.getItem("produtc_id");

  console.log("product 0-----id--" + props.product_id);
  console.log("product varient id--" + props.productVarientId);
  //product data json
  const initialFormState = {
    product_id: props.product_id ? props.product_id : product_id,
    vendor_id: props.vendor_id,
    verient_name: "",
    quantity: "",
    unit: "",
    product_stock_quantity: "",
    price: "",
    mrp: "",
    discount: "",
    gst: "",
    cgst: "",
    sgst: "",
    rating: "",
    verient_description: "",
  };

  /*Validation function */
  const validators = {
    verient_name: [
      (value) =>
        value === null || value === ""
          ? "Name is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
    // brand: [
    //     (value) =>
    //         value === null || value === ""
    //             ? "Brand is required"
    //             : /[^A-Za-z 0-9]/g.test(value)
    //                 ? "Cannot use special character "
    //                 : null,
    // ],
    // category: [
    //     (value) =>
    //         value === null || value === ""
    //             ? "Category is required"
    //             : /[^A-Za-z 0-9]/g.test(value)
    //                 ? "Cannot use special character "
    //                 : null,
    // ],
    price: [
      (value) => (value === null || value === "" ? "Price is required" : null),
    ],
    mrp: [
      (value) =>
        value === null || value === ""
          ? "Mrp is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
    gst: [
      (value) =>
        value === null || value === ""
          ? "GST is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
    product_stock_quantity: [
      (value) =>
        value === null || value === ""
          ? "product stock quantity is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
  };
  /*Validation imported from the validation custom hook */
  const { state, setState, onInputChange, setErrors, errors, validate } =
    useValidation(initialFormState, validators);

  /*Function to get product Varient data */
  const GetProductData = async () => {
    const response = await AllproductDatawithVarient(props.productVarientId);

    if (
      props.productID === "" ||
      props.productVarientId === undefined ||
      props.productVarientId === "" ||
      props.productVarientId === null
    ) {
      setState(initialFormState);
    } else {
      setState(response.results[0]);
      // setState(
      //   response.results.find(
      //     (vdata) => vdata.product_verient_id === props.productVarientId
      //   )
      // );
    }
  };

  /*Render method to get product Varient data*/
  useEffect(() => {
    GetProductData();
  }, [props]);

  /*Discount and Gst calculation */
  let discountt = (state.mrp * state.discount) / 100;
  let sgst = state.gst / 2;
  let cgst = state.gst / 2;
  let price = state.mrp - discountt;

  let totalGst = (price * state.gst) / 100;
  useEffect(() => {
    setState({
      ...state,
      price: `${price}`,
      sgst: `${sgst}`,
      cgst: `${cgst}`,
    });
  }, [state.mrp, state.discount, state.gst]);

  /*Function to add product varient */
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (validate()) {
      const response = await AddProductVerient(state);
      // console.log("data---" + JSON.stringify(response.message.affectedRows));
      if (response.message.affectedRows === 1) {
        props.setProductAlert(true);
        ModelCloseFunction();
      }
    }
  };

  /*Function to close the modal */
  const ModelCloseFunction = () => {
    setErrors({});
    setState(initialFormState);
    props.close();
  };

  /*Function to lupdate the Product */
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    if (validate()) {
      const response = await UpdateProductVerient(state);
      // console.log("data---" + JSON.stringify(response.response.affectedRows));
      if (response.response.affectedRows === 1) {
        props.setupdateProductAlert(true);
        ModelCloseFunction();
      }
    }
  };

  return (
    <Modal
      size="lg"
      show={props.show}
      onHide={props.close}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Form
        className="p-2 addproduct_form"
        onSubmit={
          props.productVarientId
            ? (props) => handleUpdateProduct(props)
            : (e) => handleAddProduct(e)
        }
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {props.productVarientId ? "Update varient" : "Add varient"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  Verient Name <small className="text-danger">*</small>
                </Form.Label>
                <Form.Control
                  className={
                    errors.verient_name
                      ? "form-control border border-danger"
                      : "form-control"
                  }
                  type="text"
                  value={state.verient_name}
                  name="verient_name"
                  onChange={onInputChange}
                  id="verient_name"
                />
                {errors.verient_name
                  ? (errors.verient_name || []).map((error, i) => {
                      return (
                        <small className="text-danger" key={i}>
                          {error}
                        </small>
                      );
                    })
                  : null}
              </Form.Group>
            </div>

            {/* <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                    SEO Tag
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={state.seo_tag}
                                    name="seo_tag"
                                    onChange={onInputChange}
                                    id="seo_tag"
                                />
                            </Form.Group>
                        </div> */}

            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  MRP <small className="text-danger">*</small>
                </Form.Label>
                <Form.Control
                  className={
                    errors.mrp
                      ? "form-control border border-danger"
                      : "form-control"
                  }
                  type="text"
                  value={state.mrp}
                  name="mrp"
                  onChange={onInputChange}
                  id="mrp"
                />
                {errors.mrp
                  ? (errors.mrp || []).map((error, i) => {
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
                  Discount (%)
                </Form.Label>
                <Form.Control
                  type="text"
                  value={state.discount}
                  name="discount"
                  onChange={onInputChange}
                  id="discount"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  GST (%) <small className="text-danger">*</small>
                </Form.Label>
                <Form.Control
                  className={
                    errors.gst
                      ? "form-control border border-danger"
                      : "form-control"
                  }
                  type="text"
                  value={state.gst}
                  name="gst"
                  onChange={onInputChange}
                  id="gst"
                />
                {errors.gst
                  ? (errors.gst || []).map((error, i) => {
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
                  CGST (%)
                </Form.Label>
                <Form.Control
                  type="text"
                  value={state.cgst}
                  name="cgst"
                  onChange={onInputChange}
                  id="cgst"
                />
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  SGST (%)
                </Form.Label>
                <Form.Control
                  type="text"
                  value={state.sgst}
                  name="sgst"
                  onChange={onInputChange}
                  id="sgst"
                />
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  Price <small className="text-danger">*</small>
                </Form.Label>
                <Form.Control
                  className={
                    errors.price
                      ? "form-control border border-danger"
                      : "form-control"
                  }
                  type="text"
                  value={state.price}
                  name="price"
                  onChange={onInputChange}
                  id="price"
                />
                {state.gst > 0 ? (
                  <small className="text-success">{`${state.gst}% tax ₹ ${totalGst} are include in price `}</small>
                ) : null}
                {errors.price
                  ? (errors.price || []).map((error, i) => {
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
                  Product Unit quantity
                </Form.Label>
                <Form.Control
                  type="text"
                  value={state.quantity}
                  name="quantity"
                  onChange={onInputChange}
                  id="quantity"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  Unit
                </Form.Label>
                <Col sm="12">
                  <InputGroup className="">
                    <Form.Select
                      aria-label="Default select example"
                      className="nice-select w-100"
                      sm="9"
                      name="unit"
                      onChange={onInputChange}
                      value={state.unit}
                    >
                      <option value={""}>Select unit</option>
                      {unitJson.unitjson.map((item) => {
                        return (
                          <>
                            <option value={item}>{item}</option>
                          </>
                        );
                      })}
                    </Form.Select>
                  </InputGroup>
                </Col>
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  Product Stock Quantity{" "}
                  <small className="text-danger">*</small>
                </Form.Label>
                <Form.Control
                  className={
                    errors.product_stock_quantity
                      ? "form-control border border-danger"
                      : "form-control"
                  }
                  type="text"
                  value={state.product_stock_quantity}
                  name="product_stock_quantity"
                  onChange={onInputChange}
                  id="product_stock_quantity"
                />
                {errors.product_stock_quantity
                  ? (errors.product_stock_quantity || []).map((error, i) => {
                      return (
                        <small className="text-danger" key={i}>
                          {error}
                        </small>
                      );
                    })
                  : null}
              </Form.Group>
            </div>

            {/* <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                    Vendor
                                </Form.Label>
                                <Col sm="12">
                                    <InputGroup className="">
                                        <Form.Select
                                            aria-label="Default select example"
                                            className="nice-select w-100"
                                            sm="9"
                                            name="vendor_id"
                                            onChange={onInputChange}
                                            value={state.vendor_id}
                                        >
                                            <option value={""}>Select vendor</option>
                                            {vendorJson.vendorjson.map((item, id) => {
                                                return (
                                                    <>
                                                        <option value={id + 1}>{item}</option>
                                                    </>
                                                );
                                            })}
                                        </Form.Select>
                                    </InputGroup>
                                </Col>
                            </Form.Group>
                        </div> */}

            {/* <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                    Brand
                                    <span className="text-danger">*</span>
                                </Form.Label>
                                <Col sm="12">
                                    <InputGroup className="">
                                        <Form.Select
                                            aria-label="Default select example"
                                            className={
                                                errors.category
                                                    ? "form-control border border-danger nice-select w-100"
                                                    : "form-control"
                                            }
                                            sm="9"
                                            name="brand"
                                            onChange={onInputChange}
                                            value={state.brand}
                                            id="brand"
                                        >
                                            <option value={""}>Select Brand...</option>
                                            {brandJson.brandjson.map((item) => {
                                                return (
                                                    <>
                                                        <option value={item}>{item}</option>
                                                    </>
                                                );
                                            })}
                                        </Form.Select>
                                        {errors.brand
                                            ? (errors.brand || []).map((error, i) => {
                                                return (
                                                    <small className="text-danger" key={i}>
                                                        {error}
                                                    </small>
                                                );
                                            })
                                            : null}
                                    </InputGroup>
                                </Col>
                            </Form.Group>
                        </div> */}

            <div className="col-md-12">
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label className="" column sm="12">
                  Verient Description
                  {/* <span className="text-danger">*</span> */}
                </Form.Label>
                <Col sm="12">
                  <InputGroup className="">
                    <Form.Control
                      size="lg"
                      rows={5}
                      className="h-auto"
                      as="textarea"
                      name="verient_description"
                      aria-label="With textarea"
                      onChange={onInputChange}
                      value={state.verient_description}
                    />
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
                  {props.productVarientId ? "Update Verient" : "Add varient"}
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
  );
}
