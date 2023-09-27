import React from 'react'
import './NewUser.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import SelectBox from 'devextreme-react/select-box';
import CheckBox from 'devextreme-react/check-box';
import { TextBox, Button as TextBoxButton } from 'devextreme-react/text-box';
import DateBox from 'devextreme-react/date-box';

import ValidationSummary from 'devextreme-react/validation-summary';
import {
    Validator,
    RequiredRule,
    CompareRule,
    EmailRule,
    PatternRule,
    StringLengthRule,
    RangeRule,
    AsyncRule,
} from 'devextreme-react/validator';

function NewUser() {
    const emailLabel = { 'aria-label': 'Email' };
    const nameLabel = { 'aria-label': 'Name' };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePhoneChange = (value) => {
        setPhoneNumber(value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submitted phone number here
        console.log('Submitted phone number:', phoneNumber);
    }
    let asyncValidation = () => {
        return true
    }

    return (
        <div className='managment_buttons'>
            <Button className="closebtn" onClick={handleShow}>
                Add User
            </Button>

            <Modal show={show} onHide={handleClose} className="NewUser">
                <Modal.Header closeButton>
                    <Modal.Title><p className="add_user">Add User</p></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="user_Info">
                        <p className="user_Information">User Information</p>
                    </div>
                    {/* name */}
                    <div className="dx-field">
                        <div className="dx-field-label">*Name</div>
                        <div className="dx-field-value">
                            <TextBox  inputAttr={nameLabel}>
                                <Validator>
                                    <RequiredRule message="Name is required" />
                                    <PatternRule message="Do not use digits in the Name" />
                                    <StringLengthRule message="Name must have at least 2 symbols" min={2} />
                                </Validator>
                            </TextBox>
                        </div>
                    </div>
                    {/* Email */}
                    <div className="dx-field">
                        <div className="dx-field-label">*Email</div>
                        <div className="dx-field-value">
                            <TextBox inputAttr={emailLabel}>
                                <Validator>
                                    <RequiredRule message="Email is required" />
                                    <EmailRule message="Email is invalid" />
                                    <AsyncRule
                                        message="Email is already registered"
                                        validationCallback={asyncValidation}
                                    />
                                </Validator>
                            </TextBox>
                        </div>
                    </div>
                    {/* password */}
                    <div className="dx-field">
                        <div className="dx-field-label">*Password</div>
                        <div className="dx-field-value">
                            <TextBox
                            // mode={this.state.passwordMode}
                            // value={this.state.password}
                            // inputAttr={passwordLabel}
                            // onValueChanged={this.onPasswordChanged}
                            >
                                <TextBoxButton
                                    name="password"
                                    location="after"
                                // options={this.passwordButton}
                                />
                                <Validator>
                                    <RequiredRule message="Password is required" />
                                </Validator>
                            </TextBox>
                        </div>
                    </div>
                    {/* conform password */}
                    <div className="dx-field">
                        <div className="dx-field-label">*Confirm Password</div>
                        <div className="dx-field-value">
                            <TextBox
                            // value={this.state.confirmPassword}
                            //inputAttr={passwordLabel}
                            // onValueChanged={this.onConfirmPasswordChanged}
                            //</div> mode={this.state.confirmPasswordMode}
                            >
                                <TextBoxButton
                                    name="password"
                                    location="after"
                                // options={this.confirmPasswordButton}
                                />
                                {/*onInitialized={this.onInit}*/}
                                <Validator  >
                                    <RequiredRule message="Confirm Password is required" />
                                    <CompareRule message="Password and Confirm Password do not match" />
                                </Validator>
                            </TextBox>
                        </div>
                    </div>
                    {/* Mobile No */}
                    <div className="dx-field">
                        <div className="dx-field-label">*Phone </div>
                        <div className="dx-field-value">
                            <TextBox
                                mask="+1 (X00) 000-0000"
                                //inputAttr={maskLabel}
                                // maskRules={this.phoneRules}
                                maskInvalidMessage="The phone must have a correct USA phone format"
                                validationMessagePosition="left">
                                <Validator>
                                    <PatternRule message="The phone must have a correct USA phone format" />
                                </Validator>
                            </TextBox>
                        </div>
                    </div>
                    {/* File */}
                    <Form.Group className="position-relative mb-3 profile_phto_input">
                        <Form.Label className="file">Profile Photo</Form.Label>
                        <Form.Control
                            type="file"
                            required
                            name="file"
                           // onChange={handleChange}
                           // isInvalid={!!errors.file}
                        />
                        <Form.Control.Feedback type="invalid" tooltip>
                          {/*  {errors.file} */}
                        </Form.Control.Feedback>
                    </Form.Group>
                   
                </Modal.Body>

                <Modal.Footer>
                    <Button className="closebtn" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default NewUser