import React from 'react';
import Header from './commons/header/Header';
import Footer from './commons/footer/Footer';
import Home from './Views/Home';
import Store from './Views/Store';
import Product from './Views/Product';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/store" exact component={Store} />
          <Route path="/product/:id" exact component={Product} />
          {/* <Route path="/product/:id" exact component={ProductDetails} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
