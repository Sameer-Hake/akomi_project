import React, { useState } from 'react';
import './PrimaryPayer.css';
import TagBox from 'devextreme-react/tag-box';
import Popover from 'devextreme-react/popover';
import ArrayStore from 'devextreme/data/array_store';
import { simpleProducts,  PrimaryPayerData, productLabel } from './data.js';

function PrimaryPayer({HandlePrimaryPayer}) {
  const dataSource = new ArrayStore({
    data: PrimaryPayerData,
    key: 'Id',
  });

  const [editableProducts, setEditableProducts] = useState([...simpleProducts]);
  const [value, setValue] = useState([1, 2]);
  const [target, setTarget] = useState(null);
  const [product, setProduct] = useState({});


  const [selectedPrimaryPayer, setSelectedPrimaryPayer] = useState([]);
  const handlePrimaryPayer = (e) => {
     console.log(e.value);
    // console.log(e);
    // setAllFilterData({...allFilterData,billingStatus:e.value});
    HandlePrimaryPayer(e.value);
    setSelectedPrimaryPayer(e.value);
   };
  return (
    <div className="dx-field">
      <div className="dx-field-label">Primary Payer</div>
      <div className="dx-field-value">
        <TagBox
          dataSource={dataSource}
          inputAttr={productLabel}
          displayExpr="Name"
          searchEnabled={true}
          valueExpr="Id"
          value={selectedPrimaryPayer} 
          onValueChanged={handlePrimaryPayer} 
        />
      </div>
    </div>
  );
}

export default PrimaryPayer;
