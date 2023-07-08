import React, { useState, useEffect } from 'react'
import { Modal, Container, Col, Row, Image, Button } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { AllproductData, DeletProductVarient } from '../../api/api';
import defaultImg from "../../../image/product_demo.png"
import { BiEdit } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";

export default function VarientListModal(props) {
    const [proData, setProData] = useState("")
    const [proVarientData, setVarientProData] = useState([])
    const [varId, setVarId] = useState()
    const [productId] = useState(props.product_id)
    const [deleteAlert, setDeleteAlter] = useState(false)
    const [apicall, setApiCall] = useState(false)
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
                "",
            );
            setProData(response.results[0]);
            if (response.results[0].product_verient_id === null) {
                setVarientProData([])
            } else {
                setVarientProData(response.results)
            }
        }
    };
    /*Render method to get product data*/
    useEffect(() => {
        GetProductData();
        if (apicall === true) {
            setApiCall(false)
        }
    }, [productId, apicall]);

    /* FUnction to get Add Varient */
    const AddVarient = () => {
        props.setProductVarientId("")
        props.setVarientModalShow(true)
        props.close()
    }

    /*Function to edit Product Varient */
    const EditVarient = (id, varId) => {
        props.setProductID(id)
        props.setProductVarientId(varId)
        props.setVarientModalShow(true)
        props.close()
    }

    /*Funtion to Add Varient Image */
    const AddImage = (id, varId, des) => {
        props.setProductID(id)
        props.setProductVarientId(varId)
        props.setProductDescription(des)
        props.setDocsShow(true)
        props.close()
    }
    /*Funtion to delete Product Varient */
    const handleAlert = (id) => {
        setVarId(id)
        setDeleteAlter(true)
    }
    /*Function to delete Varient */
    const onDeleteVarient = async () => {
        let response = await DeletProductVarient(1, varId)
        if (response.response === 'update successfully') {
            setApiCall(true)
            setDeleteAlter(false)
        }
    }
    return (
        <>
            <Modal
                size="xl"
                show={props.show}
                onHide={props.close}
                aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Product Varient
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col xs={6} md={6}>
                                <Image src={proData.all_images_url ? ` ${proData.all_images_url}/171x180` : `${defaultImg}/171x180`}
                                    alt={proData.seo_tag}
                                    fluid roundedCircle />
                            </Col>
                            <Col xs={6} md={6}>
                                <h3> {proData.name}</h3>
                                <p>{proData.description}</p>
                                <p>{proData.category}</p>
                                <p>{proData.benefits}</p>
                                <p>{proData.care_and_Instructions}</p>
                            </Col>
                        </Row>
                    </Container>
                    <div >{console.log(proVarientData)}
                        {proVarientData.length > 0 ?
                            <>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Brand</th>
                                            <th>Category</th>
                                            <th>Review</th>
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
                                            item.verient_is_deleted === 1 ? null :
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.verient_name}</td>
                                                    <td>{item.brand}</td>
                                                    <td>{item.category}</td>
                                                    <td>{item.review}</td>
                                                    <td>{item.mrp}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.discount}</td>
                                                    <td>{item.gst}</td>
                                                    <td>
                                                        <Button
                                                            className="btn-warning mx-2"
                                                            onClick={() => AddImage(item.id, item.product_verient_id, item.description)}
                                                        >
                                                            Add Images
                                                        </Button>
                                                        <Button
                                                            onClick={() => EditVarient(item.id, item.product_verient_id)}
                                                        >
                                                            <BiEdit />
                                                        </Button>
                                                        <Button
                                                            type="button"
                                                            className="btn btn-danger"
                                                            onClick={() => handleAlert(item.product_verient_id)}
                                                        >
                                                            <BsTrash />
                                                        </Button>
                                                    </td>
                                                </tr>
                                        )}
                                    </tbody>
                                </Table>
                                <div className='d-flex justify-content-center'> <Button
                                    className="btn-info mx-2"
                                    onClick={() => AddVarient()}>
                                    Add More Varient
                                </Button>
                                </div>
                            </>
                            :
                            <div className='d-flex justify-content-center'> <Button
                                className="btn-info mx-2"
                                onClick={() => AddVarient()}>
                                Add Varient
                            </Button>
                            </div>}
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
    )
}
