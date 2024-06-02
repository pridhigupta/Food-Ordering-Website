import React, { useState } from 'react'
import Logo from '../assets/pizzaLogo.jpeg'
import { Link } from 'react-router-dom'
import TocIcon from '@mui/icons-material/Toc';
import '../styles/Navbar.css'

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} />
                <div className="hiddenLinks">
                    <Link to="/"> HOME </Link>
                    <Link to="/menu"> MENU </Link>
                    <Link to="/about"> ABOUT </Link>
                    <Link to="/contact"> CONTACT </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/"> HOME </Link>
                <Link to="/menu"> MENU </Link>
                <Link to="/about"> ABOUT </Link>
                <Link to="/contact"> CONTACT </Link>
                <button onClick={toggleNavbar}>
                    <TocIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;