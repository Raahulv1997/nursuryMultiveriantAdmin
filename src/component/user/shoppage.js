import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  add_to_cart_api,
  allproduct,
  allShortfilerProduct,
  cart_delete_api,
  fetchfilter,
  update_to_cart_api,
} from "../api/api";

// import Filters from "./Filters";
import Filters1 from "./Filters1";
import ProductBox from "./productBox";
import Header from "../common/header";
import Footer from "../common/footer";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
const ShopPage = () => {
  const [ShowAlert, setShowAlert] = useState(false);
  const [filterapicall, setfilerapicall] = useState(false);
  const navigate = useNavigate();
  const [recordCount, setrecordCount] = useState("");
  const [ratingg, setRatingg] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [update, setUpdate] = useState("");
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");

  const [productData, setProductData] = useState([]);
  const [searchbox, setSearchBox] = useState("");
  const [apicall, setapicall] = useState(false);
  const [searchparams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(0);
  const [recordsPerPage, setRecordPerpage] = useState(12);

  const [rating, setRating] = useState([]);

  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);

  let [page, setPage] = useState([]);
  /*<-----Pagination Calculator----> */
  const indexOfLastRecord = currentPage * recordsPerPage;
  // console.log("indexOfLastRecord---" + indexOfLastRecord);
  // console.log(indexOfLastRecord);
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // console.log("indexOfFirstRecord---" + indexOfFirstRecord);
  // console.log("product data---" + JSON.stringify(productData));

  const currentRecords = productData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(recordCount / recordsPerPage);
  // console.log("npage--" + nPages);

  // calback function for rating
  const handleClick = (num, str) => {
    // console.log("filter array--" + num, " ----" + str);
    if (str === "rating") {
      setRating(num);
      setBrand([]);
      setCategory([]);
    }
    if (str === "brand") {
      setBrand(num);
      setRating([]);
      setCategory([]);
    }

    if (str === "category") {
      setCategory(num);
      setBrand([]);
      setRating([]);
    }
    if (str === "Pricereset") {
      setapicall(num);
      // setapicall(false);
    }

    if (str === "ratingReset") {
      // alert("yes");
      setapicall(true);
    }

    setapicall(true);
    // 👇️ take the parameter passed from the Child component
  };
  useEffect(() => {
    fetchProductData();
  }, [
    apicall,
    searchbox,
    fromPrice,
    toPrice,
    // price,
    // name,
    rating,
    brand,
    category,
    currentPage,
    recordsPerPage,
  ]);

  useEffect(() => {
    if (
      searchparams.get("search") === null ||
      searchparams.get("search") === "" ||
      searchparams.get("search") === undefined
    ) {
      setSearchBox("");
    } else {
      // console.log("searchparams.get--" + searchparams.get("search"));
      setSearchBox(searchparams.get("search"));
    }

    if (
      searchparams.get("Fromprice") === null ||
      searchparams.get("Fromprice") === "" ||
      searchparams.get("Fromprice") === undefined
    ) {
      setFromPrice("");
    } else {
      setFromPrice(searchparams.get("Fromprice"));
    }

    if (
      searchparams.get("Toprice") === null ||
      searchparams.get("Toprice") === "" ||
      searchparams.get("Toprice") === undefined
    ) {
      setToPrice("");
    } else {
      setToPrice(searchparams.get("Toprice"));
      // setapicall(true);
    }
  }, [searchbox, searchparams, fromPrice, toPrice]);

  const fetchProductData = async () => {
    const data = await allproduct(
      searchbox,
      fromPrice,
      toPrice,
      // price,
      // name,
      rating,
      brand,
      category,
      currentPage,
      recordsPerPage
    );
    // console.log("---" + JSON.stringify(data));
    if (data.error === "send only vendor, user, admin token") {
      setProductData([]);
    } else {
      const { pagination } = data;
      setrecordCount(pagination.count_rows);
      console.log("ddddd-" + JSON.stringify(pagination.count_rows));
      setProductData(data.results);
    }
    // console.log("all--" + JSON.stringify(data));

    setapicall(false);
    // setRating(num);
  };

  useEffect(() => {
    allgetsortFilter();
  }, [
    filterapicall,
    ratingg,
    name,
    price,
    update,
    currentPage,
    recordsPerPage,
  ]);

  const allgetsortFilter = async () => {
    const response = await allShortfilerProduct(
      ratingg,
      name,
      price,
      update,
      currentPage,
      recordsPerPage
    );
    setProductData(response.results);
    console.log("data-------" + JSON.stringify(response));
    setfilerapicall(true);
  };
  console.log("n page--" + nPages);
  useEffect(() => {
    let pages = [];
    for (let i = 0; i < nPages; i++) {
      pages.push(i);
    }
    setPage(pages);
  }, [productData]);

  console.log("pageArray" + page);
  const CurrentpageSeting = (item) => {
    // alert(item);
    setCurrentPage(item);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);

    setapicall(true);
  };

  //Function to go to previous page with pagination :-
  const prevPage = () => {
    if (currentPage !== 0) setCurrentPage(currentPage - 1);
    setapicall(true);
  };

  async function cart_update_function(cart_count, product_id) {
    let token = localStorage.getItem("user_token");

    if (token !== "" && token !== null && token !== undefined) {
      let cart_product_quantity = 1;
      let result = await add_to_cart_api([
        { product_id, cart_product_quantity },
        { headers: { user_token: `${token}` } },
      ]);

      if (result.success === true) {
        setapicall(true);
      } else {
      }
    } else {
      setShowAlert(true);
    }
  }

  async function incrementDecrementCount_function(
    chk_p_m,
    cart_count,
    product_id
  ) {
    let cart_product_quantity;
    let token = localStorage.getItem("user_token");
    if (chk_p_m === "1") {
      cart_product_quantity = parseInt(cart_count) + 1;
    }
    if (chk_p_m === "0") {
      cart_product_quantity = parseInt(cart_count) - 1;
    }

    if (token !== "" && token !== null && token !== undefined) {
      if (cart_product_quantity < 1) {
        let result = await cart_delete_api([
          { product_id, cart_product_quantity },
          { headers: { user_token: `${token}` } },
        ]);
        console.log(result);
        if (result.success === true) {
          setapicall(true);
        } else {
          alert(result.success);
        }
      } else {
        let result = await update_to_cart_api([
          { product_id, cart_product_quantity },
          { headers: { user_token: `${token}` } },
        ]);
        // console.log(result);
        if (result.success === true) {
          setapicall(true);
        } else {
          alert(result.success);
        }
      }
    } else {
      setShowAlert(true);
      // alert("please login your account");
      // navigate("/login");
    }
  }

  const onCloseAlert = () => {
    return Promise.resolve(setShowAlert(false));
  };

  const onProductShowChnge = (e) => {
    setRecordPerpage(e.target.value);
  };

  const onShoringfilter = async (e) => {
    let value = Number(e.target.value);

    if (value === 1) {
      setRatingg("DESC");
      setName("");
      setPrice("");
      setUpdate("");
      setfilerapicall(true);
    }

    if (value === 2) {
      setName("DESC");
      setRatingg("");
      setPrice("");
      setUpdate("");
      setfilerapicall(true);
    }
    if (value === 3) {
      setPrice("DESC");
      setName("");
      setRatingg("");
      setUpdate("");
      setfilerapicall(true);
    }

    if (value === 4) {
      setUpdate("DESC");
      setPrice("");
      setName("");
      setRatingg("");
      setfilerapicall(true);
    }
  };
  return (
    <div>
      <SweetAlert
        show={ShowAlert}
        title="Login Message"
        text={"Please login Your account"}
        onConfirm={() =>
          onCloseAlert().then(() => {
            navigate("/login");
          })
        }
      />
      <Header />
      <section
        className="inner-section single-banner"
        //   style="background: url(images/single-banner.jpg) no-repeat center"
      >
        <div className="container">
          <h2>Shop</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              shop
            </li>
          </ol>
        </div>
      </section>
      <section className="inner-section shop-part">
        <div className="container">
          <div className="row content-reverse">
            <Filters1 handleClick={handleClick} />
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-12">
                  <div className="top-filter">
                    <div className="filter-short">
                      <label className="filter-label">Show :</label>
                      <select
                        className="form-select filter-select"
                        onChange={(e) => onProductShowChnge(e)}
                      >
                        {/* <option selected>Select</option> */}
                        <option value="12">12</option>
                        <option value="24">24</option>
                        <option value="36">36</option>
                        <option value="48">48</option>
                        <option value={recordCount}>All</option>
                      </select>
                    </div>
                    <div className="filter-short">
                      <label className="filter-label">Short by :</label>
                      <select
                        className="form-select filter-select"
                        onChange={(e) => {
                          onShoringfilter(e);
                        }}
                      >
                        <option selected>Featured</option>
                        <option value={1}>Trending</option>
                        <option value={2}>Name wise</option>
                        <option value={3}>Price wise</option>
                        <option value={4}>Latest First</option>
                      </select>
                    </div>
                    {/* <div className="filter-action">
                      <Link to="shop-3column.html" title="Three Column">
                        <i className="fas fa-th"></i>
                      </Link>
                      <Link to="shop-2column.html" title="Two Column">
                        <i className="fas fa-th-large"></i>
                      </Link>
                      <Link to="shop-1column.html" title="One Column">
                        <i className="fas fa-th-list"></i>
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="row">
                {productData.map((product) => {
                  return (
                    <>
                      {/* <div className="row"> */}
                      <ProductBox
                        name={product.name}
                        image={
                          product.cover_image !== null
                            ? product.cover_image
                            : "https://picsum.photos/300"
                        }
                        discount={product.discount}
                        mrp={product.mrp}
                        price={product.price}
                        unit={product.unit}
                        rating={product.rating}
                        product_stock_quantity={product.product_stock_quantity}
                        cart_count={product.cart_count}
                        product_id={product.id}
                        cart_update_fun={cart_update_function}
                        incrementDecrementCount={
                          incrementDecrementCount_function
                        }
                      />
                      {/* </div> */}
                    </>
                  );
                })}
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="bottom-paginate">
                    <p className="page-info">
                      Showing {productData.length} of {recordCount} Results
                    </p>
                    <ul className="pagination">
                      <li className="page-item">
                        <Link className="page-link" onClick={prevPage} to="">
                          <i className="fas fa-long-arrow-alt-left"></i>
                        </Link>
                      </li>
                      {page.map((item) => {
                        // console.log(" total-page-----" + JSON.stringify(page));
                        return (
                          <>
                            <li className="page-item">
                              <Link
                                className={`page-link ${
                                  currentPage == item
                                    ? "active "
                                    : "text-success"
                                }`}
                                to=""
                                onClick={() => CurrentpageSeting(item)}
                              >
                                {item + 1}
                              </Link>
                            </li>
                          </>
                        );
                      })}

                      <li className="page-item">...</li>

                      <li className="page-item">
                        <Link
                          className={
                            currentPage === nPages.length - 1
                              ? "page-link d-none text-success"
                              : "page-link text-success"
                          }
                          onClick={nextPage}
                          to=""
                        >
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ShopPage;
