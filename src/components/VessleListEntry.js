import React from "react";
import { Link } from "react-router-dom";



function VessleListEntry({ vessle }) {








    return (
        <li key={vessle.id}>
            <Link to={`/vessles/${vessle.id}`}>{vessle.vessleName}</Link>
        </li>
    )

}





export default VessleListEntry