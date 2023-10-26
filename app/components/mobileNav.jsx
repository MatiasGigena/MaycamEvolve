'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { mobileLinkVars } from '../animations/anim';

const MobileNavLink = ({ title, href, toggleMenu }) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className=' text-3xl lg:text-5xl font-extralight uppercase text-white'
    >
      <Link onClick={toggleMenu} href={href}>
        {title}
      </Link>
    </motion.div>
  );
};
export default MobileNavLink;
