import React from "react";
import { Link } from 'react-router-dom';
import img1 from "../css-js/images/home/index/01.png";
import img2 from "../css-js/images/home/index/02.png";
import product from "../css-js/images/product/01.jpg";
import blog from "../css-js/images/blog/01.jpg";
const index = () => {
  return (
    <div>
      <section className="home-index-slider slider-arrow slider-dots">
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
                    <Link className="btn btn-inline" to="" >
                      <i className="fas fa-shopping-basket"></i>
                      <span>shop now</span>
                    </Link>
                    <Link className="btn btn-outline" to="" >
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
                    <Link className="btn btn-inline" to="" >
                      <i className="fas fa-shopping-basket"></i>
                      <span>shop now</span>
                    </Link>
                    <Link className="btn btn-outline" to="" >
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
              <Link className="suggest-card" to="" >
                <img src="images/suggest/01.jpg" alt="suggest" />
                <h5>
                  vegetables <span>34 items</span>
                </h5>
              </Link>
            </li>
            <li>
              <Link className="suggest-card" to="" >
                <img src="images/suggest/02.jpg" alt="suggest" />
                <h5>
                  fruits <span>89 items</span>
                </h5>
              </Link>
            </li>
            <li>
              <Link className="suggest-card" to="" >
                <img src="images/suggest/03.jpg" alt="suggest" />
                <h5>
                  groceries <span>45 items</span>
                </h5>
              </Link>
            </li>
            <li>
              <Link className="suggest-card" to="" >
                <img src="images/suggest/04.jpg" alt="suggest" />
                <h5>
                  dairy farm <span>83 items</span>
                </h5>
              </Link>
            </li>
            <li>
              <Link className="suggest-card" to="" >
                <img src="images/suggest/05.jpg" alt="suggest" />
                <h5>
                  sea foods <span>40 items</span>
                </h5>
              </Link>
            </li>
            <li>
              <Link className="suggest-card" to="" >
                <img src="images/suggest/06.jpg" alt="suggest" />
                <h5>
                  vegan foods <span>57 items</span>
                </h5>
              </Link>
            </li>
            <li>
              <Link className="suggest-card" to="" >
                <img src="images/suggest/07.jpg" alt="suggest" />
                <h5>
                  dry foods <span>23 items</span>
                </h5>
              </Link>
            </li>
            <li>
              <Link className="suggest-card" to="" >
                <img src="images/suggest/08.jpg" alt="suggest" />
                <h5>
                  fast foods <span>97 items</span>
                </h5>
              </Link>
            </li>
          </ul>
        </div>
      </section>
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
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="section-btn-25">
                <Link to="" >
                  <i className="fas fa-eye"></i>
                  <span>show more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section promo-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="promo-img">
                <Link to="" >
                  <img src="images/promo/home/03.jpg" alt="promo" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section feature-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>our featured items</h2>
              </div>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2">
            <div className="col">
              <div className="feature-card">
                <div className="feature-media">
                  <div className="feature-label">
                    <label className="label-text feat">feature</label>
                  </div>
                  <button className="feature-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="feature-image" to="" >
                    <img src={product} alrt="" alt="product" />
                  </Link>
                  <div className="feature-widget">
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
                <div className="feature-content">
                  <h6 className="feature-name">
                    <Link to="" >fresh organic green chilis</Link>
                  </h6>
                  <div className="feature-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3 Reviews)</Link>
                  </div>
                  <h6 className="feature-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <p className="feature-desc">
                    Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                    amet olor ut eveniet commodi...
                  </p>
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
              <div className="feature-card">
                <div className="feature-media">
                  <div className="feature-label">
                    <label className="label-text feat">feature</label>
                  </div>
                  <button className="feature-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="feature-image" to="" >
                    <img src={product} alrt="" alt="product" />
                  </Link>
                  <div className="feature-widget">
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
                <div className="feature-content">
                  <h6 className="feature-name">
                    <Link to="" >fresh organic green chilis</Link>
                  </h6>
                  <div className="feature-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3 Reviews)</Link>
                  </div>
                  <h6 className="feature-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <p className="feature-desc">
                    Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                    amet olor ut eveniet commodi...
                  </p>
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
              <div className="feature-card">
                <div className="feature-media">
                  <div className="feature-label">
                    <label className="label-text feat">feature</label>
                  </div>
                  <button className="feature-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="feature-image" to="" >
                    <img src={product} alrt="" alt="product" />
                  </Link>
                  <div className="feature-widget">
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
                <div className="feature-content">
                  <h6 className="feature-name">
                    <Link to="" >fresh organic green chilis</Link>
                  </h6>
                  <div className="feature-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3 Reviews)</Link>
                  </div>
                  <h6 className="feature-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <p className="feature-desc">
                    Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                    amet olor ut eveniet commodi...
                  </p>
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
              <div className="feature-card">
                <div className="feature-media">
                  <div className="feature-label">
                    <label className="label-text feat">feature</label>
                  </div>
                  <button className="feature-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="feature-image" to="" >
                    <img src={product} alrt="" alt="product" />
                  </Link>
                  <div className="feature-widget">
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
                <div className="feature-content">
                  <h6 className="feature-name">
                    <Link to="" >fresh organic green chilis</Link>
                  </h6>
                  <div className="feature-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3 Reviews)</Link>
                  </div>
                  <h6 className="feature-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <p className="feature-desc">
                    Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                    amet olor ut eveniet commodi...
                  </p>
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
              <div className="feature-card">
                <div className="feature-media">
                  <div className="feature-label">
                    <label className="label-text feat">feature</label>
                  </div>
                  <button className="feature-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="feature-image" to="" >
                    <img src={product} alrt="" alt="product" />
                  </Link>
                  <div className="feature-widget">
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
                <div className="feature-content">
                  <h6 className="feature-name">
                    <Link to="" >fresh organic green chilis</Link>
                  </h6>
                  <div className="feature-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3 Reviews)</Link>
                  </div>
                  <h6 className="feature-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <p className="feature-desc">
                    Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                    amet olor ut eveniet commodi...
                  </p>
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
              <div className="feature-card">
                <div className="feature-media">
                  <div className="feature-label">
                    <label className="label-text feat">feature</label>
                  </div>
                  <button className="feature-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <Link className="feature-image" to="" >
                    <img src={product} alrt="" alt="product" />
                  </Link>
                  <div className="feature-widget">
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
                <div className="feature-content">
                  <h6 className="feature-name">
                    <Link to="" >fresh organic green chilis</Link>
                  </h6>
                  <div className="feature-rating">
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="active icofont-star"></i>
                    <i className="icofont-star"></i>
                    <Link to="" >(3 Reviews)</Link>
                  </div>
                  <h6 className="feature-price">
                    <del>$34</del>
                    <span>
                      $28<small>/piece</small>
                    </span>
                  </h6>
                  <p className="feature-desc">
                    Lorem ipsum dolor sit consectetur adipisicing xpedita dicta
                    amet olor ut eveniet commodi...
                  </p>
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
              <div className="section-btn-25">
                <Link to="" >
                  <i className="fas fa-eye"></i>
                  <span>show more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section countdown-part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto">
              <div className="countdown-content">
                <h3>special discount offer for vegetable items</h3>
                <p>
                  Reprehenderit sed quod autem molestiae aut modi minus
                  veritatis iste dolorum suscipit quis voluptatum fugiat
                  mollitia quia minima
                </p>
                <div
                  className="countdown countdown-clock"
                  data-countdown="2022/12/22"
                >
                  <span className="countdown-time">
                    <span>00</span>
                    <small>days</small>
                  </span>
                  <span className="countdown-time">
                    <span>00</span>
                    <small>hours</small>
                  </span>
                  <span className="countdown-time">
                    <span>00</span>
                    <small>minutes</small>
                  </span>
                  <span className="countdown-time">
                    <span>00</span>
                    <small>seconds</small>
                  </span>
                </div>
                <Link to="" >
                  <i className="fas fa-shopping-basket"></i>
                  <span>shop now</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="countdown-img">
                <img src="images/countdown.png" alt="countdown" />
                <div className="countdown-off">
                  <span>20%</span>
                  <span>off</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section newitem-part">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-heading">
                <h2>collected new items</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <ul className="new-slider slider-arrow">
                <li>
                  <div className="product-card">
                    <div className="product-media">
                      <div className="product-label">
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
                </li>
                <li>
                  <div className="product-card">
                    <div className="product-media">
                      <div className="product-label">
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
                </li>
                <li>
                  <div className="product-card">
                    <div className="product-media">
                      <div className="product-label">
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
                </li>
                <li>
                  <div className="product-card">
                    <div className="product-media">
                      <div className="product-label">
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
                </li>
                <li>
                  <div className="product-card">
                    <div className="product-media">
                      <div className="product-label">
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
                </li>
                <li>
                  <div className="product-card">
                    <div className="product-media">
                      <div className="product-label">
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
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="section-btn-25">
                <Link to="" >
                  <i className="fas fa-eye"></i>
                  <span>show more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section promo-part">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 px-xl-3">
              <div className="promo-img">
                <Link to="" >
                  <img src="images/promo/home/01.jpg" alt="promo" />
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 px-xl-3">
              <div className="promo-img">
                <Link to="" >
                  <img src="images/promo/home/02.jpg" alt="promo" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section niche-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>Browse by Top Niche</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-tabs">
                <li>
                  <Link 
                    to="" 
                    className="tab-link active"
                    data-bs-toggle="tab"
                  >
                    <i className="icofont-price"></i>
                    <span>top order</span>
                  </Link>
                </li>
                <li>
                  <Link to="" >
                    <i className="icofont-star"></i>
                    <span>top rating</span>
                  </Link>
                </li>
                <li>
                  <Link to="" >
                    <i className="icofont-sale-discount"></i>
                    <span>top discount</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-pane fade show active" id="top-order">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              <div className="col">
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text order">314</label>
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
                      <label className="label-text order">314</label>
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
                      <label className="label-text order">314</label>
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
                      <label className="label-text order">314</label>
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
                      <label className="label-text order">314</label>
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
                      <label className="label-text order">314</label>
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
                <div className="product-card product-disable">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text order">314</label>
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
                      <label className="label-text order">314</label>
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
                      <label className="label-text order">314</label>
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
                      <label className="label-text order">314</label>
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
            </div>
          </div>
          <div className="tab-pane fade" id="top-rate">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              <div className="col">
                <div className="product-card">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text rate">4.8</label>
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
                      <label className="label-text rate">4.8</label>
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
                      <label className="label-text rate">4.8</label>
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
                      <label className="label-text rate">4.8</label>
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
                      <label className="label-text rate">4.8</label>
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
                      <label className="label-text rate">4.8</label>
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
                <div className="product-card product-disable">
                  <div className="product-media">
                    <div className="product-label">
                      <label className="label-text rate">4.8</label>
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
                      <label className="label-text rate">4.8</label>
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
                      <label className="label-text rate">4.8</label>
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
                      <label className="label-text rate">4.8</label>
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
            </div>
          </div>
          <div className="tab-pane fade" id="top-disc">
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
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
                      <label className="label-text off">-10%</label>
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
                      <label className="label-text off">-10%</label>
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
                      <label className="label-text off">-10%</label>
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
                      <label className="label-text off">-10%</label>
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
                      <label className="label-text off">-10%</label>
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
                      <label className="label-text off">-10%</label>
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
                      <label className="label-text off">-10%</label>
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
                      <label className="label-text off">-10%</label>
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
                      <label className="label-text off">-10%</label>
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
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="section-btn-25">
                <Link to="" >
                  <i className="fas fa-eye"></i>
                  <span>show more</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section brand-part">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h2>shop by brands</h2>
              </div>
            </div>
          </div>
          <div className="brand-slider slider-arrow">
            <div className="brand-wrap">
              <div className="brand-media">
                <img src="images/brand/01.jpg" alt="brand" />
                <div className="brand-overlay">
                  <Link to="" >
                    <i className="fas fa-link"></i>
                  </Link>
                </div>
              </div>
              <div className="brand-meta">
                <h4>natural greeny</h4>
                <p>(45 items)</p>
              </div>
            </div>
            <div className="brand-wrap">
              <div className="brand-media">
                <img src="images/brand/02.jpg" alt="brand" />
                <div className="brand-overlay">
                  <Link to="" >
                    <i className="fas fa-link"></i>
                  </Link>
                </div>
              </div>
              <div className="brand-meta">
                <h4>vegan lover</h4>
                <p>(45 items)</p>
              </div>
            </div>
            <div className="brand-wrap">
              <div className="brand-media">
                <img src="images/brand/03.jpg" alt="brand" />
                <div className="brand-overlay">
                  <Link to="" >
                    <i className="fas fa-link"></i>
                  </Link>
                </div>
              </div>
              <div className="brand-meta">
                <h4>organic foody</h4>
                <p>(45 items)</p>
              </div>
            </div>
            <div className="brand-wrap">
              <div className="brand-media">
                <img src="images/brand/04.jpg" alt="brand" />
                <div className="brand-overlay">
                  <Link to="" >
                    <i className="fas fa-link"></i>
                  </Link>
                </div>
              </div>
              <div className="brand-meta">
                <h4>ecomart limited</h4>
                <p>(45 items)</p>
              </div>
            </div>
            <div className="brand-wrap">
              <div className="brand-media">
                <img src="images/brand/05.jpg" alt="brand" />
                <div className="brand-overlay">
                  <Link to="" >
                    <i className="fas fa-link"></i>
                  </Link>
                </div>
              </div>
              <div className="brand-meta">
                <h4>fresh fortune</h4>
                <p>(45 items)</p>
              </div>
            </div>
            <div className="brand-wrap">
              <div className="brand-media">
                <img src="images/brand/06.jpg" alt="brand" />
                <div className="brand-overlay">
                  <Link to="" >
                    <i className="fas fa-link"></i>
                  </Link>
                </div>
              </div>
              <div className="brand-meta">
                <h4>econature</h4>
                <p>(45 items)</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="section-btn-50">
                <Link to="" >
                  <i className="fas fa-eye"></i>
                  <span>view all brands</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section testimonial-part">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h2>client's feedback</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-slider slider-arrow">
                <div className="testimonial-card">
                  <i className="fas fa-quote-left"></i>
                  <p>
                    Lorem ipsum dolor consectetur adipisicing elit neque earum
                    sapiente vitae obcaecati magnam doloribus magni provident
                    ipsam
                  </p>
                  <h5>mahmud hasan</h5>
                  <ul>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                  </ul>
                  <img src="images/avatar/01.jpg" alt="testimonial" />
                </div>
                <div className="testimonial-card">
                  <i className="fas fa-quote-left"></i>
                  <p>
                    Lorem ipsum dolor consectetur adipisicing elit neque earum
                    sapiente vitae obcaecati magnam doloribus magni provident
                    ipsam
                  </p>
                  <h5>mahmud hasan</h5>
                  <ul>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                  </ul>
                  <img src="images/avatar/02.jpg" alt="testimonial" />
                </div>
                <div className="testimonial-card">
                  <i className="fas fa-quote-left"></i>
                  <p>
                    Lorem ipsum dolor consectetur adipisicing elit neque earum
                    sapiente vitae obcaecati magnam doloribus magni provident
                    ipsam
                  </p>
                  <h5>mahmud hasan</h5>
                  <ul>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                  </ul>
                  <img src="images/avatar/03.jpg" alt="testimonial" />
                </div>
                <div className="testimonial-card">
                  <i className="fas fa-quote-left"></i>
                  <p>
                    Lorem ipsum dolor consectetur adipisicing elit neque earum
                    sapiente vitae obcaecati magnam doloribus magni provident
                    ipsam
                  </p>
                  <h5>mahmud hasan</h5>
                  <ul>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                    <li className="fas fa-star"></li>
                  </ul>
                  <img src="images/avatar/04.jpg" alt="testimonial" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section blog-part">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h2>Read our articles</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-slider slider-arrow">
                <div className="blog-card">
                  <div className="blog-media">
                    <Link className="blog-img" to="" >
                      <img src={blog} alt="blog" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <ul className="blog-meta">
                      <li>
                        <i className="fas fa-user"></i>
                        <span>admin</span>
                      </li>
                      <li>
                        <i className="fas fa-calendar-alt"></i>
                        <span>february 02, 2021</span>
                      </li>
                    </ul>
                    <h4 className="blog-title">
                      <Link to="" >
                        Voluptate blanditiis provident Lorem ipsum dolor sit
                        amet
                      </Link>
                    </h4>
                    <p className="blog-desc">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Alias autem recusandae deleniti nam dignissimos sequi ...
                    </p>
                    <Link className="blog-btn" to="" >
                      <span>read more</span>
                      <i className="icofont-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-card">
                  <div className="blog-media">
                    <Link className="blog-img" to="" >
                      <img src={blog} alt="blog" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <ul className="blog-meta">
                      <li>
                        <i className="fas fa-user"></i>
                        <span>admin</span>
                      </li>
                      <li>
                        <i className="fas fa-calendar-alt"></i>
                        <span>february 02, 2021</span>
                      </li>
                    </ul>
                    <h4 className="blog-title">
                      <Link to="" >
                        Voluptate blanditiis provident Lorem ipsum dolor sit
                        amet
                      </Link>
                    </h4>
                    <p className="blog-desc">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Alias autem recusandae deleniti nam dignissimos sequi ...
                    </p>
                    <Link className="blog-btn" to="" >
                      <span>read more</span>
                      <i className="icofont-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-card">
                  <div className="blog-media">
                    <Link className="blog-img" to="" >
                      <img src={blog} alt="blog" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <ul className="blog-meta">
                      <li>
                        <i className="fas fa-user"></i>
                        <span>admin</span>
                      </li>
                      <li>
                        <i className="fas fa-calendar-alt"></i>
                        <span>february 02, 2021</span>
                      </li>
                    </ul>
                    <h4 className="blog-title">
                      <Link to="" >
                        Voluptate blanditiis provident Lorem ipsum dolor sit
                        amet
                      </Link>
                    </h4>
                    <p className="blog-desc">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Alias autem recusandae deleniti nam dignissimos sequi ...
                    </p>
                    <Link className="blog-btn" to="" >
                      <span>read more</span>
                      <i className="icofont-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="blog-card">
                  <div className="blog-media">
                    <Link className="blog-img" to="" >
                      <img src={blog} alt="blog" />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <ul className="blog-meta">
                      <li>
                        <i className="fas fa-user"></i>
                        <span>admin</span>
                      </li>
                      <li>
                        <i className="fas fa-calendar-alt"></i>
                        <span>february 02, 2021</span>
                      </li>
                    </ul>
                    <h4 className="blog-title">
                      <Link to="" >
                        Voluptate blanditiis provident Lorem ipsum dolor sit
                        amet
                      </Link>
                    </h4>
                    <p className="blog-desc">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Alias autem recusandae deleniti nam dignissimos sequi ...
                    </p>
                    <Link className="blog-btn" to="" >
                      <span>read more</span>
                      <i className="icofont-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="section-btn-25">
                <Link to="" >
                  <i className="fas fa-eye"></i>
                  <span>view all blog</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default index;
