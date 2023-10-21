'use client';
import Image from 'next/image';
import { useState, useRef } from 'react';
import {
  moveSideNames,
  moveSideNames2,
  moveSideNames3,
  moveSideNames4,
  moveSideNames5,
  menuVars,
  containerVars,
  mobileLinkVars,
} from '../animations/anim';
import { useRouter } from 'next/navigation';
import MobileNavLink from './mobileNav';
import { AnimatePresence, motion } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import Companies from './sponsors';
import Redes from './redes';

const Navbar = ({ timeline }) => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const navLinks = [
    { title: 'Nuestros Equipos', href: '/' },
    { title: 'Noticias y Novedades', href: '/' },
    { title: 'Sobre Nosotros', href: '/' },
    { title: 'Tienda', href: '/' },
    { title: 'Contáctanos', href: '/' },
  ];
  const router = useRouter();
  const miembrosRef = useRef(null);
  const equiposRef = useRef(null);
  const noticiasRef = useRef(null);
  const tiendaRef = useRef(null);
  const contactoRef = useRef(null);
  const burgerRef = useRef(null);
  const handleClick = (animation) => {
    timeline.clear();
    timeline.add(
      animation(
        equiposRef.current,
        noticiasRef.current,
        tiendaRef.current,
        contactoRef.current,
        miembrosRef.current,
        burgerRef.current
      )
    );
    timeline.play();
  };
  return (
    <section className='w-full borderB  shadow-xl h-28 lg:h-24 bg-[#1a1e1c] relative flex items-center'>
      <ul className='flex justify-between ml-8 font-medium items-center text-2xl w-full text-white'>
        <li>
          <a href='/main'>
            <Image
              src='/images/logo1.png'
              alt='logo'
              width={120}
              height={100}
              quality={100}
              style={{ height: 'auto', width: 'auto' }}
            />
          </a>
        </li>
        <li
          ref={equiposRef}
          className='hvr-underline-from-left '
          onClick={() => {
            handleClick(moveSideNames2);
            router.push('/equipos');
          }}
        >
          Equipos
        </li>
        <li
          ref={miembrosRef}
          className='hvr-underline-from-left'
          onClick={() => {
            handleClick(moveSideNames);
            router.push('/miembros');
          }}
        >
          Miembros
        </li>
        <li
          ref={noticiasRef}
          className='hvr-underline-from-left'
          onClick={() => {
            handleClick(moveSideNames3);
            router.push('/noticias');
          }}
        >
          Noticias
        </li>
        <li
          ref={tiendaRef}
          className='hvr-underline-from-left'
          onClick={() => {
            handleClick(moveSideNames4);
            router.push('/tienda');
          }}
        >
          Tienda
        </li>
        <li
          ref={contactoRef}
          className='hvr-underline-from-left'
          onClick={() => {
            handleClick(moveSideNames5);
            router.push('/contacto');
          }}
        >
          Contacto
        </li>
        <li
          ref={burgerRef}
          onClick={toggleMenu}
          className=' text-[2rem] flex text-white items-center justify-center right-0 h-28 w-28 lg:h-24 top-3 lg:w-24 bg-[#715bd4]'
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
            className='fixed left top-0 w-full h-screen origin-top p-10 z-50 bg-[#715bd4] '
          >
            <div className='flex h-full flex-col'>
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
                className='grid grid-cols-1 lg:grid-cols-3 mt-10 lg:mt-0 h-full'
              >
                <div className='flex flex-col gap-4 justify-center lg:gap-20'>
                  {navLinks.map((link, index) => {
                    return (
                      <div
                        key={index}
                        className='overflow-hidden'
                      >
                        <MobileNavLink
                          title={link.title}
                          href={link.href}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className='h-full flex flex-col w-full lg:col-span-2  justify-evenly items-center '>
                  <Redes />
                  <div className=' w-full lg:w-[80%] overflow-hidden mt-4 flex justify-center items-center'>
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
