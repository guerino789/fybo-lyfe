import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";



function VessleCard({ deleteVessle, vessle = {} }) {













    return (
        <div>
            <h1>{vessle.vessleName}</h1>
            <h1>{vessle.vessleLength}</h1>
            <h1>{vessle.captinsName}</h1>
            <h1>{vessle.projectManager}</h1>
            <button onClick={deleteVessle}> Delete</button>

        </div>

    )
}

export default VessleCard