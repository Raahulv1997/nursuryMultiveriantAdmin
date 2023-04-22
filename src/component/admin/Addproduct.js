import React, { useEffect, useRef } from "react";
import { Button, Col, InputGroup, Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import DataTable from "react-data-table-component";

import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import CategoryJson from "./json/categoryJson";
import vendorJson from "./json/vendorJson";
import brandJson from "./json/brandJson";
// import statusJson from "./json/statusJson";
import unitJson from "./json/unitJson";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import {
  AddProductData,
  AddProductImage,
  AllproductData,
  DeleteProductImage,
  DeleteProductStatus,
  fetchfilter,
  GetProductImages,
  ProductCoverImageChange,
  UpdateProductData,
  UpdateProductStatus,
} from "../api/api";
import Select from "react-select";
import useValidation from "../common/useValidation";

import { useNavigate } from "react-router-dom";
let encoded;
let ImgObj = [];

const AddProduct = () => {
  const navigate = useNavigate();
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

  const [productID, setProductID] = useState("");
  const [vendorID, setVendorID] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [customvalidated, setcustomValidated] = useState("");
  const formRef = useRef();
  const [brandData, setBrandData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [newImageUrls, setnewImageUrls] = useState([]);
  const [ShowDeleteAlert, setShowDeleteAlert] = useState(false);
  const [modalshow, setmodalshow] = useState(false);
  const [docsshow, setDocsShow] = useState(false);
  const [productTable, setProductTable] = useState([]);
  const [apicall, setApicall] = useState(false);
  const [ProductAlert, setProductAlert] = useState(false);
  const [updateProductAlert, setupdateProductAlert] = useState(false);

  //intial search state data---------
  const [searchdata, setsearchData] = useState({
    id: "",
    search: "",
    category: "",
    price_from: "",
    price_to: "",
    rating: "",
    brand: "",
    seo_tag: "",
    vendor_id: "",
  });
  const [Id, setId] = useState("");

  //data table coloumn-----
  const columns = [
    {
      name: "Image",
      width: "100px",
      center: true,
      cell: (row) => (
        <>
          <p onClick={onProductClick.bind(this, [row.id])}>
            <img
              alt={"apna_organic"}
              src={
                row.cover_image
                  ? row.cover_image
                  : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
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
      name: "Product Name",

      selector: (row) => row.name,
      sortable: true,
      width: "150px",
      center: true,
      style: {
        paddingRight: "32px",
        paddingLeft: "0px",
      },
    },
    {
      name: "SEO tag",
      selector: (row) => row.seo_tag,
      sortable: true,
      width: "150px",
      center: true,
      style: {
        paddingRight: "32px",
        paddingLeft: "0px",
      },
    },

    {
      name: "price ",
      selector: (row) => row.price,
      sortable: true,
      width: "140px",
      center: true,
      style: {
        paddingLeft: "0px",
      },
    },
    {
      name: "MRP ",
      selector: (row) => row.mrp,
      sortable: true,
      width: "140px",
      center: true,
      style: {
        paddingLeft: "0px",
      },
    },
    {
      name: "Tax",
      selector: (row) => (
        <span>
          <b>GST :</b> {row.gst} % <br />
          <b>SGST : </b> {row.sgst}%<br />
          <b>CGST : </b> {row.cgst}%
        </span>
      ),
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "Brand",
      selector: (row) => row.brand,
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "Status",
      selector: (row) => (
        <span
          className={
            row.status === "pending"
              ? "badge bg-secondary"
              : row.status === "draft"
                ? "badge bg-primary"
                : row.status === "approved"
                  ? "badge bg-info"
                  : "badge bg-dark"
          }
        >
          {row.status === "pending"
            ? "pending"
            : row.status === "draft"
              ? "draft"
              : row.status === "approved"
                ? "approved"
                : "return"}
        </span>
      ),
      sortable: true,
    },
    {
      name: "Change Status",
      selector: (row) => (
        <Form.Select
          aria-label="Search by delivery"
          size="sm"
          className="w-100"
          onChange={(e) => onStatusChange(e, row.id)}
          name="status"
          value={row.status}
        >
          <option value="">Select status</option>

          <option value="pending">Pending</option>

          <option value="approved">Approved </option>

          <option value="draft">Draft </option>
        </Form.Select>
      ),
      sortable: true,
    },
    {
      name: "Add Images",
      width: "150px",
      selector: (row) => (
        <Button
          size="xs"
          onClick={handlevarietyShow.bind(
            this,
            row.id,
            row.vendor_id,
            row.description
          )}
        >
          Add Images
        </Button>
      ),
      sortable: true,
    },
    {
      name: "Action",
      width: "110px",
      style: {
        paddingRight: "12px",
        paddingLeft: "0px",
      },
      center: true,
      selector: (row) => (
        <div className={"actioncolimn"}>
          <BiEdit
            className=" p-0  mr-1  editiconn text-secondary"
            onClick={handleEditShow.bind(this, row.id)}
          />
          <BsTrash
            className=" p-0 m-0 editiconn text-danger"
            onClick={handleAlert.bind(this, row.id)}
          />
        </div>
      ),
    },
  ];

  const onProductClick = (id) => {
    localStorage.setItem("productID", id);

    navigate("/admin/productDetails");
  };
  // validation fucntion------
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

  //import usevalidation and some states and funtions
  const { state, setState, onInputChange, setErrors, errors, validate } =
    useValidation(initialFormState, validators);

  //product data search data useEffect---
  useEffect(() => {
    fetchProductData();
    fetchfilterdata();
  }, [apicall]);

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

  //  all product data search function

  const fetchProductData = async () => {
    const data = await AllproductData(
      searchdata.search,
      searchdata.category,
      searchdata.price_from,
      searchdata.price_to,
      searchdata.rating,
      searchdata.brand,
      searchdata.seo_tag,
      searchdata.vendor_id
    );
    setApicall(false);
    setProductTable(data.results);

    // console.log("all-product-" + JSON.stringify(data.results));
  };

  //fetch brand list and category list data---
  const fetchfilterdata = async () => {
    const data = await fetchfilter();

    const { brand_data, category_data } = data;
    // console.log("all-" + JSON.stringify(data));

    if (brand_data) {
      const filterUnwanted = (arr) => {
        const required = arr.filter((el) => {
          return el.brand;
        });
        return required;
      };

      setBrandData(filterUnwanted(brand_data));
    }

    if (category_data) {
      const filterUnwanted = (arr) => {
        const required = arr.filter((el) => {
          return el.category;
        });
        return required;
      };

      setCategoryData(filterUnwanted(category_data));
    }
  };

  //brand select list show
  const options2 = [
    brandData.map((item) => ({
      value: `${item.brand}`,
      label: `${item.brand}`,
    })),
  ];

  let BrandArray = [];

  const BrandHanler = (e) => {
    BrandArray = [];
    e.map((item) => {
      BrandArray.push(item.value);
    });

    setsearchData({ ...searchdata, brand: BrandArray });
  };

  //category list show fuction
  const options3 = [
    categoryData.map((item) => ({
      value: `${item.category}`,
      label: `${item.category}`,
    })),
  ];

  let CategoryArray = [];

  const CategoryHanler = (e) => {
    CategoryArray = [];
    e.map((item) => {
      CategoryArray.push(item.value);
    });

    setsearchData({ ...searchdata, category: CategoryArray });
  };

  // search  inputfield onchange
  const searchValueHandler = (e) => {
    setsearchData({ ...searchdata, [e.target.name]: e.target.value });
  };

  //search submit button
  const submitHandler = () => {
    setApicall(true);
  };

  // reset button
  const OnReset = () => {
    setsearchData({
      search: "",
      category: "",
      price_from: "",
      price_to: "",
      rating: "",
      brand: "",
      seo_tag: "",
      vendor_id: "",
    });
    // fetchProductData();
    setApicall(true);
  };

  //product add
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (validate()) {
      const response = await AddProductData(state);
      // console.log("data---" + JSON.stringify(response.message.affectedRows));
      if (response.message.affectedRows === 1) {
        setProductAlert(true);
      }
    }
  };

  // product model show
  const handleShow = (e) => {
    if (e === "add") {
      setmodalshow(e);
    }
    // setProductData(pdata);
  };

  // product edit show
  const handleEditShow = async (id) => {
    const response = await AllproductData(
      id,
      searchdata.search,
      searchdata.category,
      searchdata.price_from,
      searchdata.price_to,
      searchdata.rating,
      searchdata.brand,
      searchdata.seo_tag,
      searchdata.vendor_id
    );

    setState(response.results[0]);
    setmodalshow(true);
  };

  const ModelCloseFunction = () => {
    setmodalshow(false);
    setErrors({});
    setState(initialFormState);
  };

  //product update fuction--

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    if (validate()) {
      const response = await UpdateProductData(state);
      console.log("data---" + JSON.stringify(response.response.affectedRows));
      if (response.response.affectedRows === 1) {
        setupdateProductAlert(true);
      }
    }
  };

  // all alert close fuction
  const closeProductAlert = () => {
    setErrors({});
    setState(initialFormState);
    setProductAlert(false);
    setupdateProductAlert(false);
    setmodalshow(false);
    setApicall(true);
    // setProductData(pdata);
    setShowDeleteAlert(false);
  };

  //delete product alert---
  const handleAlert = (id) => {
    setShowDeleteAlert(true);
    setId(id);
  };

  // delete product fuction
  const deleteProductAlert = async () => {
    const response = await DeleteProductStatus(Id);

    setShowDeleteAlert(false);
    setApicall(true);
  };

  //add imgage model show fuction
  const handlevarietyShow = (id, vendor_id, description) => {
    setDocsShow(true);
    onImgView(id);
    setProductID(id);
    setVendorID(vendor_id);
    setProductDescription(description);
  };

  //product status change function----
  const onStatusChange = async (e, id) => {
    const response = await UpdateProductStatus(e.target.value, id);
    console.log("respo--" + response);
    fetchProductData();
    setApicall(true);
  };

  const handleDocsClose = (e) => {
    e.preventDefault();
    setDocsShow(false);
  };

  // IMAGE UPLOAD SECTION
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      const { name } = file;
      fileReader.addEventListener("load", () => {
        resolve({ name: name, base64: fileReader.result });
      });
      fileReader.readAsDataURL(file);
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const imguploadchange = async (e, product_Id, vendor_id, description) => {
    setcustomValidated("");
    onImgView(product_Id);
    for (let i = 0; i < e.target.files.length; i++) {
      let coverimg;

      if (newImageUrls.length === 0 && i === 0) {
        coverimg = "cover";
      } else {
        coverimg = `cover${i}`;
      }
      encoded = await convertToBase64(e.target.files[i]);
      const [first, ...rest] = encoded.base64.split(",");
      let imgvalidation = first.split("/").pop();

      if (
        imgvalidation === "jpeg;base64" ||
        imgvalidation === "jpg;base64" ||
        imgvalidation === "png;base64"
      ) {
        const productimg = rest.join("-");
        let imar = {
          product_id: `${product_Id}`,
          product_description: `${description}`,
          vendor_id: `${vendor_id}`,
          product_image_name: `${encoded.name}${i}${product_Id}`,
          image_position: coverimg,
          img_64: productimg,
        };
        ImgObj.push(imar);

        const response = await AddProductImage(ImgObj);

        console.log("iimg add" + JSON.stringify(response));
        ImgObj = [];
        onImgView(product_Id);
        setcustomValidated("");
      } else {
        setcustomValidated("imgformat");
      }
    }
  };

  const onImgRemove = async (id, product_img_id, product_img_name) => {
    const response = await DeleteProductImage(
      id,
      product_img_id,
      product_img_name
    );
    console.log("delete responce--" + JSON.stringify(response));
    onImgView(id);
  };

  const onImgView = async (id) => {
    // setEditButton(false);
    // setimageboxid(id);

    const response = await GetProductImages(id);
    console.log("imgae----" + JSON.stringify(response));
    setnewImageUrls(response);
  };

  const onImgCoverEditClick = async (id, product_img_id) => {
    const response = await ProductCoverImageChange(id, product_img_id);
    console.log("cover responce--" + JSON.stringify(response));
    onImgView(id);
  };
  // // END IMAGE UPLOAD SECTION

  return (
    <div>
      <div
        className="dashboard-main-container mt-df25 mt-lg-31"
        id="dashboard-body"
      >
        <div className="">
          <div className="page_main_contant">
            <h4>Product</h4>
            <div className=" mt-3 p-3">
              <div className="row pb-3">
                <div className="col-md-3 col-sm-6 aos_input mb-2">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Search by name"
                      name="search"
                      onChange={searchValueHandler}
                      value={searchdata.search}
                    />
                  </Form.Group>
                </div>
                <div className="col-md-3 col-sm-6 aos_input mb-2">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Search by SEO Tag"
                      name="seo_tag"
                      onChange={searchValueHandler}
                      value={searchdata.seo_tag}
                    />
                  </Form.Group>
                </div>

                <div className="col-md-3 col-sm-6 aos_input mb-2">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Price from"
                      name="price_from"
                      onChange={searchValueHandler}
                      value={searchdata.price_from}
                    />
                  </Form.Group>
                </div>

                <div className="col-md-3 col-sm-6 aos_input mb-2">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Price to"
                      name="price_to"
                      onChange={searchValueHandler}
                      value={searchdata.price_to}
                    />
                  </Form.Group>
                </div>
                <div className="col-md-3 col-sm-6 aos_input mb-2">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Search by rating"
                      name="rating"
                      onChange={searchValueHandler}
                      value={searchdata.rating}
                    />
                  </Form.Group>
                </div>
                <div className="col-md-3 col-sm-6 aos_input mb-2">
                  <Select
                    className=" basic-multi-select"
                    placeholder="Search by category"
                    onChange={CategoryHanler}
                    classNamePrefix="select"
                    isMulti
                    options={options3[0]}
                  />
                </div>
                <div className="col-md-3 col-sm-6 aos_input mb-2">
                  <Form.Select
                    className="nice-select w-100"
                    aria-label="Default select example"
                    name="vendor_id"
                    value={searchdata.vendor_id}
                    onChange={searchValueHandler}
                  >
                    <option value={""}>Search By Vendor</option>
                    {vendorJson.vendorjson.map((item, id) => {
                      return (
                        <>
                          <option value={id + 1}>{item}</option>
                        </>
                      );
                    })}
                  </Form.Select>
                </div>
                <div className="col-md-3 col-sm-6 aos_input mb-2">
                  <Select
                    className=" basic-multi-select"
                    placeholder="Search by Brand"
                    onChange={BrandHanler}
                    classNamePrefix="select"
                    isMulti
                    options={options2[0]}
                  />
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
                    onClick={() => handleShow("add")}
                  >
                    Add product
                  </Button>
                </div>
              </div>

              <DataTable
                columns={columns}
                data={productTable}
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
              ? (e) => handleAddProduct(e)
              : (modalshow) => handleUpdateProduct(modalshow)
          }
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {modalshow === "add" ? "Add Product" : "Update Product"}
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
                    ? (errors.name || []).map((error) => {
                      return <small className="text-danger">{error}</small>;
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
                    ? (errors.mrp || []).map((error) => {
                      return <small className="text-danger">{error}</small>;
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
                    ? (errors.gst || []).map((error) => {
                      return <small className="text-danger">{error}</small>;
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
                    ? (errors.price || []).map((error) => {
                      return <small className="text-danger">{error}</small>;
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
                        {unitJson.unitjson.map((item, id) => {
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
                    ? (errors.product_stock_quantity || []).map((error) => {
                      return <small className="text-danger">{error}</small>;
                    })
                    : null}
                </Form.Group>
              </div>

              <div className="col-md-6">
                <Form.Group className="mb-3">
                  <Form.Label className="" column sm="12">
                    Rating
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name={"rating"}
                    onChange={onInputChange}
                    value={state.rating}
                    id="rating"
                  />
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
                        {CategoryJson.categoryjson.map((item, id) => {
                          return (
                            <>
                              <option value={item}>{item}</option>
                            </>
                          );
                        })}
                      </Form.Select>
                      {errors.category
                        ? (errors.category || []).map((error) => {
                          return (
                            <small className="text-danger">{error}</small>
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
                        {brandJson.brandjson.map((item, id) => {
                          return (
                            <>
                              <option value={item}>{item}</option>
                            </>
                          );
                        })}
                      </Form.Select>
                      {errors.brand
                        ? (errors.brand || []).map((error) => {
                          return (
                            <small className="text-danger">{error}</small>
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
                    {modalshow === "add" ? "Add Product" : "Update product"}
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

      {/* Add images model */}

      <Modal
        size="lg"
        show={docsshow}
        onHide={(e) => {
          handleDocsClose(e);
        }}
      >
        <Form ref={formRef}>
          <Modal.Header>
            <Modal.Title>Add Images</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row ">
              <div className="col-md-6">
                <Form.Label>Image Upload (In .jpg, .jpeg, .png ) </Form.Label>
              </div>
            </div>
            <Table>
              <tbody>
                {newImageUrls ? (
                  <tr
                    className={"d-flex flex-wrap"}
                  // id={"variantimgbox" + variantdata.id}
                  >
                    <td className="" colSpan={"12"}>
                      <div className="image_box d-flex  flex-wrap gap-4">
                        {newImageUrls.map((imgg, i) => {
                          console.log("img path----" + imgg.product_image_path);
                          return (
                            <>
                              <div className="add_Product_Image" key={i}>
                                {imgg.image_position === "cover" ? (
                                  <span className="cover_img">Cover</span>
                                ) : null}
                                <img
                                  src={imgg.product_image_path}
                                  key={i}
                                  alt="apna_organic"
                                  height={120}
                                />
                                <span
                                  className="cover_icon"
                                  onClick={() =>
                                    onImgCoverEditClick(
                                      imgg.product_id,
                                      imgg.product_image_id,
                                      imgg.product_image_name
                                    )
                                  }
                                >
                                  Set Cover
                                </span>
                                <span
                                  className="cross_icon"
                                  onClick={() =>
                                    onImgRemove(
                                      imgg.product_id,
                                      imgg.product_image_id,
                                      imgg.product_image_name
                                    )
                                  }
                                >
                                  &times;
                                </span>
                              </div>
                            </>
                          );
                        })}

                        <div className="imgprivew_box position-relative overflow-hidden">
                          <img
                            src={
                              "https://i2.wp.com/asvs.in/wp-content/uploads/2017/08/dummy.png?fit=399%2C275&ssl=1"
                            }
                            // key={i}
                            alt="apna_organic"
                            height={120}
                          />
                          <Form.Control
                            multiple
                            type="file"
                            sm="9"
                            className={"img_add_button"}
                            onChange={(e) =>
                              imguploadchange(
                                e,
                                productID,
                                vendorID,
                                productDescription
                              )
                            }
                            name={"img_64"}
                          />
                          <span className="plus_icon position-absolute">+</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ) : null}
                <tr>
                  <td colSpan={"12"}>
                    {customvalidated === "imgformat" ? (
                      <span
                        className="mt-2   text-center fs-6 text-danger"
                        type="invalid"
                      >
                        Image Format should be in jpg, jpeg or png
                      </span>
                    ) : null}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            <button
              className="button main_outline_button"
              onClick={(e) => handleDocsClose(e)}
            >
              Cancel
            </button>
          </Modal.Footer>
        </Form>
      </Modal>

      <SweetAlert
        show={ProductAlert}
        title="Added Successfully"
        text={"Product Added"}
        onConfirm={closeProductAlert}
      // showCancelButton={}
      // onCancel={}
      />

      <SweetAlert
        show={updateProductAlert}
        title="Updated Successfully"
        text={"Product update"}
        onConfirm={closeProductAlert}
      // showCancelButton={}
      // onCancel={}
      />

      <SweetAlert
        show={ShowDeleteAlert}
        title="Product Name"
        text="Are you Sure you want to delete"
        onConfirm={deleteProductAlert}
        showCancelButton={true}
        onCancel={closeProductAlert}
      />
    </div>
  );
};
export default AddProduct;
