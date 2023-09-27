import React, { useState, useEffect } from 'react';
import ArrayStore from 'devextreme/data/array_store';
import TagBox from 'devextreme-react/tag-box';
import './Filter.css';
import { ClaimStatusData } from './SelectFilter/ClaimStatus/data';
import filterR from '../../Images/barfilter.svg';
import filterL from '../../Images/dropdownicons.svg';
import { Button, Modal } from 'react-bootstrap';
import SelectBox from 'devextreme-react/select-box';
import { PrimaryPayerData } from '../Filter/SelectFilter/PrimaryPayer/data';
import { CPTCodeData } from '../Filter/SelectFilter/CPTCode/data';
import { FacilityData } from '../Filter/SelectFilter/Facility/data';
import { SpecialityData } from '../Filter/SelectFilter/Speciality/data';
import {
 productLabel, simpleProductLabel,
  ConfidenceLevelData, DemographicsData, InsuranceData, ProviderData
  , ICDCPTData, FeeScheduleData, AdditionalData, statusItem
} from './data.js';
import TextBox from 'devextreme-react/text-box';
import DateRangeBox from 'devextreme-react/date-range-box';
import ClaimStatus from './SelectFilter/ClaimStatus/ClaimStatus';
import PrimaryPayer from './SelectFilter/PrimaryPayer/PrimaryPayer'
import CPTCode from './SelectFilter/CPTCode/CPTCode'
import Speciality from './SelectFilter/Speciality/Speciality'
import Facility from './SelectFilter/Facility/Facility'
const dataTimeLabel = { 'aria-label': 'Date Time' };
const nameLabel = { 'aria-label': 'Name' };

const commonSettings = {
  showClearButton: true,
  useMaskBehavior: true,
  openOnFieldClick: true,
};

