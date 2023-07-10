import React, { useEffect, useState } from "react";
import Sidebar from "../common/sidebar";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DataTable from "react-data-table-component";
import Loader from "../common/loader";
import moment from "moment";
import { GetComplaintList, UpdateComplainStatus } from "../api/api"
import SweetAlert from "sweetalert-react";
import "sweetalert/dist/sweetalert.css";
import useValidation from "../common/useValidation";

export default function Complaint() {
    const [loading, setLoading] = useState(true)
    const [apicall, setApicall] = useState(false)
    const [statusAlert, setStatusAlert] = useState(false)
    // const [alertMessage, setAlertMessage] = useState(false)
    const [CompData, setCompData] = useState([])
    /*Initial state and validation to search Complaint by product and status */
    // const initialFormState = {
    //     product_name: "",
    //     status: "",
    // };
    // const validators = {
    //     product_name: [
    //         (value) =>
    //             value === null || value === ""
    //                 ? "Product name is requried"
    //                 : /[^A-Za-z 0-9]/g.test(value)
    //                     ? "Cannot use special character "
    //                     : null,
    //     ],
    // };
    // const { state, setState, onInputChange,setErrors, errors, validate } = useValidation(
    //     initialFormState,
    //     validators
    // );

    /*Search function  */
    // const OnSearch = async () => {
    //     if (validate()) {
    //         GetComplaintData()
    //     }
    // }

    /*Function to reset the search feilds */
    // const OnReset = () => {
    //     setErrors("")
    //     setApicall(true)
    // }

    /*Function to get the Complaint list */
    const GetComplaintData = async (name, status) => {
        let response = await GetComplaintList(name, status)
        if (response.result) {
            setCompData(response.result)
            setLoading(false)
        }
    }

    /*Render method to get the Complaint list */
    useEffect(() => {
        GetComplaintData()
        if (apicall === true) {
            setApicall(false)
        }
    }, [apicall])

    /*Complaint Table Data */
    const columns = [
        {
            name: "Sr. No",
            selector: (_, i) => (
                i + 1
            ),
            sortable: true,
            width: "100px",
            center: true,
        },
        {
            name: "User Name",
            selector: (row) => row.first_name + row.last_name,
            sortable: true,
            width: "100px",
            center: true,
            style: {
                paddingRight: "32px",
                paddingLeft: "0px",
            },
        },

        {
            name: "Email",
            selector: (row) => (
                <p>
                    {row.email}
                    <br />{row.contect_no}
                </p>
            ),
            sortable: true,
            width: "100px",
            center: true,
            style: {
                paddingLeft: "0px",
            },
        },

        {
            name: "Complain",
            selector: (row) => row.for_complain,
            sortable: true,
            width: "100px",
            center: true,
        },
        {
            name: "Subject",
            selector: (row) =>row.subject,
            sortable: true,
            width: "150px",
            center: true,
        },
        {
            name: "Description",
            selector: (row) => row.description,
            sortable: true,
            width: "200px",
            center: true,
        },
         {
            name: "Complaint date",
            selector: (row) => moment(row.created_on).format("DD-MM-YYYY"),
            sortable: true,
            width: "150px",
            center: true,
        },
        {
            name: "Complaint Status",
            width: "150px",
            selector: (row) => (
                <Form.Select
                    aria-label="Complaint"
                    size="sm"
                    className="w-100"
                    onChange={(e) => onStatusChange(e, row.id)}
                    name="status_order"
                    value={row.status_}
                >
                    <option value="">Select status</option>
                    <option value="pending">Pending</option>
                    <option value="cancel">Cancel</option>
                    <option value="resolved">Resolved </option>
                    <option value="reject">Reject </option>
                </Form.Select>
            ),
            sortable: true,
        },

    ];

    /*Function to Change Complaint status */
    const onStatusChange = async (e, id) => {
        let response = await UpdateComplainStatus(e.target.value, id)
        if (response.response === "Succesfully Update Complaint") {
            setStatusAlert(true)
        }
    }

    /*Function to close alert box */
    const CloseAlert = () => {
        setStatusAlert(false)
        setApicall(true)
    }
    return (
        <div>
            <div className="row admin_row">
                <div className="col-lg-3 col-md-3 admin_sidebar bg-white">
                    <Sidebar />
                </div>
                <div className="col-lg-9 col-md-9 admin_content_bar">
                    <div className="main_content_div">
                        <div
                            className="dashboard-main-container mt-df25 mt-lg-31"
                            id="dashboard-body"
                        >
                            <div className="">
                                <div className="page_main_contant">
                                    {loading === true ? <Loader /> : null}
                                    <h4>Complaint List</h4>
                                    <div className=" mt-3 p-3">
                                        {/* <div className="row pb-3">
                                            <div className="col-md-3 col-sm-6 aos_input mb-2">
                                                <Form.Group className="mb-3">
                                                    <Form.Control
                                                        type="text"
                                                        className={
                                                            errors.product_name
                                                                ? "form-control border border-danger"
                                                                : "form-control"
                                                        }
                                                        placeholder="Search by Product name"
                                                        name="product_name"
                                                        onChange={onInputChange}
                                                        value={state.product_name}
                                                    />
                                                </Form.Group>
                                                {errors.product_name
                                                    ? (errors.product_name || []).map((error, i) => {
                                                        return (
                                                            <small className="text-danger" key={i}>
                                                                {error}
                                                            </small>
                                                        );
                                                    })
                                                    : null}
                                            </div>
                                            <div className="col-md-3 col-sm-6 aos_input mb-2">
                                                <Form.Group className="mb-3">
                                                    <Form.Select
                                                        type="text"
                                                        className={"form-control"}
                                                        placeholder="Search by Product name"
                                                        name="status"
                                                        onChange={onInputChange}
                                                        value={state.status}
                                                    >
                                                        <option value="">Select status</option>
                                                        <option value="pending">Pending</option>
                                                        <option value="cancel">Cancel</option>
                                                        <option value="approved">Approved </option>
                                                        <option value="reject">Reject </option>
                                                    </Form.Select>
                                                </Form.Group>

                                            </div>
                                            <div className="col-md-2 col-sm-6 aos_input mb-2">
                                                <div>
                                                    <Button
                                                        type=""
                                                        name=""
                                                        value=""
                                                        className="button  btn-success main_button w-100"
                                                        onClick={OnSearch}
                                                    >
                                                        Search
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-sm-6 aos_input mb-2">
                                                <div>
                                                    <Button
                                                        type="reset"
                                                        name=""
                                                        value=""
                                                        className="button btn-success  main_button w-100"
                                                        onClick={OnReset}
                                                    >
                                                        Reset
                                                    </Button>
                                                </div>
                                            </div>
                                        </div> */}

                                        <DataTable
                                            columns={columns}
                                            data={CompData}
                                            pagination
                                            highlightOnHover
                                            pointerOnHover
                                            className={"table_body product_table"}
                                            subHeader
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SweetAlert
                        show={statusAlert}
                        title={"Status Updated successfully"}
                        text={"Status"}
                        onConfirm={() => CloseAlert()}
                        className="text-capitalize"
                    />
                </div>
            </div>
        </div>)
}
