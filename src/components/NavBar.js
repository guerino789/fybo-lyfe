import React from "react";
import { Link } from "react-router-dom";


function NavBar() {

    return (
        <div>
            <Link to="/">Home</Link>

            <Link to="/vessles">Vessles</Link>

            <Link to="/vessles/addvessle">New Vessle</Link>
        </div>
    )
}

export default NavBar