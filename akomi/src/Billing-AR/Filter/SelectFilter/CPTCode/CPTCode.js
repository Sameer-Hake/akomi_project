import React, { useState,useEffect} from 'react';
import './CPTCode.css';
import TagBox from 'devextreme-react/tag-box';
import Popover from 'devextreme-react/popover';
import ArrayStore from 'devextreme/data/array_store';
import { simpleProducts, CPTCodeData, productLabel } from './data.js';

function CPTCode(props) {
  const dataSource = new ArrayStore({
    data: CPTCodeData,
    key: 'Id',
  });
  
  const [selectedCPTCode, setSelectedCPTCode] = useState([]);

  var storedValue =[];
   useEffect(() => {
     // Load the selected value from local storage when the component mounts
      storedValue = JSON.parse(localStorage.getItem('selectedCPTCode'));
    
     if (storedValue !== null )
     {
       setSelectedCPTCode(storedValue)
     }
     
  }, []);

  useEffect(()=>{
    console.log(props.clearCPTCode);
    if(props.clearCPTCode)
    {  console.log("setInitial value called"); 
         setSelectedCPTCode([]);
    }
     
  },[props.clearCPTCode]);
  const handleCPTCode = (e) => {
    localStorage.setItem('selectedClaimStatus', JSON.stringify(e.value));
    props.HandleCPTCode(e.value);
    setSelectedCPTCode(e.value);
   };
  return (
    <div className="dx-field">
      <div className="dx-field-label">CPT Code</div>
      <div className="dx-field-value">
        <TagBox
          dataSource={dataSource}
          inputAttr={productLabel}
          displayExpr="Name"
          searchEnabled={true}
          valueExpr="Id"
          value={selectedCPTCode} 
          onValueChanged={handleCPTCode} 
        />
      </div>
    </div>
  );
}

export default CPTCode;
