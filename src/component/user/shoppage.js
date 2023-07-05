import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { allproduct } from "../api/api";

// import Filters from "./Filters";
import Filters1 from "./Filters1";
import ProductBox from "./productBox";
import Header from "../common/header";
import Footer from "../common/footer";
import Loader from "../common/loader";

const ShopPage = () => {
  const [showfilter, setShowfilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cartqty, setCartQty] = useState(false);
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

  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  productData.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(recordCount / recordsPerPage);

  // calback function for rating
  const handleClick = (num, str) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    apicall,
    searchbox,
    fromPrice,
    toPrice,
    ratingg,
    name,
    price,
    update,
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
    setLoading(true);
    const data = await allproduct(
      searchbox,
      fromPrice,
      toPrice,
      ratingg,
      name,
      price,
      update,

      rating,
      brand,
      category,
      currentPage,
      recordsPerPage
    );

    if (data.error === "send only vendor, user, admin token") {
      setProductData([]);
    } else {
      setLoading(false);

      const { pagination } = data;
      setrecordCount(pagination.count_rows);

      setProductData(data.results);
    }

    setapicall(false);

    // setRating(num);
  };

  useEffect(() => {
    let pages = [];
    for (let i = 0; i < nPages; i++) {
      pages.push(i);
    }
    setPage(pages);
  }, [productData, nPages]);

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
      setapicall(true);
    }

    if (value === 2) {
      setName("DESC");
      setRatingg("");
      setPrice("");
      setUpdate("");
      setapicall(true);
    }
    if (value === 3) {
      setPrice("DESC");
      setName("");
      setRatingg("");
      setUpdate("");
      setapicall(true);
    }

    if (value === 4) {
      setUpdate("DESC");
      setPrice("");
      setName("");
      setRatingg("");
      setapicall(true);
    }
  };

  const handleCallback = (childData) => {
    setCartQty(childData);
  };

  const onFilterClick = () => {
    setShowfilter(true);

    if (showfilter === true) {
      setShowfilter(false);
    }
  };

  return (
    <div>
      <Header
        cartqty={cartqty}
        setCartQty={setCartQty}
        // productapicall={apicall}
        setproductapicall={setapicall}
        onFilterClick={onFilterClick}
      />
      <section
        className="inner-section single-banner"
        //   style="background: url(images/single-banner.jpg) no-repeat center"
      >
        <div className="container">
          {loading === true ? <Loader /> : null}
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
            <Filters1
              handleClick={handleClick}
              showfilter={showfilter}
              setShowfilter={setShowfilter}
            />
            <div className="col-lg-8">
              <div className="row">
                <div className="col-lg-12">
                  {productData.length === 0 ? null : (
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
                          <option>Featured</option>
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
                  )}
                </div>
              </div>
              <div className="row">
                {productData.length !== 0 ? (
                  productData.map((product, i) => {
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
                          product_stock_quantity={
                            product.product_stock_quantity
                          }
                          cart_count={product.cart_count}
                          product_id={product.id}
                          productapicall={apicall}
                          setproductapicall={setapicall}
                          parentCallback={handleCallback}
                          keyprop={i}
                        />
                        {/* </div> */}
                      </>
                    );
                  })
                ) : (
                  <h1 className="noRecord">No record Found</h1>
                )}
              </div>
              {productData.length !== 0 ? (
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
                        {page.map((item, i) => {
                          return (
                            <>
                              <li className="page-item" key={i}>
                                <Link
                                  className={`page-link ${
                                    currentPage === item
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
              ) : null}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ShopPage;
