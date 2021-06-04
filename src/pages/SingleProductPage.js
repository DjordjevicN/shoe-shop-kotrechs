import React from 'react';
import { shoes } from '../dummy-data'

function SingleProductPage(props) {
    const shoeId = +props.match.params.id;
    const shoeToDisplay = shoes.find(item => item.id === shoeId)
    console.log(shoeToDisplay);
    const { title, price, description, image, shortDescription } = shoeToDisplay;
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
                            <button>ADD</button>
                            <button>BUY NOW</button>
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

export default SingleProductPage;
