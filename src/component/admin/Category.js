import React, { useEffect, useState } from 'react'
import Sidebar from "../common/sidebar";
import Loader from "../common/loader";
import { Button } from "react-bootstrap";
import { GetCategoryList } from "../api/api"
// import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import DataTable from "react-data-table-component";
import AddCategoryModal from './Modal/AddCategoryModal';
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";

export default function Category() {
  const [loading, setLoading] = useState(true)
  const [CateData, setCateData] = useState([])
  const [apicall, setApiCall] = useState(false)
  const [showCateModal, setShowCateModal] = useState(false)
  const [cateType, setCateType] = useState(false)
  const [CateAlert, setCateAlert] = useState(false)
  const [CateId, setCateId] = useState()
  /*Function to get the category list */
  const GetCateData = async () => {
    let response = await GetCategoryList()

    if (response.status === true) {
      setCateData(response.response)
      setLoading(false)
    }
  }
  /*Render method to get the category list */
  useEffect(() => {
    GetCateData()
  }, [apicall])

  /*Function to get the data just by parent */
  const parentCategories = CateData.filter(
    (category) => category.parent_id === 0
  );
  /*Column data for the table */
  const columns = [
    {
      name: "Image",
      width: "100px",
      center: true,
      cell: (row) => (
        <>
          {/* <p onClick={onProductClick.bind(this, [row.id])}> */}
          <img
            alt={"apna_organic"}
            src={
              row.image
                ? row.image
                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            }
            style={{
              padding: 10,
              textAlign: "right",
              maxHeight: "100px",
              maxWidth: "100px",
            }}
          />
          {/* </p> */}
        </>
      ),
    },
    {
      name: "Category Name",
      selector: (row) => (
        <span>
          {row.category_name ? row.category_name.charAt(0).toUpperCase() + row.category_name.slice(1) : ""}
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
      name: "Category Type ",
      selector: (row) => (
        <span>
          {row.category_type ? row.category_type.charAt(0).toUpperCase() + row.category_type.slice(1) : ""}        </span>
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
      name: "level",
      selector: (row) => (
        <span>
          {row.level}
        </span>
      ),
      sortable: true,
      width: "100px",
      center: true,
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
          <Button
            className="btn-warning mx-2"
            onClick={EditCategoryModal.bind(this, row.id,)}
          >
            {" "}
            <BiEdit />
          </Button>
          {/* <button
            type="button"
            className="btn btn-danger"
            onClick={HandelDeletAlert.bind(this, row.id)}
          >
            <BsTrash />
          </button> */}
        </div>
      ),
    },
  ];
  /*Function to open delete alert */
  // const HandelDeletAlert = () => {

  // }
  /*Function to Edit Category */
  const EditCategoryModal = (id) => {
    setCateId(id)
    setShowCateModal(true)
    setCateType("")
  }
  /*Function to add category */
  const OpenAddCategoryModal = () => {
    setShowCateModal(true)
    setCateType("add")
    setCateId()
  }
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
              {loading === true ? <Loader /> : null}
              <div className="">
                <div className="page_main_contant">
                  <h4>Product Category</h4>
                  <div className=" mt-3 p-3">
                    <div className="row pb-3">
                      {/* <div className="col-md-3 col-sm-6 aos_input mb-2">
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
                      </div> */}
                      <div className="col-md-2 col-sm-6 aos_input mb-2 ">
                        <Button
                          className="button btn-success  main_button w-100"
                          onClick={() => OpenAddCategoryModal("add")}
                        >
                          Add Category
                        </Button>
                      </div>
                    </div>
                    <DataTable
                      columns={columns}
                      data={CateData}
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
      {showCateModal ? <AddCategoryModal
        show={showCateModal}
        close={() => setShowCateModal(false)}
        type={cateType}
        Parent={parentCategories}
        setApiCall={setApiCall}
        setCateAlert={setCateAlert}
        id={CateId} />
        : null}
      <SweetAlert
        show={CateAlert}
        title={cateType === "add" ? "Added Successfully" : "Updated Successfully"}
        text={cateType === "add" ? "Category Added" : "Category Update"}
        onConfirm={() => setCateAlert(false)} />
    </div>
  )
}
