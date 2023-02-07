import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/catalog'}>Catalog</NavLink>
            <NavLink to={'/info'}>Info</NavLink>
            <NavLink to={'/cart'}>Cart</NavLink>
        </div>
    );
};

export default NavBar;
