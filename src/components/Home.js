import React from 'react';
import MegaMenu from './Megamenu/Megamenu'
import BestSeller from './Bestseller/BestSeller'
import Rectangle1 from './Bestseller/Rectangle1'
import Rectangle2 from './Bestseller/Rectangle2'
import LatestNews from './Bestseller/LatestNews'


function Home() {
  return (
    <>
      <MegaMenu />
      <BestSeller />
      <Rectangle1 />
      <Rectangle2 />
      <LatestNews />
    </>
  )
}

export default Home
