import React from "react";
import { Link, useRouteMatch } from "react-router-dom";



function VessleListEntry({ vessle }) {

    const match = useRouteMatch();



    return (

        <li >
            <Link to={`/${vessle.id}`}>
                <span>{vessle.vessleName}</span>
                <span>{vessle.vessleLength}</span>
            </Link>
        </li>


    )
}





export default VessleListEntry