import React,{useEffect}from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Data from '../Table/Data.json'
import './ClaimNoDetail.css'
import ClaimNoHeader from './ClaimNoHeader/ClaimNoHeader'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import success from './images/success.svg'
import grey from'./images/grey.svg'
function ClaimNoDetail() {
    const params = useParams();
    let claimId = params.claimNo.substr(1, 20);
    const navigate = useNavigate()

    const claimNoRecord = Data.filter((item) => {
        let val = item['Claim No'];
        let a = Number.parseInt(claimId);
        let b = Number.parseInt(val);
        return a === b
    });

    console.log(claimNoRecord);
    let styleObj = {
        color: "",
    };
    if (claimNoRecord[0]['Billing Status'] === "Success") {
        styleObj.color = "#00D900";
    }
    else if (claimNoRecord[0]['Billing Status'] === "Review") {
        styleObj.color = "#0070D2"
    }
    else {
        styleObj.color = "#FF0000"
    }
    function failpath(){
        document.querySelectorAll('.select-path ul.failPath li').forEach(function(li) {
            li.addEventListener('click', function() {
                if (li.classList.contains('active')) {
                    li.classList.remove('active');
                    document.querySelectorAll('.allPath').forEach(function(allPath) {
                        allPath.style.display = 'block';
                    });
                } else {
                    li.classList.add('active');
                    document.querySelectorAll('.allPath').forEach(function(allPath) {
                        allPath.style.display = 'none';
                    });
                    document.querySelectorAll('.failPath').forEach(function(failPath) {
                        failPath.style.display = 'block';
                    });
                }
            });
        });
    }
    function mypath(){
        document.querySelectorAll('.select-path ul.pathView li').forEach(function(li) {
            li.addEventListener('click', function() {
                let dataView = li.getAttribute('data-id');
                let fullPathElements = document.querySelectorAll('.fullPath');
    
                fullPathElements.forEach(function(fullPath) {
                    fullPath.style.display = 'none';
                });
        
                if (li.classList.contains('active')) {
                    document.querySelectorAll('.select-path ul.pathView li').forEach(function(item) {
                        item.classList.remove('active');
                    });
                    li.classList.remove('active');
                } else {
                    document.querySelectorAll('.select-path ul.pathView li').forEach(function(item) {
                        item.classList.remove('active');
                    });
                    li.classList.add('active');
                    if (dataView === 'fullpath') {
                        fullPathElements.forEach(function(fullPath) {
                            fullPath.style.display = 'block';
                            fullPath.backgroundcolor="#fafafa"
                            fullPath.style.removeProperty('display');
                        });
                    }
                }
            });
        });
    }

    function findRow(e){
        let trArray= document.querySelectorAll('tr');
         let val=e.target.value.trim().toLowerCase();
         console.log(val);
       for(let i=1;i<trArray.length;i++)
       {
         let item=trArray[i];
         let labelArray=item.querySelectorAll('label')
         let dis=false;
         for(let j=0;j<labelArray.length;j++)
         {
             if(labelArray[j].innerText.toLowerCase().includes(val)|| val==""){
                dis=true;
                break;
             }
         }
         if(dis===false)
         { 
            item.style.display='none';
         }
         else
         {
            console.log(item);
            item.style.display='block';
            item.style.removeProperty('display');
         }
       }
    }

useEffect(()=>{
 document.querySelector('#fun1').addEventListener('click',mypath);
 document.querySelector('#fun2').addEventListener('click',mypath);
 document.querySelector('#fun3').addEventListener('click',failpath);
},[])

 useEffect(()=>{
    // 1
    document.querySelectorAll('.chkDemography').forEach(function(element) {
        element.addEventListener('click', function() {
            var isChecked = element.checked;
            var checkboxes = document.querySelectorAll('.chkDemographyView input[type="checkbox"]');
            
            checkboxes.forEach(function(checkbox) {
                checkbox.checked = isChecked;
            });
        });
    })
    document.querySelectorAll('.chkDemographyView input[type="checkbox"]').forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {
            var allCheckboxes = document.querySelectorAll('.chkDemographyView .checkbox');
            var checkedCheckboxes = document.querySelectorAll('.chkDemographyView .checkbox:checked');
            var chkDemography = document.querySelector(".chkDemography");
            
            if (allCheckboxes.length === checkedCheckboxes.length) {
                chkDemography.checked = true;
            } else {
                chkDemography.checked = false;
            }
        });
    });
    
   //2
   document.querySelectorAll('.chkInsurance').forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        var isChecked = checkbox.checked;
        var insuranceCheckboxes = document.querySelectorAll('.chkInsuranceView input[type="checkbox"]');
        
        insuranceCheckboxes.forEach(function(insuranceCheckbox) {
            insuranceCheckbox.checked = isChecked;
        });
    });
});
document.querySelectorAll('.chkInsuranceView input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        var allCheckboxes = document.querySelectorAll('.chkInsuranceView .checkbox');
        var checkedCheckboxes = document.querySelectorAll('.chkInsuranceView .checkbox:checked');
        var chkInsurance = document.querySelector(".chkInsurance");
        
        if (allCheckboxes.length === checkedCheckboxes.length) {
            chkInsurance.checked = true;
        } else {
            chkInsurance.checked = false;
        }
    });
});

 //3
 document.querySelectorAll('.chkICDCommon').forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        var isChecked = checkbox.checked;
        var icdCommonCheckboxes = document.querySelectorAll('.chkICDCommonView input[type="checkbox"]');
        
        icdCommonCheckboxes.forEach(function(icdCommonCheckbox) {
            icdCommonCheckbox.checked = isChecked;
        });
    });
});
document.querySelectorAll('.chkICDCommonView input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        var allCheckboxes = document.querySelectorAll('.chkICDCommonView .checkbox');
        var checkedCheckboxes = document.querySelectorAll('.chkICDCommonView .checkbox:checked');
        var chkICDCommon = document.querySelector(".chkICDCommon");
        
        if (allCheckboxes.length === checkedCheckboxes.length) {
            chkICDCommon.checked = true;
        } else {
            chkICDCommon.checked = false;
        }
    });
});

