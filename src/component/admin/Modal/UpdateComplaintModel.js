import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useValidation from "../../common/useValidation";
import { Button, Col, InputGroup } from "react-bootstrap";
import { UpdateComplaintFromVendor } from "../../api/api";
export default function UpdateComplaintModel(props) {
  const initialFormState = {
    id: props.id,
    status: "",
    resolve_description: "",
  };

  /*Close function */
  function Close() {
    setState(initialFormState);
    setErrors("");
    props.close();
  }
  /*Function to get the category data */

  /* Validation function */
  const validators = {
    status: [
      (value) => (value === null || value === "" ? "Status is required" : null),
    ],
    resolve_description: [
      (value) =>
        value === null || value === ""
          ? "Description  is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character"
          : null,
    ],
  };

  /* Validation imported from the validation custom hook */
  const { state, setState, onInputChange, setErrors, errors, validate } =
    useValidation(initialFormState, validators);

  /* Function to Add category */
  const OnUpdateComplaintClick = async () => {
    if (validate()) {
      let response = await UpdateComplaintFromVendor(state);
      console.log("sss-" + JSON.stringify(response));
      if (response.response === "Succesfully Update Complaint") {
        props.close();
        // props.setApiCall(true);
        props.setupdateAlertMessage(true);
        setState(initialFormState);
      }
    }
  };

  return (
    <>
      <Modal
        size="md"
        show={props.show}
        onHide={() => Close()}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form className="p-2 addproduct_form">
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Update Complaint
            </Modal.Title>
          </Modal.Header>
          <div className="row">
            <div className="col-12">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  Status<small className="text-danger">*</small>
                </Form.Label>
                <Form.Select
                  aria-label="Complaint"
                  size="sm"
                  className="w-100"
                  onChange={onInputChange}
                  name="status"
                  value={state.status}
                >
                  <option>Select status</option>

                  <option value="pending">Pending</option>

                  <option value="resolved">Resolved </option>
                </Form.Select>

                {errors.status
                  ? (errors.status || []).map((error, i) => {
                      return (
                        <small className="text-danger" key={i}>
                          {error}
                        </small>
                      );
                    })
                  : null}
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label className="" column sm="12">
                  Resolved Description
                  {/* <span className="text-danger">*</span> */}
                </Form.Label>
                <Col sm="12">
                  <InputGroup className="">
                    <Form.Control
                      size="lg"
                      rows={5}
                      className="h-auto"
                      as="textarea"
                      name="resolve_description"
                      aria-label="With textarea"
                      onChange={onInputChange}
                      value={state.resolve_description}
                    />
                  </InputGroup>
                </Col>
              </Form.Group>
              {errors.resolve_description
                ? (errors.resolve_description || []).map((error, i) => {
                    return (
                      <small className="text-danger" key={i}>
                        {error}
                      </small>
                    );
                  })
                : null}
            </div>
            {/* <div className="col-md-6">
             
            </div> */}

            <Modal.Footer>
              <div className="col-md-3 col-sm-4 p-2 text-center">
                <div className="manufacture_date addvariety_inputbox">
                  <Button
                    variant="outline-success"
                    className="addcategoryicon w-100"
                    type={"button"}
                    onClick={() => OnUpdateComplaintClick()}
                  >
                    Update
                  </Button>
                </div>
              </div>

              <div className="col-md-3 col-sm-4 p-2 text-center">
                <div className="manufacture_date addvariety_inputbox">
                  <Button
                    variant="outline-danger"
                    className="addcategoryicon w-100"
                    // type="submit"
                    onClick={props.close}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Modal.Footer>
          </div>
        </Form>
      </Modal>
    </>
  );
}
