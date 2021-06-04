import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions'

function ShoppingCartItem(props) {
    const [amount, setAmount] = useState(1);
    const { id, title, price, image } = props.product
    let finalPrice = price * amount
    console.log(amount);
    return (
        <div className='shoppingCartItem'>
            <img src={image} alt="nike shoe" />
            <h3>{title}</h3>
            <div className="amountSelector">
                <p onClick={() => {
                    if (amount > 1) {
                        setAmount(amount - 1)
                    }
                }}>-</p>
                <p>{amount}</p>
                <p onClick={() => {
                    setAmount(amount + 1)
                }}>+</p>
            </div>
            <p>{`$ ${finalPrice}`}</p>
            <GrClose onClick={() => {
                props.removeItemFromCart(id)
            }} />
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItemFromCart: (id) => dispatch(actionCreator.removeItemFromCart(id))
    }
}
export default connect(null, mapDispatchToProps)(ShoppingCartItem);
