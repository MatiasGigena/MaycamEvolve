'use client';
import Image from 'next/image';
import { useState } from 'react';
import {
  menuVars,
  containerVars,
  mobileLinkVars,
} from '../animations/anim';
import { usePathname, useRouter } from 'next/navigation';
import MobileNavLink from './mobileNav';
import { AnimatePresence, motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import Companies from './sponsors';
import Redes from './redes';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  let subpage = pathname.split('/')?.[1];
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const navLinks = [
    { title: 'Nuestros Equipos', href: '/equipos' },
    { title: 'Noticias y Novedades', href: '/noticias' },
    { title: 'Sobre Nosotros', href: '/' },
    { title: 'Tienda', href: '/tienda' },
    { title: 'Contáctanos', href: '/contacto' },
  ];

  const activeLinks = (type = null) => {
    let classes = '';

    if (type === subpage) {
      classes +=
        'selected transition-opacity animate-[fade-out_1s_ease-out]';
    } else {
      classes += 'hvr-underline-from-left';
    }
    return classes;
  };

  return (
    <section className='w-full borderB z-50 shadow-xl h-20 lg:h-24 fondoNav bg-[#1a1e1c] relative flex items-center'>
      <ul className='flex justify-between ml-8 font-semibold items-center text-xl w-full text-white'>
        <li>
          <a href='/main'>
            <Image
              src='/images/compressed.webp'
              alt='logo'
              width={120}
              height={100}
              quality={100}
              priority={true}
              style={{ height: 'auto' }}
              className='w-[55%] lg:w-full '
            />
          </a>
        </li>
        <li
          className={activeLinks('equipos')}
          onClick={() => {
            router.push('/equipos');
          }}
        >
          Equipos
        </li>
        <li
          className={activeLinks('miembros')}
          onClick={() => {
            router.push('/miembros');
          }}
        >
          Miembros
        </li>
        <li
          className={activeLinks('noticias')}
          onClick={() => {
            router.push('/noticias');
          }}
        >
          Noticias
        </li>
        <li
          className={activeLinks('tienda')}
          onClick={() => {
            router.push('/tienda');
          }}
        >
          Tienda
        </li>
        <li
          className={activeLinks('contacto')}
          onClick={() => {
            router.push('/contacto');
          }}
        >
          Contacto
        </li>
        <li
          onClick={toggleMenu}
          className=' text-[2rem] flex text-[#715bd4]  lg:text-white items-center justify-center right-0 h-28 w-28 lg:h-24 top-3 lg:w-24 lg:bg-[#715bd4]'
        >
          ☰
        </li>
      </ul>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial='initial'
            animate='animate'
            exit='exit'
            className='fixed left-0 top-0 w-full h-screen origin-top p-10 z-50 bg-[#715bd4] '
          >
            <div className='flex h-full flex-col justify-center'>
              <motion.div
                variants={containerVars}
                initial='initial'
                animate='open'
                exit='initial'
                className='flex justify-between items-center '
              >
                <motion.h1
                  variants={mobileLinkVars}
                  className='text-3xl text-white'
                >
                  Maycam Evolve
                </motion.h1>
                <motion.p
                  variants={mobileLinkVars}
                  onClick={toggleMenu}
                  className='text-md text-white'
                >
                  <CloseIcon />
                </motion.p>
              </motion.div>
              <motion.div
                variants={containerVars}
                initial='initial'
                animate='open'
                exit='initial'
                className='grid grid-cols-1  place-content-center lg:grid-cols-3 mt-10 lg:mt-0 h-full'
              >
                <div className='flex flex-col  gap-4 justify-center lg:gap-20'>
                  {navLinks.map((link, index) => {
                    return (
                      <div
                        key={index}
                        className='overflow-hidden'
                      >
                        <MobileNavLink
                          toggleMenu={toggleMenu}
                          title={link.title}
                          href={link.href}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className='h-full flex flex-col gap-4 lg:gap-0 w-full lg:col-span-2  justify-evenly items-center '>
                  <Redes />
                  <div className=' w-full lg:w-[80%] overflow-hidden mt-16 flex justify-center items-center'>
                    <Companies />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Navbar;
