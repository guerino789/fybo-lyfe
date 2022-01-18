import React from "react";
import { Link } from "react-router-dom";



function VessleListEntry({ vessles }) {



    const render = Object.keys(vessles).map((vessleID) => (
        <li key={vessleID}>
            <Link to={`/vessles/${vessleID}`}>{vessles[vessleID].vessleName}</Link>
        </li>
    ))

    return (
        <div>
            <ul>{render}</ul>
        </div>
    )

}





export default VessleListEntry