
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SingleProductPage from './pages/SingleProductPage';
import ThankYouPage from './pages/ThankYouPage';
import BillingPage from './pages/BillingPage';

import Navigation from './components/Navigation'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/singleProductPage' component={SingleProductPage} />
          <Route path='/thankYouPage' component={ThankYouPage} />
          <Route path='/billingPage' component={BillingPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
