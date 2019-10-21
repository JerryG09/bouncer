import React from 'react';
import Header from './commons/header/Header';
import Footer from './commons/footer/Footer';
import Megamenu from './components/Megamenu/Megamenu';
import BestSeller from './components/Bestseller/BestSeller'

function App() {
  return (
    <div className="App">
      <Header />
      <Megamenu />
      <BestSeller />
      <Footer />
    </div>
  );
}

export default App;
