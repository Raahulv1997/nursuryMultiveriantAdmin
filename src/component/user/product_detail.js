import React from "react";
import { Link } from 'react-router-dom';
import product from "../css-js/images/product/01.jpg";
const product_detail = () => {
  return (
    <div>
      {" "}
      <section className="single-banner inner-section">
        <div className="container">
          <h2>product video</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="" >Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="" >shop-4column</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              product-video
            </li>
          </ol>
        </div>
      </section>
      <section className="inner-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="details-gallery">
                <div className="details-label-group">
                  <label className="details-label new">new</label>
                  <label className="details-label off">-10%</label>
                </div>
                <ul className="details-preview">
                  <li>
                    <img src={product} alt="product" />
                  </li>
                  <li>
                    <img src={product} alt="product" />
                  </li>
                  <li>
                    <img src={product} alt="product" />
                  </li>
                  <li>
                    <img src={product} alt="product" />
                  </li>
                  <li>
                    <img src={product} alt="product" />
                  </li>
                </ul>
                <ul className="details-thumb">
                  <li>
                    <img src={product} alt="product" />
                  </li>
                  <li>
                    <img src={product} alt="product" />
                  </li>
                  <li>
                    <img src={product} alt="product" />
                  </li>
                  <li>
                    <img src={product} alt="product" />
                  </li>
                  <li>
                    <img src={product} alt="product" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="product-navigation">
                <li className="product-nav-prev">
                  <Link to="" >
                    <i className="icofont-arrow-left"></i>prev product
                    <span className="product-nav-popup">
                      <img src={product} alt="product" />
                      <small>green chilis</small>
                    </span>
                  </Link>
                </li>
                <li className="product-nav-next">
                  <Link to="" >
                    next product <i className="icofont-arrow-right"></i>
                    <span className="product-nav-popup">
                      <img src={product} alt="product" />
                      <small>green chilis</small>
                    </span>
                  </Link>
                </li>
              </ul>
              <div className="details-content">
                <h3 className="details-name">
                  <Link to="" >existing product name</Link>
                </h3>
                <div className="details-meta">
                  <p>
                    SKU:<span>1234567</span>
                  </p>
                  <p>
                    BRAND:<Link to="" >radhuni</Link>
                  </p>
                </div>
                <div className="details-rating">
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="active icofont-star"></i>
                  <i className="icofont-star"></i>
                  <Link to="" >(3 reviews)</Link>
                </div>
                <h3 className="details-price">
                  <del>$38.00</del>
                  <span>
                    $24.00<small>/per kilo</small>
                  </span>
                </h3>
                <p className="details-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit facere
                  harum natus amet soluta fuga consectetur alias veritatis
                  quisquam ab eligendi itaque eos maiores quibusdam.
                </p>
                <div className="details-list-group">
                  <label className="details-list-title">tags:</label>
                  <ul className="details-tag-list">
                    <li>
                      <Link to="" >organic</Link>
                    </li>
                    <li>
                      <Link to="" >fruits</Link>
                    </li>
                    <li>
                      <Link to="" >chilis</Link>
                    </li>
                  </ul>
                </div>
                <div className="details-list-group">
                  <label className="details-list-title">Share:</label>
                  <ul className="details-share-list">
                    <li>
                      <Link 
                        to="" 
                        className="icofont-facebook"
                        title="Facebook"
                      ></Link>
                    </li>
                    <li>
                      <Link 
                        to="" 
                        className="icofont-twitter"
                        title="Twitter"
                      ></Link>
                    </li>
                    <li>
                      <Link 
                        to="" 
                        className="icofont-linkedin"
                        title="Linkedin"
                      ></Link>
                    </li>
                    <li>
                      <Link 
                        to="" 
                        className="icofont-instagram"
                        title="Instagram"
                      ></Link>
                    </li>
                  </ul>
                </div>
                <div className="details-add-group">
                  <button className="product-add" title="Add to Cart">
                    <i className="fas fa-shopping-basket"></i>
                    <span>add to cart</span>
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
                <div className="details-action-group">
                  <Link 
                    className="details-wish wish"
                    to="" 
                    title="Add Your Wishlist"
                  >
                    <i className="icofont-heart"></i>
                    <span>add to wish</span>
                  </Link>
                  <Link 
                    className="details-compare"
                    to="" 
                    title="Compare This Item"
                  >
                    <i className="fas fa-random"></i>
                    <span>Compare This</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="inner-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav nav-tabs">
                <li>
                  <Link 
                    to="" 
                    className="tab-link active"
                    data-bs-toggle="tab"
                  >
                    descriptions
                  </Link>
                </li>
                <li>
                  <Link to="" >
                    Specifications
                  </Link>
                </li>
                <li>
                  <Link to="" >
                    reviews (2)
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="tab-pane fade show active" id="tab-desc">
            <div className="row">
              <div className="col-lg-6">
                <div className="product-details-frame">
                  <div className="tab-descrip">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Recusandae delectus natus quasi aperiam. Nulla
                      perspiciatis ullam ipsa, magni animi eligendi quis
                      mollitia dolor omnis alias ut aspernatur est voluptatem
                      illo totam iste consequatur vitae laborum ipsam facilis!
                      Ipsa, voluptatum neque dolor facere autem maiores
                      pariatur, eveniet veritatis vero iure obcaecati
                    </p>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                      </li>
                      <li>
                        labore possimus architecto, saepe nobis ex mollitia
                      </li>
                      <li>
                        mollitia soluta magni placeat. Eaque sit praesentium
                      </li>
                      <li>
                        distinctio ab a exercitationem officiis labore possimus
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product-details-frame">
                  <div className="tab-descrip">
                    <img src="images/video.jpg" alt="video" />
                    <Link 
                      title="Product Video"
                      to="" 
                      className="venobox fas fa-play"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-spec">
            <div className="row">
              <div className="col-lg-12">
                <div className="product-details-frame">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <th scope="row">Product code</th>
                        <td>SKU: 101783</td>
                      </tr>
                      <tr>
                        <th scope="row">Weight</th>
                        <td>1kg, 2kg</td>
                      </tr>
                      <tr>
                        <th scope="row">Styles</th>
                        <td>@Girly</td>
                      </tr>
                      <tr>
                        <th scope="row">Properties</th>
                        <td>Short Dress</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tab-reve">
            <div className="row">
              <div className="col-lg-12">
                <div className="product-details-frame">
                  <ul className="review-list">
                    <li className="review-item">
                      <div className="review-media">
                        <Link className="review-avatar" to="" >
                          <img src="images/avatar/01.jpg" alt="review" />
                        </Link>
                        <h5 className="review-meta">
                          <Link to="" >miron mahmud</Link>
                          <span>June 02, 2020</span>
                        </h5>
                      </div>
                      <ul className="review-rating">
                        <li className="icofont-ui-rating"></li>
                        <li className="icofont-ui-rating"></li>
                        <li className="icofont-ui-rating"></li>
                        <li className="icofont-ui-rating"></li>
                        <li className="icofont-ui-rate-blank"></li>
                      </ul>
                      <p className="review-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus hic amet qui velit, molestiae suscipit
                        perferendis, autem doloremque blanditiis dolores nulla
                        excepturi ea nobis!
                      </p>
                      <form className="review-reply">
                        <input type="text" placeholder="reply your thoughts" />
                        <button>
                          <i className="icofont-reply"></i>reply
                        </button>
                      </form>
                      <ul className="review-reply-list">
                        <li className="review-reply-item">
                          <div className="review-media">
                            <Link className="review-avatar" to="" >
                              <img src="images/avatar/02.jpg" alt="review" />
                            </Link>
                            <h5 className="review-meta">
                              <Link to="" >labonno khan</Link>
                              <span>
                                <b>author -</b>June 02, 2020
                              </span>
                            </h5>
                          </div>
                          <p className="review-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus hic amet qui velit, molestiae suscipit
                            perferendis, autem doloremque blanditiis dolores
                            nulla excepturi ea nobis!
                          </p>
                          <form className="review-reply">
                            <input
                              type="text"
                              placeholder="reply your thoughts"
                            />
                            <button>
                              <i className="icofont-reply"></i>reply
                            </button>
                          </form>
                        </li>
                        <li className="review-reply-item">
                          <div className="review-media">
                            <Link className="review-avatar" to="" >
                              <img src="images/avatar/03.jpg" alt="review" />
                            </Link>
                            <h5 className="review-meta">
                              <Link to="" >tahmina bonny</Link>
                              <span>June 02, 2020</span>
                            </h5>
                          </div>
                          <p className="review-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus hic amet qui velit, molestiae suscipit
                            perferendis, autem doloremque blanditiis dolores
                            nulla excepturi ea nobis!
                          </p>
                          <form className="review-reply">
                            <input
                              type="text"
                              placeholder="reply your thoughts"
                            />
                            <button>
                              <i className="icofont-reply"></i>reply
                            </button>
                          </form>
                        </li>
                      </ul>
                    </li>
                    <li className="review-item">
                      <div className="review-media">
                        <Link className="review-avatar" to="" >
                          <img src="images/avatar/04.jpg" alt="review" />
                        </Link>
                        <h5 className="review-meta">
                          <Link to="" >shipu shikdar</Link>
                          <span>June 02, 2020</span>
                        </h5>
                      </div>
                      <ul className="review-rating">
                        <li className="icofont-ui-rating"></li>
                        <li className="icofont-ui-rating"></li>
                        <li className="icofont-ui-rating"></li>
                        <li className="icofont-ui-rating"></li>
                        <li className="icofont-ui-rate-blank"></li>
                      </ul>
                      <p className="review-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus hic amet qui velit, molestiae suscipit
                        perferendis, autem doloremque blanditiis dolores nulla
                        excepturi ea nobis!
                      </p>
                      <form className="review-reply">
                        <input type="text" placeholder="reply your thoughts" />
                        <button>
                          <i className="icofont-reply"></i>reply
                        </button>
                      </form>
                    </li>
                  </ul>
                </div>
                <div className="product-details-frame">
                  <h3 className="frame-title">add your review</h3>
                  <form className="review-form">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="star-rating">
                          <input type="radio" name="rating" id="star-1" />
                          <label for="star-1"></label>
                          <input type="radio" name="rating" id="star-2" />
                          <label for="star-2"></label>
                          <input type="radio" name="rating" id="star-3" />
                          <label for="star-3"></label>
                          <input type="radio" name="rating" id="star-4" />
                          <label for="star-4"></label>
                          <input type="radio" name="rating" id="star-5" />
                          <label for="star-5"></label>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            placeholder="Describe"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button className="btn btn-inline">
                          <i className="icofont-water-drop"></i>
                          <span>drop your review</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="inner-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-heading">
                <h2>related this items</h2>
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
              <div className="product-card product-disable">
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
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="section-btn-25">
                <Link to="" >
                  <i className="fas fa-eye"></i>
                  <span>view all related</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default product_detail;
