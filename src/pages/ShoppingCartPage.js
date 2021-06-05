import React from 'react';
import ShoppingCartItem from '../components/ShoppingCartItem'
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions'
import { useHistory } from 'react-router-dom';
import Billing from '../components/Billing'

function ShoppingCartPage(props) {
    const history = useHistory()
    const redirectHome = () => {
        history.push("/");
    }

    return (
        <div className='shoppingCart'>
            <h1>My shopping cart</h1>
            {props.cart.length > 0 ? <>
                <div className='productList'>
                    <div className="itemsInCart__wrapper">
                        {props.cart.map(product => <ShoppingCartItem key={product.id} product={product} />)}
                    </div>
                    <div>
                        <Billing />
                    </div>
                </div>
                <button onClick={redirectHome}>CONTINUE SHOPPING</button>
            </>
                :
                <div className='emptyCart'>
                    <div>
                        <h2>Your cart is currently empty</h2>
                        <button onClick={redirectHome}>Go to store</button>
                    </div>
                </div>}
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



