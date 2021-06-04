import React from 'react';
import Products from '../components/Products'
import { connect } from 'react-redux'

function Home({ shoes }) {
    const mainShoe = shoes.find(item => item.id === 1)
    return (
        <div className='homePage__wrapper'>
            <div className='hero'>
                <div className="hero__content">
                    <div className="hero__content--centerItem">
                        <h1 className='productNumber'>{mainShoe.modelNum}</h1>
                        <img className='productImage' src={mainShoe.image} alt="shoe" />
                    </div>
                    <h1 className='hero__content--productTitle'>{mainShoe.title}</h1>
                    <p className='hero__content--productDescription'>{mainShoe.description}</p>
                </div>
            </div>
            <Products shoes={shoes} />
        </div >
    );
}
const mapStateToProps = (state) => {
    return {
        shoes: state.mainStore.storeProducts
    }
}
export default connect(mapStateToProps, null)(Home);
