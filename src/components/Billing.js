import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux'

function Billing(props) {
    const history = useHistory()
    const redirectCheckOut = () => {
        history.push("/checkoutPage");
    }
    return (
        <div className='billing'>
            <div className='billing__content'>
                <h3>{`Subtotal: $ ${props.billingTotal}`}</h3>
                <h3>{`Shipping: $ 0`}</h3>
                <h3 className='billing__content--total'>{`Total: $ ${props.billingTotal}`}</h3>
            </div>
            <button className='btn--checkout' onClick={redirectCheckOut}>CHECKOUT</button>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        billingTotal: state.mainStore.billingTotal
    }
}
export default connect(mapStateToProps, null)(Billing);
