import React, { useState } from "react";
import { useEffect } from "react";
import defaultImage from "../../../image/product_demo.png";
import {
  GetProductImages,
  AddProductImage,
  DeleteProductImage,
} from "../../api/api";
import { Button, Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useValidation from "../../common/useValidation";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";

export default function AddIVarientImage(props) {
  const [newImageUrls, setnewImageUrls] = useState([]);
  const [ShowDeleteAlert, setShowDeleteAlert] = useState(false);
  const [Id, setId] = useState();
  const [varId, setVarId] = useState();
  const [imageId, setImageId] = useState(false);
  const [imagename, setImagename] = useState("");
  const [apicall, setApiCall] = useState(false);
  let encoded;

  console.log("prodlut id----" + props.id);
  const initialFormState = {
    product_id: props.id,
    product_verient_id: props.varId,
    product_description: props.des,
    product_image_name: "",
    image_position: "",
    img_64: "",
  };
  /*Validation function */
  const validators = {
    // product_image_name: [
    //     (value) =>
    //         value === null || value === ""
    //             ? "Name is required"
    //             : /[^A-Za-z 0-9]/g.test(value)
    //                 ? "Cannot use special character "
    //                 : null,
    // ],
    // image_position: [
    //     (value) =>
    //         value === null || value === ""
    //             ? "Position is required"
    //             : /[^A-Za-z 0-9]/g.test(value)
    //                 ? "Cannot use special character "
    //                 : null,
    // ],
    img_64: [
      (value) => (value === null || value === "" ? "Image is required" : null),
    ],
    product_description: [
      (value) =>
        value === null || value === ""
          ? "product stock quantity is required"
          : // : /[^A-Za-z 0-9]/g.test(value)
            //     ? "Cannot use special character "
            null,
    ],
  };
  /*Validation imported from the validation custom hook */
  const { state, setState, onInputChange, setErrors, errors, validate } =
    useValidation(initialFormState, validators);

  /*Function to get the image list */
  const onImgView = async () => {
    const response = await GetProductImages(props.id, props.varId);
    if (response.error === "please fill all inputs") {
      setnewImageUrls([]);
    } else {
      console.log("image----" + JSON.stringify(response));
      setnewImageUrls(response);
    }
  };

  /*Render method to get the image list */
  useEffect(() => {
    onImgView();
    if (apicall === true) {
      setApiCall(false);
    }
  }, [props, apicall]);

  /*Function to convert file to base64 */
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        resolve({ base64: fileReader.result });
      });
      fileReader.readAsDataURL(file);
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  /*Onchange function of image */
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        if (file.size > 1024 * 100 === true) {
          //   setImgError("Image size can't be more then 100 kb");
        } else {
          //   setImgError("");
          // setState({
          //     ...state, img_64: event.target.result,
          //     product_id: props.id,
          //     product_verient_id: props.varId,
          //     product_description: props.des,
          //     product_image_name: file.name
          // });
        }
      };
      img.src = event.target.result;
    };

    // Read the file as a data URL
    reader.readAsDataURL(file);
    encoded = await convertToBase64(file);
    let imgbase = encoded.base64.split(",");
    let base64Name = imgbase[1];
    // console.log(imgbase, base64Name);
    setState({
      ...state,
      img_64: base64Name,
      product_id: props.id,
      product_verient_id: props.varId,
      product_description: props.des,
    });
  };

  /*Function to set varient image */
  const OnSetVarientImageClick = async (e) => {
    console.log("ID", props.id);
    console.log(state);
    // e.preventDefault();
    if (validate()) {
      console.log("imnage add ---" + JSON.stringify(state));

      let response = await AddProductImage(state);
      if (response.response === "successfully add images") {
        setApiCall(true);
        setState(initialFormState);
      }
    }
  };

  /*Function to open the delete alert box */
  const handleAlert = (id, imgId, varId, name) => {
    setShowDeleteAlert(true);
    setId(id);
    setImageId(imgId);
    setVarId(varId);
    setImagename(name);
  };
  /*Function to delete image */
  const OnImageDeleteClick = async () => {
    let response = await DeleteProductImage(Id, imageId, varId, imagename);
    if (response.affectedRows === 1) {
      setShowDeleteAlert(false);
      setApiCall(true);
    }
  };
  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={props.close}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form>
          <Modal.Header>
            <Modal.Title>Add Images</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row ">
              <div className="col-md-6">
                <Form.Label>Image Upload (In .jpg, .jpeg, .png ) </Form.Label>
              </div>
            </div>
            <Table>
              <tbody>
                {newImageUrls ? (
                  <tr
                    className={"d-flex flex-wrap"}
                    // id={"variantimgbox" + variantdata.id}
                  >
                    <td className="" colSpan={"12"}>
                      <div className="image_box d-flex  flex-wrap gap-4">
                        {newImageUrls.map((imgg, i) => {
                          // console.log("img path----" + imgg.product_image_path);
                          return (
                            <React.Fragment key={i}>
                              <div className="add_Product_Image">
                                {imgg.image_position === "cover" ? (
                                  <span className="cover_img">Cover</span>
                                ) : null}
                                <img
                                  src={imgg.product_image_path}
                                  alt="apna_organic"
                                  height={120}
                                />
                                {/* <span
                                                                    className="cover_icon"
                                                                //   onClick={() =>
                                                                //     onImgCoverEditClick(
                                                                //       imgg.product_id,
                                                                //       imgg.product_image_id,
                                                                //       imgg.product_image_name
                                                                //     )
                                                                //   }
                                                                >
                                                                    Set Cover
                                                                </span> */}
                                <span
                                  className="cross_icon"
                                  onClick={() =>
                                    handleAlert(
                                      imgg.product_id,
                                      imgg.product_image_id,
                                      imgg.product_verient_id,
                                      imgg.product_image_name
                                    )
                                  }
                                >
                                  &times;
                                </span>
                              </div>
                            </React.Fragment>
                          );
                        })}

                        <div className="imgprivew_box position-relative overflow-hidden">
                          <img
                            src={defaultImage}
                            // key={i}
                            alt="apna_organic"
                            height={120}
                          />
                          <Form.Control
                            multiple
                            type="file"
                            sm="9"
                            className={"img_add_button"}
                            onChange={(e) => handleFileChange(e)}
                            name={"img_64"}
                          />
                          <span className="plus_icon position-absolute">+</span>
                        </div>
                        {state.img_64 === "" ? null : (
                          <div>
                            <Form.Select
                              className="form-control"
                              value={state.image_position}
                              onChange={onInputChange}
                              name="image_position"
                              id="image_position"
                            >
                              <option value="">select image psition</option>
                              <option value="cover">cover</option>
                              <option value="01">01</option>
                              <option value="02">02</option>
                              <option value="03">03</option>
                              <option value="04">04</option>
                              <option value="05">05</option>
                            </Form.Select>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : null}
                <tr>
                  <td colSpan={"12"}>
                    {/* {customvalidated === "imgformat" ? (
                      <span
                        className="mt-2   text-center fs-6 text-danger"
                        type="invalid"
                      >
                        Image Format should be in jpg, jpeg or png
                      </span>
                    ) : null} */}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Modal.Body>
          <Modal.Footer>
            {state.img_64 === "" ? null : (
              <Button
                className="addcategoryicon"
                type="button"
                onClick={() => OnSetVarientImageClick()}
              >
                Add Image
              </Button>
            )}
            <Button
              variant="outline-success"
              className="addcategoryicon"
              // type="submit"
              onClick={props.ok}
            >
              OK
            </Button>
            <Button
              variant="outline-danger"
              className="addcategoryicon"
              // type="submit"
              onClick={props.close}
            >
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      <SweetAlert
        show={ShowDeleteAlert}
        title=""
        text="Are you Sure you want to delete"
        onConfirm={OnImageDeleteClick}
        showCancelButton={true}
        onCancel={() => setShowDeleteAlert(false)}
      />
    </>
  );
}
