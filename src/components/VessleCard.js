import React from "react";




function VessleCard({ deleteVessle, vessle = {} }) {













    return (
        <div>
            <h1>Vessle Name: {vessle.vessleName}</h1>
            <h1>ft: {vessle.vessleLength}</h1>
            <h1>Captin: {vessle.captinsName}</h1>
            <h1>Project Manager: {vessle.projectManager}</h1>
            <button onClick={deleteVessle}> Delete</button>

        </div>

    )
}

export default VessleCard