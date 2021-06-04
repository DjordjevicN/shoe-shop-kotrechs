import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
    CgMenuGridR
} from "react-icons/cg";

function Navigation({ cart }) {

    return (
        <div className="navigation">
            <Link to='/'>
                <img className='logo' src="/images/logo.png" alt="nike logo" />
            </Link>
            <Link className='link' to='/shoppingCartPage'>
                <CgMenuGridR className={'menuIcon ' + (cart.length > 0 ? 'iconActive' : null)} />
            </Link>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        cart: state.mainStore.shoppingCart
    }
}
export default connect(mapStateToProps, null)(Navigation);
