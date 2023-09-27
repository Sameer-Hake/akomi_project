import React, { createElement, useEffect } from 'react';
import { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './BillingAR.css'
import DefaultView from './DefaultView/DefaultView';
import Table from './Table/Table';
import Filter from './Filter/Filter';
import Header from '../Header/Header';
import { useNavigate, Outlet } from 'react-router-dom';
function BillingAR() {
    const [allFiltersData, setallFiltersData] = useState(null);
    const navigate = useNavigate();

  useEffect(() => {
    const unblock = navigate(location => {
      if (location.pathname === '/Login') {
        return '/';
      }
      return true;
    });

    // return () => unblock(); // Clean up the navigation blocker when the component unmounts
  }, [navigate]);
    let handleAllFiltersData = (data) => {
        // console.log(allFiltersData);
        setallFiltersData(data)
    }
    return (
        <div>
            <Header />
            <div className="billing-ar">
                <DefaultView />
                <Filter handleAllFiltersData={handleAllFiltersData} />
                <div class="table-scroll">
                    <Table allFiltersData={allFiltersData} />
                </div>
            </div>
        </div>

    );
}
export default BillingAR;
