import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useValidation from "../../common/useValidation";
import { Button } from "react-bootstrap";
import { AddCategory, UpdateCategory, GetCategoryList } from "../../api/api";
export default function AddCategoryModal(props) {
  const [catgorySubmitError, setCategoryError] = useState(false);
  const initialFormState = {
    parent_id: "",
    category_name: "",
    image: "",
    id: "",
  };

  /*Close function */
  function Close() {
    setState(initialFormState);
    setErrors("");
    props.close();
  }
  /*Function to get the category data */
  const GetCateData = async () => {
    let response = await GetCategoryList(props.id);
    if (response.status === true && props.id !== undefined) {
      setState(response.response[0]);
    }
  };

  /*Render method to get the category data */
  useEffect(() => {
    GetCateData();
  }, [props.id]);

  /* Validation function */
  const validators = {
    parent_id: [
      (value) =>
        value === null || value === "" ? "Parent Category is required" : null,
    ],
    category_name: [
      (value) =>
        value === null || value === ""
          ? "Category Name is required"
          : /[^A-Za-z 0-9]/g.test(value)
          ? "Cannot use special character"
          : null,
    ],
  };

  /* Validation imported from the validation custom hook */
  const { state, setState, onInputChange, setErrors, errors, validate } =
    useValidation(initialFormState, validators);

  /* Function to Add category */
  const OnAddCategoryClick = async () => {
    if (validate()) {
      let response = await AddCategory(state);
      console.log("response---" + JSON.stringify(response));
      if (response.code === "ER_DUP_ENTRY") {
        setCategoryError("Duplicate");
      }

      if (response.message === "Succesfully Add Category") {
        props.close();
        props.setApiCall(true);
        props.setCateAlert(true);
        setState(initialFormState);
      }
    }
  };

  /*Function to update category*/
  const OnUpdateCategoryClick = async () => {
    if (validate()) {
      let response = await UpdateCategory(state);
      if (response.message === "Succesfully Update Category") {
        props.close();
        props.setApiCall(true);
        props.setCateAlert(true);
        setState(initialFormState);
      }
    }
  };
  return (
    <>
      <Modal
        size="lg"
        show={props.show}
        onHide={() => Close()}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Form
          className="p-2 addproduct_form"
          // onSubmit={
          //     props.type === 'add' ? e => OnAddCategoryClick(e) : ''
          //     // (props) => handleUpdateProduct(props)
          // }
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {props.type === "add" ? "Add Category" : "Update Category"}
            </Modal.Title>
          </Modal.Header>
          <div className="row">
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  Parent Category<small className="text-danger">*</small>
                </Form.Label>
                <Form.Select
                  value={"" || state.parent_id}
                  name="parent_id"
                  className={
                    errors.parent_id
                      ? "form-control border border-danger"
                      : "form-control"
                  }
                  onChange={onInputChange}
                  id="parent_id"
                >
                  <option value="">Select Parent Category</option>
                  {(props.Parent || []).map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.category_name}
                    </option>
                  ))}
                  <option value={0}>Add New Parent Category</option>
                </Form.Select>

                {errors.parent_id
                  ? (errors.parent_id || []).map((error, i) => {
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
                  {state.parent_id === ("0" || 0)
                    ? "Category Name"
                    : "Sub Category Name"}{" "}
                  <small className="text-danger">*</small>
                </Form.Label>
                <Form.Control
                  className={
                    errors.category_name
                      ? "form-control border border-danger"
                      : "form-control"
                  }
                  type="text"
                  placeholder={
                    state.parent_id === ("0" || 0)
                      ? "Category Name"
                      : "Sub Category Name"
                  }
                  value={"" || state.category_name}
                  name="category_name"
                  onChange={onInputChange}
                  id="category_name"
                />
                {errors.category_name
                  ? (errors.category_name || []).map((error, i) => {
                      return (
                        <small className="text-danger" key={i}>
                          {error}
                        </small>
                      );
                    })
                  : null}

                {catgorySubmitError === "Duplicate" ? (
                  <small className="text-danger">
                    Category allready exists
                  </small>
                ) : null}
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group className="mb-3">
                <Form.Label className="" column sm="12">
                  Image
                </Form.Label>
                <Form.Control
                  type="file"
                  name={"image"}
                  onChange={(e) =>
                    setState({ ...state, image: e.target.files[0] })
                  }
                  id="image"
                />
              </Form.Group>
            </div>
            <Modal.Footer>
              <div className="col-md-3 col-sm-4 p-2 text-center">
                <div className="manufacture_date addvariety_inputbox">
                  <Button
                    variant="outline-success"
                    className="addcategoryicon w-100"
                    type={"button"}
                    onClick={
                      props.type === "add"
                        ? () => OnAddCategoryClick()
                        : () => OnUpdateCategoryClick()
                    }
                  >
                    {props.type === "add" ? "Add Category" : "Update Category"}
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
