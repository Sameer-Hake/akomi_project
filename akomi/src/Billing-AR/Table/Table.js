import React, { useState, useEffect, useRef } from 'react';
import DataGrid, {
  Column,
  Selection,
  SearchPanel,
  Paging,
  Pager
} from 'devextreme-react/data-grid';
import { NavLink } from 'react-router-dom';
import data from './Data.json';
import './Table.css';
import { ClaimStatusData } from '../Filter/SelectFilter/ClaimStatus/data'
import { CPTCodeData } from '../Filter/SelectFilter/CPTCode/data'
import { FacilityData } from '../Filter/SelectFilter/Facility/data'
import { PrimaryPayerData } from '../Filter/SelectFilter/PrimaryPayer/data'
import { SpecialityData } from '../Filter/SelectFilter/Speciality/data'

const renderGridCellBilling = (data) => {
  let status = data.values[1];
  let value = data.values[1].toLowerCase();
  let bg = '';
  if (value === 'failed') {
    bg = '#FF0000';
  } else if (value === 'success') {
    bg = '#008000';
  } else if (value === 'review') {
    bg = '#0070D2';
  }

  return (
    <div
      className="customstyle"
      style={{
        backgroundColor: bg,
        padding: '5px 17px 5px 17px',
        color: 'white',
        borderRadius: '4px',
        width: '69px',
        height: '21px',
        margin: '0px 12.5px',
      }}
    >
      {status}
    </div>
  );
};

let renderGridCellCustom1 = (data) => {
  let val = data.values[8];
  let bg = '';
  if (val <= 50) {
    bg = '#FBDBDB';
  } else {
    bg = '#BEEFBE';
  }
  return (
    <div
      className="customstyle"
      style={{
        backgroundColor: bg,
        padding: '5px 17px 5px 17px',
        color: 'black',
        margin: '0px 0px',
        borderRadius: '4px',
        width: '64px',
        height: '21px',
        margin: 'auto auto',
      }}
    >
      {val}
    </div>
  );
};
let renderGridCellCustom2 = (data) => {
  let val = data.values[9];
  let bg = '';
  if (val <= 50) {
    bg = '#FBDBDB';
  } else {
    bg = '#BEEFBE';
  }
  return (
    <div
      className="customstyle"
      style={{
        backgroundColor: bg,
        padding: '5px 17px 5px 17px',
        color: 'black',
        margin: '0px 0px',
        borderRadius: '4px',
        width: '64px',
        height: '21px',
        margin: 'auto auto',
      }}
    >
      {val}
    </div>
  );
};
let renderGridCellCustom3 = (data) => {
  let val = data.values[10];
  let bg = '';
  if (val <= 50) {
    bg = '#FBDBDB';
  } else {
    bg = '#BEEFBE';
  }
  return (
    <div
      className="customstyle"
      style={{
        backgroundColor: bg,
        padding: '5px 17px 5px 17px',
        color: 'black',
        margin: '0px 0px',
        borderRadius: '4px',
        width: '64px',
        height: '21px',
        margin: 'auto auto',
      }}
    >
      {val}
    </div>
  );
};
let renderGridCellCustom4 = (data) => {
  let val = data.values[11];
  let bg = '';
  if (val <= 50) {
    bg = '#FBDBDB';
  } else {
    bg = '#BEEFBE';
  }
  return (
    <div
      className="customstyle"
      style={{
        backgroundColor: bg,
        padding: '5px 17px 5px 17px',
        color: 'black',
        margin: '0px 0px',
        borderRadius: '4px',
        width: '64px',
        height: '21px',
        margin: 'auto auto',
      }}
    >
      {val}
    </div>
  );
};
let renderGridCellCustom5 = (data) => {
  let val = data.values[12];
  let bg = '';
  if (val <= 50) {
    bg = '#FBDBDB';
  } else {
    bg = '#BEEFBE';
  }
  return (
    <div
      className="customstyle"
      style={{
        backgroundColor: bg,
        padding: '5px 17px 5px 17px',
        color: 'black',
        margin: '0px 0px',
        borderRadius: '4px',
        width: '64px',
        height: '21px',
        margin: 'auto auto',
      }}
    >
      {val}
    </div>
  );
};
let renderGridCellCustom6 = (data) => {
  let val = data.values[13];
  let bg = '';
  if (val <= 50) {
    bg = '#FBDBDB';
  } else {
    bg = '#BEEFBE';
  }
  return (
    <div
      className="customstyle"
      style={{
        backgroundColor: bg,
        padding: '5px 17px 5px 17px',
        color: 'black',
        margin: '0px 0px',
        borderRadius: '4px',
        width: '64px',
        height: '21px',
        margin: 'auto auto',
      }}
    >
      {val}
    </div>
  );
};
const allowedPageSizes = [5, 10, 'all'];

