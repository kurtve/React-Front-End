import React from 'react';

import logo from '../../Assets/logo.svg';
import TopNav from './TopNav';
import BottomNav from './BottomNav';


export default function Nav() {
  return (
    <div>
      <TopNav logo={logo} />
      <BottomNav />
    </div>
  )
}
