import Footer from './footer';
import LandingPage from '../features';
import Navbar from './navbar';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow'>
      <LandingPage />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
