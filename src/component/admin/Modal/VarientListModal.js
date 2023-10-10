import React, { useState, useEffect } from "react";
import { Modal, Container, Col, Row, Image, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { AllproductData, DeletProductVarient } from "../../api/api";
import defaultImg from "../../../image/product_demo.png";
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import productImg from "../../../image/product_demo.png";

export default function VarientListModal(props) {
  const [proData, setProData] = useState("");
  const [proVarientData, setVarientProData] = useState([]);
  const [varId, setVarId] = useState();
  const [deleteAlert, setDeleteAlter] = useState(false);
  const [apicall, setApiCall] = useState(false);
  const productIdFromLocalStorage = localStorage.getItem("produtc_id");

  let admin_token = localStorage.getItem("admin_token");
  let vendor_token = localStorage.getItem("vendor_token");
  let productId = props.product_id
    ? props.product_id
    : productIdFromLocalStorage;
  /*Function to get product data */

  const GetProductData = async () => {
    if (productId === "") {
      setProData([]);
    } else {
      const response = await AllproductData(
        productId,
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      );
      // console.log("Pro data--" + JSON.stringify(response.results));
      setProData(response.results[0]);
      if (
        response.results[0].product_verient_id === null ||
        response.results.length === 0
      ) {
        setVarientProData([]);
      } else {
        setVarientProData(response.results[0].verients);
      }
    }
  };

  /*Render method to get product data*/
  useEffect(() => {
    GetProductData();
    if (apicall === true) {
      setApiCall(false);
    }
    // eslint-disable-next-line
  }, [productId, apicall]);

  /* FUnction to get Add Varient */
  const AddVarient = () => {
    props.setProductVarientId("");
    props.setVarientModalShow(true);
    props.close();
  };

  /*Function to edit Product Varient */
  const EditVarient = (id, varId) => {
    props.setProductID(id);
    props.setProductVarientId(varId);
    props.setVarientModalShow(true);
    props.close();
  };

  /*Funtion to Add Varient Image */
  const AddImage = (id, varId, des) => {
    props.setProductID(props.product_id);
    props.setProductVarientId(varId);
    props.setProductDescription(des);
    props.setDocsShow(true);
    props.close();
  };
  /*Funtion to delete Product Varient */
  const handleAlert = (id) => {
    setVarId(id);
    setDeleteAlter(true);
  };
  /*Function to delete Varient */
  let head;
  // let user_token = localStorage.getItem("user_token");

  if (
    vendor_token !== null &&
    vendor_token !== undefined &&
    vendor_token !== ""
  ) {
    head = { headers: { vendor_token: `${vendor_token}` } };
  } else if (
    admin_token !== null &&
    admin_token !== undefined &&
    admin_token !== ""
  ) {
    // eslint-disable-next-line
    head = { headers: { admin_token: `${admin_token}` } };
  } else {
  }
  const onDeleteVarient = async () => {
    let response = await DeletProductVarient(1, varId, head);
    if (response.response === "update successfully") {
      setApiCall(true);
      setDeleteAlter(false);
    }
  };
  /*FUnction to get the image from tht muliple image with dpouble commas */
  const CoverImg = (img) => {
    if (
      img === null ||
      img === "null" ||
      img === undefined ||
      img === "undefined"
    ) {
      return defaultImg;
    }
    const result = img.replace(/,+/g, ",");
    return result.split(",")[0];
  };

  const CoverImgForProduct = (img) => {
    console.log(" image- product---" + img);
    if (
      img === null ||
      img === "null" ||
      img === undefined ||
      img === "undefined"
    ) {
      return defaultImg;
    }
    const result = img.replace(/,+/g, ",");
    return result.split(",")[0];
  };
  return (
    <>
      <Modal
        size="xl"
        show={props.show}
        onHide={props.close}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Product Variant
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={6} md={6}>
                <Image
                  src={
                    proData.cover_image !== null ||
                    proData.cover_image !== "null" ||
                    proData.cover_image !== undefined ||
                    proData.cover_image !== "undefined"
                      ? CoverImgForProduct(proData.all_images_url)
                      : proData.all_images_url !== null ||
                        proData.all_images_url !== "null" ||
                        proData.all_images_url !== undefined ||
                        proData.all_images_url !== "undefined"
                      ? CoverImgForProduct(proData.cover_image)
                      : productImg
                  }
                  // src={
                  //   proData.cover_image
                  //     ? ` ${proData.cover_image}`
                  //     : `${defaultImg}`
                  // }
                  alt={proData.seo_tag}
                  fluid
                />
              </Col>
              <Col xs={6} md={6}>
                <h3> {proData.name}</h3>
                <p>
                  {" "}
                  <b>Product description:</b>{" "}
                  {proData.description === undefined ||
                  proData.description === "undefined"
                    ? "Not Available"
                    : proData.description}
                </p>
                <p>
                  {" "}
                  <b>Category:</b> {proData.category_name}
                </p>
                <p>
                  {" "}
                  <b>Benefits :</b> {proData.benefits}
                </p>
                <p>
                  {" "}
                  <b>Care and Instructions :</b> {proData.care_and_Instructions}
                </p>
              </Col>
            </Row>
          </Container>
          <div>
            {proVarientData.length > 0 ? (
              <>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Img</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>MRP</th>
                      <th>Price</th>
                      <th>Discount</th>
                      <th>Tax</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {proVarientData.results.map((i)=>i.id)} */}
                    {(proVarientData || []).map((item, index) =>
                      item.verient_is_deleted === 1 ? null : (
                        <tr key={item.id}>
                          <td>{index + 1}</td>
                          <td>
                            {" "}
                            <img
                              src={
                                item.cover_image !== null ||
                                item.cover_image !== "null" ||
                                item.cover_image !== undefined ||
                                item.cover_image !== "undefined"
                                  ? CoverImg(item.all_images_url)
                                  : item.all_images_url !== null ||
                                    item.all_images_url !== "null" ||
                                    item.all_images_url !== undefined ||
                                    item.all_images_url !== "undefined"
                                  ? CoverImg(item.cover_image)
                                  : productImg
                              }
                              // src={
                              //   item.cover_image === null ||
                              //   item.cover_image === undefined ||
                              //   item.cover_image === "undefined"
                              //     ? productImg
                              //     : CoverImg(item.cover_image)
                              // }
                              width={"auto"}
                              height={"100px"}
                              alt={"varient imageff"}
                            />
                          </td>
                          <td>{item.verient_name}</td>
                          <td>{item.category}</td>
                          <td>{item.mrp}</td>
                          <td>{item.price}</td>
                          <td>{item.discount}</td>
                          <td>{item.gst}</td>
                          <td>
                            <Button
                              className="btn-warning mx-2"
                              onClick={() =>
                                AddImage(
                                  item.id,
                                  item.product_verient_id,
                                  item.description
                                )
                              }
                            >
                              Add Images
                            </Button>
                            <Button
                              onClick={() =>
                                EditVarient(item.id, item.product_verient_id)
                              }
                            >
                              <BiEdit />
                            </Button>
                            <Button
                              type="button"
                              className="btn btn-danger"
                              onClick={() =>
                                handleAlert(item.product_verient_id)
                              }
                            >
                              <BsTrash />
                            </Button>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </Table>
                <div className="d-flex justify-content-center">
                  {" "}
                  <Button
                    className="btn-info mx-2"
                    onClick={() => AddVarient()}
                  >
                    Add More Variant
                  </Button>
                </div>
              </>
            ) : (
              <div className="d-flex justify-content-center">
                {" "}
                <Button className="btn-info mx-2" onClick={() => AddVarient()}>
                  Add Variant
                </Button>
              </div>
            )}
          </div>
        </Modal.Body>
      </Modal>
      {/* Delete Alert */}
      <SweetAlert
        show={deleteAlert}
        title="Delete Varient"
        text="Are you Sure you want to delete"
        onConfirm={onDeleteVarient}
        showCancelButton={true}
        onCancel={() => setDeleteAlter(false)}
      />
    </>
  );
}
