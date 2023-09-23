import React from "react";
import productImg from "../../image/productDemo.png";

const ProductImages = (props) => {
  console.log("prodod--" + JSON.stringify(props));
  const CoverImg = (img) => {
    if (
      img === null ||
      img === "null" ||
      img === undefined ||
      img === "undefined"
    ) {
      return productImg;
    }

    const result = img.replace(/,+/g, ",");

    return result.split(",")[0];
  };

  return (
    <img
      src={
        props.src === null ||
        props.src === undefined ||
        props.src === "undefined" ||
        props.src === ""
          ? productImg
          : CoverImg(props.src)
      }
      className="img-fluid"
      alt={props.alt}
      // style={{ height: props.from === "cart" ? "100px" : "" }}
    />
  );
};

export default ProductImages;
