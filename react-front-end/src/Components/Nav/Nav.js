<<<<<<< HEAD
import React from 'react'
// import { useMediaQuery } from 'react-responsive'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import SideNav from './SideNav'
=======
import React from 'react';
>>>>>>> a92c8e45688f7bf4612ba494be44ffa16d89edf6

import TopNav from './TopNav';
import BottomNav from './BottomNav';


export default function Nav() {

<<<<<<< HEAD
  // const isDesktop = useMediaQuery({ query: '(min-width: 968px)' })
  // const isMobile = useMediaQuery({ query: '(max-width: 480px)' })

  return (
    <div>
      {/* {isDesktop && <SideNav />}
      {isMobile && <TopNav logo={logo} />}
      {isMobile && <BottomNav />} */}
      <TopNav logo={logo} />
      <BottomNav />
=======

  return (
    <div>

      <TopNav />
      <BottomNav />

>>>>>>> a92c8e45688f7bf4612ba494be44ffa16d89edf6
    </div>
  )
}
