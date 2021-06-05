
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SingleProductPage from './pages/SingleProductPage';
import ThankYouPage from './pages/ThankYouPage';
import CheckoutPage from './pages/CheckoutPage';
import ShoppingCartPage from './pages/ShoppingCartPage';

import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/singleProductPage/:id' component={SingleProductPage} />
          <Route path='/shoppingCartPage' component={ShoppingCartPage} />
          <Route path='/thankYouPage' component={ThankYouPage} />
          <Route path='/checkoutPage' component={CheckoutPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
