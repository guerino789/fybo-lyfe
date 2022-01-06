import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewVessle() {

    const [vessleInfo, setVessleInfo] = useState({})

    const params = useParams();
    console.log(params)

    useEffect(() => {
        fetch(`http://localhost:3001/vessles/${params.vessleId}`)
            .then(resp => resp.json())
            .then(data => setVessleInfo(data))
    }, [params.vessleId])


    return (
        <div>
            <div>{vessleInfo.vessleName}</div>
            <div>{vessleInfo.vessleLength}</div>
            <div>{vessleInfo.captainsName}</div>
            <div>{vessleInfo.projectManager}</div>
        </div>

    )
}

export default ViewVessle