function Filter(props) {
  const claimStatusDataSource = new ArrayStore({
    data: ClaimStatusData,
    key: 'Name',
  });
  const PrimaryPayerDataSource = new ArrayStore({
    data: PrimaryPayerData,
    key: 'Id',
  });
  const CPTCodeDataSource = new ArrayStore({
    data: CPTCodeData,
    key: 'Id',
  });
  const FacilityDataSource = new ArrayStore({
    data: FacilityData,
    key: 'Id',
  });
  const specialityDataSource = new ArrayStore({
    data: SpecialityData,
    key: 'Id',
  });

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  }

  let [allFilterData, setAllFilterData] = useState({
    billingStatus: "",
    ConfidenceLevelData: "",
    claimStatusGroupName: [],
    primaryPayer: [],
    cptCode: [],
    facility: [],
    serviceDate: [],
    supervisingProvider: "",
    speciality: [],
    demographics: "",
    insuranceValidation: "",
    providerValidation: "",
    iCDCPT: "",
    feeSchedule: "",
    additional: "",
  });

  useEffect(() => {
    props.handleAllFiltersData(allFilterData);
    document.getElementById("flt").addEventListener("click", handleShow);
    return () => {
      //document.getElementById("flt").removeEventListener('click', handleShow);
    };
  }, []);

  let handleApply = () => {
    props.handleAllFiltersData(allFilterData);
    handleClose();
  }

  //billingStatus
  const [selectedStatus, setSelectedStatus] = useState("");
  const handleStatusChange = (e) => {
    console.log(e.value);
    setAllFilterData({ ...allFilterData, billingStatus: e.value });
    console.log("before");
    setSelectedStatus(e.value);
    console.log("after");
  };

  //ConfidenceLevelData
  const [selectedConfidenceLevel, setConfidenceLevel] = useState("");
  const handleConfidenceLevel = (e) => {
    setAllFilterData({ ...allFilterData, ConfidenceLevelData: e.value });
    setConfidenceLevel(e.value);
  };

  //claimStatusGroupName
  let [selectedClaimStatus, setselectedClaimStatus] = useState([]);
  const HandleClaimStatusGroupName = (e) => {
    setAllFilterData({ ...allFilterData, claimStatusGroupName: e.value });
    setselectedClaimStatus(e.value)
  };

  //primaryPayer
  let [selectedPrimaryPayer, setSelectedPrimaryPayer] = useState([]);
  const HandlePrimaryPayer = (e) => {
    setAllFilterData({ ...allFilterData, primaryPayer: e.value });
    setSelectedPrimaryPayer(e.value);
  };

  //cptCode
  const [selectedCPTCode, setSelectedCPTCode] = useState([]);
  const HandleCPTCode = (e) => {
    setAllFilterData({ ...allFilterData, cptCode: e.value });
    setSelectedCPTCode(e.value);
  };

  //facility
  const [selectedFacility, setSelectedFacility] = useState([]);
  const HandleFacility = (e) => {
    setAllFilterData({ ...allFilterData, facility: e.value });
    setSelectedFacility(e.value);
  };

  //serviceDate
  const [selectedServiceDate, setServiceDate] = useState("");
  const handleServiceDate = (e) => {
    setAllFilterData({ ...allFilterData, serviceDate: e.value });
    setServiceDate(e.value);
  };

  //supervisingProvider
  const [selectedSupervisingProvider, setSupervisingProvider] = useState("");
  const handleSupervisingProvider = (e) => {
    setAllFilterData({ ...allFilterData, supervisingProvider: e.value });
    setSupervisingProvider(e.value);
  };

  //Spaciality
  const [selectedSpeciality, setSelectedSpeciality] = useState([]);
  const HandleSpeciality = (e) => {
    setAllFilterData({ ...allFilterData, speciality: e.value });
    setSelectedSpeciality(e.value);
  };

  //Demographics
  const [selectedDemographics, setDemographics] = useState("");
  const handleDemographics = (e) => {
    setAllFilterData({ ...allFilterData, demographics: e.value });
    setDemographics(e.value);
  };

  //insuranceValidation
  const [selectedInsuranceValidation, setInsuranceValidation] = useState("");
  const handleInsuranceValidation = (e) => {
    setAllFilterData({ ...allFilterData, insuranceValidation: e.value });
    setInsuranceValidation(e.value);
  };

  //providerValidation
  const [selectedProviderValidation, setProviderValidation] = useState("");
  const handleProviderValidation = (e) => {
    setAllFilterData({ ...allFilterData, providerValidation: e.value });
    setProviderValidation(e.value);
  };

  //iCDCPT
  const [selectedICDCPT, setICDCPT] = useState("");
  const handleICDCPT = (e) => {
    setAllFilterData({ ...allFilterData, iCDCPT: e.value });
    setICDCPT(e.value);
  };

  //feeSchedule
  const [selectedFeeSchedule, setFeeSchedule] = useState("");
  const handleFeeSchedule = (e) => {
    setAllFilterData({ ...allFilterData, feeSchedule: e.value });
    setFeeSchedule(e.value);
  };

  //additional
  const [selectedAdditional, setAdditional] = useState("");
  const handleAdditional = (e) => {
    setAllFilterData({ ...allFilterData, additional: e.value });
    setAdditional(e.value);
  };

  let handleClear = () => {

    setSelectedStatus("");

    setConfidenceLevel("");

    setselectedClaimStatus([]);

    setSelectedPrimaryPayer([]);

    setSelectedCPTCode([]);

    setSelectedFacility([]);

    setServiceDate([]);

    setSupervisingProvider("");

    setSelectedSpeciality([]);

    setDemographics("");

    setInsuranceValidation("");

    setProviderValidation("");

    setICDCPT("");

    setFeeSchedule("");

    setAdditional("");

    allFilterData.billingStatus = "";
    allFilterData.ConfidenceLevelData = "";
    allFilterData.claimStatusGroupName = [];
    allFilterData.primaryPayer = [];
    allFilterData.cptCode = [];
    allFilterData.facility = [];
    allFilterData.serviceDate = [];
    allFilterData.supervisingProvider = "";
    allFilterData.speciality = [];
    allFilterData.demographics = "";
    allFilterData.insuranceValidation = "";
    allFilterData.providerValidation = "";
    allFilterData.iCDCPT = "";
    allFilterData.feeSchedule = "";
    allFilterData.additional = "";
  }

  return (
    <>
      <div className="filter" id="flt" onClick={handleShow} >
        <div className="filter-child" >
          <img src={filterR} alt="filterL-img" className="filterL-img" />
          <p class="filter-text" >Filter</p>
          <img src={filterL} alt="filterR-img" className="filterR-img" />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} id="exampleModal">
        <Modal.Header closeButton>
          <Modal.Title id="exampleModalLabel filter-title">Quick Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          {/* Billing status Filter */}
          <div className="dx-field">
            <div className="dx-field-label">Billing Status</div>
            <div className="dx-field-value">
              <SelectBox dataSource={statusItem}
                id="billing-status"
                searchEnabled={true}
                showClearButton={true}
                inputAttr={simpleProductLabel}
                value={selectedStatus}
                onValueChanged={handleStatusChange}

              />
            </div>
          </div>

          {/* Confidence Lavel Filter */}

          <div className="dx-field">
            <div className="dx-field-label">Confidence Level</div>
            <div className="dx-field-value">
              <SelectBox dataSource={ConfidenceLevelData}
                searchEnabled={true}
                showClearButton={true}
                inputAttr={simpleProductLabel}
                value={selectedConfidenceLevel}
                onValueChanged={handleConfidenceLevel}
              />
            </div>
          </div>

          {/* Claim status group name */}
          <div className="dx-field">
            <div className="dx-field-label">Claim status group name</div>
            <div className="dx-field-value">
              <TagBox
                dataSource={claimStatusDataSource}
                id="ClaimStatusId"
                displayExpr="Name"
                searchEnabled={true}
                valueExpr="Id"
                value={selectedClaimStatus}
                onValueChanged={HandleClaimStatusGroupName}
              />
            </div>
          </div>

          {/* Primary Payer */}
          <div className="dx-field">
            <div className="dx-field-label">Primary Payer</div>
            <div className="dx-field-value">
              <TagBox
                dataSource={PrimaryPayerDataSource}
                inputAttr={productLabel}
                displayExpr="Name"
                searchEnabled={true}
                valueExpr="Id"
                value={selectedPrimaryPayer}
                onValueChanged={HandlePrimaryPayer}
              />
            </div>
          </div>
          {/* CPT Code */}
          <div className="dx-field">
            <div className="dx-field-label">CPT Code</div>
            <div className="dx-field-value">
              <TagBox
                dataSource={CPTCodeDataSource}
                inputAttr={productLabel}
                displayExpr="Name"
                searchEnabled={true}
                valueExpr="Id"
                value={selectedCPTCode}
                onValueChanged={HandleCPTCode}
              />
            </div>
          </div>

          {/* Facility */}
          <div className="dx-field">
            <div className="dx-field-label">Facility</div>
            <div className="dx-field-value">
              <TagBox
                dataSource={FacilityDataSource}
                inputAttr={productLabel}
                displayExpr="Name"
                searchEnabled={true}
                valueExpr="Id"
                value={selectedFacility}
                onValueChanged={HandleFacility}
              />
            </div>
          </div>
          {/* Servise Date */}

          <div className="dx-field">
            <div className="dx-field-label">Service Date</div>
            <div className="dx-field-value">
              <DateRangeBox
                startDatePlaceholder="12/31/2018"
                endDatePlaceholder="12/31/2018"
                showClearButton={true}
                {...commonSettings}
                type="datetime"
                inputAttr={dataTimeLabel}
                value={selectedServiceDate}
                onValueChanged={handleServiceDate}
              />
            </div>
          </div>
          {/* Supervising Provider  */}
          <div className="dx-field">
            <div className="dx-field-label">Supervising Provider</div>
            <div className="dx-field-value">
              <TextBox
                inputAttr={nameLabel}
                showClearButton={true}
                value={selectedSupervisingProvider}
                onValueChanged={handleSupervisingProvider} />
            </div>
          </div>

          {/* Speciality */}
          <div className="dx-field">
            <div className="dx-field-label">Speciality</div>
            <div className="dx-field-value">
              <TagBox
                dataSource={specialityDataSource}
                inputAttr={productLabel}
                displayExpr="Name"
                searchEnabled={true}
                valueExpr="Id"
                value={selectedSpeciality}
                onValueChanged={HandleSpeciality}
              />
            </div>
          </div>

          {/* Demographics Filter */}

          <div className="dx-field">
            <div className="dx-field-label">Demographics</div>
            <div className="dx-field-value">
              <SelectBox dataSource={DemographicsData}
                searchEnabled={true}
                showClearButton={true}
                inputAttr={simpleProductLabel}
                value={selectedDemographics}
                onValueChanged={handleDemographics} 
              />
            </div>
          </div>

          {/* Insurance Validation Filter */}
          <div className="dx-field">
            <div className="dx-field-label">Insurance Validation</div>
            <div className="dx-field-value">
              <SelectBox dataSource={InsuranceData}
                searchEnabled={true}
                showClearButton={true}
                inputAttr={simpleProductLabel}
                value={selectedInsuranceValidation}
                onValueChanged={handleInsuranceValidation}
              />
            </div>
          </div>

          {/* Provider Validation Filter */}

          <div className="dx-field">
            <div className="dx-field-label">Provider Validation</div>
            <div className="dx-field-value">
              <SelectBox dataSource={ProviderData}
                searchEnabled={true}
                showClearButton={true}
                inputAttr={simpleProductLabel}
                value={selectedProviderValidation}
                onValueChanged={handleProviderValidation}
              />
            </div>
          </div>

          {/* ICD-CPT Filter */}
          <div className="dx-field">
            <div className="dx-field-label">ICD-CPT</div>
            <div className="dx-field-value">
              <SelectBox dataSource={ICDCPTData}
                searchEnabled={true}
                showClearButton={true}
                inputAttr={simpleProductLabel}
                value={selectedICDCPT}
                onValueChanged={handleICDCPT}
              />
            </div>
          </div>

          {/* Fee Schedule Filter */}

          <div className="dx-field">
            <div className="dx-field-label">Fee Schedule</div>
            <div className="dx-field-value">
              <SelectBox dataSource={FeeScheduleData}
                searchEnabled={true}
                showClearButton={true}
                inputAttr={simpleProductLabel}
                value={selectedFeeSchedule}
                onValueChanged={handleFeeSchedule}
              />
            </div>
          </div>

          {/* Additional Filter */}

          <div className="dx-field">
            <div className="dx-field-label">Additional</div>
            <div className="dx-field-value">
              <SelectBox dataSource={AdditionalData}
                searchEnabled={true}
                showClearButton={true}
                inputAttr={simpleProductLabel}
                value={selectedAdditional}
                onValueChanged={handleAdditional}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClear} className="closebtn">
            Clear All
          </Button>
          <Button variant="primary" onClick={handleApply}>Apply</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Filter;
