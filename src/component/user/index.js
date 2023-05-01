// import React, { Children } from "react";
import React, { Component } from "react";
import img1 from "../css-js/images/home/index/01.png";
import img2 from "../css-js/images/home/index/02.png";
import product from "../css-js/images/product/01.jpg";
import blog from "../css-js/images/blog/01.jpg";
import ProductBox from "./productBox";
import { useEffect, useState } from "react";
import {
  user_home_api,
  add_to_cart_api,
  update_to_cart_api,
  cart_delete_api,
} from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import Header from "../common/header";
import Footer from "../common/footer";

const Index = () => {
  const [productData, setProductData] = useState();
  const [reload, setReload] = useState("");
  const navigate = useNavigate();
  async function call_api() {
    let result_all = await user_home_api({
      price_from: "",
      price_to: "",
      search: "",
      category: [],
      rating: [],
      brand: [],
      seo_tag: [],
      vendor_id: [],
      id: [],
    });
    let result = result_all["results"];
    console.log("__________________________________user___home___api");
    console.log(result);
    setProductData(result);
  }

  useEffect(() => {
    call_api();
  }, [reload]);

  async function cart_update_function(cart_count, product_id) {
    console.log("child_data____________________________27");
    console.log(product_id);
    let token = localStorage.getItem("user_token");

    if (token !== "" && token !== null && token !== undefined) {
      alert("User logged in");
      let cart_product_quantity = 1;
      let result = await add_to_cart_api([
        { product_id, cart_product_quantity },
        { headers: { user_token: `${token}` } },
      ]);
      console.log(result.success);
      if (result.success === true) {
        setReload(Math.floor(Math.random() * 500 + 1));
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
          setReload(Math.floor(Math.random() * 500 + 1));
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
          setReload(Math.floor(Math.random() * 500 + 1));
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
      <Header />
      {/* <section className="home-index-slider slider-arrow slider-dots">
        <div className="banner-part banner-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6">
                <div className="banner-content">
                  <h1>free home delivery within 24 hours now.</h1>
                  <p>
                    Lorem ipsum dolor consectetur adipisicing elit modi
                    consequatur eaque expedita porro necessitatibus eveniet
                    voluptatum quis pariatur Laboriosam molestiae architecto
                    excepturi
                  </p>
                  <div className="banner-btn">
                    <Link className="btn btn-inline" to="">
                      <i className="fas fa-shopping-basket"></i>
                      <span>shop now</span>
                    </Link>
                    <Link className="btn btn-outline" to="">
                      <i className="icofont-sale-discount"></i>
                      <span>get offer</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="banner-img">
                  <img src={img1} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-part banner-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-lg-6">
                <div className="banner-img">
                  <img src={img2} />
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div className="banner-content">
                  <h1>free home delivery within 24 hours now.</h1>
                  <p>
                    Lorem ipsum dolor consectetur adipisicing elit modi
                    consequatur eaque expedita porro necessitatibus eveniet
                    voluptatum quis pariatur Laboriosam molestiae architecto
                    excepturi
                  </p>
                  <div className="banner-btn">
                    <Link className="btn btn-inline" to="">
                      <i className="fas fa-shopping-basket"></i>
                      <span>shop now</span>
                    </Link>
                    <Link className="btn btn-outline" to="">
                      <i className="icofont-sale-discount"></i>
                      <span>get offer</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section suggest-part">
        <div className="container">
          <ul className="suggest-slider slider-arrow">
            <li>
              <Link className="suggest-card" to="">
                <img src="images/suggest/01.jpg" alt="suggest" />
                <h5>
                  vegetables <span>34 items</span>
                </h5>
              </Link>
            </li>
            <li>
              <Link className="suggest-card" to="">
                <img src="images/suggest/02.jpg" alt="suggest" />
                <h5>
                  fruits <span>89 items</span>
                </h5>
              </Link>
            </li>
            <li>
              <Link className="suggest-card" to="">
                <img src="images/suggest/03.jpg" alt="suggest" />
                <h5>
                  groceries <span>45 items</span>
                </h5>
              </Link>
            </li>
            <li>
              <Link className="suggest-card" to="">
                <img src="images/suggest/04.jpg" alt="suggest" />
                <h5>
                  dairy farm <span>83 items</span>
                </h5>
              </Link>
            </li>
            <li>
              <Link className="suggest-card" to="">
                <img src="images/suggest/05.jpg" alt="suggest" />
                <h5>
                  sea foods <span>40 items</span>
                </h5>
              </Link>
            </li>
            <li>
              <Link className="suggest-card" to="">
                <img src="images/suggest/06.jpg" alt="suggest" />
                <h5>
                  vegan foods <span>57 items</span>
                </h5>
              </Link>
            </li>
            <li>
              <Link className="suggest-card" to="">
                <img src="images/suggest/07.jpg" alt="suggest" />
                <h5>
                  dry foods <span>23 items</span>
                </h5>
              </Link>
            </li>
            <li>
              <Link className="suggest-card" to="">
                <img src="images/suggest/08.jpg" alt="suggest" />
                <h5>
                  fast foods <span>97 items</span>
                </h5>
              </Link>
            </li>
          </ul>
        </div>
      </section> */}
      <section className="section recent-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>recently sold items</h2>
              </div>
            </div>
          </div>

          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {(productData || []).map((product) => {
              return (
                <>
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
                    incrementDecrementCount={incrementDecrementCount_function}
                  />
                </>
              );
            })}

            {/* ProductBox add by map_______________<ProductBox/>__________________________________________________________________158 */}

            {/* <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="product-image" to="" >
                    <img src={product} alrt="product" />
                  </Link>
                  <div className="product-widget">
                    <Link 
                      title="Product Compare"
                      to="" 
                      className="fas fa-random"
                    ></Link>
                    <Link 
                      title="Product Video"
                      to="" 
                      className="venobox fas fa-play"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></Link>
                    <Link 
                      title="Product View"
                      to="" 
                      className="fas fa-eye"
                      data-bs-toggle="modal"
                      data-bs-target="#product-view"
                    ></Link>
                  </div>
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3)</Link>
                  </div>
                  <h6 className="product-name">
                    <Link to="" >fresh green chilis</Link>
                  </h6>
                  <h6 className="product-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <button className="product-add" title="Add to Cart">
                    <i className="fas fa-shopping-basket"></i>
                    <span>add</span>
                  </button>
                  <div className="product-action">
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                    <label className="label-text new">new</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="product-image" to="" >
                    <img src={product} alrt="" alt="product" />
                  </Link>
                  <div className="product-widget">
                    <Link 
                      title="Product Compare"
                      to="" 
                      className="fas fa-random"
                    ></Link>
                    <Link 
                      title="Product Video"
                      to="" 
                      className="venobox fas fa-play"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></Link>
                    <Link 
                      title="Product View"
                      to="" 
                      className="fas fa-eye"
                      data-bs-toggle="modal"
                      data-bs-target="#product-view"
                    ></Link>
                  </div>
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3)</Link>
                  </div>
                  <h6 className="product-name">
                    <Link to="" >fresh green chilis</Link>
                  </h6>
                  <h6 className="product-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <button className="product-add" title="Add to Cart">
                    <i className="fas fa-shopping-basket"></i>
                    <span>add</span>
                  </button>
                  <div className="product-action">
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="product-image" to="" >
                    <img src={product} alrt="" alt="product" />
                  </Link>
                  <div className="product-widget">
                    <Link 
                      title="Product Compare"
                      to="" 
                      className="fas fa-random"
                    ></Link>
                    <Link 
                      title="Product Video"
                      to="" 
                      className="venobox fas fa-play"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></Link>
                    <Link 
                      title="Product View"
                      to="" 
                      className="fas fa-eye"
                      data-bs-toggle="modal"
                      data-bs-target="#product-view"
                    ></Link>
                  </div>
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3)</Link>
                  </div>
                  <h6 className="product-name">
                    <Link to="" >fresh green chilis</Link>
                  </h6>
                  <h6 className="product-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <button className="product-add" title="Add to Cart">
                    <i className="fas fa-shopping-basket"></i>
                    <span>add</span>
                  </button>
                  <div className="product-action">
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="product-image" to="" >
                    <img src={product} alrt="" alt="product" />
                  </Link>
                  <div className="product-widget">
                    <Link 
                      title="Product Compare"
                      to="" 
                      className="fas fa-random"
                    ></Link>
                    <Link 
                      title="Product Video"
                      to="" 
                      className="venobox fas fa-play"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></Link>
                    <Link 
                      title="Product View"
                      to="" 
                      className="fas fa-eye"
                      data-bs-toggle="modal"
                      data-bs-target="#product-view"
                    ></Link>
                  </div>
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3)</Link>
                  </div>
                  <h6 className="product-name">
                    <Link to="" >fresh green chilis</Link>
                  </h6>
                  <h6 className="product-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <button className="product-add" title="Add to Cart">
                    <i className="fas fa-shopping-basket"></i>
                    <span>add</span>
                  </button>
                  <div className="product-action">
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="product-image" to="" >
                    <img src={product} alrt="" alt="product" />
                  </Link>
                  <div className="product-widget">
                    <Link 
                      title="Product Compare"
                      to="" 
                      className="fas fa-random"
                    ></Link>
                    <Link 
                      title="Product Video"
                      to="" 
                      className="venobox fas fa-play"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></Link>
                    <Link 
                      title="Product View"
                      to="" 
                      className="fas fa-eye"
                      data-bs-toggle="modal"
                      data-bs-target="#product-view"
                    ></Link>
                  </div>
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3)</Link>
                  </div>
                  <h6 className="product-name">
                    <Link to="" >fresh green chilis</Link>
                  </h6>
                  <h6 className="product-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <button className="product-add" title="Add to Cart">
                    <i className="fas fa-shopping-basket"></i>
                    <span>add</span>
                  </button>
                  <div className="product-action">
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="product-image" to="" >
                    <img src={product} alrt="" alt="product" />
                  </Link>
                  <div className="product-widget">
                    <Link 
                      title="Product Compare"
                      to="" 
                      className="fas fa-random"
                    ></Link>
                    <Link 
                      title="Product Video"
                      to="" 
                      className="venobox fas fa-play"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></Link>
                    <Link 
                      title="Product View"
                      to="" 
                      className="fas fa-eye"
                      data-bs-toggle="modal"
                      data-bs-target="#product-view"
                    ></Link>
                  </div>
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3)</Link>
                  </div>
                  <h6 className="product-name">
                    <Link to="" >fresh green chilis</Link>
                  </h6>
                  <h6 className="product-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <button className="product-add" title="Add to Cart">
                    <i className="fas fa-shopping-basket"></i>
                    <span>add</span>
                  </button>
                  <div className="product-action">
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="product-image" to="" >
                    <img src={product} alrt="" alt="product" />
                  </Link>
                  <div className="product-widget">
                    <Link 
                      title="Product Compare"
                      to="" 
                      className="fas fa-random"
                    ></Link>
                    <Link 
                      title="Product Video"
                      to="" 
                      className="venobox fas fa-play"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></Link>
                    <Link 
                      title="Product View"
                      to="" 
                      className="fas fa-eye"
                      data-bs-toggle="modal"
                      data-bs-target="#product-view"
                    ></Link>
                  </div>
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3)</Link>
                  </div>
                  <h6 className="product-name">
                    <Link to="" >fresh green chilis</Link>
                  </h6>
                  <h6 className="product-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <button className="product-add" title="Add to Cart">
                    <i className="fas fa-shopping-basket"></i>
                    <span>add</span>
                  </button>
                  <div className="product-action">
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="product-image" to="" >
                    <img src={product} alrt="" alt="product" />
                  </Link>
                  <div className="product-widget">
                    <Link 
                      title="Product Compare"
                      to="" 
                      className="fas fa-random"
                    ></Link>
                    <Link 
                      title="Product Video"
                      to="" 
                      className="venobox fas fa-play"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></Link>
                    <Link 
                      title="Product View"
                      to="" 
                      className="fas fa-eye"
                      data-bs-toggle="modal"
                      data-bs-target="#product-view"
                    ></Link>
                  </div>
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3)</Link>
                  </div>
                  <h6 className="product-name">
                    <Link to="" >fresh green chilis</Link>
                  </h6>
                  <h6 className="product-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <button className="product-add" title="Add to Cart">
                    <i className="fas fa-shopping-basket"></i>
                    <span>add</span>
                  </button>
                  <div className="product-action">
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="product-image" to="" >
                    <img src={product} alrt="" alt="product" />
                  </Link>
                  <div className="product-widget">
                    <Link 
                      title="Product Compare"
                      to="" 
                      className="fas fa-random"
                    ></Link>
                    <Link 
                      title="Product Video"
                      to="" 
                      className="venobox fas fa-play"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></Link>
                    <Link 
                      title="Product View"
                      to="" 
                      className="fas fa-eye"
                      data-bs-toggle="modal"
                      data-bs-target="#product-view"
                    ></Link>
                  </div>
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3)</Link>
                  </div>
                  <h6 className="product-name">
                    <Link to="" >fresh green chilis</Link>
                  </h6>
                  <h6 className="product-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <button className="product-add" title="Add to Cart">
                    <i className="fas fa-shopping-basket"></i>
                    <span>add</span>
                  </button>
                  <div className="product-action">
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text sale">sale</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="product-image" to="" >
                    <img src={product} alrt="" alt="product" />
                  </Link>
                  <div className="product-widget">
                    <Link 
                      title="Product Compare"
                      to="" 
                      className="fas fa-random"
                    ></Link>
                    <Link 
                      title="Product Video"
                      to="" 
                      className="venobox fas fa-play"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></Link>
                    <Link 
                      title="Product View"
                      to="" 
                      className="fas fa-eye"
                      data-bs-toggle="modal"
                      data-bs-target="#product-view"
                    ></Link>
                  </div>
                </div>
                <div className="product-content">
                  <div className="product-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3)</Link>
                  </div>
                  <h6 className="product-name">
                    <Link to="" >fresh green chilis</Link>
                  </h6>
                  <h6 className="product-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <button className="product-add" title="Add to Cart">
                    <i className="fas fa-shopping-basket"></i>
                    <span>add</span>
                  </button>
                  <div className="product-action">
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="section-btn-25">
                <Link to="">
                  <i className="fas fa-eye"></i>
                  <span>show more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
