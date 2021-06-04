import React from 'react';
import ShoppingCartItem from '../components/ShoppingCartItem'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions'

function ShoppingCartPage(props) {
    return (
        <div className='shoppingCart'>
            <h1>My shopping cart</h1>

            {props.cart.length > 0 ?
                <div className='productList'>
                    {props.cart.map(product => <ShoppingCartItem key={product.id} product={product} />)}
                </div>
                :
                <div>empty bag</div>}

            <div>total</div>
            <div>actions</div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        cart: state.mainStore.shoppingCart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch(actionCreator.addToCart(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPage);
