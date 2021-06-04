import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaAsterisk } from "react-icons/fa";
import Data from './NavbarItems';
import './Navbar.css';

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaBars onClick={toggleSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                <ul className="nav-menuitems">
                    <li className="nav-toggle">
                        <Link to="#" className="menu-bars">
                            <FaAsterisk onClick={toggleSidebar}/>
                        </Link>
                    </li>
                    {Data.map((items, index) => {
                        return (
                            <li key={index} onClick={toggleSidebar} className={items.class}>
                                <Link to={items.path}>
                                    {items.icon}
                                    <span>{items.name}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;