let Table = (props) => {
  const [showColumnLines, setShowColumnLines] = useState(true);
  const [showRowLines, setShowRowLines] = useState(true);
  const [showBorders, setShowBorders] = useState(true);
  const [rowAlternationEnabled] = useState(false);
  let updatedData = data;
  const [filteredData, setFilteredData] = useState(data);
  // console.log("all filterData");
  // console.log(props.allFiltersData);
  // billingStatus:"",
  // ConfidenceLevelData:"",
  // claimStatusGroupName:[],
  // primaryPayer:[],
  // cptCode:[],
  // facility:[],
  // serviceDate:[],
  // supervisingProvider:"",
  // speciality:[],
  // demographics:"",
  // insuranceValidation:"",
  // providerValidation:"",
  // iCDCPT:"",
  // feeSchedule:"",
  // additional:"",

  let ClaimStatusSet = new Set();
  if (props.allFiltersData !== null) {
    let a = props.allFiltersData.claimStatusGroupName;

    if (a !== null || a !== undefined) {
      for (let item of a) {
        ClaimStatusSet.add(ClaimStatusData[item - 1].Name)
      }
    }
  }

  let primaryPayerSet = new Set();
  if (props.allFiltersData !== null) {
    let a = props.allFiltersData.primaryPayer;

    if (a !== null || a !== undefined) {
      for (let item of a) {
        primaryPayerSet.add(PrimaryPayerData[item - 1].Name)
      }
    }
  }

  let CPTCodeSet = new Set();
  if (props.allFiltersData !== null) {
    let a = props.allFiltersData.cptCode;

    if (a !== null || a !== undefined) {
      for (let item of a) {
        CPTCodeSet.add(CPTCodeData[item - 1].Name)
      }
    }
  }

  let FacilitySet = new Set();
  if (props.allFiltersData !== null) {
    let a = props.allFiltersData.facility;

    if (a !== null || a !== undefined) {
      for (let item of a) {
        FacilitySet.add(FacilityData[item - 1].Name)
      }
    }
  }

  let SpecialitySet = new Set();
  if (props.allFiltersData !== null) {
    let a = props.allFiltersData.speciality;

    if (a !== null || a !== undefined) {
      for (let item of a) {
        SpecialitySet.add(SpecialityData[item - 1].Name)
      }
    }
  }

  useEffect(() => {

    if (props.allFiltersData !== null) {

      //Billing Status Filter
      updatedData = updatedData.filter((item) => {
        let val = props.allFiltersData.billingStatus;
        return (item['Billing Status'] === val || val === "" || val === undefined || val === null)
      });

      //Confidence Level Filter
      updatedData = updatedData.filter((item) => {
        let val = props.allFiltersData.ConfidenceLevelData;
        if (val === "" || val === null || val === undefined) {
          return true;
        }

        let objVal = Number(props.allFiltersData.ConfidenceLevelData.substr(1, 3));
        let tableRowVal = Number(item['Confidence Level']);

        return tableRowVal < objVal;
      });

      //Claim Status Group Name Filter
      updatedData = updatedData.filter((item) => {
        let tableVal = item['Claim Status Group Name']
        if (ClaimStatusSet.has(tableVal) || ClaimStatusSet.size === 0)
          return true;
        else
          return false;
      });

      //Primary Payer Filter
      updatedData = updatedData.filter((item) => {
        let tableVal = item['Primary Payer']
        if (primaryPayerSet.has(tableVal) || primaryPayerSet.size === 0)
          return true;
        else
          return false;
      });

      //CPT Code filter
      updatedData = updatedData.filter((item) => {
        let tableVal = item['CPT Code']
        if (CPTCodeSet.has(tableVal) || CPTCodeSet.size === 0)
          return true;
        else
          return false;
      });

      //Facility Filter
      updatedData = updatedData.filter((item) => {
        let tableVal = item['Facility']
        if (FacilitySet.has(tableVal) || FacilitySet.size === 0)
          return true;
        else
          return false;
      });

      //Speciality Filter
      updatedData = updatedData.filter((item) => {
        let tableVal = item['Speciality']
        if (SpecialitySet.has(tableVal) || SpecialitySet.size === 0)
          return true;
        else
          return false;
      });

      //Supervising Provider Filter
      updatedData = updatedData.filter((item) => {
        let tableVal = item['Supervising Provider'].toLocaleLowerCase();
        let objVal = props.allFiltersData.supervisingProvider.toLocaleLowerCase();;
        //  console.log(objVal);

        if (tableVal === objVal || objVal === "" || objVal === null || objVal === undefined)
          return true;
        else
          return false;
      });

      //  Demographics Filter
      updatedData = updatedData.filter((item) => {
        let val = props.allFiltersData.demographics;
        if (val === "" || val === null || val === undefined) {
          return true;
        }

        let objVal = Number(props.allFiltersData.demographics.substr(1, 3));
        let tableRowVal = Number(item['Demographics']);
        return tableRowVal < objVal;

      });

      //Insurance Validation Filter

      updatedData = updatedData.filter((item) => {

        let insuranceVal = props.allFiltersData.insuranceValidation;

        if (insuranceVal === "" || insuranceVal === null || insuranceVal === undefined) {
          return true;
        }
        let filterVal = Number(insuranceVal.substr(1, 3));
        let tableRowVal = Number(item['Insurance Validation']);
        if (tableRowVal < filterVal) {
          //  console.log(tableRowVal +"tableRowVal"+filterVal + "filterVal"); 
        }
        return tableRowVal < filterVal;
      });

      //Provider Validation
      updatedData = updatedData.filter((tableItem) => {
        let val = props.allFiltersData.providerValidation;

        if (val === "" || val === null || val === undefined) {
          return true;
        }

        let No = Number(props.allFiltersData.providerValidation);
        let tableRowVal = Number(tableItem['Provider Validation']);
        //  console.log(No + " " + tableRowVal);
        //  console.log(typeof tableRowVal);
        //  console.log(typeof No);
        return tableRowVal === No;
      });

      //ICD-CPT Filter
      updatedData = updatedData.filter((tableItem) => {
        let val = props.allFiltersData.iCDCPT;

        if (val === "" || val === null || val === undefined) {
          return true;
        }

        let FilterObjVal = Number(props.allFiltersData.iCDCPT);
        let tableRowVal = Number(tableItem['ICD-CPT']);

        if (tableRowVal === FilterObjVal) {
          // console.log(FilterObjVal + " " + tableRowVal);
          // console.log(typeof tableRowVal);
          // console.log(typeof FilterObjVal);

        }
        return tableRowVal === FilterObjVal;
      });

      //ICD-CPT Filter
      updatedData = updatedData.filter((tableItem) => {
        let val = props.allFiltersData.feeSchedule;

        if (val === "" || val === null || val === undefined) {
          return true;
        }

        let FilterObjVal = Number(props.allFiltersData.feeSchedule);
        let tableRowVal = Number(tableItem['Fee Schedule']);

        if (tableRowVal === FilterObjVal) {
          // console.log(FilterObjVal + " " + tableRowVal);
          // console.log(typeof tableRowVal);
          // console.log(typeof FilterObjVal);

        }
        return tableRowVal === FilterObjVal;
      });

      //Additional Filter
      updatedData = updatedData.filter((tableItem) => {
        let val = props.allFiltersData.additional;

        if (val === "" || val === null || val === undefined) {
          return true;
        }

        let FilterObjVal = Number(props.allFiltersData.additional);
        let tableRowVal = Number(tableItem['Additional']);

        if (tableRowVal === FilterObjVal) {
          // console.log(FilterObjVal + " " + tableRowVal);
          // console.log(typeof tableRowVal);
          // console.log(typeof FilterObjVal);
        }
        return tableRowVal === FilterObjVal;
      });

      setFilteredData(updatedData);
    }

  }, [props.allFiltersData]);
  // console.log("filtered data");
  //  console.log(filteredData);
  return (
    <DataGrid
      dataSource={filteredData}
      keyExpr="Claim No"
      showColumnLines={showColumnLines}
      showRowLines={showRowLines}
      showBorders={showBorders}
    >
      <Column
        dataField="Billing Status"
        cellRender={renderGridCellBilling}
        width={'99px'}
      />

      <Column dataField="Confidence Level" width={'99px'} />
      <Column dataField="Claim No" width={'79px'}
        cellRender={(data) => (
          <NavLink to={`/:${data.data['Claim No']}`}>
            {data.data['Claim No']}
          </NavLink>)}
      />
      <Column dataField="Claim Status Group Name" width={'79px'} />
      <Column dataField="Claim Status Code" width={'79px'} />
      <Column dataField="Supervising Provider" width={'79px'} />
      <Column dataField="Speciality" width={'79px'} />
      <Column
        dataField="Demographics"
        cellRender={renderGridCellCustom1}
        width={'79px'}
      />
      <Column
        dataField="Insurance Validation"
        cellRender={renderGridCellCustom2}
        width={'79px'}
      />
      <Column
        dataField="Provider Validation"
        cellRender={renderGridCellCustom3}
        width={'79px'}
      />
      <Column
        dataField="ICD-CPT"
        cellRender={renderGridCellCustom4}
        width={'79px'}
      />
      <Column
        dataField="Fee Schedule"
        cellRender={renderGridCellCustom5}
        width={'79px'}
      />
      <Column
        dataField="Additional"
        cellRender={renderGridCellCustom6}
        width={'79px'}
      />
      <Column dataField="CPT Code" width={'79px'} />
      <Column dataField="CPT Description" width={'79px'} />
      <Column dataField="Patient" width={'79px'} />
      <Column dataField="Billed Charge" width={'79px'} />
      <Column
        dataField="Fee Schedule Allowed Fee"
        width={'79px'}
      />
      <Column dataField="Service Date" width={'79px'} />
      <Column dataField="Claim Date" width={'79px'} />
      <Column dataField="Primary Payer" width={'79px'} />
      <Column dataField="Facility" width={'130px'} />

      <Selection mode="multiple" width={'30px'} color={'red'} />
      <SearchPanel visible={true} highlightCaseSensitive={true} />

      <Paging
        defaultPageSize={15}
        showNavigationButtons={true}
        allowedPageSizes={allowedPageSizes}
      />
    </DataGrid>
  );
};

export default Table;
