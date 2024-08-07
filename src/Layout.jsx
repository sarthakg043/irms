import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { ModeToggle } from './components/ModeToggle';

const Layout = () => {
  const location = useLocation();
  const showNavbarFooter = location.pathname !== '/incidentreport';

  return (
    <div>
      <div className='w-full'>
        <div className='float-right m-3'>
          <ModeToggle />
        </div>
      </div>
      {showNavbarFooter && <Navbar />}
      <div className='h-[5vh]'>&nbsp;</div>
      <br /><br />
      <Outlet />
      {showNavbarFooter && <Footer />}
    </div>
  );
};

export default Layout;
