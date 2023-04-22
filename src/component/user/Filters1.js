import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchfilter } from "../api/api";
import shop_img from "../css-js/images/promo/shop/01.jpg";
let selectRatingData = [];
let selectBrandData = [];
const Filters1 = () => {
  const navigate = useNavigate();
  const [brandData, setBrandData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [pricefilter, setpricefilter] = useState({
    to_product_price: "",
    from_product_price: "",
  });

  //rating filer state start here
  const [checkboxfilter, setcheckboxfilter] = useState(false);

  const [ratingfilter, setratingfilter] = useState([]);
  //rating filer state END here

  //brand checkbox state start here
  const [brandCheckboxfilter, setBrandCheckboxfilter] = useState(false);

  const [brandfilter, setBrandfilter] = useState([]);

  //brand checkbox state end here

  const filterPriceHandler = (e) => {
    setpricefilter({ ...pricefilter, [e.target.name]: e.target.value });
    // setapicall(false);
  };

  const priceSubmitHandler = (e) => {
    e.preventDefault();
    navigate(
      `/shop1?Fromprice=${pricefilter.from_product_price}&&Toprice=${pricefilter.to_product_price}`
    );
  };

  const priceReset = (e) => {
    e.preventDefault();
    setcheckboxfilter(false);
    setpricefilter({
      to_product_price: "",
      from_product_price: "",
    });
    navigate(`/shop1`);
    // fetchProductData();
    // setapicall(true);
  };

  const onRatingFilterAdd = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (e.target.checked === true) {
      setratingfilter((ratingfilter, index) => [
        setcheckboxfilter(index, true),
        ...ratingfilter,
        e.target.value,
      ]);
      selectRatingData.push(e.target.value);
    } else {
      setratingfilter(ratingfilter.filter((item) => item !== e.target.value));
      // setcheckboxfilter(false);
      const index = selectRatingData.indexOf(e.target.value);
      if (index > -1) {
        // only splice array when item is found
        selectRatingData.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    navigate(`/shop1?rating=${selectRatingData}`);
  };

  const onBrandFilterAdd = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (e.target.checked === true) {
      setBrandfilter((brandfilter, index) => [
        setBrandCheckboxfilter(index, true),
        ...brandfilter,
        e.target.value,
      ]);
      selectBrandData.push(e.target.value);
    } else {
      setBrandfilter(brandfilter.filter((item) => item !== e.target.value));
      // setcheckboxfilter(false);
      const index = selectBrandData.indexOf(e.target.value);
      if (index > -1) {
        // only splice array when item is found
        selectBrandData.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
    navigate(`/shop1?brand=${selectBrandData}`);
  };

  useEffect(() => {
    fetchfilterdata();
  }, []);

  const fetchfilterdata = async () => {
    const data = await fetchfilter();

    const { brand_data, category_data } = data;
    console.log("all--" + JSON.stringify(brand_data));

    if (brand_data) {
      const filterUnwanted = (arr) => {
        const required = arr.filter((el) => {
          return el.brand;
        });
        return required;
      };

      setBrandData(filterUnwanted(brand_data));
    }

    if (category_data) {
      const filterUnwanted = (arr) => {
        const required = arr.filter((el) => {
          return el.category;
        });
        return required;
      };

      setCategoryData(filterUnwanted(category_data));
    }
  };

  return (
    <>
      <div className="col-lg-3">
        <div className="shop-widget-promo">
          <a href="#">
            <img src={shop_img} alt="promo" />
          </a>
        </div>
        <div className="shop-widget">
          <h6 className="shop-widget-title">Filter by Price</h6>
          <form>
            <div className="shop-widget-group">
              <input
                type="text"
                placeholder="Min - "
                name={"from_product_price"}
                value={pricefilter.from_product_price}
                onChange={filterPriceHandler}
              />
              <input
                type="text"
                placeholder="Max - "
                name={"to_product_price"}
                value={pricefilter.to_product_price}
                onChange={filterPriceHandler}
              />
            </div>
            <button className="shop-widget-btn" onClick={priceSubmitHandler}>
              <i className="fas fa-search"></i>
              <span>search</span>
            </button>
            <button className="shop-widget-btn mt-2" onClick={priceReset}>
              <i className="far fa-trash-alt"></i>
              <span>clear filter</span>
            </button>
          </form>
        </div>
        <div className="shop-widget">
          <h6 className="shop-widget-title">Filter by Rating</h6>
          <form>
            <ul className="shop-widget-list">
              <li>
                <div className="shop-widget-content">
                  <input
                    type="checkbox"
                    id="feat1"
                    defaultValue={"5"}
                    name="rating"
                    checked={checkboxfilter}
                    onChange={(e) => onRatingFilterAdd(e)}
                  />
                  <label for="feat1">
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                  </label>
                </div>
                <span className="shop-widget-number">(5)</span>
              </li>
              <li>
                <div className="shop-widget-content">
                  <input
                    type="checkbox"
                    id="feat2"
                    defaultValue={"4"}
                    name="rating"
                    checked={checkboxfilter}
                    onChange={(e) => onRatingFilterAdd(e)}
                  />
                  <label for="feat2">
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star"></i>
                  </label>
                </div>
                <span className="shop-widget-number">(4)</span>
              </li>
              <li>
                <div className="shop-widget-content">
                  <input
                    type="checkbox"
                    id="feat3"
                    defaultValue={"3"}
                    name="rating"
                    checked={checkboxfilter}
                    onChange={(e) => onRatingFilterAdd(e)}
                  />
                  <label for="feat3">
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </label>
                </div>
                <span className="shop-widget-number">(3)</span>
              </li>
              <li>
                <div className="shop-widget-content">
                  <input
                    type="checkbox"
                    id="feat4"
                    defaultValue={"2"}
                    name="rating"
                    checked={checkboxfilter}
                    onChange={(e) => onRatingFilterAdd(e)}
                  />
                  <label for="feat4">
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </label>
                </div>
                <span className="shop-widget-number">(2)</span>
              </li>
              <li>
                <div className="shop-widget-content">
                  <input
                    type="checkbox"
                    id="feat5"
                    defaultValue={"1"}
                    name="rating"
                    checked={checkboxfilter}
                    onChange={(e) => onRatingFilterAdd(e)}
                  />
                  <label for="feat5">
                    <i className="fas fa-star active"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </label>
                </div>
                <span className="shop-widget-number">(1)</span>
              </li>
            </ul>

            <button className="shop-widget-btn mt-2" onClick={priceReset}>
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
              {brandData.map((item) => {
                return (
                  <>
                    <li>
                      <div className="shop-widget-content">
                        <input
                          type="checkbox"
                          id="brand1"
                          defaultValue={item.brand}
                          name="brand"
                          checked={brandCheckboxfilter}
                          onChange={(e) => onBrandFilterAdd(e)}
                        />
                        <label for="brand1">{item.brand}</label>
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
            <button className="shop-widget-btn mt-2" onClick={priceReset}>
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
              {categoryData.map((item) => {
                return (
                  <>
                    <li>
                      <div className="shop-widget-content">
                        <input type="checkbox" id="brand1" />
                        <label for="brand1">{item.category}</label>
                      </div>
                    </li>
                  </>
                );
              })}
            </ul>
            <button className="shop-widget-btn">
              <i className="far fa-trash-alt"></i>
              <span>clear filter</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filters1;
