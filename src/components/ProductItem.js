import React from 'react';

function ProductItem({ shoe }) {
    const { title, description, price, image } = shoe
    return (
        <div className="products__card">
            <div className='products__card__content'>
                <img src={image} alt="nike shoe" />
                <h2>{title}</h2>
                <p>{description.substring(0, 100)}...</p>
                <div className="product--actions">
                    <p>{`$ ${price}`}</p>
                    <button className='btn--add--small' >ADD</button>
                </div>
            </div>

        </div>
    );
}

export default ProductItem;
