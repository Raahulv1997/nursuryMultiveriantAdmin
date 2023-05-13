import React, { useEffect } from "react";
import { Button, Col, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import DataTable from "react-data-table-component";

import { fetchUserData } from "../api/api";
import useValidation from "../common/useValidation";
import Sidebar from "../common/sidebar";
// import useValidation from "../common/useValidation";
const UserAdd = () => {
  // const token = "admin_master_token=we2code_123456";
  const [ShowDeleteAlert, setShowDeleteAlert] = useState(false);
  const [modalshow, setmodalshow] = useState(false);

  const [userTable, setuserTable] = useState([]);
  const [apicall, setApicall] = useState(false);

  const [UserAlert, setUserAlert] = useState(false);
  const [updateUserAlert, setupdateUserAlert] = useState(false);
  const [searchdata, setsearchData] = useState({
    search: "",
  });

  const initialFormState = {
    search: "",
  };
  const [Id, setId] = useState("");

  //user data table column----
  const columns = [
    {
      name: "First name",
      selector: (row) => row.first_name,
      sortable: true,
      width: "150px",
      center: true,
      style: {
        paddingRight: "32px",
        paddingLeft: "0px",
      },
    },
    {
      name: "Last name",
      selector: (row) => row.last_name,
      sortable: true,
      width: "150px",
      center: true,
      style: {
        paddingRight: "32px",
        paddingLeft: "0px",
      },
    },

    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      width: "140px",
      center: true,
      style: {
        paddingLeft: "0px",
      },
    },

    {
      name: "Phone no",
      selector: (row) => row.phone_no,
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "PinCode",
      selector: (row) => row.pincode,
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
      sortable: true,
      width: "140px",
      center: true,
    },
    {
      name: "Alternate Address",
      selector: (row) => row.alternate_address,
      sortable: true,
      width: "140px",
      center: true,
    },
  ];

  //user search data function----

  //user searchd data useEffect....
  useEffect(() => {
    getuser();
  }, [apicall]);
  const userID = "";
  const getuser = async () => {
    const response = await fetchUserData(state.search, userID);
    // console.log("user data--" + JSON.stringify(response));
    setApicall(false);
    setuserTable(response);
  };

  const validators = {
    search: [
      (value) =>
        value === null || value === ""
          ? "Please Fill...."
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character "
          : null,
    ],
  };

  const { state, setState, onInputChange, setErrors, errors, validate } =
    useValidation(initialFormState, validators);

  //search submit button
  const submitHandler = async () => {
    if (validate()) {
      const response = await fetchUserData(state.search);
      console.log("user-----" + JSON.stringify(response));
      setApicall(false);
      setuserTable(response);
    }
  };

  //search submit reset button
  const OnReset = () => {
    setState({ search: "" });
    getuser();
    setApicall(true);
  };

  return (
    <div>
      <div className="row admin_row">
        <div className="col-lg-3 col-md-3 admin_sidebar">
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
                  <h4>User</h4>
                  <div className=" mt-3 p-3">
                    <div className="row pb-3">
                      <div className="col-md-3 col-sm-6 aos_input mb-2">
                        <Form.Group className="mb-3">
                          <Form.Control
                            type="text"
                            className={
                              errors.search
                                ? "form-control border border-danger"
                                : "form-control"
                            }
                            placeholder="Search by Firstname and email"
                            name="search"
                            onChange={onInputChange}
                            value={state.search}
                          />
                        </Form.Group>
                        {errors.search
                          ? (errors.search || []).map((error) => {
                              return (
                                <small className="text-danger">{error}</small>
                              );
                            })
                          : null}
                      </div>

                      <div className="col-md-2 col-sm-6 aos_input mb-2">
                        <div>
                          <Button
                            type=""
                            name=""
                            value=""
                            className="button  btn-success main_button w-100"
                            onClick={submitHandler}
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
                    </div>

                    <DataTable
                      columns={columns}
                      data={userTable}
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
        </div>
      </div>
    </div>
  );
};

export default UserAdd;
