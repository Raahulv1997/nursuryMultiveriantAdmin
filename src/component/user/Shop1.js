import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  add_to_cart_api,
  allproduct,
  cart_delete_api,
  fetchfilter,
  update_to_cart_api,
} from "../api/api";

// import Filters from "./Filters";
import Filters1 from "./Filters1";
import ProductBox from "./productBox";

const Shop1 = () => {
  const [reload, setReload] = useState("");
  const navigate = useNavigate();

  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");

  const [productData, setProductData] = useState([]);
  const [searchbox, setSearchBox] = useState("");
  const [apicall, setapicall] = useState(false);
  const [searchparams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(0);
  const [recordsPerPage] = useState(3);

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
  // console.log("current record--" + productData.length);
  const nPages = Math.ceil(productData.length / recordsPerPage);
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
      rating,
      brand,
      category,
      currentPage,
      recordsPerPage
    );
    console.log("---" + JSON.stringify(data));
    if (data.error === "send only vendor, user, admin token") {
      setProductData([]);
    } else {
      setProductData(data.results);
    }
    // console.log("all--" + JSON.stringify(data));

    setapicall(false);
    // setRating(num);
  };

  useEffect(() => {
    let pages = [];
    for (let i = 0; i < nPages; i++) {
      pages.push(i);
    }
    setPage(pages);
  }, [productData]);

  const CurrentpageSeting = (item) => {
    // alert(item);
    setCurrentPage(item);
  };

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
    setapicall(true);
  };

  //Function to go to previous page with pagination :-
  const prevPage = () => {
    if (currentPage !== 0) setCurrentPage(currentPage - 1);
    setapicall(true);
  };

  async function cart_update_function(cart_count, product_id) {
    console.log("cart--" + cart_count);
    console.log("product id--" + product_id);

    let token = localStorage.getItem("user_token");

    if (token !== "" && token !== null && token !== undefined) {
      alert("user Logged in");
      let cart_product_quantity = 1;
      let result = await add_to_cart_api([
        { product_id, cart_product_quantity },
        { headers: { user_token: `${token}` } },
      ]);
      console.log(result.success);
      if (result.success === true) {
        setapicall(true);
      } else {
      }
    } else {
      alert("please login your account");
      navigate("/login");
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
        console.log(result);
        if (result.success === true) {
          setapicall(true);
        } else {
          alert(result.success);
        }
      }
    } else {
      alert("please login your account");
      navigate("/login");
    }
  }

  return (
    <div>
      <section
        className="inner-section single-banner"
        //   style="background: url(images/single-banner.jpg) no-repeat center"
      >
        <div className="container">
          <h2>Shop 4 Column</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              shop-4column
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
                    <div className="filter-show">
                      <label className="filter-label">Show :</label>
                      <select className="form-select filter-select">
                        <option>{productData.length}</option>
                      </select>
                    </div>
                    <div className="filter-short">
                      <label className="filter-label">Short by :</label>
                      <select className="form-select filter-select">
                        <option selected>default</option>
                        <option value="3">trending</option>
                        <option value="1">featured</option>
                        <option value="2">recommend</option>
                      </select>
                    </div>
                    <div className="filter-action">
                      <a href="shop-3column.html" title="Three Column">
                        <i className="fas fa-th"></i>
                      </a>
                      <a href="shop-2column.html" title="Two Column">
                        <i className="fas fa-th-large"></i>
                      </a>
                      <a href="shop-1column.html" title="One Column">
                        <i className="fas fa-th-list"></i>
                      </a>
                    </div>
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
                      Showing {productData.length} of 60 Results
                    </p>
                    <ul className="pagination">
                      <li className="page-item">
                        <Link className="page-link" onClick={prevPage} to="">
                          <i className="fas fa-long-arrow-alt-left"></i>
                        </Link>
                      </li>
                      {page.map((item) => {
                        console.log(" total-page-----" + JSON.stringify(page));
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
    </div>
  );
};

export default Shop1;
