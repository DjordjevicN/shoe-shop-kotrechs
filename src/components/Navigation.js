import React from 'react';
import { Link } from 'react-router-dom'
import {
    CgMenuGridR
} from "react-icons/cg";

function Navigation() {
    return (
        <div className="navigation">
            <Link to='/'>
                <img className='logo' src="/images/logo.png" alt="nike logo" />
            </Link>
            <CgMenuGridR className='menuIcon' />
        </div>
    );
}

export default Navigation;
