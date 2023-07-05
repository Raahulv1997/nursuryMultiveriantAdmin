import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "sweetalert/dist/sweetalert.css";

const HeaderChck = (props) => {
  // console.log("funtion---" + onFilterClick);
  return (
    <>
      <button onClick={props.OnButtonClick}>ButtonCheck</button>
    </>
  );
};

export default HeaderChck;
