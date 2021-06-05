import React from 'react';
import { Link } from 'react-router-dom'
import { AiFillShop } from "react-icons/ai";

function Navigation() {
    return (
        <div className="navigation">
            <Link to='/'>
                <img className='logo' src="/images/logo.png" alt="nike logo" />
            </Link>
            <Link className='link' to='/shoppingCartPage'>
                <AiFillShop className='menuIcon ' />
            </Link>
        </div>
    );
}

export default Navigation;
