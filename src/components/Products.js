import React from 'react';
import ProductItem from './ProductItem'

function Products({ shoes }) {
    return (
        <div className='products__wrapper'>
            <div className="products__content">
                {shoes.map(item => <ProductItem key={item.id} shoe={item} />
                )}
            </div>
        </div>
    );
}

export default Products;
