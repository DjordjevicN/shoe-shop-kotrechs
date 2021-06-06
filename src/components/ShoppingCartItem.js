import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { connect } from 'react-redux';
import * as actionCreator from '../store/actions'

function ShoppingCartItem(props) {
    const [amount, setAmount] = useState(1);
    const { id, title, price, image } = props.product
    let finalItemPrice = price * amount
    const incrementTotal = () => {
        props.incrementTotal(price)
    }
    const decrementTotal = () => {
        props.decrementTotal(price)
    }

    return (
        <>
            {window.innerWidth < 450 ?
                <div className='shoppingCartItem--mobile'>
                    <div className="shoppingCartItem--information">
                        <img src={image} alt="nike shoe" />
                        <h3>{title}</h3>
                        <p>{`$ ${finalItemPrice}`}</p>
                        <div className="amountSelector--mobile">
                            <p onClick={() => {
                                if (amount > 1) {
                                    setAmount(amount - 1)
                                    decrementTotal()
                                }
                            }}>-</p>
                            <p>{amount}</p>
                            <p onClick={() => {
                                setAmount(amount + 1)
                                incrementTotal()
                            }}>+</p>
                        </div>
                    </div>
                    <GrClose className='btn--mobile' onClick={() => {
                        props.decrementTotal(finalItemPrice)
                        props.removeItemFromCart(id)
                    }} />
                </div>
                :
                <div className='shoppingCartItem'>
                    <img src={image} alt="nike shoe" />
                    <h3>{title}</h3>
                    <div className="amountSelector">
                        <p onClick={() => {
                            if (amount > 1) {
                                setAmount(amount - 1)
                                decrementTotal()
                            }
                        }}>-</p>
                        <p>{amount}</p>
                        <p onClick={() => {
                            setAmount(amount + 1)
                            incrementTotal()
                        }}>+</p>
                    </div>
                    <p>{`$ ${finalItemPrice}`}</p>
                    <GrClose className='btn' onClick={() => {
                        props.decrementTotal(finalItemPrice)
                        props.removeItemFromCart(id)
                    }} />
                </div>}
        </>

    );
}
const mapStateToProps = (state) => {
    return {
        billingTotal: state.mainStore.billingTotal
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeItemFromCart: (id) => dispatch(actionCreator.removeItemFromCart(id)),
        incrementTotal: (amount) => dispatch(actionCreator.incrementTotal(amount)),
        decrementTotal: (amount) => dispatch(actionCreator.decrementTotal(amount))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartItem);
