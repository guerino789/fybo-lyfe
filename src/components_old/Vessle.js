import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function Vessle({ vessle, vessles }) {





    // const renderVessle = Object.keys(vessles).map((vessleId) => (
    //     <li key={vessleId}>
    //         <Link to={`/vessles/${vessleId}`}>{vessles[vessleId].vessleName}</Link>
    //     </li>
    // ))


    return (
        <div>
            <li onClick={vessle}>
                <span>{vessle.vessleName}</span>
                <span>{vessle.vessleLength}</span>
            </li>

        </div>
    )
}





export default Vessle