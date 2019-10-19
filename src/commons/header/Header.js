import React from 'react';
import HeaderTop from './HeaderTop';
import Bouncer from './Bouncer';
import Navbar from './Navbar';

function Header() {
  return (
    <div>
      <HeaderTop />
      <Bouncer />
      <Navbar />
    </div>
  );
}

export default Header;
