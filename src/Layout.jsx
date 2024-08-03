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
        <div className='h-[5vh]'>&nbsp;</div>
        <br /><br />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout