import React from 'react';
import { Link } from 'react-router-dom'

function ProductItem({ shoe }) {
    const { id, title, description, price, image } = shoe
    return (
        <div className="products__card">
            <div className='products__card__content'>
                <img src={image} alt="nike shoe" />
                <h2>{title}</h2>
                <p>{description.substring(0, 50)}...</p>
                <div className="product--actions">
                    <p>{`$ ${price}`}</p>
                    <Link className='link' to={`/singleProductPage/${id}`}>
                        <button>DETAILS</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;
