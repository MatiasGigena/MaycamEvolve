'use client';
import { motion } from 'framer-motion';
import { mobileLinkVars } from '../animations/anim';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { BiLogoTiktok } from 'react-icons/bi';
import { BsLinkedin, BsDiscord } from 'react-icons/bs';
import { AiFillBehanceCircle } from 'react-icons/ai';
import { Facebook } from '@mui/icons-material';
import { HiOutlineMail } from 'react-icons/hi';

const Redes = () => {
  return (
    <div className='flex flex-col w-full gap-12 lg:w-[75%] mt-12 lg:gap-28  text-white '>
      <div className='flex flex-col gap-5  overflow-hidden'>
        <motion.p
          className=' text-xl lg:text-4xl font-extralight'
          variants={mobileLinkVars}
        >
          Nuestras redes
        </motion.p>
        <motion.ul
          variants={mobileLinkVars}
          className='flex gap-5 items-center '
        >
          <li>
            <InstagramIcon />
          </li>
          <li>
            <BiLogoTiktok style={{ fontSize: '1.5rem' }} />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
          <li>
            <BsLinkedin />
          </li>
          <li>
            <AiFillBehanceCircle
              style={{ fontSize: '1.5rem' }}
            />
          </li>
          <li>
            <Facebook />
          </li>
          <li>
            <BsDiscord style={{ fontSize: '1.5rem' }} />
          </li>
          <li>
            <HiOutlineMail style={{ fontSize: '1.5rem' }} />
          </li>
        </motion.ul>
      </div>
      <div className='flex flex-col overflow-hidden gap-8'>
        <motion.p
          variants={mobileLinkVars}
          className=' text-xl lg:text-4xl font-extralight'
        >
          Contactos y Assets de prensa
        </motion.p>
        <motion.ul
          variants={mobileLinkVars}
          className='flex flex-col gap-4 '
        >
          <li className='flex text-xs lg:text-base gap-32'>
            <span>+541121795715</span>
            <span> Matías Gigena</span>
          </li>
          <li className='flex text-xs lg:text-base gap-32'>
            <span>+541121795715</span>
            <span>Emanueal Gaggero</span>
          </li>
        </motion.ul>
      </div>
    </div>
  );
};
export default Redes;
