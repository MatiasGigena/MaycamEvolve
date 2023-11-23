import Navbar from '../components/nav';
import Footer from '../components/footer';
import { AiOutlineWarning } from 'react-icons/ai';
import { TfiWorld } from 'react-icons/tfi';

const Layout = ({ children }) => {
  return (
    <main className='bg-[#1a1e1c] flex flex-col fondo3D '>
      <div className='bg-[#715bd4] flex gap-4 pr-3 lg:pr-0 text-white'>
        <marquee
          className='text-white'
          bgcolor='#715bd4'
          direction='left'
          scrollamount='8'
          scrolldelay='40'
          truespeed='true'
          width='80%'
        >
          <div className='flex items-center justify-center gap-2'>
            <AiOutlineWarning />
            <p>
              Aca colocarias info importante cualquier cosa
              que hay que poner se va a mostrar aca
            </p>
          </div>
        </marquee>
        <nav className='flex items-center gap-3'>
          <div className='flex items-center gap-2'>
            <strong>Argentina</strong>
            <TfiWorld />
          </div>
          <a href='/contacto'>Ayuda</a>
        </nav>
      </div>
      <section className='lg:pt-10 lg:pb-16'>
        <Navbar />
        {children}
        <Footer />
      </section>
    </main>
  );
};

export default Layout;
