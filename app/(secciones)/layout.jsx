import Navbar from '../components/nav';
import Footer from '../components/footer';
import { AiOutlineWarning } from 'react-icons/ai';
import { TfiWorld } from 'react-icons/tfi';

const Layout = ({ children }) => {
  return (
    <main className='bg-[#1a1e1c] flex flex-col fondo3D '>
      <section className='bg-[#715bd4] flex gap-4 pr-3 lg:pr-0 text-white'>
        <div className='text-white text-wrapper'>
          <div className='flex items-center justify-center gap-2 '>
            <AiOutlineWarning />
            <p>
              Aca colocarias info importante cualquier cosa
              que hay que poner se va a mostrar aca
            </p>
          </div>
        </div>
        <nav className='flex items-center gap-2'>
          <div className='flex items-center gap-2'>
            <strong>Argentina</strong>
            <TfiWorld />
          </div>
          <a className='cursor-pointer2' href='/contacto'>
            Ayuda
          </a>
        </nav>
      </section>
      <section className='lg:pt-10 lg:pb-16'>
        <Navbar />
        {children}
        <Footer />
      </section>
    </main>
  );
};

export default Layout;
