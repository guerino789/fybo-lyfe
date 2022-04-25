import React, { useState } from "react";
import VessleListEntry from "./VessleListEntry";










function VesselList({ vessles }) {


    return (
        <ul>
            {vessles.map((vessle) => (

                <VessleListEntry
                    key={vessle.id}
                    vessle={vessle}
                />

            ))}
        </ul>



    )

}

export default VesselList


