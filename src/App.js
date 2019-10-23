import React from 'react';
import Header from './commons/header/Header';
import Footer from './commons/footer/Footer';
import Home from './components/Home';
import Store from './components/Store';
import Product from './components/Product'
import Navigation from './commons/Navigation/Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/store" component={Store} />
          <Route path='/product' exact component={Product} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
