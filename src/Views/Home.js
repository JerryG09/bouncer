import React from 'react';
import MegaMenu from '../components/Megamenu/Megamenu';
import BestSeller from '../components/Bestseller/BestSeller';
import Rectangle1 from '../components/Bestseller/Rectangle1';
import Rectangle2 from '../components/Bestseller/Rectangle2';
import LatestNews from '../components/Bestseller/LatestNews';
import FeaturedProducts from '../components/Bestseller/FeaturedProducts';
import InputForm from '../components/Utils/InputForm';

function Home(props) {
  console.log(props);
  return (
    <>
      <MegaMenu />
      <BestSeller {...props} />
      <Rectangle1 />
      <Rectangle2 />
      <LatestNews />
      <FeaturedProducts />
      <InputForm />
    </>
  );
}

export default Home;
