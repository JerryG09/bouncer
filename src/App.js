import React from 'react';
import Header from './commons/header/Header';
import Footer from './commons/footer/Footer';
import Home from './components/Home';
import Store from './components/Store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/store" component={Store} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
