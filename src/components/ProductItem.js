import React from 'react';
import { Link } from 'react-router-dom'

function ProductItem({ shoe }) {
    const { id, title, description, price, image } = shoe
    return (
        <div className="products__card">
            <Link className='link' to={`/singleProductPage/${id}`}>
                <div className='products__card__content'>
                    <img src={image} alt="nike shoe" />
                    <h2>{title}</h2>
                    <p>{description.substring(0, 100)}...</p>
                    <div className="product--actions">
                        <p>{`$ ${price}`}</p>
                        <button onClick={() => {
                            console.log('ADD');
                        }} className='btn--add--small' >ADD</button>
                    </div>
                </div>
            </Link>
        </div>

    );
}

export default ProductItem;
