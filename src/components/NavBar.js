import React from "react";
import { Link } from "react-router-dom";


function NavBar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/">Home</Link>

                <Link to="/vessles">Vessles</Link>

                <Link to="/vessles/addvessle">Add Vessle</Link>



            </div>
        </nav>
    )
}

export default NavBar

// {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             // <div>
//             //     <Link to="/">Home</Link>

//             //     <Link to="/vessles">Vessles</Link>

//             //     <Link to="/vessles/addvessle">New Vessle</Link>
//             // </div>
//         </nav> */}