import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllproductData } from "../api/api";
import Loader from "../common/loader";
import ProductImage from "../../image/product_demo.png"

const ProductDetails = () => {
  const productId = localStorage.getItem("productID");
  // console.log("id-------------" + productId);
  const [loading, setLoading] = useState(false);
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
    product_stock_quantity: "",
  };

  useEffect(() => {
    productGEtByid();
  }, []);

  const productGEtByid = async () => {
    setLoading(true);
    const response = await AllproductData(
      productId,
      initialFormState.search,
      initialFormState.category,
      initialFormState.price_from,
      initialFormState.price_to,
      initialFormState.rating,
      initialFormState.brand,
      initialFormState.seo_tag,
      initialFormState.vendor_id,
      initialFormState.product_stock_quantity
    );
    // console.log("product data--" + JSON.stringify(response));

    setProductData(response.results[0]);
    setLoading(false);
  };
  let ratingbox = [1, 2, 3, 4, 5];
   /*FUnction to get the image from tht muliple image with dpouble commas */
 const CoverImg = (img) => {
  const result = img.replace(/,+/g, ',');
  return result.split(",")[0];
};
  return (
    <div>
      <section className="inner-section">
        <div className="container">
          {loading === true ? <Loader /> : null}
          <div className="row">
            <div className="col-lg-6">
              <div className="details-gallery">
                <div className="details-label-group">
                  <label className="details-label new">new</label>

                  <label className="details-label off">
                    {productData.discount}%
                  </label>
                </div>
                <ul className="details-preview">
                  <li>
                    <img
                      src={
                        productData.cover_image
                          ? CoverImg(productData.cover_image)
                          : ProductImage
                      }
                      alt="product"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="details-content">
                <h3 className="details-name">{productData.name || <b>unavailable</b>}</h3>
                <div className="details-meta">
                  <p>
                    ID:<span>{productData.id || <b>unavailable</b>}</span>
                  </p>
                  <p>
                    BRAND:<span>{productData.brand || <b>unavailable</b>}</span>
                  </p>
                </div>

                <div className="details-rating">
                  {ratingbox.map((rat, i) => {
                    return productData.rating - rat >= 0 ? (
                      <>
                        <i className="active icofont-star" key={i}></i>
                      </>
                    ) : (
                      <i className=" icofont-star" key={i}></i>
                    );
                  })}

                  <Link to="#">({productData.rating} reviews )</Link>
                </div>
                <h3 className="details-price">
                  <del> ₹{Number(productData.mrp).toFixed(2)}</del>
                  <span>
                    ₹{Number(productData.price).toFixed(2)}
                    <small>/per {productData.unit}</small>
                  </span>
                </h3>
                <label className="details-list-title">Description:</label>
                <p className="details-desc"> {productData.description}</p>
                <div className="details-list-group">
                  <label className="details-list-title">Category:</label>
                  <ul className="details-tag-list">
                    <li>
                      <Link>{productData.category}</Link>
                    </li>
                  </ul>
                </div>

                <div className="details-list-group">
                  <label className="details-list-title">Stock Quantity:</label>
                  <ul className="details-tag-list">
                    <li>
                      <Link>{productData.product_stock_quantity || <b>unavailable</b>}</Link>
                    </li>
                  </ul>
                </div>
                <div className="details-list-group">
                  <label className="details-list-title"> Quantity:</label>
                  <ul className="details-tag-list">
                    <li>
                      <Link>{productData.quantity || <b>unavailable</b>}</Link>
                    </li>
                  </ul>
                </div>
                <div className="details-list-group">
                  <label className="details-list-title">Unit:</label>
                  <ul className="details-tag-list">
                    <li>
                      <Link>{productData.unit || <b>unavailable</b>}</Link>
                    </li>
                  </ul>
                </div>
                <div className="details-list-group">
                  <label className="details-list-title">Tax:</label>
                  <ul className="details-tag-list">
                    <li>
                      <Link>GST: {productData.gst + "%" || <b>unavailable</b>} </Link>
                    </li>
                    <li>
                      <Link>SGST: {productData.sgst + "%" || <b>unavailable</b>} </Link>
                    </li>
                    <li>
                      <Link>CGST: {productData.cgst + "%"   } </Link>
                    </li>
                  </ul>
                </div>
                <div className="details-list-group">
                  <label className="details-list-title">Share:</label>
                  <ul className="details-share-list">
                    <li>
                      <Link
                        to="#"
                        className="icofont-facebook"
                        title="Facebook"
                      ></Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="icofont-twitter"
                        title="Twitter"
                      ></Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="icofont-linkedin"
                        title="Linkedin"
                      ></Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="icofont-instagram"
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
