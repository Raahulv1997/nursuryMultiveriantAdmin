import React from "react";
import "./loader.css";
import loaderImage from "../css-js/images/loader.gif";
// import Spinner from "react-bootstrap/Spinner";
const Loader = () => {
  return (
    <div className="loader_page d-block">
      <div className="loader_img">
        <img src={loaderImage} />
      </div>
    </div>
  );
};

export default Loader;
