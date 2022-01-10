import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewVessle() {

    const [vessleInfo, setVessleInfo] = useState([])
    console.log(vessleInfo)

    const params = useParams();


    useEffect(() => {
        fetch(`http://localhost:3001/vessles/${params.vessleId}`)
            .then(resp => resp.json())
            .then(data => setVessleInfo(data))
    }, [params.vessleId])

    function handleDeleteClick() {
        fetch(`http://localhost:3001/vessles/${params.vessleId}`, {
            method: "DELETE",
        })
            .then((resp) => resp.json())
            .then(() => handleDeleteVessle(vessleInfo))
    }

    function handleDeleteVessle(deletedVessle) {
        const updatedVessles = vessleInfo.filter((vessle) => vessle.id !== deletedVessle.id);
        setVessleInfo(updatedVessles);
    }







    return (
        <div>
            <div>{vessleInfo.vessleName}</div>
            <div>{vessleInfo.vessleLength}</div>
            <div>{vessleInfo.captainsName}</div>
            <div>{vessleInfo.projectManager}</div>
            <button className="remove" onClick={handleDeleteClick}>
                Delete
            </button>
        </div>

    )
}

export default ViewVessle