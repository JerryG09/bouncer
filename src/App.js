import React from 'react';
import Header from './commons/header/Header';
import Footer from './commons/footer/Footer';
import Home from './Views/Home';
import Store from './Views/Store';
import Product from './Views/Product';
import Navigation from './commons/Navigation/Navigation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/store" exact component={Store} />
          <Route path="/product" exact component={Product} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
