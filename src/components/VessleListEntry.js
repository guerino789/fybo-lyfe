import React, { useState } from "react";
import { Link } from "react-router-dom";



function VessleListEntry({ vessle }) {






    return (
        <div>
            <li key={vessle.id}>
                <Link to={`/vessles/${vessle.id}`}>{vessle.vessleName}</Link>
            </li>

        </div>
    )

}





export default VessleListEntry