import React from "react";
import { useEffect, useState } from "react";
import AddVessle from "./AddVessle";







function VesselList() {

    const [vessles, setVessles] = useState([])



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
                    <li key={vessle.id}>

                        {vessle.vessleName}
                    </li>

                ))}

            </ul>
        </div>
    )
}

export default VesselList