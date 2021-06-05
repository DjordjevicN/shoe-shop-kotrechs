import React, { useState } from 'react';
import { connect } from 'react-redux'
import * as actionCreator from '../store/actions'
import { Redirect } from 'react-router'

function SingleProductPage(props) {
    const [redirect, setRedirect] = useState(false);
    const shoeId = +props.match.params.id;
    const shoeToDisplay = props.shoes.find(item => item.id === shoeId)
    const { title, price, description, image, shortDescription } = shoeToDisplay;

    if (redirect) {
        return < Redirect to="/shoppingCartPage" />
    }

    const addHandler = () => {
        let newShoeInCart = { ...shoeToDisplay, totalPrice: price, amount: 1 }
        props.addToCart(newShoeInCart)
        props.incrementTotal(price)
        setRedirect(true)
    }

    const buyHandler = () => {
        console.log('buy');
    }

    return (
        <div className="singleProduct">
            <div className="singleProduct__content">
                <div className="singleProduct__content--mainInfo">
                    <img src={image} alt="Nike shoes" />
                    <div className="mainInformation">
                        <h1>{title}</h1>
                        <p>{`$ ${price}`}</p>
                        <p>{shortDescription}</p>
                        <div className="singleProduct--actions">
                            <button onClick={addHandler}>ADD</button>
                            <button onClick={buyHandler}>BUY NOW</button>
                        </div>
                    </div>
                </div>
                <div className="singleProduct__content--description">
                    <h2>Description</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        shoes: state.mainStore.storeProducts,
        cart: state.mainStore.shoppingCart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => dispatch(actionCreator.addToCart(item)),
        incrementTotal: (amount) => dispatch(actionCreator.incrementTotal(amount))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleProductPage);
