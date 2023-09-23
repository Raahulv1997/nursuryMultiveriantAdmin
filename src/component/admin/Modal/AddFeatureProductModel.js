import React from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useValidation from "../../common/useValidation";
import { Button } from "react-bootstrap";
import { AddFeatureProductFuntion } from "../../api/api";
export default function AddFeatureProductModel(props) {
  const initialFormState = {
    product_id: props.id,
    fetured_type: "",
    start_date: "",
    end_date: "",
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
    fetured_type: [
      (value) =>
        value === null || value === "" ? "fetured type is required" : null,
    ],
    start_date: [
      (value) =>
        value === null || value === "" ? "Start Date  is required" : null,
    ],
    end_date: [
      (value) =>
        value === null || value === "" ? "End Date  is required" : null,
    ],
  };

  /* Validation imported from the validation custom hook */
  const { state, setState, onInputChange, setErrors, errors, validate } =
    useValidation(initialFormState, validators);

  /* Function to Add category */
  const onAddFeatureSubmit = async () => {
    if (validate()) {
      console.log("state---" + JSON.stringify(state));

      let response = await AddFeatureProductFuntion(state);
      console.log("sss-" + JSON.stringify(response));
      if (response.results.affectedRows === 1) {
        props.close();
        // props.setApiCall(true);
        props.setShowFeatureProductAlert(true);
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
              Add Feature product
            </Modal.Title>
          </Modal.Header>
          <div className="row">
            <div className="col-12">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  Feature Type<small className="text-danger">*</small>
                </Form.Label>
                <Form.Select
                  aria-label="Complaint"
                  size="sm"
                  className="w-100"
                  onChange={onInputChange}
                  name="fetured_type"
                  value={state.fetured_type}
                >
                  <option>Select type</option>

                  <option value="featured_offer"> Featured Offer</option>

                  <option value="special_offer">Special Offer </option>
                </Form.Select>

                {errors.fetured_type
                  ? (errors.fetured_type || []).map((error, i) => {
                      return (
                        <small className="text-danger" key={i}>
                          {error}
                        </small>
                      );
                    })
                  : null}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  Start Date
                  <small className="text-danger">*</small>
                </Form.Label>
                <Form.Control
                  type="date"
                  className={
                    errors.start_date
                      ? "form-control border border-danger"
                      : "form-control"
                  }
                  value={state.start_date}
                  name="start_date"
                  onChange={onInputChange}
                  id="start_date"
                />
                {errors.start_date
                  ? (errors.start_date || []).map((error) => {
                      return <small className="text-danger">{error}</small>;
                    })
                  : null}
              </Form.Group>
            </div>

            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  End Date
                  <small className="text-danger">*</small>
                </Form.Label>
                <Form.Control
                  type="date"
                  className={
                    errors.end_date
                      ? "form-control border border-danger"
                      : "form-control"
                  }
                  value={state.end_date}
                  name="end_date"
                  onChange={onInputChange}
                  id="end_date"
                />
                {errors.end_date
                  ? (errors.end_date || []).map((error) => {
                      return <small className="text-danger">{error}</small>;
                    })
                  : null}
              </Form.Group>
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
                    onClick={onAddFeatureSubmit}
                  >
                    Add Feature
                  </Button>
                </div>
              </div>

              <div className="col-md-3 col-sm-4 p-2 text-center">
                <div className="manufacture_date addvariety_inputbox">
                  <Button
                    variant="outline-danger"
                    className="addcategoryicon w-100"
                    // type="submit"
                    // onClick={props.close}
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
