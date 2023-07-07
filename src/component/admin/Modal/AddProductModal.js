import React, { useEffect } from "react";
import { Button, Col, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import CategoryJson from "../json/categoryJson";
import vendorJson from "../json/vendorJson";
import "sweetalert/dist/sweetalert.css";
import {
    AddProductData,
    UpdateProductData,
    AllproductData
} from "../../api/api";
import useValidation from "../../common/useValidation";

export default function AddProductModal(props) {
    //product data json
    const initialFormState = {
        name: "",
        seo_tag: "",
        description: "",
        category: "",
        care_and_Instructions: "",
        benefits: "",
        vendor_id: "",
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
        category: [
            (value) =>
                value === null || value === ""
                    ? "Category is required"
                    : /[^A-Za-z 0-9]/g.test(value)
                        ? "Cannot use special character "
                        : null,
        ],
        vendor_id: [
            (value) => (value === null || value === "" ? "Price is required" : null),
        ],
        description: [
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
            "",

        );
        console.log("data---" + JSON.stringify(response));
        if(props.productID === ""){
            setState(initialFormState)
        }else{
            setState(response.results[0]);}
    };

    /*Render method to get product data*/
    useEffect(() => {
        GetProductData()
    }, [props])

    /*Function to add Product */
    const handleAddProduct = async (e) => {
        e.preventDefault();
        if (validate()) {
            const response = await AddProductData(state);
            // console.log("data---" + JSON.stringify(response.message.affectedRows));
            if (response.message.affectedRows === 1) {
                props.setProductAlert(true);
                props.setVendorID(state.vendor_id)
                // props.setProductID(state.vendor_id)
            }
        }
    };

    /*Function to close the mmodal */
    const ModelCloseFunction = () => {
        setErrors({});
        setState(initialFormState);
        props.setProductID("")
        props.setVendorID("")
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
