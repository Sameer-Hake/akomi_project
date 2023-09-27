import React, { useState } from 'react';
import './Speciality.css';
import TagBox from 'devextreme-react/tag-box';
import ArrayStore from 'devextreme/data/array_store';
import { simpleProducts, SpecialityData, productLabel } from './data.js';

function Speciality({HandleSpeciality}) {
  const dataSource = new ArrayStore({
    data: SpecialityData,
    key: 'Id',
  });

  const [selectedSpeciality, setSelectedSpeciality] = useState([]);
  const handleSpeciality = (e) => {
     console.log(e.value);
    // console.log(e);
    // setAllFilterData({...allFilterData,billingStatus:e.value});
    setSelectedSpeciality(e.value);
    HandleSpeciality(e.value);

   };
  return (
    <div className="dx-field">
      <div className="dx-field-label">Speciality</div>
      <div className="dx-field-value">
        <TagBox
          dataSource={dataSource}
          inputAttr={productLabel}
          displayExpr="Name"
          searchEnabled={true}
          valueExpr="Id"
          value={selectedSpeciality} 
          onValueChanged={handleSpeciality} 
        />
      </div>
    </div>
  );
}

export default Speciality;
