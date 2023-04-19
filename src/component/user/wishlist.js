import React from "react";
import { Link } from 'react-router-dom';
import product from "../css-js/images/product/01.jpg";

const wishlist = () => {
  return (
    <div>
      <section
        className="inner-section single-banner"
        // style="background: url(images/single-banner.jpg) no-repeat center"
      >
        <div className="container">
          <h2>wishlist</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="" >Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="" >shop grid</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              wishlist
            </li>
          </ol>
        </div>
      </section>
      <section className="inner-section wishlist-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-scroll">
                <table className="table-list">
                  <thead>
                    <tr>
                      <th scope="col">Serial</th>
                      <th scope="col">Product</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">description</th>
                      <th scope="col">status</th>
                      <th scope="col">shopping</th>
                      <th scope="col">action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="table-serial">
                        <h6>01</h6>
                      </td>
                      <td className="table-image">
                        <img src={product} alt="product" />
                      </td>
                      <td className="table-name">
                        <h6>product name</h6>
                      </td>
                      <td className="table-price">
                        <h6>
                          $19<small>/kilo</small>
                        </h6>
                      </td>
                      <td className="table-desc">
                        <p>
                          Lorem ipsum nobis eaque excepturi nisi eveniet...
                          <Link to="" >read more</Link>
                        </p>
                      </td>
                      <td className="table-status">
                        <h6 className="stock-out">stock out</h6>
                      </td>
                      <td className="table-shop">
                        <button className="product-add" title="Add to Cart">
                          add to cart
                        </button>
                        <div className="product-action">
                          <button
                            className="action-minus"
                            title="Quantity Minus"
                          >
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
                      </td>
                      <td className="table-action">
                        <Link 
                          className="view"
                          to="" 
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#product-view"
                        >
                          <i className="fas fa-eye"></i>
                        </Link>
                        <Link className="trash" to="" >
                          <i className="icofont-trash"></i>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-serial">
                        <h6>02</h6>
                      </td>
                      <td className="table-image">
                        <img src={product} alt="product" />
                      </td>
                      <td className="table-name">
                        <h6>product name</h6>
                      </td>
                      <td className="table-price">
                        <h6>
                          $78<small>/kilo</small>
                        </h6>
                      </td>
                      <td className="table-desc">
                        <p>
                          Lorem ipsum nobis eaque excepturi nisi eveniet...
                          <Link to="" >read more</Link>
                        </p>
                      </td>
                      <td className="table-status">
                        <h6 className="stock-in">stock in</h6>
                      </td>
                      <td className="table-shop">
                        <button className="product-add" title="Add to Cart">
                          add to cart
                        </button>
                        <div className="product-action">
                          <button
                            className="action-minus"
                            title="Quantity Minus"
                          >
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
                      </td>
                      <td className="table-action">
                        <Link 
                          className="view"
                          to="" 
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#product-view"
                        >
                          <i className="fas fa-eye"></i>
                        </Link>
                        <Link className="trash" to="" >
                          <i className="icofont-trash"></i>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-serial">
                        <h6>03</h6>
                      </td>
                      <td className="table-image">
                        <img src={product} alt="product" />
                      </td>
                      <td className="table-name">
                        <h6>product name</h6>
                      </td>
                      <td className="table-price">
                        <h6>
                          $68<small>/kilo</small>
                        </h6>
                      </td>
                      <td className="table-desc">
                        <p>
                          Lorem ipsum nobis eaque excepturi nisi eveniet...
                          <Link to="" >read more</Link>
                        </p>
                      </td>
                      <td className="table-status">
                        <h6 className="stock-out">stock out</h6>
                      </td>
                      <td className="table-shop">
                        <button className="product-add" title="Add to Cart">
                          add to cart
                        </button>
                        <div className="product-action">
                          <button
                            className="action-minus"
                            title="Quantity Minus"
                          >
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
                      </td>
                      <td className="table-action">
                        <Link 
                          className="view"
                          to="" 
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#product-view"
                        >
                          <i className="fas fa-eye"></i>
                        </Link>
                        <Link className="trash" to="" >
                          <i className="icofont-trash"></i>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-serial">
                        <h6>04</h6>
                      </td>
                      <td className="table-image">
                        <img src={product} alt="product" />
                      </td>
                      <td className="table-name">
                        <h6>product name</h6>
                      </td>
                      <td className="table-price">
                        <h6>
                          $24<small>/kilo</small>
                        </h6>
                      </td>
                      <td className="table-desc">
                        <p>
                          Lorem ipsum nobis eaque excepturi nisi eveniet...
                          <Link to="" >read more</Link>
                        </p>
                      </td>
                      <td className="table-status">
                        <h6 className="stock-in">stock in</h6>
                      </td>
                      <td className="table-shop">
                        <button className="product-add" title="Add to Cart">
                          add to cart
                        </button>
                        <div className="product-action">
                          <button
                            className="action-minus"
                            title="Quantity Minus"
                          >
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
                      </td>
                      <td className="table-action">
                        <Link 
                          className="view"
                          to="" 
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#product-view"
                        >
                          <i className="fas fa-eye"></i>
                        </Link>
                        <Link className="trash" to="" >
                          <i className="icofont-trash"></i>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-serial">
                        <h6>05</h6>
                      </td>
                      <td className="table-image">
                        <img src={product} alt="product" />
                      </td>
                      <td className="table-name">
                        <h6>product name</h6>
                      </td>
                      <td className="table-price">
                        <h6>
                          $34<small>/kilo</small>
                        </h6>
                      </td>
                      <td className="table-desc">
                        <p>
                          Lorem ipsum nobis eaque excepturi nisi eveniet...
                          <Link to="" >read more</Link>
                        </p>
                      </td>
                      <td className="table-status">
                        <h6 className="stock-out">stock out</h6>
                      </td>
                      <td className="table-shop">
                        <button className="product-add" title="Add to Cart">
                          add to cart
                        </button>
                        <div className="product-action">
                          <button
                            className="action-minus"
                            title="Quantity Minus"
                          >
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
                      </td>
                      <td className="table-action">
                        <Link 
                          className="view"
                          to="" 
                          title="Quick View"
                          data-bs-toggle="modal"
                          data-bs-target="#product-view"
                        >
                          <i className="fas fa-eye"></i>
                        </Link>
                        <Link className="trash" to="" >
                          <i className="icofont-trash"></i>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mt-5">
                <button className="btn btn-outline">Load more items</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default wishlist;
