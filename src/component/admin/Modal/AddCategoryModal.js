import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import useValidation from '../../common/useValidation';
import { Button } from 'react-bootstrap';
import { AddCategory } from "../../api/api"
export default function AddCategoryModal(props) {
    const initialFormState = {
        parent_id: '',
        new_category: '',
        image: '',
        category_type: ''
    };

    /* Validation function */
    const validators = {
        parent_id: [
            value => (value === null || value === '') ? 'Parent Category is required' : null
        ],
        new_category: [
            value => (value === null || value === '') ? 'Category Name is required' : /[^A-Za-z 0-9]/g.test(value) ? 'Cannot use special character' : null
        ],
        category_type: [
            value => (value === null || value === '') ? 'Image is required' : null
        ],
        // image: [
        //     value => (value === null || value === '') ? 'Image is required' : null
        // ]
    };

    /* Validation imported from the validation custom hook */
    const { state, setState, onInputChange, setErrors, errors, validate } = useValidation(initialFormState, validators);

    /* Function to Add category */
    const OnAddCategoryClick = async () => {
        if (validate()) {
            let response = await AddCategory(state)
            if (response.message === "Succesfully Add Category") {
                props.close()
                props.setApiCall(true)
                props.setCateAlert(true)
            }

        }
    };
    console.log(state.image)
    return (
        <>
            <Modal size="lg" show={props.show} onHide={props.close} aria-labelledby="example-modal-sizes-title-lg">
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
                                    onChange={onInputChange}
                                    id="parent_id">
                                    <option value="">Select Parent Category</option>
                                    {(props.Parent || []).map((item, index) =>
                                    (
                                        <option value={item.id} key={index}>
                                            {item.category_name}
                                        </option>
                                    )
                                    )}
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
                                    {state.parent_id === "0"
                                        ? "Category Name"
                                        : "Sub Category Name"} <small className="text-danger">*</small>
                                </Form.Label>
                                <Form.Control
                                    className={
                                        errors.new_category
                                            ? "form-control border border-danger"
                                            : "form-control"
                                    }
                                    type="text"
                                    value={"" || state.new_category}
                                    name="new_category"
                                    onChange={onInputChange}
                                    id="new_category"
                                />
                                {errors.new_category
                                    ? (errors.new_category || []).map((error, i) => {
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
                                    Category Type<small className="text-danger">*</small>
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    value={"" || state.category_type}
                                    name="category_type"
                                    onChange={onInputChange}
                                    id="category_type"
                                />
                                {errors.category_type
                                    ? (errors.category_type || []).map((error, i) => {
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
                                    Image
                                </Form.Label>
                                <Form.Control
                                    type="file"
                                    name={"image"}
                                    onChange={(e) => setState({ ...state, image: e.target.files[0] })}

                                    id="image"
                                />
                            </Form.Group>
                        </div>

                        <div className="col-md-3 col-sm-4 p-2 text-center">
                            <div className="manufacture_date addvariety_inputbox">
                                <Button
                                    variant="outline-success"
                                    className="addcategoryicon w-100"
                                    type={"button"}
                                    onClick={() => OnAddCategoryClick()}>
                                    {props.type === "add" ?
                                        "Add Category"
                                        : "Update Category"}
                                </Button>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-4 p-2 text-center">
                            <div className="manufacture_date addvariety_inputbox">
                                <Button
                                    variant="outline-danger"
                                    className="addcategoryicon w-100"
                                    // type="submit"
                                    onClick={props.close}>
                                    Cancel
                                </Button>
                            </div>
                        </div>
                    </div>
                </Form>
            </Modal>
        </>
    );
}
