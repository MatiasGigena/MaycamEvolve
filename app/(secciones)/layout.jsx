'use client';
import CustomCursor from '../components/cstomCrsor';
import Navbar from '../components/nav';
import { useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import Footer from '../components/footer';

const Layout = ({ children }) => {
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
      });
      setTimeline(tl);
    });
    return () => {
      context.revert();
    };
  }, []);
  return (
    <main className='bg-[#1a1e1c] fondo3D lg:pt-10 lg:pb-16'>
      <CustomCursor />
      <Navbar timeline={timeline} />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
