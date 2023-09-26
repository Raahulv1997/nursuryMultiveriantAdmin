import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AllproductData } from "../api/api";
import Loader from "../common/loader";
import ProductImage from "../../image/product_demo.png";
import ProductRating from "./productRating";
import { Carousel } from "react-responsive-carousel";
import ProductImages from "./ProductImages";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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

  const imageUrl = productData?.cover_image + "," + productData?.all_images_url;

  const imageArray =
    imageUrl && typeof imageUrl === "string" ? imageUrl.split(",") : [];

  const uniqueImages = imageArray.filter((item, index) => {
    // Remove empty strings and keep only the first occurrence of each image path
    return item !== "null" && item !== "" && imageArray.indexOf(item) === index;
  });

  let filteredData = uniqueImages
    .filter((item) => item !== "") // Remove empty strings
    .map((item) => item.replace(/^'|'$/g, "")); // Remove surrounding single quotes
  console.log("filteredData---" + filteredData.length);
  useEffect(() => {
    productGEtByid();
    // eslint-disable-next-line
  }, []);

  // /*FUnction to get the image from tht muliple image with dpouble commas */
  // const CoverImg = (img) => {
  //   if (
  //     img === null ||
  //     img === "null" ||
  //     img === undefined ||
  //     img === "undefined"
  //   ) {
  //     return ProductImage;
  //   }

  //   const result = img.replace(/,+/g, ",");

  //   return result.split(",")[0];
  // };
  return (
    <div>
      <section className="inner-section">
        <div className="container">
          {loading === true ? <Loader /> : null}
          <div className="row">
            <div className="col-lg-6">
              <div className="details-gallery pt-5">
                <div className="details-label-group">
                  {/* <label className="details-label new">new</label> */}
                  {productData.discount === (undefined || null || 0) ? null : (
                    <label className="details-label off">
                      {productData.discount}% <small>OFF</small>
                    </label>
                  )}
                </div>
                <ul className="details-preview">
                  <Carousel>
                    {imageArray.length === 0 ? (
                      <div>
                        {/* <img
src={data.cover_image}
alt={data.seo_tag + data.description}
/> */}
                        <ProductImages
                          src={productData.cover_image}
                          className={"img-fluid"}
                          alt={productData.seo_tag + productData.description}
                        />
                      </div>
                    ) : filteredData.length === 0 ? (
                      <div>
                        <img
                          src={ProductImage}
                          className="img-fluid"
                          alt={"product"}
                        />
                        {/* <ProductImage
                        src={item}
                        className={"img-fluid"}
                        alt={
                          productData.seo_tag + productData.description
                        }
                      /> */}
                      </div>
                    ) : (
                      (filteredData || []).map((item, index) => {
                        console.log("ime--" + JSON.stringify(item));
                        return (
                          <div key={index}>
                            <img
                              src={item}
                              className="img-fluid"
                              alt={item.seo_tag + item.description}
                            />
                            {/* <ProductImage
                              src={item}
                              className={"img-fluid"}
                              alt={
                                productData.seo_tag + productData.description
                              }
                            /> */}
                          </div>
                        );
                      })
                    )}
                  </Carousel>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="details-content">
                <h3 className="details-name">
                  {productData.name || <b>unavailable</b>}
                </h3>
                <div className="details-meta">
                  <p>
                    <span>
                      {productData.verient_name || <b>unavailable</b>}
                    </span>
                  </p>
                  {/* <p>
                    BRAND:<span>{productData.brand || <b>unavailable</b>}</span>
                  </p> */}
                </div>

                <div className="details-rating">
                  {productData.avgRatings > 0 ? (
                    <ProductRating rating={productData.avgRatings} />
                  ) : null}
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
                  <ul className="details-tag-list m-0">
                    <li>
                      <Link>{productData.category_name}</Link>
                    </li>
                  </ul>
                </div>

                <div className="details-list-group">
                  <label className="details-list-title">Stock Quantity:</label>
                  <ul className="details-tag-list m-0">
                    <li>
                      <p className="m-0">
                        {productData.product_stock_quantity || (
                          <b>unavailable</b>
                        )}
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="details-list-group">
                  <label className="details-list-title"> Quantity:</label>
                  <ul className="details-tag-list m-0">
                    <li>
                      <p className="m-0">
                        {productData.quantity || <b>unavailable</b>}
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="details-list-group">
                  <label className="details-list-title">Unit:</label>
                  <ul className="details-tag-list m-0">
                    <li>
                      <p className="m-0">
                        {productData.unit || <b>unavailable</b>}
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="details-list-group">
                  <label className="details-list-title">Tax:</label>
                  <ul className="details-tag-list m-0">
                    <li>
                      <p className="m-0">
                        GST: {productData.gst + "%" || <b>unavailable</b>}{" "}
                      </p>
                    </li>
                    <li>
                      <p className="m-0">
                        SGST: {productData.sgst + "%" || <b>unavailable</b>}{" "}
                      </p>
                    </li>
                    <li>
                      <p className="m-0">CGST: {productData.cgst + "%"} </p>
                    </li>
                  </ul>
                </div>
                {/* <div className="details-list-group">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
