import React from "react";
import './Navbar.sass'
import logo from './img/partner-ship.png'

import Notifications from "../Notifications";
import Dropdown from "../Dropdown/Dropdown";
const Navbar = () => {
return (
    <div className='navigation'>
        <img src={logo} alt="logotype"/>
        <div className='navigation__menu'>
        <Notifications/>
        <Dropdown/>
        </div>
    </div>

);

}


export default Navbar;