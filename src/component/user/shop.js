import React from "react";
import { Link } from 'react-router-dom';
import product from "../css-js/images/product/01.jpg";
import shop_img from "../css-js/images/promo/shop/01.jpg";
const shop = () => {
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
              <Link to="" >Home</Link>
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
            <div className="col-lg-3">
              <div className="shop-widget-promo">
                <Link to="" >
                  <img src={shop_img} alt="promo" />
                </Link>
              </div>
              <div className="shop-widget">
                <h6 className="shop-widget-title">Filter by Price</h6>
                <form>
                  <div className="shop-widget-group">
                    <input type="text" placeholder="Min - 00" />
                    <input type="text" placeholder="Max - 5k" />
                  </div>
                  <button className="shop-widget-btn">
                    <i className="fas fa-search"></i>
                    <span>search</span>
                  </button>
                </form>
              </div>
              <div className="shop-widget">
                <h6 className="shop-widget-title">Filter by Rating</h6>
                <form>
                  <ul className="shop-widget-list">
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="feat1" />
                        <label for="feat1">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                        </label>
                      </div>
                      <span className="shop-widget-number">(13)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="feat2" />
                        <label for="feat2">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star"></i>
                        </label>
                      </div>
                      <span className="shop-widget-number">(28)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="feat3" />
                        <label for="feat3">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </label>
                      </div>
                      <span className="shop-widget-number">(35)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="feat4" />
                        <label for="feat4">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </label>
                      </div>
                      <span className="shop-widget-number">(47)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="feat5" />
                        <label for="feat5">
                          <i className="fas fa-star active"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </label>
                      </div>
                      <span className="shop-widget-number">(59)</span>
                    </li>
                  </ul>
                  <button className="shop-widget-btn">
                    <i className="far fa-trash-alt"></i>
                    <span>clear filter</span>
                  </button>
                </form>
              </div>
              <div className="shop-widget">
                <h6 className="shop-widget-title">Filter by Tag</h6>
                <form>
                  <ul className="shop-widget-list">
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="tag1" />
                        <label for="tag1">new items</label>
                      </div>
                      <span className="shop-widget-number">(13)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="tag2" />
                        <label for="tag2">sale items</label>
                      </div>
                      <span className="shop-widget-number">(28)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="tag3" />
                        <label for="tag3">rating items</label>
                      </div>
                      <span className="shop-widget-number">(35)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="tag4" />
                        <label for="tag4">feature items</label>
                      </div>
                      <span className="shop-widget-number">(47)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="tag5" />
                        <label for="tag5">discount items</label>
                      </div>
                      <span className="shop-widget-number">(59)</span>
                    </li>
                  </ul>
                  <button className="shop-widget-btn">
                    <i className="far fa-trash-alt"></i>
                    <span>clear filter</span>
                  </button>
                </form>
              </div>
              <div className="shop-widget">
                <h6 className="shop-widget-title">Filter by Brand</h6>
                <form>
                  <input
                    className="shop-widget-search"
                    type="text"
                    placeholder="Search..."
                  />
                  <ul className="shop-widget-list shop-widget-scroll">
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand1" />
                        <label for="brand1">mari gold</label>
                      </div>
                      <span className="shop-widget-number">(13)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand2" />
                        <label for="brand2">tredar</label>
                      </div>
                      <span className="shop-widget-number">(28)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand3" />
                        <label for="brand3">keya</label>
                      </div>
                      <span className="shop-widget-number">(35)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand4" />
                        <label for="brand4">diamond</label>
                      </div>
                      <span className="shop-widget-number">(47)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand5" />
                        <label for="brand5">lilly's</label>
                      </div>
                      <span className="shop-widget-number">(59)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand6" />
                        <label for="brand6">fremant</label>
                      </div>
                      <span className="shop-widget-number">(64)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand7" />
                        <label for="brand7">avocads</label>
                      </div>
                      <span className="shop-widget-number">(77)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand8" />
                        <label for="brand8">boroclas</label>
                      </div>
                      <span className="shop-widget-number">(85)</span>
                    </li>
                  </ul>
                  <button className="shop-widget-btn">
                    <i className="far fa-trash-alt"></i>
                    <span>clear filter</span>
                  </button>
                </form>
              </div>
              <div className="shop-widget">
                <h6 className="shop-widget-title">Filter by Category</h6>
                <form>
                  <input
                    className="shop-widget-search"
                    type="text"
                    placeholder="Search..."
                  />
                  <ul className="shop-widget-list shop-widget-scroll">
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate1" />
                        <label for="cate1">vegetables</label>
                      </div>
                      <span className="shop-widget-number">(13)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate2" />
                        <label for="cate2">groceries</label>
                      </div>
                      <span className="shop-widget-number">(28)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate3" />
                        <label for="cate3">fruits</label>
                      </div>
                      <span className="shop-widget-number">(35)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate4" />
                        <label for="cate4">dairy farm</label>
                      </div>
                      <span className="shop-widget-number">(47)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate5" />
                        <label for="cate5">sea foods</label>
                      </div>
                      <span className="shop-widget-number">(59)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate6" />
                        <label for="cate6">diet foods</label>
                      </div>
                      <span className="shop-widget-number">(64)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate7" />
                        <label for="cate7">dry foods</label>
                      </div>
                      <span className="shop-widget-number">(77)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate8" />
                        <label for="cate8">fast foods</label>
                      </div>
                      <span className="shop-widget-number">(85)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate9" />
                        <label for="cate9">drinks</label>
                      </div>
                      <span className="shop-widget-number">(92)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate10" />
                        <label for="cate10">coffee</label>
                      </div>
                      <span className="shop-widget-number">(21)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate11" />
                        <label for="cate11">meats</label>
                      </div>
                      <span className="shop-widget-number">(14)</span>
                    </li>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="cate12" />
                        <label for="cate12">fishes</label>
                      </div>
                      <span className="shop-widget-number">(56)</span>
                    </li>
                  </ul>
                  <button className="shop-widget-btn">
                    <i className="far fa-trash-alt"></i>
                    <span>clear filter</span>
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-12">
                  <div className="top-filter">
                    <div className="filter-show">
                      <label className="filter-label">Show :</label>
                      <select className="form-select filter-select">
                        <option value="1">12</option>
                        <option value="2">24</option>
                        <option value="3">36</option>
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
                      <Link to="" >
                        <i className="fas fa-th"></i>
                      </Link>
                      <Link to="" >
                        <i className="fas fa-th-large"></i>
                      </Link>
                      <Link to="" >
                        <i className="fas fa-th-list"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4">
                <div className="col">
                  <div className="product-card">
                    <div className="product-media">
                      <div className="product-label">
                        <label className="label-text new">new</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <img src={product} alt="product" />
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
                        <label className="label-text off">-10%</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <label className="label-text feat">feature</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <img src={product} alt="product" />
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
                        <label className="label-text off">-10%</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <label className="label-text feat">feature</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <label className="label-text new">new</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <label className="label-text off">-10%</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <label className="label-text feat">feature</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <label className="label-text new">new</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <img src={product} alt="product" />
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
                        <img src={product} alt="product" />
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
                        <label className="label-text feat">feature</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <label className="label-text off">-10%</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <label className="label-text new">new</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <label className="label-text new">new</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <label className="label-text feat">feature</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <img src={product} alt="product" />
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
                        <label className="label-text off">-10%</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <label className="label-text off">-10%</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <label className="label-text off">-10%</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <label className="label-text off">-10%</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
                        <label className="label-text off">-10%</label>
                      </div>
                      <button className="product-wish wish">
                        <i className="fas fa-heart"></i>
                      </button>
                      <Link className="product-image" to="" >
                        <img src={product} alt="product" />
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
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="bottom-paginate">
                    <p className="page-info">Showing 12 of 60 Results</p>
                    <ul className="pagination">
                      <li className="page-item">
                        <Link className="page-link" to="" >
                          <i className="fas fa-long-arrow-alt-left"></i>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link active" to="" >
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="" >
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="" >
                          3
                        </Link>
                      </li>
                      <li className="page-item">...</li>
                      <li className="page-item">
                        <Link className="page-link" to="" >
                          60
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="" >
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

export default shop;
