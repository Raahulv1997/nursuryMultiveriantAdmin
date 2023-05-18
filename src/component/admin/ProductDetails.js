import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllproductData } from "../api/api";

const ProductDetails = () => {
  const productId = localStorage.getItem("productID");
  console.log("id-------------" + productId);
  const [productData, setProductData] = useState([]);
  const initialFormState = {
    search: "",
    category: "",
    price_from: "",
    price_to: "",
    rating: "",
    brand: [],
    seo_tag: "",
    vendor_id: "",
  };

  useEffect(() => {
    productGEtByid();
  }, []);

  const productGEtByid = async () => {
    const response = await AllproductData(
      productId,
      initialFormState.search,
      initialFormState.category,
      initialFormState.price_from,
      initialFormState.price_to,
      initialFormState.rating,
      initialFormState.brand,
      initialFormState.seo_tag,
      initialFormState.vendor_id
    );
    // console.log("product data--" + JSON.stringify(response));

    setProductData(response.results[0]);
  };
  let ratingbox = [1, 2, 3, 4, 5];
  return (
    <div>
      <section class="inner-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="details-gallery">
                <div class="details-label-group">
                  <label class="details-label new">new</label>
                  <label class="details-label off">
                    {productData.discount}%
                  </label>
                </div>
                <ul class="details-preview">
                  <li>
                    <img
                      src={
                        productData.cover_image
                          ? productData.cover_image
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      }
                      alt="product"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="details-content">
                <h3 class="details-name">{productData.name}</h3>
                <div class="details-meta">
                  <p>
                    ID:<span>{productData.id}</span>
                  </p>
                  <p>
                    BRAND:<span>{productData.brand}</span>
                  </p>
                </div>

                <div class="details-rating">
                  {ratingbox.map((rat, i) => {
                    return productData.rating - rat >= 0 ? (
                      <>
                        <i className="active icofont-star"></i>
                      </>
                    ) : (
                      <i className=" icofont-star"></i>
                    );
                  })}

                  <Link to="#">({productData.rating} reviews)</Link>
                </div>
                <h3 class="details-price">
                  <del> ₹{Number(productData.mrp).toFixed(2)}</del>
                  <span>
                    ₹{Number(productData.price).toFixed(2)}
                    <small>/per {productData.unit}</small>
                  </span>
                </h3>
                <label class="details-list-title">Description:</label>
                <p class="details-desc"> {productData.description}</p>
                <div class="details-list-group">
                  <label class="details-list-title">Category:</label>
                  <ul class="details-tag-list">
                    <li>
                      <Link>{productData.category}</Link>
                    </li>
                  </ul>
                </div>

                <div class="details-list-group">
                  <label class="details-list-title">Stock Quantity:</label>
                  <ul class="details-tag-list">
                    <li>
                      <Link>{productData.product_stock_quantity}</Link>
                    </li>
                  </ul>
                </div>
                <div class="details-list-group">
                  <label class="details-list-title"> Quantity:</label>
                  <ul class="details-tag-list">
                    <li>
                      <Link>{productData.quantity}</Link>
                    </li>
                  </ul>
                </div>
                <div class="details-list-group">
                  <label class="details-list-title">Unit:</label>
                  <ul class="details-tag-list">
                    <li>
                      <Link>{productData.unit}</Link>
                    </li>
                  </ul>
                </div>
                <div class="details-list-group">
                  <label class="details-list-title">Tax:</label>
                  <ul class="details-tag-list">
                    <li>
                      <Link>GST: {productData.gst} %</Link>
                    </li>
                    <li>
                      <Link>SGST: {productData.sgst} %</Link>
                    </li>
                    <li>
                      <Link>CGST: {productData.cgst} %</Link>
                    </li>
                  </ul>
                </div>
                <div class="details-list-group">
                  <label class="details-list-title">Share:</label>
                  <ul class="details-share-list">
                    <li>
                      <Link
                        to="#"
                        class="icofont-facebook"
                        title="Facebook"
                      ></Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        class="icofont-twitter"
                        title="Twitter"
                      ></Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        class="icofont-linkedin"
                        title="Linkedin"
                      ></Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        class="icofont-instagram"
                        title="Instagram"
                      ></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
