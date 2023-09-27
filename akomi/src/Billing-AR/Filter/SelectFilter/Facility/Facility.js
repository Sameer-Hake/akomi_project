import React, { useState } from 'react';
import './Facility.css';
import TagBox from 'devextreme-react/tag-box';
import Popover from 'devextreme-react/popover';
import ArrayStore from 'devextreme/data/array_store';
import { simpleProducts, FacilityData, productLabel } from './data.js';

function Facility({HandleFacility}) {
  const dataSource = new ArrayStore({
    data: FacilityData,
    key: 'Id',
  });

 
  const [selectedFacility, setSelectedFacility] = useState([]);
  const handleFacility = (e) => {
     console.log(e.value);
    // console.log(e);
    // setAllFilterData({...allFilterData,billingStatus:e.value});
    HandleFacility(e.value);
    setSelectedFacility(e.value);
   };
  return (
    <div className="dx-field">
      <div className="dx-field-label">Facility</div>
      <div className="dx-field-value">
        <TagBox
          dataSource={dataSource}
          inputAttr={productLabel}
          displayExpr="Name"
          searchEnabled={true}
          valueExpr="Id"
          value={selectedFacility} 
          onValueChanged={handleFacility} 
        />
      </div>
    </div>
  );
}

export default Facility;
