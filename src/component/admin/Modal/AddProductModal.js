import React, { useEffect } from "react";
import { Button, Col, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import CategoryJson from "../json/categoryJson";
import vendorJson from "../json/vendorJson";
import brandJson from "../json/brandJson";
import unitJson from "../json/unitJson";
import "sweetalert/dist/sweetalert.css";
import {
  AddProductData,
  UpdateProductData,
} from "../../api/api";
import useValidation from "../../common/useValidation";

export default function AddProductModal(props) {
      //product data json
  const initialFormState = {
    name: "",
    vendor_id: "",
    seo_tag: "",
    brand: "",
    quantity: "",
    unit: "",
    product_stock_quantity: "",
    price: "",
    mrp: "",
    review: "",
    discount: "0",
    gst: "",
    cgst: "",
    sgst: "",
    rating: "",
    category: "",
    description: "",
  };

/*Validation function */
  const validators = {
    name: [
      (value) =>
        value === null || value === ""
          ? "Name is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
    brand: [
      (value) =>
        value === null || value === ""
          ? "Brand is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
    category: [
      (value) =>
        value === null || value === ""
          ? "Category is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
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

  //product add
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (validate()) {
      const response = await AddProductData(state);
      // console.log("data---" + JSON.stringify(response.message.affectedRows));
      if (response.message.affectedRows === 1) {
        props.setProductAlert(true);
      }
    }
  };

  /*Function to close the mmodal */
  const ModelCloseFunction = () => {
      setErrors({});
      setState(initialFormState);
      props.close();
  };

/*Function to lupdate the Product */
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    if (validate()) {
      const response = await UpdateProductData(state);
      // console.log("data---" + JSON.stringify(response.response.affectedRows));
      if (response.response.affectedRows === 1) {
        props.setupdateProductAlert(true);
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
                    props.type === "add"
                        ? (e) => handleAddProduct(e)
                        : (props) => handleUpdateProduct(props)
                }
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {props.type === "add" ? "Add Product" : "Update Product"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                    Product Name <small className="text-danger">*</small>
                                </Form.Label>
                                <Form.Control
                                    className={
                                        errors.name
                                            ? "form-control border border-danger"
                                            : "form-control"
                                    }
                                    type="text"
                                    value={state.name}
                                    name="name"
                                    onChange={onInputChange}
                                    id="name"
                                />
                                {errors.name
                                    ? (errors.name || []).map((error, i) => {
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
                        </div>

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

                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                    rating
                                </Form.Label>
                                <Form.Select
                                    aria-label="Search by delivery"
                                    size="sm"
                                    onChange={onInputChange}
                                    name="rating"
                                    value={state.rating}
                                    id="rating"
                                >
                                    <option value="">Select rating</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Select>
                            </Form.Group>
                        </div>

                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                    Review
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    name={"review"}
                                    onChange={onInputChange}
                                    value={state.review}
                                    id="review"
                                />
                            </Form.Group>
                        </div>

                        <div className="col-md-6">
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
                        </div>

                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label className="" column sm="12">
                                    Category <small className="text-danger">*</small>
                                    {/* <span className="text-danger">*</span> */}
                                </Form.Label>
                                <Col sm="12">
                                    <InputGroup className="">
                                        <Form.Select
                                            aria-label="Default select example"
                                            sm="9"
                                            className={
                                                errors.category
                                                    ? "form-control border border-danger nice-select w-100"
                                                    : "form-control"
                                            }
                                            name="category"
                                            onChange={onInputChange}
                                            value={state.category}
                                            id="category"
                                        >
                                            <option value={""}>Select Category</option>
                                            {CategoryJson.categoryjson.map((item) => {
                                                return (
                                                    <>
                                                        <option value={item}>{item}</option>
                                                    </>
                                                );
                                            })}
                                        </Form.Select>
                                        {errors.category
                                            ? (errors.category || []).map((error, i) => {
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
                        </div>

                        <div className="col-md-6">
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
                        </div>

                        <div className="col-md-12">
                            <Form.Group className="mb-3" controlId="validationCustom01">
                                <Form.Label className="" column sm="12">
                                    Description
                                    {/* <span className="text-danger">*</span> */}
                                </Form.Label>
                                <Col sm="12">
                                    <InputGroup className="">
                                        <Form.Control
                                            size="lg"
                                            rows={5}
                                            className="h-auto"
                                            as="textarea"
                                            name="description"
                                            aria-label="With textarea"
                                            onChange={onInputChange}
                                            value={state.description}
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
                                    {props.type === "add" ? "Add Product" : "Update product"}
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
    )
}
