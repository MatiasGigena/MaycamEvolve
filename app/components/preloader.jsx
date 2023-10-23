'use client';
import Image from 'next/image';
import { slideUp2 } from '../animations/anim';
import { motion } from 'framer-motion';
const Preloader = () => {
  return (
    <motion.div
      variants={slideUp2}
      initial='initial'
      exit='exit'
      className='min-h-screen fixed w-full  bg-black top-0 left-0 z-[999] text-white flex items-center justify-center'
    >
      <Image
        src='/images/Pre-comp 7-min.gif'
        width={500}
        height={100}
        alt='logo'
        className='heroImg'
        style={{ height: 'auto', width: 'auto' }}
      />
    </motion.div>
  );
};
export default Preloader;
