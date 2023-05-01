import React, { useEffect, useState } from "react";
import { AllproductData } from "../api/api";

const ProductDetails = () => {
  const productId = localStorage.getItem("productID");
  console.log("id-------" + productId);
  const [productData, setProductData] = useState([]);
  const initialFormState = {
    id: productId,
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

                  <a href="#">({productData.rating} reviews)</a>
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
                      <a>{productData.category}</a>
                    </li>
                  </ul>
                </div>

                <div class="details-list-group">
                  <label class="details-list-title">Stock Quantity:</label>
                  <ul class="details-tag-list">
                    <li>
                      <a>{productData.product_stock_quantity}</a>
                    </li>
                  </ul>
                </div>
                <div class="details-list-group">
                  <label class="details-list-title"> Quantity:</label>
                  <ul class="details-tag-list">
                    <li>
                      <a>{productData.quantity}</a>
                    </li>
                  </ul>
                </div>
                <div class="details-list-group">
                  <label class="details-list-title">Unit:</label>
                  <ul class="details-tag-list">
                    <li>
                      <a>{productData.unit}</a>
                    </li>
                  </ul>
                </div>
                <div class="details-list-group">
                  <label class="details-list-title">Tax:</label>
                  <ul class="details-tag-list">
                    <li>
                      <a>GST: {productData.gst} %</a>
                    </li>
                    <li>
                      <a>SGST: {productData.sgst} %</a>
                    </li>
                    <li>
                      <a>CGST: {productData.cgst} %</a>
                    </li>
                  </ul>
                </div>
                <div class="details-list-group">
                  <label class="details-list-title">Share:</label>
                  <ul class="details-share-list">
                    <li>
                      <a href="#" class="icofont-facebook" title="Facebook"></a>
                    </li>
                    <li>
                      <a href="#" class="icofont-twitter" title="Twitter"></a>
                    </li>
                    <li>
                      <a href="#" class="icofont-linkedin" title="Linkedin"></a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="icofont-instagram"
                        title="Instagram"
                      ></a>
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
