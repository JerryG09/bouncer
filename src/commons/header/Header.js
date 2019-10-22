import React from 'react';
import HeaderTop from './HeaderTop';
import Bouncer from './Bouncer';
import Navbar from './Navbar';
import HeaderDivider from './HeaderDivider'


function Header() {
  return (
    <div>
      <HeaderTop />
      <HeaderDivider />
      <Bouncer />
      <Navbar />
    </div>
  );
}

export default Header;
