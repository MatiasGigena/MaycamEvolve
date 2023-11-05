'use client';
import { slideUp2 } from '../animations/anim';
import { motion } from 'framer-motion';
const Preloader = ({ setIsLoading }) => {
  const handleVideoEnd = () => {
    setIsLoading(false);
    document.body.style.cursor = 'default';
    window.scrollTo(0, 0);
  };
  return (
    <motion.div
      variants={slideUp2}
      initial='initial'
      exit='exit'
      className='min-h-screen fixed w-full  bg-black top-0 left-0 z-[999] text-white flex items-center justify-center'
    >
      <video
        autoPlay={true}
        playsInline
        muted
        style={{ width: '700px', height: '700px' }}
        onEnded={handleVideoEnd}
      >
        <source
          src='images/ezgif.com-optimize.mp4'
          type='video/mp4'
        />
      </video>
    </motion.div>
  );
};
export default Preloader;