//4
document.querySelectorAll('.chkProvider').forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        var isChecked = checkbox.checked;
        var providerCheckboxes = document.querySelectorAll('.chkProviderView input[type="checkbox"]');
        
        providerCheckboxes.forEach(function(providerCheckbox) {
            providerCheckbox.checked = isChecked;
        });
    });
});
document.querySelectorAll('.chkProviderView input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        var allCheckboxes = document.querySelectorAll('.chkProviderView .checkbox');
        var checkedCheckboxes = document.querySelectorAll('.chkProviderView .checkbox:checked');
        var chkProvider = document.querySelector(".chkProvider");
        
        if (allCheckboxes.length === checkedCheckboxes.length) {
            chkProvider.checked = true;
        } else {
            chkProvider.checked = false;
        }
    });
});
//5
document.querySelectorAll('.chkMiscellaneous').forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        var isChecked = checkbox.checked;
        var miscellaneousCheckboxes = document.querySelectorAll('.chkMiscellaneousView input[type="checkbox"]');
        
        miscellaneousCheckboxes.forEach(function(miscellaneousCheckbox) {
            miscellaneousCheckbox.checked = isChecked;
        });
    });
});
document.querySelectorAll('.chkMiscellaneousView input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        var allCheckboxes = document.querySelectorAll('.chkMiscellaneousView .checkbox');
        var checkedCheckboxes = document.querySelectorAll('.chkMiscellaneousView .checkbox:checked');
        var chkMiscellaneous = document.querySelector(".chkMiscellaneous");
        
        if (allCheckboxes.length === checkedCheckboxes.length) {
            chkMiscellaneous.checked = true;
        } else {
            chkMiscellaneous.checked = false;
        }
    });
});
document.querySelectorAll('.tm-title').forEach(function(title) {
    title.addEventListener('click', function(event) {
        let id = title.getAttribute('data-id');
        
        // Remove the 'active' class from all elements with class 'tm-title'
        document.querySelectorAll('.tm-title').forEach(function(item) {
            item.classList.remove('active');
        });
        
        title.classList.add('active');
        
        var scrollTo = document.getElementById(id);
        var container = document.querySelector('.detailed-process');
        
        // Calculate the position to scroll to
        var position = scrollTo.offsetTop - container.offsetTop + container.scrollTop;
        
        container.animate({
            scrollTop: position
        });
    });
});
 },[])

    return (
        <div>
            <ClaimNoHeader />
            <div className="back-btn-area">
                <button onClick={() => navigate(-1)}
                    style={{
                        fontSize: "10.5px",
                        position: "relative",
                        top: "0px",
                        fontFamily: "'Open Sans', sans-serif  monospace",
                        color:"#292727"
                    }}
                    className="back-button"
                >&lt;<p style={{display:"inline-block",marginLeft:"3px",margin: "0px 0px 0px 2px",padding:"0px"}}>Back</p></button>
                <hr className="horizantal-line"></hr>
            </div>
            {/* <hr className="horizantal-line2"></hr> */}


            {/* Hello world */}
            <div className="full-body-container">
                <div class="header-row row">
                    <div class="col s12">
                        <ul>
                            <li>
                                <label className="smallTitle bold" >Claim No</label>
                                <label className="headerTitle bold">{claimNoRecord[0]['Claim No']}</label>
                            </li>
                            <li>
                                <label className="smallTitle bold">Confidence Level</label>
                                <label className="headerTitle " style={styleObj}>{claimNoRecord[0]['Confidence Level']}%</label>
                            </li>
                            <li>
                                <label className="smallTitle bold">Claim State</label>
                                <label className="headerTitle " style={styleObj}>{claimNoRecord[0]['Billing Status']}</label>
                            </li>
                            <li>
                                <label className="smallTitle bold">Supervising Provider</label>
                                <label className="headerTitle bold">{claimNoRecord[0]['Supervising Provider']}</label>
                            </li>
                            <li>
                                <label className="smallTitle bold">Speciality</label>
                                <label className="headerTitle bold">{claimNoRecord[0]['Speciality']}</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="horizantal-line2"></hr>
                <div className="filter-view row">
                    <div className="col s12">
                        <div className="select-path">
                            <button className="btn">Verify</button>
                            <ul className="pathView">
                                <li id="fun1" data-id="mypath"className="active" style={{paddingBottom:"0px !imporatant"}}>
                                    My Path
                                </li>
                                <li id="fun2" data-id="fullpath" >Full Path</li>
                            </ul>
                            <ul className="failPath active" id='fun3'>
                                <li >Failed Path</li>
                            </ul>
                            <input type="text" className="clsSearch" placeholder="Search" onChange={findRow}/>
                        </div>
                    </div>
                </div>
                <section className="detail-view">
                    <div className="container">
                        <div className="row"></div>
                        <div className="row">
                            <div className="col-md-3">
                                {/* Demographic */}
                                <div className="allPath">
                                    <div className="side-panel-content">
                                        <div className="group">
                                            <div className="input">
                                                <input type="checkbox" className="checkbox chkDemography" />
                                            </div>
                                            <div className="color green" />
                                        </div>
                                        <div className="tm-title allData active" data-id="demographic">
                                            Demographic
                                        </div>
                                    </div>
                                    <div className="side-panel chkDemographyView">
                                        <div className="side-panel-content">
                                            <div className="side-panel-columns">
                                                <div className="side-panel-column side-panel-column-title">
                                                    <div className="input">
                                                        <input type="checkbox" className="checkbox" />
                                                    </div>
                                                    <span className="color green" />
                                                    <span className="viewFlow" id="dvNameCheck">
                                                        Name check
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="side-panel-content">
                                            <div className="side-panel-columns">
                                                <div className="side-panel-column side-panel-column-title">
                                                    <div className="input">
                                                        <input type="checkbox" className="checkbox" />
                                                    </div>
                                                    <span className="color green" />
                                                    <span className="viewFlow" id="dvDOBCheck">
                                                        DOB check
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="side-panel-content">
                                            <div className="side-panel-columns">
                                                <div className="side-panel-column side-panel-column-title">
                                                    <div className="input">
                                                        <input type="checkbox" className="checkbox" />
                                                    </div>
                                                    <span className="color green" />
                                                    <span className="viewFlow" id="dvGender">
                                                        Gender
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="side-panel-content">
                                            <div className="side-panel-columns">
                                                <div className="side-panel-column side-panel-column-title">
                                                    <div className="input">
                                                        <input type="checkbox" className="checkbox" />
                                                    </div>
                                                    <span className="color green" />
                                                    <span className="viewFlow" id="dvAddress">
                                                        Address
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Insurance */}
                                <div className="allPath failPath">
                                    <div className="side-panel-content">
                                        <div className="group">
                                            <div className="input">
                                                <input type="checkbox" className="checkbox chkInsurance" />
                                            </div>
                                            <div className="color red" />
                                        </div>
                                        <div className="tm-title" data-id="insuranceDetail">
                                            Insurance
                                        </div>
                                    </div>
                                    <div className="side-panel chkInsuranceView">
                                        <div className="side-panel-content">
                                            <div className="side-panel-columns">
                                                <div className="side-panel-column side-panel-column-title">
                                                    <div className="input">
                                                        <input type="checkbox" className="checkbox" />
                                                    </div>
                                                    <span className="color red" />
                                                    <span className="viewFlow" id="dvInsuranceVerification">
                                                        Insurance Verification
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div class="side-panel" style="margin-left: 30px;">
                              <div class="side-panel-content">
                                  <div class="side-panel-columns">
                                      <div class="side-panel-column side-panel-column-title"><span
                                              class="color grey"></span><span>Eligible</span></div>
                                  </div>
                              </div>
                              <div class="side-panel-content">
                                  <div class="side-panel-columns">
                                      <div class="side-panel-column side-panel-column-title"><span
                                              class="color blue"></span><span>Non-Eligible</span></div>
                                  </div>
                              </div>
                          </div> */}
                                    </div>
                                </div>
                                {/* Provider */}
                                <div className="allPath failPath">
                                    <div className="side-panel-content">
                                        <div className="group">
                                            <div className="input">
                                                <input type="checkbox" className="checkbox chkProvider" />
                                            </div>
                                            <div className="color red" />
                                        </div>
                                        <div className="tm-title" data-id="providerDetails">
                                            Provider
                                        </div>
                                    </div>
                                    <div className="side-panel chkProviderView">
                                        <div className="side-panel-content">
                                            <div className="side-panel-columns">
                                                <div className="side-panel-column side-panel-column-title">
                                                    <div className="input">
                                                        <input type="checkbox" className="checkbox" />
                                                    </div>
                                                    <span className="color red" />
                                                    <span>Rendering Provider Check</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div class="side-panel" style="margin-left: 30px;">
                              <div class="side-panel-content">
                                  <div class="side-panel-columns">
                                      <div class="side-panel-column side-panel-column-title"><span
                                              class="color greeen"></span><span>Physician</span></div>
                                  </div>
                              </div>
                              <div class="side-panel-content">
                                  <div class="side-panel-columns">
                                      <div class="side-panel-column side-panel-column-title"><span
                                              class="color grey"></span><span>Nurse Practitioner</span></div>
                                  </div>
                              </div>
                          </div> */}
                                        <div className="side-panel-content">
                                            <div className="side-panel-columns">
                                                <div className="side-panel-column side-panel-column-title">
                                                    <div className="input">
                                                        <input type="checkbox" className="checkbox" />
                                                    </div>
                                                    <span className="color red" />
                                                    <span>Supervising Provider Check</span>
                                                </div>
                                                {/* <div class="side-panel-column side-panel-column-date"></div> */}
                                            </div>
                                        </div>
                                        <div className="side-panel-content">
                                            <div className="side-panel-columns">
                                                <div className="side-panel-column side-panel-column-title">
                                                    <div className="input">
                                                        <input type="checkbox" className="checkbox" />
                                                    </div>
                                                    <span className="color red" />
                                                    <span>Place of Service Check</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="side-panel-content">
                                            <div className="side-panel-columns">
                                                <div className="side-panel-column side-panel-column-title">
                                                    <div className="input">
                                                        <input type="checkbox" className="checkbox" />
                                                    </div>
                                                    <span className="color red" />
                                                    <span>Progress Note Check</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Provider Speciality */}
                                <div className="allPath">
                                    <div className="side-panel-content">
                                        <div className="group">
                                            <div className="input">
                                                <input type="checkbox" className="checkbox chkICDCommon" />
                                            </div>
                                            <div className="color green" />
                                        </div>
                                        <div className="tm-title" data-id="providerSpecility">
                                            ICD AND CPT Common
                                        </div>
                                    </div>
                                    <div className="side-panel chkICDCommonView">
                                        <div className="side-panel-content">
                                            <div className="side-panel-columns">
                                                <div className="side-panel-column side-panel-column-title">
                                                    <div className="input">
                                                        <input type="checkbox" className="checkbox" />
                                                    </div>
                                                    <span className="color green" />
                                                    <span>ICD &amp; CPT</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div class="side-panel" style="margin-left: 30px;">
                              <div class="side-panel-content">
                                  <div class="side-panel-columns">
                                      <div class="side-panel-column side-panel-column-title"><span
                                              class="color yellow"></span><span>Common CPT+ICD Check</span></div>
                                  </div>
                              </div>
                              <div class="side-panel-content">
                                  <div class="side-panel-columns">
                                      <div class="side-panel-column side-panel-column-title"><span
                                              class="color green"></span><span>Speciality CPT+ICD Check</span></div>
                                  </div>
                              </div>
                          </div> */}
                                        <div className="side-panel-content">
                                            <div className="side-panel-columns">
                                                <div className="side-panel-column side-panel-column-title">
                                                    <div className="input">
                                                        <input type="checkbox" className="checkbox" />
                                                    </div>
                                                    <span className="color green" />
                                                    <span>Compatible Dx Check</span>
                                                </div>
                                                {/* <div class="side-panel-column side-panel-column-date"></div> */}
                                            </div>
                                        </div>
                                        <div className="side-panel-content">
                                            <div className="side-panel-columns">
                                                <div className="side-panel-column side-panel-column-title">
                                                    <div className="input">
                                                        <input type="checkbox" className="checkbox" />
                                                    </div>
                                                    <span className="color green" />
                                                    <span>Authorization Check</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="side-panel-content">
                                            <div className="side-panel-columns">
                                                <div className="side-panel-column side-panel-column-title">
                                                    <div className="input">
                                                        <input type="checkbox" className="checkbox" />
                                                    </div>
                                                    <span className="color green" />
                                                    <span>Unit Check</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Miscellaneous Check */}
                                <div className="allPath failPath">
                                    <div className="side-panel-content">
                                        <div className="group">
                                            <div className="input">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox chkMiscellaneous"
                                                />
                                            </div>
                                            <div className="color red" />
                                        </div>
                                        <div className="tm-title" data-id="miscellaneousCheck">
                                            Miscellaneous Check
                                        </div>
                                    </div>
                                    <div className="side-panel chkMiscellaneousView">
                                        <div className="side-panel-content">
                                            <div className="side-panel-columns">
                                                <div className="side-panel-column side-panel-column-title">
                                                    <div className="input">
                                                        <input type="checkbox" className="checkbox" />
                                                    </div>
                                                    <span className="color red" />
                                                    <span>True Duplicate</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="side-panel-content">
                                            <div className="side-panel-columns">
                                                <div className="side-panel-column side-panel-column-title">
                                                    <div className="input">
                                                        <input type="checkbox" className="checkbox" />
                                                    </div>
                                                    <span className="color red" />
                                                    <span>
                                                        False Duplicate/Specialitty Based Duplicate Check
                                                    </span>
                                                </div>
                                                {/* <div class="side-panel-column side-panel-column-date"></div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 detailed-process">
                                <div className="process-view">
                                    <div className="process-flow" id="demographic">
                                        <div className="head">Demographic</div>
                                        <div className="row">
                                            <table>
                                                <tbody></tbody>
                                                <colgroup>
                                                    <col width="21%" />
                                                    <col width="7%" />
                                                    <col width="58%" />
                                                    <col width="10%" />
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <th>Rule</th>
                                                        <th colSpan={2}>Validation</th>
                                                        <th />
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                First Name
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">Joan</label>
                                                        </td>
                                                        <td className="fcgreen">First Name Confirmed</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">Joan</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <img src={require("./images/firstname.png")} />
                                                            <label>Driver license</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label>Insurance Id</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="bordertop">
                                                        <td className="bordertop">
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Last Name
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">Sample</label>
                                                        </td>
                                                        <td className="bordertop fcgreen">
                                                            Last Name Confirmed
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">Sample</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <img src={require("./images/lastname.png")} />
                                                            <label>Driver license</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td className="bordertop">
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                DOB
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">08/12/1983</label>
                                                        </td>
                                                        <td className="bordertop fcgreen">DOB Confirmed</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">08/12/1983</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <img src={require("./images/dob.png")} className="bigimage" />
                                                            <label>Driver license</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td className="bordertop">
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Gender
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">Female</label>
                                                        </td>
                                                        <td className="bordertop fcgreen">Gender Confirmed</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">Female</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <img src={require("./images/gender.png")} />
                                                            <label>Driver license</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td className="bordertop">
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Address
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">
                                                                12 COTTONWOOD RD
                                                                <br />
                                                                EAST TEXAS CENTER, TX 12345-0000
                                                            </label>
                                                        </td>
                                                        <td className="bordertop fcgreen">Address Confirmed</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                12 COTTONWOOD RD
                                                                <br />
                                                                EAST TEXAS CENTER, TX 12345-0000
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="borderbottom">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <img
                                                                src={require("./images/address.png")}
                                                                className="bigimage"
                                                            />
                                                            <label>Driver license</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="process-flow" id="insuranceDetail">
                                        <div className="head">Insurance</div>
                                        <div className="row">
                                            <table>
                                                <tbody></tbody>
                                                <colgroup>
                                                    <col width="21%" />
                                                    <col width="7%" />
                                                    <col width="58%" />
                                                    <col width="10%" />
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <th>Rule</th>
                                                        <th colSpan={2}>Validation</th>
                                                        <th />
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Service Date
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">08/01/2023</label>
                                                        </td>
                                                        <td className="fcgreen">Service Date Confirmed</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">08/01/2023</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="bordertop">
                                                        <td className="bordertop">
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Insured or Subscriber Information Window
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">
                                                                Eligibility Date: 08/01/2023
                                                            </label>
                                                        </td>
                                                        <td className="bordertop fcgreen">
                                                            Eligibility Confirmed
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Eligibility Date: 08/01/2023
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <img
                                                                src={require("./images/insuranceInfo.png")}
                                                                style={{ width: "auto", maxWidth: "100%" }}
                                                            />
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td className="bordertop">
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Coverage Information Window
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">
                                                                Coverage Date : 08/12/2022 - 08/12/2024
                                                            </label>
                                                        </td>
                                                        <td className="bordertop fcgreen">
                                                            Coverage Date Confirmed
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">08/27/2023</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <img
                                                                src={require("./images/insuranceCoverage.png")}
                                                                style={{ width: "auto", maxWidth: "100%" }}
                                                            />
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td className="bordertop">
                                                            <label>
                                                                <img src={grey} className="success" />
                                                                Check other insurance card in EMR
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">
                                                                Insurance Card Found
                                                            </label>
                                                        </td>
                                                        <td className="bordertop fcgreen">
                                                            Other Insurance Card Available
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">Found</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <img
                                                                src={require("./images/insuranceCard.png")}
                                                                style={{ width: "auto", maxWidth: "100%" }}
                                                            />
                                                        </td>
                                                        <td />
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="process-flow" id="providerDetails">
                                        <div className="head">Provider Validation</div>
                                        <div className="row">
                                            <table>
                                                <tbody></tbody>
                                                <colgroup>
                                                    <col width="21%" />
                                                    <col width="7%" />
                                                    <col width="58%" />
                                                    <col width="10%" />
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <th>Rule</th>
                                                        <th colSpan={2}>Validation</th>
                                                        <th />
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Provider
                                                            </label>
                                                        </td>
                                                        <td colSpan={3}>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label style={{ marginLeft: 30 }}>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Physician
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">
                                                                Rendering Provider = Dr Kaveh Samani
                                                            </label>
                                                        </td>
                                                        <td className="fcgreen">Physician Confirmed</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">
                                                                Billing Provider = Dr Kaveh Samani
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">
                                                                Servicing Provider = Dr Kaveh Samani
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">
                                                                Supervisor Provider = Dr Kaveh Samani
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Rendering Provider = Dr Kaveh Samani
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcblue">
                                                                Billing Provider = Dr Kaveh Samani
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcblue">
                                                                Servicing Provider = Dr Kaveh Samani
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcblue">
                                                                Supervisor Provider = Dr Kaveh Samani
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">Physician</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td>
                                                            <label style={{ marginLeft: 30 }}>
                                                                <img src={grey} className="success" />
                                                                Nurse Practitioner
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">
                                                                Rendering Provider = Melissa Wade
                                                            </label>
                                                        </td>
                                                        <td className="fcgreen">
                                                            Nurse Practitioner Confirmed
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">
                                                                Billing Provider = Melissa Wade
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">
                                                                Servicing Provider = Melissa Wade
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcblue">
                                                                Rendering Provider = Melissa Wade
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcblue">
                                                                Billing Provider = Melissa Wade
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcblue">
                                                                Servicing Provider = Melissa Wade
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcblue">
                                                                Supervisor Provider = Dr Kaveh Samani
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">Nurse Practitioner</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td className="bordertop">
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Place Of Service
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">11</label>
                                                        </td>
                                                        <td className="bordertop fcgreen">POS Confirmed</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>POS</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcgrey">11, 21, 24, 65</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">11</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td className="bordertop" colSpan={4}>
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Note Check
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label style={{ marginLeft: 30 }}>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Office Progress Note
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">Progress Notes</label>
                                                        </td>
                                                        <td className="fcgreen">Progress Note Available</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Note available for DOS
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <img
                                                                src={require("./images/note.png")}
                                                                style={{ width: "auto", maxWidth: "100%" }}
                                                            />
                                                            <label>Office progress notes</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td className="bordertop">
                                                            <label style={{ marginLeft: 30 }}>
                                                                <img src={grey} className="success" />
                                                                Hospital Note
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">
                                                                Park Plaza Hospital Progress note
                                                            </label>
                                                        </td>
                                                        <td className="bordertop fcgreen">
                                                            Hospital Progress Note Available
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Note available for DOS
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <img
                                                                src={require("./images/hospitalnote.png")}
                                                                style={{ width: "auto", maxWidth: "100%" }}
                                                            />
                                                            <label>Hospital notes</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td className="bordertop">
                                                            <label style={{ marginLeft: 30 }}>
                                                                <img src={grey} className="success" />
                                                                DrChrono Note
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">
                                                                DrChrono Progress Note
                                                            </label>
                                                        </td>
                                                        <td className="bordertop fcgreen">
                                                            DrChrono Progress Note Available
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Note available for DOS
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <img
                                                                src={require("./images/specialNote.png")}
                                                                style={{ width: "auto", maxWidth: "100%" }}
                                                            />
                                                            <label>DrChrono notes</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td className="bordertop">
                                                            <label style={{ marginLeft: 30 }}>
                                                                <img src={grey} className="success" />
                                                                Injections Criteria
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">Medicare</label>
                                                        </td>
                                                        <td className="bordertop fcgreen">
                                                            Injection POS Criteria Met
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">Medicare</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td></td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">CPT 62323</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>CPT range</label>
                                                        </td>
                                                        <td>
                                                            <label>
                                                                CPT 62321, 62323, 64483, 64490, 64635, 27096
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 62323</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">POS=24</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">POS=24</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="process-flow" id="providerSpecility">
                                        <div className="head">ICD and CPT Common</div>
                                        <div className="row">
                                            <table>
                                                <tbody></tbody>
                                                <colgroup>
                                                    <col width="21%" />
                                                    <col width="7%" />
                                                    <col width="58%" />
                                                    <col width="10%" />
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <th>Rule</th>
                                                        <th colSpan={2}>Validation</th>
                                                        <th />
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>
                                                            <label className="bold">
                                                                Common CPT+ICD Check (Internal Medicine)
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                New Patient Office Visit
                                                            </label>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td className="fcgreen">
                                                            New Patient Office Visit Confirmed
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label style={{ marginLeft: 30 }}>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                CTP Range check
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">CPT 99202</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>CPT range</label>
                                                        </td>
                                                        <td>
                                                            <label>CPT 99202, 99203, 99204, 99205</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 99202</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label style={{ marginLeft: 30 }}>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                3 year check
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">
                                                                Service date: 08/27/2023
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">
                                                                Last visit date: 12/20/2019
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">3+ year</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td className="bordertop">
                                                            <label className="fcgrey">
                                                                <img src={grey} className="success" />
                                                                Established Patient Office Visit Code
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">CPT 99212</label>
                                                        </td>
                                                        <td className="bordertop fcgreen">
                                                            Established Patient Office Visit Code Confirmed
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>CPT range</label>
                                                        </td>
                                                        <td>
                                                            <label>CPT 99211, 99212, 99213, 99214, 99215</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 99212</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td className="bordertop">
                                                            <label className="fcgrey">
                                                                <img src={grey} className="success" />
                                                                Hospital New Inpatient Visit
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">CPT 99223</label>
                                                        </td>
                                                        <td className="bordertop fcgreen">
                                                            Hospital New Inpatient Visit Confirmed
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>CPT range</label>
                                                        </td>
                                                        <td>
                                                            <label>CPT 99221, 99222, 99223</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 99223</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td className="bordertop">
                                                            <label className="fcgrey">
                                                                <img src={grey} className="success" />
                                                                Hospital Inpatient Subsequent Visit
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">CPT 99232</label>
                                                        </td>
                                                        <td className="bordertop fcgreen">
                                                            Hospital Inpatient Subsequent Visit Confirmed
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>CPT range</label>
                                                        </td>
                                                        <td>
                                                            <label>CPT 99231, 99232, 99233</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 99232</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td className="bordertop">
                                                            <label className="fcgrey">
                                                                <img src={grey} className="success" />
                                                                Hospital Discharge Visit
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">CPT 99239</label>
                                                        </td>
                                                        <td className="bordertop fcgreen">
                                                            Hospital Discharge Visit Confirmed
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>CPT range</label>
                                                        </td>
                                                        <td>
                                                            <label>CPT 99238, 99239</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 99239</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    {/* <tr>
                                          <td>
                                              <label><img src="./images/success.svg" class="success">Speciality ICD DX CODE Check</label>
                                          </td>
                                          <td>
                                              <label>emr</label>
                                          </td>
                                          <td>
                                              <label class="fcbrown">N18.6</label>
                                          </td>
                                          <td></td>
                                      </tr>
                                      <tr>
                                          <td></td>
                                          <td><label>Top 10 ICD</label></td>
                                          <td>
                                              <label>I10, N18.6, I82.409, A41.9, E11.8, N17.9, E78.5, I25.10, R53.81, N18.30</label>
                                          </td>
                                          <td></td>
                                      </tr>
                                      <tr>
                                          <td></td>
                                          <td>
                                              <label>tool</label>
                                          </td>
                                          <td>
                                              <label class="fcblue">N18.6</label>
                                          </td>
                                          <td></td>
                                      </tr>
                                      <tr>
                                          <td colspan="4">&nbsp;</td>
                                      </tr>
                                      <tr>
                                          <td colspan="4">
                                              <label class="bold">Authorization Check</label>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <label><img src="./images/success.svg" class="success">Office Auth</label>
                                          </td>
                                          <td>
                                              <label>emr</label>
                                          </td>
                                          <td>
                                              <label class="fcbrown">-</label>
                                          </td>
                                          <td></td>
                                      </tr>
                                      <tr>
                                          <td></td>
                                          <td>
                                              <label>tool</label>
                                          </td>
                                          <td>
                                              <label class="fcblue">1761611199907</label>
                                          </td>
                                          <td></td>
                                      </tr>
                                      <tr>
                                          <td></td>
                                          <td></td>
                                          <td>
                                              <img src="./images/OfficeAuth.jpg"
                                                  style="width: auto;height: auto;max-width: initial;">
                                              <label></label>
                                          </td>
                                          <td></td>
                                      </tr>
                                      <tr class="fullPath">
                                          <td>
                                              <label><img src="./images/grey.svg" class="success">Hospital Auth</label>
                                          </td>
                                          <td>
                                              <label>emr</label>
                                          </td>
                                          <td>
                                              <label class="fcbrown">-</label>
                                          </td>
                                          <td></td>
                                      </tr>
                                      <tr class="fullPath">
                                          <td></td>
                                          <td>
                                              <label>tool</label>
                                          </td>
                                          <td>
                                              <label class="fcblue">A209923923</label>
                                          </td>
                                          <td></td>
                                      </tr>
                                      <tr class="fullPath">
                                          <td></td>
                                          <td></td>
                                          <td>
                                              <img src="./images/authorizationcheck.png"
                                                  style="width: auto;height: auto;max-width: initial;">
                                              <label></label>
                                          </td>
                                          <td></td>
                                      </tr>
                                      <tr>
                                          <td colspan="4">
                                              <label class="bold">Unit Check</label>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>
                                              <label><img src="./images/success.svg" class="success">Unit
                                                  Check</label>
                                          </td>
                                          <td>
                                              <label>emr</label>
                                          </td>
                                          <td>
                                              <label class="fcbrown">Unit = 1</label>
                                          </td>
                                          <td></td>
                                      </tr>
                                      <tr>
                                          <td></td>
                                          <td>
                                              <label>tool</label>
                                          </td>
                                          <td>
                                              <label class="fcblue">Unit = 1</label>
                                          </td>
                                          <td></td>
                                      </tr> */}
                                                    <tr className="fullPath ex">
                                                        <td colSpan={4} className="bordertop">
                                                            <label className="bold">
                                                                Pain Management - Speciality ICD and CPT Check
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td>
                                                            <label>
                                                                <img src={grey} className="success" />
                                                                Trigger Point Injection
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">CPT 20552</label>
                                                        </td>
                                                        <td className="fcgreen">
                                                            Trigger Point Injection Confirmed
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">
                                                                Primary Dx = First Dx Pointer in Dx List
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 20552</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">CPT 99202</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">
                                                                Primary Dx = Second Dx Pointer in DX list
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">Modifier = 25</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td>
                                                            <label>CPT range</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">
                                                                CPT 99202, 99203, 99204, 99205, 99211, 99212, 99213,
                                                                99214, 99215
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 99202</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">CPT J3490</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">
                                                                Primary Dx = First Dx Pointer in Dx List
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">Drug Information</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT J3490</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">CPT J1020</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">
                                                                Primary Dx = First Dx Pointer in Dx List
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT J1020</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td>
                                                            <label className="fcgrey">
                                                                <img src={grey} className="success" />
                                                                Other Injections
                                                            </label>
                                                        </td>
                                                        <td />
                                                        <td />
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td>
                                                            <label className="fcgrey">CESI</label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">CPT 62321</label>
                                                        </td>
                                                        <td className="fcgreen">CESI Confirmed</td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">Primary Dx = M54.12</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 62321</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcblue">Primary Dx = M54.12</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td className="fullPath" colSpan={4}>
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td>
                                                            <label className="fcgrey">LESI</label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">CPT 62323</label>
                                                        </td>
                                                        <td className="fcgreen">LESI Confirmed</td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">Primary Dx = M54.16</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 62323</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcblue">Primary Dx = M54.16</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td className="fullPath" colSpan={4}>
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td>
                                                            <label className="fcgrey">
                                                                FACET JOINT INJECTION/MBB - LUMBOSACRAL
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">CPT 64493</label>
                                                        </td>
                                                        <td className="fcgreen">
                                                            FACET JOINT INJECTION/MBB - LUMBOSACRAL Confirmed
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">Primary Dx=M47.897</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>CPT range</label>
                                                        </td>
                                                        <td>
                                                            <label>CPT 64493, 64494</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>DX range</label>
                                                        </td>
                                                        <td>
                                                            <label>Primary Dx=M47.897, M47.817</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 64493</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">Primary Dx=M47.897</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td className="fullPath" colSpan={4}>
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td>
                                                            <label className="fcgrey">
                                                                FACET JOINT INJECTION/MBB - CERVICAL THORASIC
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">CPT 64490</label>
                                                        </td>
                                                        <td className="fcgreen">
                                                            FACET JOINT INJECTION/MBB - CERVICAL THORASIC
                                                            Confirmed
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">Primary Dx=M47.897</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>CPT range</label>
                                                        </td>
                                                        <td>
                                                            <label>CPT 64635, 64636</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>DX range</label>
                                                        </td>
                                                        <td>
                                                            <label>M47.892, M47.812</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 64490</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcblue">PRIMARY DX=M47.892</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td className="fullPath" colSpan={4}>
                                                            &nbsp;
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td>
                                                            <label className="fcgrey">RFA</label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">CPT 64635</label>
                                                        </td>
                                                        <td className="fcgreen">RFA Confirmed</td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">Primary Dx=M47.897</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>CPT range</label>
                                                        </td>
                                                        <td>
                                                            <label>64635, 64636</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>DX</label>
                                                        </td>
                                                        <td>
                                                            <label>Primary Dx=M47.897</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 64635</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcblue">Primary Dx=M47.897</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    {/* Nephrology - Speciality ICD and CPT Check */}
                                                    <tr className="fullPath ex">
                                                        <td colSpan={4} className="bordertop">
                                                            <label className="bold">
                                                                Nephrology - Speciality ICD and CPT Check
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td>
                                                            <label>
                                                                <img src={grey} className="success" />
                                                                Dialysis Visit
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">CPT 90960</label>
                                                        </td>
                                                        <td className="fcgreen">Dialysis Visit Confirmed</td>
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">Primary Dx = N18.6</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">
                                                                Secondary Dx = Z99.2
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">
                                                                Start date = First day of the Month
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td>
                                                            <label>CPT range</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcgrey">
                                                                CPT 90960, 90961, 90962
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 90960</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td>
                                                            <label />
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">Primary Dx = N18.6</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td>
                                                            <label />
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">Secondary Dx = Z99.2</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td>
                                                            <label />
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Start date = First day of the Month
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td>
                                                            <label>
                                                                <img src={grey} className="success" />
                                                                Hemodialysis Visit
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">CPT 90966</label>
                                                        </td>
                                                        <td className="fcgreen">
                                                            Hemodialysis Visit Confirmed
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">Primary Dx = N18.6</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">
                                                                Secondary Dx = Z99.2
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">
                                                                Start date = First day of the Month
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <label className="fcbrown">
                                                                End date = 30th day of the Month
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 90960</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label />
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">Primary Dx = N18.6</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label />
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">Secondary Dx = Z99.2</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label />
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Start date = First day of the Month
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label />
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                End date = 30th day of the Month
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Speciality ICD DX CODE Check
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">N18.6</label>
                                                        </td>
                                                        <td className="fcgreen">
                                                            Nephrology Top 10 Dx Code Available
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>Nephrology : Top 10 Dx Code</label>
                                                        </td>
                                                        <td>
                                                            <label>
                                                                N18.6, N17.9, N18.30, I10, E87.1, D64.9, I50.9,
                                                                Z99.2, E87.5, E87.6
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td>
                                                            <label>Internal Medicine : Top 10 Dx Code</label>
                                                        </td>
                                                        <td>
                                                            <label>
                                                                I10,I82.409, A41.9, E11.8, E78.5, I25.10, R53.81,
                                                                N18.6, N17.9, N18.30
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath ex">
                                                        <td />
                                                        <td>
                                                            <label>Pain Management : Top 10 Dx Code</label>
                                                        </td>
                                                        <td>
                                                            <label>
                                                                {" "}
                                                                G89.4, M54.16, M54.50, M54.2, M54.51, M54.12,
                                                                M79.18, M46.96, M46.1, M25.569
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">N18.6</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label />
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Nephrology Top 10 Dx Code Available
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>
                                                            <label className="bold">
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Authorization Check
                                                            </label>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Office Auth
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">-</label>
                                                        </td>
                                                        <td className="fcgreen">Office Auth Confirmed</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">1761611199907</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <img
                                                                src={require("./images/OfficeAuth.jpg")}
                                                                style={{
                                                                    width: "auto",
                                                                    height: "auto",
                                                                    maxWidth: "initial"
                                                                }}
                                                            />
                                                            <label />
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td>
                                                            <label>
                                                                <img src={grey} className="success" />
                                                                Hospital Auth
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">-</label>
                                                        </td>
                                                        <td className="fcgreen">Hospital Auth Confirmed</td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">A209923923</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td />
                                                        <td>
                                                            <img
                                                                src={require("./images/authorizationcheck.png")}
                                                                style={{
                                                                    width: "auto",
                                                                    height: "auto",
                                                                    maxWidth: "initial"
                                                                }}
                                                            />
                                                            <label />
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    {/* <tr>
                                          <td colspan="4">
                                              <label class="bold">Unit Check</label>
                                          </td>
                                      </tr> */}
                                                    <tr>
                                                        <td>
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Unit Check
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">Unit = 1</label>
                                                        </td>
                                                        <td className="fcgreen">Unit Confirmed</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">Unit = 1</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="process-flow" id="miscellaneousCheck">
                                        <div className="head">Miscellaneous check</div>
                                        <div className="row">
                                            <table>
                                                <tbody></tbody>
                                                <colgroup>
                                                    <col width="21%" />
                                                    <col width="7%" />
                                                    <col width="58%" />
                                                    <col width="10%" />
                                                </colgroup>
                                                <tbody>
                                                    <tr>
                                                        <th>Rule</th>
                                                        <th colSpan={2}>Validation</th>
                                                        <th />
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Duplicate Check
                                                            </label>
                                                        </td>
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">Sample John</label>
                                                        </td>
                                                        <td className="fcred">Duplicate Claim confirmed</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">Sample John</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">08/12/1983</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">08/12/1983</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">
                                                                Service Date : 08/01/2023
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Service Date : 08/01/2023
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">
                                                                Rendering provider: Dr Samani
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Rendering provider: Dr Samani
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">CPT 99232</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 99232</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Duplicate Claim Found
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="bordertop">
                                                        <td className="bordertop">
                                                            <label>
                                                                <img
                                                                    src={success}
                                                                    className="success"
                                                                />
                                                                Speciality Based Duplicate Check
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">Patient Name</label>
                                                        </td>
                                                        <td className="bordertop fcgreen">
                                                            DX code sequence change recommended
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">Sample John</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">08/12/1983</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">08/12/1983</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">
                                                                Service Date : 08/01/2023
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Service Date : 08/01/2023
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">CPT 99232</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">CPT 99232</label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>DX code</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">
                                                                N18.6, I10, M54.16, D64.9
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                N18.6, I10, M54.16, D64.9
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>emr</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcbrown">
                                                                Rendering provider: Dr Samani
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Rendering provider: Dr Khosla
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Dx Code Sequence Change Recommended
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr>
                                                        <td colSpan={4}>&nbsp;</td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td className="bordertop">
                                                            <label>
                                                                <img src={grey} className="success" />
                                                                Medical Records
                                                            </label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label>emr</label>
                                                        </td>
                                                        <td className="bordertop">
                                                            <label className="fcbrown">
                                                                Denial Received for Medical Records
                                                            </label>
                                                        </td>
                                                        <td className="bordertop fcgreen">
                                                            Medical Record Submitted
                                                        </td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label>tool</label>
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Medical Record Available
                                                            </label>
                                                        </td>
                                                        <td className="fcgreen">Tracking ID # PIQ-123456789</td>
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label />
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Formatted as per Insurance Template
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label />
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Submitted Medical Record through portal
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                    <tr className="fullPath">
                                                        <td />
                                                        <td>
                                                            <label />
                                                        </td>
                                                        <td>
                                                            <label className="fcblue">
                                                                Tracking ID # PIQ-123456789
                                                            </label>
                                                        </td>
                                                        <td />
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>




        </div>


    )
}

export default ClaimNoDetail
