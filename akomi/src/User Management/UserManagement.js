import React, { useState, useEffect } from 'react'
import './UserManagement.css'
import Header from '../Header/Header';
import DataGrid from 'devextreme-react/data-grid';
import { customers } from './Data';
import { Column, } from 'devextreme-react/data-grid';
import NewUser from './NewUser/NewUser';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { TextBox, Button as TextBoxButton } from 'devextreme-react/text-box';
import {
    Validator, RequiredRule, CompareRule, EmailRule, PatternRule, StringLengthRule, RangeRule, AsyncRule,
} from 'devextreme-react/validator';
function UserManagement() {
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

    function renderGridCellAddPhotos(data) {
        return (
            <img
                src={require("../Images/Profile.png")}
                className="profileimg"
                style={{
                    padding: '5px 17px 5px 17px',
                    color: 'black',
                    margin: '0px 0px',
                    borderRadius: '4px',
                    width: '72px',
                    height: '40px',
                    margin: 'auto auto',
                    borderRadius: "44%",
                    cursor: "zoom-in"
                }}

            />
        )
    }

    function renderGridCellbutton(data) {
        return (
            <div>
                <img src={require("../Images/edit1.png")}
                    style={{
                        width: "16px",
                        height: "16px",
                        marginLeft: "5px",
                        marginRight: "20px"
                    }}
                    onClick={handleShow}
                />
                <img src={require("../Images/Delete.png")}
                    style={{
                        width: "21px",
                        height: "21px"
                    }}
                />
            </div>
        )
    }

    return (
        <React.Fragment>
            <div>
                <Header />
                <Button className="closebtn" onClick={handleShow}
                    style={{
                    marginLeft:"auto",
                    marginRight:"46px",
                 }}
                > 
                Add User
            </Button>
            <div className='managment_buttons'>
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
                                <TextBox inputAttr={nameLabel}>
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

            {/* <div className='managment_buttons' style={{ marginTop: "10px" }}>
                    <input type='text' placeholder='Search By Name' name='search by name' id="search_by_name"
                       style={{
                        width:"188px",
                        height:"24px",
                        borderRadius:"5px",
                        border:"1px solid gray",
                        textAlign: "center"
                       }}
                    />
                    <Button variant="light" style={{ border: "1px solid #DEE2E6", fontSize: "11px", marginLeft: "8px", width: "15px",height:"24px" }}>
                        <img src={require("../Images/refresh.png")} style={{ width: "14px", height: "14px" }}></img>
                    </Button>
                </div> */}
            <DataGrid
                dataSource={customers}
                keyExpr="ID"
                // defaultColumns={columns}
                showBorders={true}
                showColumnLines={true}
                showRowLines={true}
                id="userGrid"
            >
                {/* <SearchPanel visible={true}
                        width={140}
                        placeholder="Search..."
                        inputProps={{ id: "customSearchInput" }}
                    /> */}
                <Column dataField="ID" width={'79px'} />
                <Column dataField="Photo" cellRender={renderGridCellAddPhotos} />
                <Column dataField="Name" />
                <Column dataField="Email" />
                <Column dataField="MobileNumber" />
                <Column dataField="CreatedBy" />
                <Column dataField="CreatedOn" />
                <Column dataField="Action" cellRender={renderGridCellbutton} />
            </DataGrid>
        </div>

        </React.Fragment >
    )
}
export default UserManagement;


