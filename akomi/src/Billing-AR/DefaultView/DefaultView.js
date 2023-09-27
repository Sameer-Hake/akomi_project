import React, { useState, useEffect } from 'react'
import './DefaultView.css'
import data from '../Table/Data.json'
function DefaultView() {
    let [TotalRecord, setTotalReacord] = useState(0);

    function HandlesetTotalReacord(Total) {
        setTotalReacord(Total)
    }

    useEffect(() => {
        //from here get the total record
        HandlesetTotalReacord(103)
    }, [])

    return (
        <div className="default">
            <div className="default-container">
                <p className="first-text-default">Default View</p>
                <p className="verticle-line-default">|</p>
                <p className="second-text-default"> Total Count: {data.length}</p>
            </div>
            <hr className="horizantal-line-default" style={{ margin: "px  0", color: "gray" }}></hr>
        </div>
    )
}

export default DefaultView;
