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
import Sidebar from "../common/sidebar";
import Loader from "../common/loader";
import AddProductModal from "./Modal/AddProductModal";
import AddProductVarientModal from "./Modal/AddProductVarient";
import VarientListModal from "./Modal/VarientListModal";
import AddIVarientImage from "./Modal/AddIVarientImage";
let encoded;
let ImgObj = [];

const AddProduct = () => {
  const navigate = useNavigate();
  //product data json
  // const initialFormState = {
  //   name: "",
  //   vendor_id: "",
  //   seo_tag: "",
  //   brand: "",
  //   quantity: "",
  //   unit: "",
  //   product_stock_quantity: "",
  //   price: "",
  //   mrp: "",
  //   review: "",
  //   discount: "0",
  //   gst: "",
  //   cgst: "",
  //   sgst: "",
  //   rating: "",
  //   category: "",
  //   description: "",
  // };
  const [loading, setLoading] = useState(false);
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
  const [varientModalShow, setVarientModalShow] = useState(false);
  const [modalshowtype, setmodalshowType] = useState(false);
  const [docsshow, setDocsShow] = useState(false);
  const [productTable, setProductTable] = useState([]);
  const [apicall, setApicall] = useState(false);
  const [ProductAlert, setProductAlert] = useState(false);
  const [ProductVarientAlert, setProductVarientAlert] = useState(false);
  const [updateProductAlert, setupdateProductAlert] = useState(false);
  const [updateProducVarientAlert, setupdateProductVarientAlert] = useState(false);
  const [varientModalListShow, setVarientModalListShow] = useState(false);
  const [productVarientId, setProductVarientId] = useState(false);

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
    product_stock_quantity: "",
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
      selector: (row) => (
        <span>
          <b>Name:</b>{" "}
          {row.name ? row.name.charAt(0).toUpperCase() + row.name.slice(1) : ""}
          <br />
          <b>Brand:</b>{" "}
          {row.brand ? row.brand.charAt(0).toUpperCase() + row.brand.slice(1) : ""}
          <br />
          <b>Category:</b>{" "}
          {row.category ? row.category.charAt(0).toUpperCase() + row.category.slice(1) : ""}
          <br />
        </span>
      ),
      sortable: true,
      width: "180px",
      center: true,
      style: {
        paddingRight: "32px",
        paddingLeft: "0px",
      },
    },
    {
      name: "price ",
      selector: (row) => (
        <span>
          <b>Price :</b> {row.price} <br />
          <b>MRP : </b> {row.mrp}
          <br />
        </span>
      ),
      sortable: true,
      width: "100px",
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
      width: "100px",
      center: true,
    },

    {
      name: "unit",
      selector: (row) => (
        <span>
          <b>Unit Qty :</b> {row.quantity} <br />
          <b>Unit : </b> {row.unit}
          <br />
        </span>
      ),
      sortable: true,
      width: "120px",
      center: true,
    },
    {
      name: "Stock Qty",
      selector: (row) => (
        <span
          className={
            row.product_stock_quantity === 0 ? "badge bg-danger" : null
          }
        >
          {row.product_stock_quantity === 0
            ? "Out of Stock"
            : row.product_stock_quantity}
        </span>
      ),
      sortable: true,
      width: "80px",
      center: true,
    },

    {
      name: "Rating",
      selector: (row) => row.rating,
      sortable: true,
      width: "100px",
      center: true,
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
      width: "140px",
    },

    {
      name: "Action",
      width: "360px",
      style: {
        paddingRight: "12px",
        paddingLeft: "0px",
      },
      center: true,
      selector: (row) => (
        <div className={"actioncolimn"}>
          {/* <Button
            size="sm"
            onClick={handlevarietyShow.bind(
              this,
              row.id,
              row.vendor_id,
              row.description
            )}
          >
            Add Images
          </Button> */}
          <Button
            size="sm"
            className="btn-info mx-2"
            onClick={AddVarientModal.bind(
              this,
              row.id,
              row.vendor_id,
            )}
          >
            Add variant
          </Button>
          <Button
            className="btn-warning mx-2"
            onClick={handleEditShow.bind(this, row.id, row.vendor_id,)}
          >
            {" "}
            <BiEdit />
          </Button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleAlert.bind(this, row.id)}
          >
            <BsTrash />
          </button>
        </div>
      ),
    },
  ];

  const onProductClick = (id) => {
    // console.log("idddd--" + id);
    localStorage.setItem("productID", id);

    navigate("/admin/productDetails");
  };
  // validation fucntion------
  // const validators = {
  //   name: [
  //     (value) =>
  //       value === null || value === ""
  //         ? "Name is required"
  //         : /[^A-Za-z 0-9]/g.test(value)
  //           ? "Cannot use special character "
  //           : null,
  //   ],
  //   brand: [
  //     (value) =>
  //       value === null || value === ""
  //         ? "Brand is required"
  //         : /[^A-Za-z 0-9]/g.test(value)
  //           ? "Cannot use special character "
  //           : null,
  //   ],
  //   category: [
  //     (value) =>
  //       value === null || value === ""
  //         ? "Category is required"
  //         : /[^A-Za-z 0-9]/g.test(value)
  //           ? "Cannot use special character "
  //           : null,
  //   ],
  //   price: [
  //     (value) => (value === null || value === "" ? "Price is required" : null),
  //   ],
  //   mrp: [
  //     (value) =>
  //       value === null || value === ""
  //         ? "Mrp is required"
  //         : /[^A-Za-z 0-9]/g.test(value)
  //           ? "Cannot use special character "
  //           : null,
  //   ],
  //   gst: [
  //     (value) =>
  //       value === null || value === ""
  //         ? "GST is required"
  //         : /[^A-Za-z 0-9]/g.test(value)
  //           ? "Cannot use special character "
  //           : null,
  //   ],
  //   product_stock_quantity: [
  //     (value) =>
  //       value === null || value === ""
  //         ? "product stock quantity is required"
  //         : /[^A-Za-z 0-9]/g.test(value)
  //           ? "Cannot use special character "
  //           : null,
  //   ],
  // };

  //import usevalidation and some states and funtions
  // const { state, setState, onInputChange, setErrors, errors, validate } =
  //   useValidation(initialFormState, validators);

  //  all product data search function
  const fetchProductData = async () => {
    setLoading(true);
    const data = await AllproductData(
      searchdata.id,
      searchdata.search,
      searchdata.category,
      searchdata.price_from,
      searchdata.price_to,
      searchdata.rating,
      searchdata.brand,
      searchdata.seo_tag,
      searchdata.vendor_id,
      searchdata.product_stock_quantity
    );
    setApicall(false);
    setProductTable(data.results);
    setLoading(false);
    setsearchData({
      search: "",
      category: "",
      price_from: "",
      price_to: "",
      rating: "",
      brand: "",
      seo_tag: "",
      vendor_id: "",
      product_stock_quantity: "",
    });
  };

  //product data search data useEffect---
  useEffect(() => {
    fetchProductData();
    fetchfilterdata();
  }, [apicall]);

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
    brandData.map((item, i) => ({
      key: i,
      value: `${item.brand}`,
      label: `${item.brand}`,
    })),
  ];

  let BrandArray = [];

  const BrandHanler = (e) => {
    BrandArray = [];
    e.map((item) => {
      BrandArray.push(item.value);
      return {};
    });

    setsearchData({ ...searchdata, brand: BrandArray });
  };

  //category list show fuction
  const options3 = [
    categoryData.map((item, i) => ({
      key: i,
      value: `${item.category}`,
      label: `${item.category}`,
    })),
  ];

  let CategoryArray = [];

  const CategoryHanler = (e) => {
    CategoryArray = [];
    e.map((item) => {
      CategoryArray.push(item.value);
      return {};
    });

    setsearchData({ ...searchdata, category: CategoryArray });
  };

  // search  inputfield onchange
  const searchValueHandler = (e) => {
    setsearchData({ ...searchdata, [e.target.name]: e.target.value });
  };

  //search submit button
  const submitHandler = () => {
    fetchProductData();
    // setApicall(true);
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
      product_stock_quantity: "",
    });
    fetchProductData();
    setApicall(true);
  };


  // product model show
  const handleShow = (e) => {
    if (e === "add") {
      setmodalshow(true);
      setmodalshowType(e)
      setProductID("")
    }
    // setProductData(pdata);
  };

  // product edit show
  const handleEditShow = async (id, vendor_id) => {
    setmodalshow(true);
    setProductID(id)
    setVendorID(vendor_id)
    setmodalshowType("")
  };

  // all alert close fuction
  const closeProductAlert = () => {
    // setErrors({});
    // setState(initialFormState);
    setProductAlert(false);
    setupdateProductAlert(false);
    setmodalshow(false);
    setApicall(true);
    // setProductData(pdata);
    setShowDeleteAlert(false);
    setVarientModalListShow(true)
  };

  const closeDeletrAlert = () => {
    setShowDeleteAlert(false);
  };
  //delete product alert---
  const handleAlert = (id) => {
    setShowDeleteAlert(true);
    setId(id);
  };

  // delete product fuction
  const deleteProductAlert = async () => {
    await DeleteProductStatus(Id);

    setShowDeleteAlert(false);
    setApicall(true);
  };

  //add imgage model show fuction
  // const handlevarietyShow = (id, vendor_id, description) => {
  //   setDocsShow(true);
  //   onImgView(id);
  //   setProductID(id);
  //   setVendorID(vendor_id);
  //   setProductDescription(description);
  // };

  /*Function to open add varient modal to add product varient */
  const AddVarientModal = (id, vendor_id) => {
    console.log(id, vendor_id)
    setProductID(id)
    setVarientModalListShow(true)
    setVendorID(vendor_id)
  }
  //product status change function----
  const onStatusChange = async (e, id) => {
    // setLoading(true);
    await UpdateProductStatus(e.target.value, id);
    // console.log("respo--" + response);
    fetchProductData();
    setApicall(true);
  };

  const handleDocsClose = () => {
    setDocsShow(false);
    // setApicall(true);
  };

  // IMAGE UPLOAD SECTION
  // const convertToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     const { name } = file;
  //     fileReader.addEventListener("load", () => {
  //       resolve({ name: name, base64: fileReader.result });
  //     });
  //     fileReader.readAsDataURL(file);
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  // const imguploadchange = async (e, product_Id, vendor_id, description) => {
  //   setcustomValidated("");
  //   onImgView(product_Id);
  //   for (let i = 0; i < e.target.files.length; i++) {
  //     let coverimg;

  //     if (newImageUrls.length === 0 && i === 0) {
  //       coverimg = "cover";
  //     } else {
  //       coverimg = `cover${i}`;
  //     }
  //     encoded = await convertToBase64(e.target.files[i]);
  //     const [first, ...rest] = encoded.base64.split(",");
  //     let imgvalidation = first.split("/").pop();

  //     if (
  //       imgvalidation === "jpeg;base64" ||
  //       imgvalidation === "jpg;base64" ||
  //       imgvalidation === "png;base64"
  //     ) {
  //       const productimg = rest.join("-");
  //       let imar = {
  //         product_id: `${product_Id}`,
  //         product_description: `${description}`,
  //         vendor_id: `${vendor_id}`,
  //         product_image_name: `${encoded.name}${i}${product_Id}`,
  //         image_position: coverimg,
  //         img_64: productimg,
  //       };
  //       ImgObj.push(imar);

  //       await AddProductImage(ImgObj);

  //       // console.log("iimg add" + JSON.stringify(response));
  //       ImgObj = [];
  //       onImgView(product_Id);

  //       setcustomValidated("");
  //     } else {
  //       setcustomValidated("imgformat");
  //     }
  //   }
  // };

  // const onImgRemove = async (id, product_img_id, product_img_name) => {
  //   await DeleteProductImage(id, product_img_id, product_img_name);
  //   // console.log("delete responce--" + JSON.stringify(response));
  //   onImgView(id);
  // };

  // const onImgView = async (id) => {
  //   // setEditButton(false);
  //   // setimageboxid(id);

  //   const response = await GetProductImages(id);
  //   // console.log(JSON.stringify(response));
  //   setnewImageUrls(response);
  // };

  // const onImgCoverEditClick = async (id, product_img_id) => {
  //   await ProductCoverImageChange(id, product_img_id);

  //   onImgView(id);
  // };
  // // END IMAGE UPLOAD SECTION

  return (
    <div>
      <div className="row admin_row">
        <div className="col-lg-3 col-md-3 admin_sidebar">
          <Sidebar />
        </div>
        <div className="col-lg-9 col-md-9 admin_content_bar">
          <div className="main_content_div">
            <div
              className="dashboard-main-container mt-df25 mt-lg-31"
              id="dashboard-body"
            >
              {loading === true ? <Loader /> : null}
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
                          <Form.Select
                            aria-label="Search by delivery"
                            size="sm"
                            onChange={searchValueHandler}
                            name="product_stock_quantity"
                            value={searchdata.product_stock_quantity}
                          >
                            <option value="">Search by Stock</option>
                            <option value="0">Out of stock</option>
                          </Form.Select>
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
                          <Form.Select
                            aria-label="Search by delivery"
                            size="sm"
                            onChange={searchValueHandler}
                            name="rating"
                            value={searchdata.rating}
                          >
                            <option value="">Search by Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </Form.Select>
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
                              <React.Fragment key={id}>
                                <option value={id + 1}>{item}</option>
                              </React.Fragment>
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
                    {console.log("Product data =>", productTable)}
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
          </div>
        </div>
      </div>
      {/* Modal for add product */}
      {modalshow ?
        <AddProductModal
          show={modalshow}
          close={() => setmodalshow(false)}
          type={modalshowtype}
          setProductAlert={setProductAlert}
          setupdateProductAlert={setupdateProductAlert}
          setProductID={setProductID}
          productID={productID}
          setVendorID={setVendorID}
        />
        : null
      }

      {/* Modal for add product Varient */}
      {varientModalShow ?
        <AddProductVarientModal
          show={varientModalShow}
          close={() => setVarientModalShow(false)}
          type={"add"}
          setProductAlert={setProductVarientAlert}
          setupdateProductAlert={setupdateProductVarientAlert}
          product_id={productID}
          vendor_id={vendorID}
          productVarientId={productVarientId}
        />
        : null
      }
      {varientModalListShow ?
        <VarientListModal
          show={varientModalListShow}
          close={() => setVarientModalListShow(false)}
          setVarientModalShow={setVarientModalShow}
          product_id={productID}
          setProductID={setProductID}
          setProductVarientId={setProductVarientId}
          setDocsShow={setDocsShow}
          setProductDescription={setProductDescription}
        />
        : null
      }

      {/* Add images model */}
      {/* <Modal size="lg" show={docsshow} onHide={handleDocsClose}>
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
                          // console.log("img path----" + imgg.product_image_path);
                          return (
                            <React.Fragment key={i}>
                              <div className="add_Product_Image">
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
                            </React.Fragment>
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
            <Button
              variant="outline-danger"
              className="addcategoryicon"
              // type="submit"
              onClick={handleDocsClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal> */}
      <AddIVarientImage 
      show={docsshow} 
      close={()=>setDocsShow(false)}
      id={productID}
      varId={productVarientId}
      des={productDescription}/>

      <SweetAlert
        show={ProductAlert}
        title="Added Successfully"
        text={"Product Added"}
        onConfirm={closeProductAlert}
      // showCancelButton={}
      // onCancel={}
      />

      <SweetAlert
        show={ProductVarientAlert}
        title="Added Successfully"
        text={"Varient Added"}
        onConfirm={() => setProductVarientAlert(false)}
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
        show={updateProducVarientAlert}
        title="Updated Successfully"
        text={"Product update"}
        onConfirm={() => setupdateProductVarientAlert(false)}
      // showCancelButton={}
      // onCancel={}
      />
      <SweetAlert
        show={ShowDeleteAlert}
        title="Product Name"
        text="Are you Sure you want to delete"
        onConfirm={deleteProductAlert}
        showCancelButton={true}
        onCancel={closeDeletrAlert}
      />
    </div>
  );
};
export default AddProduct;
