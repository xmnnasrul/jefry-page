import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill, BsCameraFill, BsFillTelephoneFill } from 'react-icons/bs'
import Logo from './../Assets/logo.png'
import './Navbar.css'
function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <a href="#home" alt='logo'><img src={Logo} alt="Logo" id="logo" /></a>
                <ul>
                    <li>
                        <a href="#home"><AiFillHome /> <span>Home</span></a>
                    </li>
                    <li>
                        <a href="#about"><BsFillPersonFill /> <span>About</span></a>
                    </li>
                    <li>
                        <a href="#project"><BsCameraFill /> <span>Project</span></a>
                    </li>
                    <li>
                        <a href="#contact"><BsFillTelephoneFill /> <span>Contact</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar