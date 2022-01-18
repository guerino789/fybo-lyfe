import React from "react";
import { Route, useRouteMatch, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AddVessle from "./AddVessle";










function VesselList({ onAddVessle, vessles }) {



    const match = useRouteMatch();
    console.log(match)


    const render = Object.keys(vessles).map((vessleID) => (
        <li key={vessleID}>
            <Link to={`/vessles/${vessleID}`}>{vessles[vessleID].vessleName}</Link>
        </li>
    ))










    return (
        <div>
            <AddVessle onAddVessle={onAddVessle} />

            <br />

            <ul className="Vessles">{render}</ul>


        </div>
    )
}

export default VesselList


// {vessles.map((vessle) => (
//                     <Route key={vessle.id} path={`${match.url}/:vessleId`}>
//                         <VessleListEntry
//                             key={vessle.id}
//                             vessles={vessles}
//                         />
//                     </Route>
//                 ))}