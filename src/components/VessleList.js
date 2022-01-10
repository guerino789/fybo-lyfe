import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import AddVessle from "./AddVessle";
import VessleListEntry from "./VessleListEntry"








function VesselList() {

    const [vessles, setVessles] = useState([])

    const match = useRouteMatch();




    useEffect(() => {
        fetch("http://localhost:3001/vessles")
            .then((resp) => resp.json())
            .then(vessles => setVessles(vessles))
    }, [])

    function handleAddVessle(newVessle) {
        setVessles([...vessles, newVessle])
    }









    return (
        <div>
            <AddVessle onAddVessle={handleAddVessle} />
            <br />

            <ul className="Vessles">
                {vessles.map((vessle) => (

                    <VessleListEntry
                        key={vessle.id}
                        vessle={vessle}
                    />

                ))}
            </ul>

        </div>
    )
}

export default VesselList