import React from "react";
import { useRouteMatch } from "react-router-dom";



function ViewVessle({ handleDeleteVessle, vessle }) {




    function handleDeleteClick() {
        fetch(`http://localhost:3001/vessles/${vessle.id}`, {
            method: "DELETE",
        })
            .then((resp) => resp.json())
            .then(() => handleDeleteVessle(vessle.id))
    }









    return (
        <div>
            <div>{vessle.vessleName}</div>
            <div>{vessle.vessleLength}</div>
            <div>{vessle.captainsName}</div>
            <div>{vessle.projectManager}</div>
            <button className="remove" onClick={handleDeleteClick}>
                Delete
            </button>
        </div>

    )
}

export default ViewVessle