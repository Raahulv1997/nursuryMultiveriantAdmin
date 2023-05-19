// import React, { Children } from "react";
import React, { useEffect, useState } from "react";
import img1 from "../css-js/images/home/category/01.jpg";
import img2 from "../css-js/images/home/category/02.jpg";
import img3 from "../css-js/images/home/category/03.jpg";
import cat1 from "../css-js/images/category/dairy.jpg";
import cat2 from "../css-js/images/category/drinks.jpg";
import cat3 from "../css-js/images/category/fastfoods.jpg";
import cat4 from "../css-js/images/category/fruits.jpg";
import cat5 from "../css-js/images/category/groceries.jpg";
import cat6 from "../css-js/images/category/seafoods.jpg";
import product from "../css-js/images/blog/01.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ProductBox from "./productBox";
import {
  user_home_api,
  add_to_cart_api,
  update_to_cart_api,
  cart_delete_api,
} from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import Header from "../common/header";
import Footer from "../common/footer";

const Index = () => {
  const [cartqty, setCartQty] = useState(false);
  const [ShowAlert, setShowAlert] = useState(false);
  const [productData, setProductData] = useState();
  const [reload, setReload] = useState("");
  const navigate = useNavigate();
  const [recordsPerPage, setRecordPerpage] = useState(10);

  async function call_api() {
    let result_all = await user_home_api(
      {
        price_from: "",
        price_to: "",
        price__: "",
        rating__: "",
        name__: "",
        created_on__: "",
        search: "",
        category: [""],
        brand: [],
        seo_tag: [],
        vendor_id: [],
        id: [],
      },
      recordsPerPage
    );
    let result = result_all["results"];
    // console.log("__________________________________user___home___api");
    // console.log(result);
    setProductData(result);
  }

  useEffect(() => {
    call_api();
  }, [reload]);

  async function cart_update_function(cart_count, product_id) {
    // console.log(product_id);
    let token = localStorage.getItem("user_token");

    if (token !== "" && token !== null && token !== undefined) {
      // alert("User logged in");
      let cart_product_quantity = 1;
      let result = await add_to_cart_api([
        { product_id, cart_product_quantity },
        { headers: { user_token: `${token}` } },
      ]);
      // console.log(result.success);
      if (result.success === true) {
        setCartQty(true);
        setReload(Math.floor(Math.random() * 500 + 1));
      } else {
      }
    } else {
      setShowAlert(true);
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
        // console.log(result);
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
        // console.log(result);
        if (result.success === true) {
          setReload(Math.floor(Math.random() * 500 + 1));
        } else {
          alert(result.success);
        }
      }
    } else {
      setShowAlert(true);
    }
  }

  const onCloseAlert = () => {
    return Promise.resolve(setShowAlert(false));
  };
  return (
    <div>
      <SweetAlert
        show={ShowAlert}
        title="Login Message"
        text={"Please login Your account"}
        onConfirm={() =>
          onCloseAlert().then(() => {
            navigate("/login");
          })
        }
      />
      <Header cartqty={cartqty} setCartQty={setCartQty} />

      <section className="section recent-part">
        <div className="container-fluid p-0">
          <Carousel renderIndicator={false} showThumbs={false} autoPlay={true}>
            <div>
              <img src={img1} />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
              <img src={img2} />
              {/* <p className="legend">Legend 2</p> */}
            </div>
            <div>
              <img src={img3} />
              {/* <p cla/>ssName="legend">Legend 3</p> */}
            </div>
          </Carousel>
        </div>
      </section>
      <section className="section recent-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="brand-wrap">
                <div className="brand-media">
                  <img src={cat1} alt="brand" />
                  <div className="brand-overlay">
                    <Link to="">
                      <h4 className="text-white">Indoor</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="brand-wrap">
                <div className="brand-media">
                  <img src={cat2} alt="brand" />
                  <div className="brand-overlay">
                    <Link to="">
                      <h4 className="text-white">Outdoor</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="brand-wrap">
                <div className="brand-media">
                  <img src={cat3} alt="brand" />
                  <div className="brand-overlay">
                    <Link to="">
                      <h4 className="text-white">Vastu</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="brand-wrap">
                <div className="brand-media">
                  <img src={cat4} alt="brand" />
                  <div className="brand-overlay">
                    <Link to="">
                      <h4 className="text-white">Decorative</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="brand-wrap">
                <div className="brand-media">
                  <img src={cat5} alt="brand" />
                  <div className="brand-overlay">
                    <Link to="">
                      <h4 className="text-white">Bonsai</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-4 col-6">
              <div className="brand-wrap">
                <div className="brand-media">
                  <img src={cat6} alt="brand" />
                  <div className="brand-overlay">
                    <Link to="">
                      <h4 className="text-white">Medicinal</h4>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section recent-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>New Arrivals</h2>
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
          </div>
        </div>
      </section>

      {/* BANNER SECTION */}

      <div className="section promo-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="promo-img">
                <Link to="">
                  <img src={img1} alt="promo" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURED SECTION */}
      <section className="section feature-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading">
                <h2>our featured items</h2>
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
