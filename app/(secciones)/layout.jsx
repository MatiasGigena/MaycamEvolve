// import CustomCursor from '../components/cstomCrsor';
import Navbar from '../components/nav';
import Footer from '../components/footer';

const Layout = ({ children }) => {
  return (
    <main className='bg-[#1a1e1c] fondo3D lg:pt-10 lg:pb-16'>
      {/* <CustomCursor /> */}
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
