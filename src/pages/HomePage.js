import React from 'react';
import Products from '../components/Products'
import { shoes } from '../dummy-data'

function Home() {
    return (
        <div className='homePage__wrapper'>
            <div className='hero'>
                <div className="hero__content">
                    <div className="hero__content--centerItem">
                        <h1 className='productNumber'>15</h1>
                        <img className='productImage' src={shoes[0].image} alt="shoe" />
                    </div>
                    <h1 className='hero__content--productTitle'>Air MAX 15</h1>
                    <p className='hero__content--productDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eos nemo libero, ratione, molestias recusandae nostrum ut, eligendi aperiam impedit fugit quaerat dicta officiis rerum commodi quae autem officia natus reprehenderit tempore numquam! Impedit libero quis iusto cum officia quidem et aut voluptatum doloremque odit distinctio minus, voluptas, minima reprehenderit.</p>
                </div>
            </div>
            <Products shoes={shoes} />
        </div >
    );
}

export default Home;
