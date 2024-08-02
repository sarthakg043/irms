import React from 'react' 
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './components'
import { ModeToggle } from './components/ModeToggle'

const Layout = () => {
  return (
    <div>
        <div className='w-full'>
          <div className='float-right m-3'>
            <ModeToggle />
          </div>
        </div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout