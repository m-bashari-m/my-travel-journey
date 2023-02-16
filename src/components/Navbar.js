import React from "react"
import logo from "../icons8-google-earth-30.svg"

function Navbar(){
    return(
        <div className="navbar">
            <img
                src={logo}
                alt="Earth logo"
                className="navbar--logo"/>
            <p>my travel journal.</p>
        </div>
    );
}

export default Navbar;