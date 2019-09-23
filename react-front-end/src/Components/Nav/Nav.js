import React from 'react'
import { useMediaQuery } from 'react-responsive'
import TopNav from './TopNav'
import BottomNav from './BottomNav'
import SideNav from './SideNav'

export default function Nav({logo}) {

  const isDesktop = useMediaQuery({ query: '(min-device-width: 968px)' })
  const isMobile = useMediaQuery({ query: '(max-device-width: 480px)' })

  return (
    <div>
      {isDesktop && <SideNav />}
      {isMobile && <TopNav logo={logo} />}
      {isMobile && <BottomNav />}
    </div>
  )
}