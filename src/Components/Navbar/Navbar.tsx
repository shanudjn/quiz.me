import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="nav-container bg-white">
            <div className="navbar flex flex-row sm:justify-between md:justify-evenly items-baseline">
                <div className="title">
                    <Link to="/"><span className="text-xl font-bold"><span className="text-green-400 text-3xl font-bold" >Q</span>uiz.me</span></Link>
                </div>
                <div className="links">
                    <Link to=""><span>About</span></Link>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
