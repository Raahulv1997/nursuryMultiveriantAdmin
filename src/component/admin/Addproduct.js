import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";

import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import {
  DeleteProduct,

  // UpdateProductStatus,
  AllproductData,
  CategoryList,
  VendorListFunction,
} from "../api/api";
// import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Sidebar from "../common/sidebar";
import Loader from "../common/loader";
import AddProductModal from "./Modal/AddProductModal";
import AddProductVarientModal from "./Modal/AddProductVarient";
import VarientListModal from "./Modal/VarientListModal";
import AddIVarientImage from "./Modal/AddIVarientImage";
import ProductImage from "../../image/product_demo.png";
import Select from "react-select";
const AddProduct = () => {
  const navigate = useNavigate();
  const [expandedRows, setExpandedRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productID, setProductID] = useState("");
  const [vendorID, setVendorID] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [vendorData, setVendorData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
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
  const [updateProducVarientAlert, setupdateProductVarientAlert] =
    useState(false);
  const [varientModalListShow, setVarientModalListShow] = useState(false);
  const [productVarientId, setProductVarientId] = useState(false);
  const [Id, setId] = useState("");
  const [submitError, setSubmitError] = useState(false);
  let userType = localStorage.getItem("user_type");
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
  /*FUnction to get the image from tht muliple image with dpouble commas */
  const CoverImg = (img) => {
    const result = img.replace(/,+/g, ",");
    return result.split(",")[0];
  };
  const toggleExpand = (rowId) => {
    if (expandedRows.includes(rowId)) {
      setExpandedRows(expandedRows.filter((id) => id !== rowId));
    } else {
      setExpandedRows([...expandedRows, rowId]);
    }
  };
  // const TruncatedCell = ({ value }) => (
  //   <div
  //     style={{
  //       whiteSpace: "nowrap",
  //       overflow: "hidden",
  //       textOverflow: "ellipsis",
  //       maxWidth: "50px", // Adjust the maximum width as needed
  //     }}
  //   >
  //     {value}
  //   </div>
  // );
  // const toggleExpand = (row) => {
  //   if (expandedRows.includes(row.id)) {
  //     setExpandedRows(expandedRows.filter((id) => id !== row.id));
  //   } else {
  //     setExpandedRows([...expandedRows, row.id]);
  //   }
  // };
  //data table coloumn-----
  // const nestedTableColumns = [
  //   {
  //     name: "Name",
  //     selector: "verient_name",
  //     sortable: true,
  //     style: {
  //       marginTop: "-20px",
  //     },
  //     cell: (row) => <TruncatedCell value={row.verient_name} />,
  //   },
  //   {
  //     name: "Price",
  //     selector: "price",
  //     style: {
  //       marginTop: "-20px",
  //     },
  //     sortable: true,
  //   },
  //   {
  //     name: "Stock",
  //     selector: "product_stock_quantity",
  //     style: {
  //       marginTop: "-20px",
  //     },
  //     sortable: true,
  //   },
  // ];

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
              src={row.cover_image ? CoverImg(row.cover_image) : ProductImage}
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
      selector: "name",
      sortable: true,
      width: "120px",
      center: true,
      cell: (row) => {
        return (
          <span>
            <b>Name:</b>{" "}
            {row.name
              ? row.name.charAt(0).toUpperCase() + row.name.slice(1)
              : ""}
            <br />
            <b>Category:</b>{" "}
            {row.category_name
              ? row.category_name.charAt(0).toUpperCase() +
                row.category_name.slice(1)
              : ""}
            <br />
          </span>
        );
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
      width: "150px",

      center: true,
      style: {
        paddingLeft: "5px",
        paddingRight: "0px",
        marginRight: "0px",
      },
    },

    {
      name: "Variant",
      selector: (row) => (
        <span>
          {row.verients && row.verients.length > 0 ? (
            <div>
              <table className="veriantTable">
                {/* Table header */}
                <thead className="tableVerientHeader">
                  <tr>
                    <th className="tableHeaderVarientName">Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                  </tr>
                </thead>
                {/* Table body */}
                <tbody className="tableVerientBody">
                  {/* Render a subset of verients based on expanded state */}
                  {row.verients
                    .slice(
                      0,
                      expandedRows.includes(row.id) ? row.verients.length : 2
                    )
                    .map((item) => (
                      <tr key={item.id}>
                        <td
                          className="truncateText nameCell"
                          style={{
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            maxWidth: "50px",
                          }}
                        >
                          {item.verient_name}
                        </td>
                        <td>{item.price}</td>
                        <td>{item.product_stock_quantity}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              {/* Show More / Show Less button */}
              {row.verients.length > 2 && (
                <button
                  onClick={() => toggleExpand(row.id)}
                  style={{
                    color: expandedRows.includes(row.id) ? "red" : "green",
                    fontWeight: "bolder",
                  }}
                >
                  {expandedRows.includes(row.id) ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          ) : (
            "No variant"
          )}
        </span>
      ),
      sortable: true,
      width: "300px",
      center: true,
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
      width: "120px",
      center: true,
      // style: {
      //   marginTop: "px",
      //   marginRight: "20px",
      //   marginLeft: "20px",
      // },
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
      width: "120px",
      center: true,
    },

    {
      name: "Rating",
      selector: (row) => row.avgRatings,
      sortable: true,
      width: "100px",
      center: true,
    },

    // {
    //   name: "Change Status",
    //   selector: (row) => (
    //     <Form.Select
    //       aria-label="Search by delivery"
    //       size="sm"
    //       className="w-100"
    //       onChange={(e) => onStatusChange(e, row.id)}
    //       name="status"
    //       value={row.status}
    //     >
    //       <option value="">Select status</option>

    //       <option value="pending">Pending</option>

    //       <option value="approved">Approved </option>

    //       <option value="draft">Draft </option>
    //     </Form.Select>
    //   ),
    //   sortable: true,
    //   width: "140px",
    // },

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
            onClick={AddVarientModal.bind(this, row.id, row.vendor_id)}
          >
            Add variant
          </Button>
          <Button
            className="btn-warning mx-2"
            onClick={handleEditShow.bind(this, row.id, row.vendor_id)}
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

    navigate("/productDetails");
  };

  //  all product data search function
  const fetchProductData = async () => {
    setLoading(true);

    const data = await AllproductData(
      searchdata.id,
      searchdata.search,
      searchdata.category,
      searchdata.price_from,
      searchdata.price_to,
      searchdata.rating ?? [],
      searchdata.brand,
      searchdata.seo_tag,
      searchdata.vendor_id,
      searchdata.product_stock_quantity
    );
    setApicall(false);

    setProductTable(data.results);
    setLoading(false);
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
  // console.log("Real data list =>", productTable)
  //product data search data useEffect---
  useEffect(() => {
    fetchProductData();
    fetchfilterdata();
    GetVendorList();
    // eslint-disable-next-line
  }, [apicall]);

  //fetch brand list and category list data---
  const fetchfilterdata = async () => {
    const jsonResponse = await CategoryList();
    const responseArray = jsonResponse.data.response;

    setCategoryData(responseArray);
    setApicall(false);
    // console.log("data of catagory--" + JSON.stringify(status));
    // setCategoryData(data.response);

    // console.log("all-" + JSON.stringify(data));

    // const filterUnwanted = (arr) => {
    //   const required = arr.filter((el) => {
    //     return el.category;
    //   });
    //   return required;
    // };

    // setCategoryData(filterUnwanted(category_data));
  };

  // let BrandArray = [];

  // const BrandHanler = (e) => {
  //   BrandArray = [];
  //   e.map((item) => {
  //     BrandArray.push(item.value);
  //     return {};
  //   });

  //   setsearchData({ ...searchdata, brand: BrandArray });
  // };

  //category list show fuction

  let options3 = [
    (categoryData || []).map((item, i) => ({
      key: i,
      value: `${item.id}`,
      label: `${item.category_name}`,
    })),
  ];

  const [CategoryArray, setCategoryArray] = useState([]);
  const CategoryHanler = (e) => {
    e.map((item) => {
      setCategoryArray([...CategoryArray, item.value]);
      return {};
    });
    // setBrandName(arrr);
  };

  let RatingDataArray = [
    { id: "1.0", ratingVal: "1" },
    { id: "2.0", ratingVal: "2" },
    { id: "3.0", ratingVal: "3" },
    { id: "4.0", ratingVal: "4" },
    { id: "5.0", ratingVal: "5" },
  ];
  let options4 = [
    (RatingDataArray || []).map((item, i) => ({
      key: i,
      value: `${item.id}`,
      label: `${item.ratingVal}`,
    })),
  ];

  const [RatingArray, setRatingArray] = useState([]);
  const RatingHanler = (e) => {
    e.map((item) => {
      if (RatingArray == null) {
        setRatingArray([]);
      }
      setRatingArray([...RatingArray, item.value]);

      return {};
    });
  };

  const searchValueHandler = (e) => {
    setsearchData({ ...searchdata, [e.target.name]: e.target.value });

    setSubmitError(false);
  };

  useEffect(() => {
    setsearchData({
      ...searchdata,
      rating: RatingArray,
      category: CategoryArray,
    });
    // eslint-disable-next-line
  }, [RatingArray, CategoryArray]);

  //search submit button
  const submitHandler = () => {
    if (
      searchdata.search === "" &&
      searchdata.category === "" &&
      searchdata.price_from === "" &&
      searchdata.price_to === "" &&
      searchdata.product_stock_quantity === "" &&
      searchdata.rating === "" &&
      searchdata.vendor_id === ""
    ) {
      setSubmitError("empty");
    } else {
      fetchProductData();
    }

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

    setCategoryArray([]);

    fetchProductData();
    setApicall(true);
    setSubmitError(false);
    setRatingArray([]);
  };

  // product model show
  const handleShow = (e) => {
    if (e === "add") {
      setmodalshow(true);
      setmodalshowType(e);
      setProductID("");
    }
    // setProductData(pdata);
  };

  // product edit show
  const handleEditShow = async (id, vendor_id) => {
    setmodalshow(true);
    setProductID(id);
    setVendorID(vendor_id);
    setmodalshowType("");
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
    setVarientModalListShow(true);
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
    await DeleteProduct(Id);
    setShowDeleteAlert(false);
    setApicall(true);
  };

  /*Function to open add varient modal to add product varient */
  const AddVarientModal = (id, vendor_id) => {
    console.log("vendor id-----" + vendor_id);
    setProductID(id);
    setVarientModalListShow(true);
    setVendorID(vendor_id);
  };

  return (
    <div>
      <div className="row admin_row">
        <div className="col-lg-3 col-md-3 admin_sidebar bg-white">
          <Sidebar style={{ message: "product" }} />
        </div>
        <div className="col-lg-9 col-md-9 admin_content_bar">
          <div className="main_content_div">
            <div
              className="dashboard-main-container mt-df25 mt-lg-31"
              id="dashboard-body"
            >
              {loading === true ? <Loader /> : null}
              {/* <Loader /> */}
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
                            <option>Search by Stock</option>
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
                      <div className="col-md-3 col-sm-6 aos_input mb-2 multi_select_input">
                        <Form.Group className="mb-3">
                          <Select
                            id="RatingSelect"
                            value={
                              RatingArray.length > 0 ? RatingArray.value : []
                            }
                            className=" basic-multi-select"
                            placeholder="Search by Rating"
                            onChange={RatingHanler}
                            classNamePrefix="select"
                            isMulti
                            options={options4[0]}
                          />
                        </Form.Group>
                      </div>
                      <div className="col-md-3 col-sm-6 aos_input mb-2 multi_select_input">
                        <Select
                          value={
                            CategoryArray.length > 0 ? CategoryArray.value : []
                          }
                          className=" basic-multi-select"
                          placeholder="Search by Category"
                          onChange={CategoryHanler}
                          classNamePrefix="select"
                          isMulti
                          options={options3[0]}
                        />
                      </div>
                      {userType === "vendor" ? null : (
                        <div className="col-md-3 col-sm-6 aos_input mb-2">
                          <Form.Select
                            className="nice-select w-100"
                            aria-label="Default select example"
                            name="vendor_id"
                            value={searchdata.vendor_id}
                            onChange={searchValueHandler}
                          >
                            <option>Search By Vendor</option>
                            {vendorData.map((item, i) => {
                              return (
                                <React.Fragment key={i}>
                                  <option value={item.vendor_id}>
                                    {item.owner_name}
                                  </option>
                                </React.Fragment>
                              );
                            })}
                          </Form.Select>
                        </div>
                      )}

                      {/* <div className="col-md-3 col-sm-6 aos_input mb-2">
                        <Select
                          className=" basic-multi-select"
                          placeholder="Search by Brand"
                          onChange={BrandHanler}
                          classNamePrefix="select"
                          isMulti
                          options={options2[0]}
                        />
                        <Form.Select
                          className="nice-select w-100"
                          aria-lcategoryabel="Default select example"
                          name="brand"
                          value={searchdata.brand}
                          onChange={searchValueHandler}
                        >
                          <option value={""}>Search By Brand</option>
                          {categoryData.map((item, i) => {
                            return (
                              <React.Fragment key={i}>
                                <option value={i + 1}>{item.brand}</option>
                              </React.Fragment>
                            );
                          })}
                        </Form.Select>
                      </div> */}
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
                      {submitError === "empty" ? (
                        <span className="text-danger">
                          Please search any field
                        </span>
                      ) : null}
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
                      <div className="col-md-2 col-sm-6 aos_input mb-2 ">
                        <Button
                          className="button btn-success  main_button w-100"
                          onClick={() => handleShow("add")}
                        >
                          Add product
                        </Button>
                      </div>
                    </div>
                    <DataTable
                      title="Product Data"
                      columns={columns}
                      data={productTable}
                      keyField="id"
                      pagination
                      pointerOnHover
                      className=""
                      subHeader
                      style={{ tr: { backgroundColor: "transparent" } }}
                    />
                    {/* <table class=" table_body product_table">
                      <thead>
                        <tr>
                          <th className="text-white"> #</th>
                          <th className="text-white"> Image</th>
                          <th name="sort by Product Name">
                            <Link className="text-white" to="" onClick={() => handleSort()}> Product Name </Link>
                          </th>
                          <th name="sort by Price">
                            <Link className="text-white" to="" onClick={() => handleSort()}> Price</Link>
                          </th>
                          <th name="sort by Tax">
                            <Link className="text-white" to="" onClick={() => handleSort()}> Tax</Link>
                          </th>
                          <th name="sort by Unit">
                            <Link className="text-white" to="" onClick={() => handleSort()}> Unit</Link>
                          </th>
                          <th name="sort by Stock">
                            <Link className="text-white" to="" onClick={() => handleSort()}> Stock</Link>
                          </th>
                          <th name="sort by Rating">
                            <Link className="text-white" to="" onClick={() => handleSort()}> Rating</Link>
                          </th>
                          <th className="text-white"> Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(productTable || []).map((item, index) => (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                              <Link to=""><img
                                alt={item.seo_tag}
                                src={
                                  item.cover_image
                                    ? item.cover_image
                                    : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                                }
                                style={{
                                  padding: 10,
                                  textAlign: "right",
                                  maxHeight: "100px",
                                  maxWidth: "100px",
                                }}
                              />
                              </Link>
                            </td>
                            <td>
                              <b>Name:</b>{" "}
                              {item.name ? item.name.charAt(0).toUpperCase() + item.name.slice(1) : ""}
                              <br />
                              <b>Brand:</b>{" "}
                              {item.brand ? item.brand.charAt(0).toUpperCase() + item.brand.slice(1) : ""}
                              <br />
                              <b>Category:</b>{" "}
                              {item.category ? item.category.charAt(0).toUpperCase() + item.category.slice(1) : ""}
                            </td>
                            <td>
                              <b>Price :</b> {item.price} <br />
                              <b>MRP : </b> {item.mrp}
                              <br />
                            </td>
                            <td>
                              <b>GST :</b> {item.gst} % <br />
                              <b>SGST : </b> {item.sgst}%<br />
                              <b>CGST : </b> {item.cgst}%
                            </td>
                            <td>
                              <span>
                                <b>Unit Qty :</b> {item.quantity} <br />
                                <b>Unit : </b> {item.unit}
                                <br />
                              </span>
                            </td>
                            <td>
                              <span
                                className={
                                  item.product_stock_quantity === 0 ? "badge bg-danger" : null
                                }
                              >
                                {item.product_stock_quantity === 0
                                  ? "Out of Stock"
                                  : item.product_stock_quantity}
                              </span>
                            </td>
                            <td> {item.rating}</td>
                            <td>
                              <div className={"actioncolimn"}>
                                <Button
            size="sm"
            onClick={handlevarietyShow.bind(
              this,
              item.id,
              item.vendor_id,
              item.description
            )}
          >
            Add Images
          </Button>
                                <Button
                                  size="sm"
                                  className="btn-info mx-2"
                                  onClick={AddVarientModal.bind(
                                    this,
                                    item.id,
                                    item.vendor_id,
                                  )}
                                >
                                  Add variant
                                </Button>
                                <Button
                                  className="btn-warning mx-2"
                                  onClick={handleEditShow.bind(this, item.id, item.vendor_id,)}
                                >
                                  {" "}
                                  <BiEdit />
                                </Button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={handleAlert.bind(this, item.id)}
                                >
                                  <BsTrash />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}

                      </tbody>
                    </table> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for add product */}
      {modalshow ? (
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
      ) : null}

      {/* Modal for add product Varient */}
      {varientModalShow ? (
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
      ) : null}
      {varientModalListShow ? (
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
      ) : null}

      {/* Add images model */}
      <AddIVarientImage
        show={docsshow}
        close={() => setDocsShow(false)}
        ok={() => {
          setApicall(true);
          setDocsShow(false);
        }}
        id={productID}
        varId={productVarientId}
        des={productDescription}
        vendor_id={vendorID}
      />

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
        onConfirm={() => {
          setProductVarientAlert(false);
          setApicall(true);
        }}
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
        onConfirm={() => {
          setupdateProductVarientAlert(false);
          setApicall(true);
        }}
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
