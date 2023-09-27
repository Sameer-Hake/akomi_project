import React, { useState,useEffect,useRef } from 'react';
import './ClaimStatus.css';
import TagBox from 'devextreme-react/tag-box';
import ArrayStore from 'devextreme/data/array_store';
import { simpleProducts, ClaimStatusData, productLabel } from './data.js';

function ClaimStatus(props) {
  const dataSource = new ArrayStore({
    data: ClaimStatusData,
    key: 'Name',
  });

  let [initialValue, setInitialValue ] = useState([]);
  
  var storedValue =[];
  useEffect(() => {
     // Load the selected value from local storage when the component mounts
     storedValue = JSON.parse(localStorage.getItem('selectedClaimStatus'));
     if (storedValue !== null )
     {
      setInitialValue(storedValue)
     }    
     console.log("first UseEffect is called");

  }, []);
  
   useEffect(()=>{
     console.log(props.clearClaimStatus);
     if(props.clearClaimStatus!==1)
     {   console.log("setInitial value called"); 
         setInitialValue([]);
     }    
     console.log("second UseEffect is called"); 
   },[props.clearClaimStatus]);

  const handleClaimStatus = (e) => {
    localStorage.setItem('selectedClaimStatus', JSON.stringify(e.value));
    props.HandleClaimStatusGroupName(e.value);
   };

  return (
    <div className="dx-field">
      <div className="dx-field-label">Claim status group name</div>
      <div className="dx-field-value">
        <TagBox
          dataSource={dataSource}
          id="ClaimStatusId"
          displayExpr="Name"
          searchEnabled={true}
          valueExpr="Id"
          value={initialValue} 
          onValueChanged={handleClaimStatus} 
        />
      </div>
    
    </div>
  );
}

export default ClaimStatus;
