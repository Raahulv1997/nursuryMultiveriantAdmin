import React, { useEffect, useState } from "react";
import { Button, Col, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
// import CategoryJson from "../json/categoryJson";

import "sweetalert/dist/sweetalert.css";
import {
  AddProductData,
  UpdateProductData,
  AllproductData,
  GetCategoryList,
  VendorListFunction,
} from "../../api/api";
import useValidation from "../../common/useValidation";

export default function AddProductModal(props) {
  const [catData, setCatData] = useState([]);
  const [vendorData, setVendorData] = useState([]);
  // const [cateErr, setCateErr] = useState(false);
  let [category, setCategory] = useState({
    main: "",
    sub: "",
  });

  let vendor_id = localStorage.getItem("vendor_id");
  let userType = localStorage.getItem("user_type");
  //product data json
  const initialFormState = {
    name: "",
    seo_tag: "",
    description: "",
    category: "",
    care_and_Instructions: "",
    benefits: "",
    vendor_id: userType === "vendor" ? vendor_id : "",
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
    // category: [
    //   (value) =>
    //     value === null ||
    //     value === "" ||
    //     value === undefined ||
    //     value === "undefined"
    //       ? "Category is required"
    //       : /[^A-Za-z 0-9]/g.test(value)
    //       ? "Cannot use special character "
    //       : null,
    // ],
    vendor_id: [
      (value) => (value === null || value === "" ? "Price is required" : null),
    ],
    description: [
      (value) =>
        value === null || value === ""
          ? "product stock quantity is required"
          : // : /[^A-Za-z 0-9]/g.test(value)
            //     ? "Cannot use special character "
            null,
    ],
  };
  /*Validation imported from the validation custom hook */
  const { state, setState, onInputChange, setErrors, errors, validate } =
    useValidation(initialFormState, validators);

  // console.log(category);
  useEffect(() => {
    setState({
      ...state,
      category: category.parentCategory + "," + category.subCategories,
    });
    // eslint-disable-next-line
  }, [category]);

  /*Function to get product data */
  const GetProductData = async () => {
    const response = await AllproductData(
      props.productID,
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    );
    if (props.productID === "") {
      setState(initialFormState);
    } else {
      newFuntion(response.results[0]);
    }
  };

  const newFuntion = (rs) => {
    const categories = rs.category.split(",");

    const parentCategory = categories[0];
    const subCategories = categories[1];

    setState({
      ...state,
      id: rs.id,
      product_id: rs.product_id,
      vendor_id: rs.vendor_id,
      seo_tag: rs.seo_tag,
      description: rs.description,
      benefits: rs.benefits,
      care_and_Instructions: rs.care_and_Instructions,
      name: rs.name,
      brand: rs.brand,
      quantity: rs.quantity,
      unit: rs.unit,
      product_stock_quantity: rs.product_stock_quantity,
      price: rs.price,
      mrp: rs.mrp,
      review: rs.review,
      discount: rs.discount,
      gst: rs.gst,
      cgst: rs.cgst,
      sgst: rs.sgst,
      rating: rs.rating,

      category: rs.category,
      parentCategory: parentCategory,
      subCategories: subCategories,
    });
    //       setState(response.results[0]);
  };
  /*Function to Get Category list */
  const GetCateList = async () => {
    let response = await GetCategoryList();
    if (response.status === true) {
      setCatData(response.response);
    } else {
      setCatData([]);
    }
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

  /*Function to get the data just by parent */
  const parentCategories = catData.filter(
    (category) => category.parent_id === 0
  );

  /*Render method to get product data*/
  useEffect(() => {
    GetProductData();
    GetCateList();
    GetVendorList();
    // eslint-disable-next-line
  }, [props]);

  /*Function to add Product */
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (validate()) {
      const response = await AddProductData(state);

      if (response.message.affectedRows === 1) {
        props.setProductAlert(true);
        props.setVendorID(state.vendor_id);
        localStorage.setItem("produtc_id", response.message.insertId);
        // props.setProductID(state.vendor_id)
      }
    }
  };

  /*Function to close the mmodal */
  const ModelCloseFunction = () => {
    setErrors({});
    setState(initialFormState);
    props.setProductID("");
    props.setVendorID("");
    props.close();
  };

  /*Function to update the Product */
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
                  Care and Instructions
                </Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  value={state.care_and_Instructions}
                  name="care_and_Instructions"
                  onChange={onInputChange}
                  id="care_and_Instructions"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  Benefits
                </Form.Label>
                <Form.Control
                  type="text"
                  name={"benefits"}
                  onChange={onInputChange}
                  value={state.benefits}
                  id="benefits"
                />
              </Form.Group>
            </div>

            {userType === "vendor" ? null : (
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label className="" column sm="12">
                    Vendor<small className="text-danger">*</small>
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
                        <option>Select vendor</option>
                        {vendorData.map((item) => {
                          return (
                            <>
                              <option value={item.vendor_id}>
                                {item.owner_name}
                              </option>
                            </>
                          );
                        })}
                      </Form.Select>
                    </InputGroup>
                  </Col>
                </Form.Group>
              </div>
            )}

            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  Category
                </Form.Label>
                <Col sm="12">
                  <InputGroup className="">
                    <Form.Select
                      aria-label="Default select example"
                      sm="9"
                      // className={
                      //   cateErr
                      //     ? "form-control border border-danger nice-select w-100"
                      //     : "form-control"
                      // }
                      className="form-control"
                      name="category"
                      onChange={(e) => {
                        setCategory({
                          ...category,
                          parentCategory: e.target.value,
                        });
                        setState({ ...state, parentCategory: e.target.value });
                      }}
                      value={state.parentCategory}
                      id="category"
                    >
                      <option value={""}>Select Category</option>
                      {(parentCategories || []).map((item, i) => {
                        return (
                          <React.Fragment key={i}>
                            <option value={item.id}>
                              {item.category_name}
                            </option>
                          </React.Fragment>
                        );
                      })}
                    </Form.Select>
                    {/* {cateErr === "" ? (
                      <small className="text-danger">
                        Category is required
                      </small>
                    ) : null} */}
                  </InputGroup>
                </Col>
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  Sub Category
                </Form.Label>
                <Form.Select
                  type="text"
                  name={"sub_category"}
                  onChange={(e) => {
                    setCategory({ ...category, subCategories: e.target.value });
                    setState({ ...state, subCategories: e.target.value });
                  }}
                  value={state.subCategories}
                  id="sub_category"
                >
                  <option value={""}>Select Sub Category</option>
                  {catData.length === 0
                    ? null
                    : catData
                        .filter((child) => child.parent_id !== 0)
                        .map((child, i) => (
                          <option key={i} value={child.id}>
                            {child.category_name}
                          </option>
                        ))}
                </Form.Select>
              </Form.Group>
            </div>

            <div className="col-md-12">
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label className="" column sm="12">
                  Description <small className="text-danger">*</small>
                  {/* <span className="text-danger">*</span> */}
                </Form.Label>
                <Col sm="12">
                  <InputGroup className="">
                    <Form.Control
                      size="lg"
                      rows={5}
                      className={
                        errors.description
                          ? "border border-danger h-auto"
                          : "h-auto"
                      }
                      as="textarea"
                      name="description"
                      aria-label="With textarea"
                      onChange={onInputChange}
                      value={state.description}
                    />
                  </InputGroup>
                  {errors.description
                    ? (errors.description || []).map((error, i) => {
                        return (
                          <small className="text-danger" key={i}>
                            {error}
                          </small>
                        );
                      })
                    : null}
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
  );
}
