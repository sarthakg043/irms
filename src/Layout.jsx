import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from './components'

const Layout = () => {
  return (
    <div className='bg-[#d7dcd7] h-screen'>
        <Navbar />
        <div className='h-[80vh]'>&nbsp;</div>
        <br /><br />
        <Footer />
    </div>
  )
}

export default Layout