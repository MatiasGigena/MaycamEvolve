'use client';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { BiLogoTiktok } from 'react-icons/bi';
import { BsLinkedin, BsDiscord } from 'react-icons/bs';
import { AiFillBehanceCircle } from 'react-icons/ai';
import { Facebook } from '@mui/icons-material';
import { HiOutlineMail } from 'react-icons/hi';
import Companies3 from '@/app/components/sponsors3';
import Image from 'next/image';

const Contacto = () => {
  return (
    <main className='min-h-screen fondo3D w-full  flex items-center overflow-hidden px-10 '>
      <section className='h-[90vh] w-full flex flex-col gap-12 mt-16'>
        <div className='flex flex-col h-20 transition-opacity animate-[fade-in_1s_ease-in]  w-full lg:w-1/2 text-white'>
          <p className=' text-2xl lg:text-4xl'>
            Atención al cliente
          </p>
          <p className='text-xl'>
            hola
            <span className='text-[#715bd4]'>@</span>
            maycamevolve.com
          </p>
        </div>
        <div className='flex flex-col transition-opacity animate-[fade-in_2s_ease-in]  h-20 w-full lg:w-1/2 text-white'>
          <p className=' text-2xl lg:text-4xl'>
            Prensa y Medios
          </p>
          <p className='text-xl'>
            prensa<span className='text-[#715bd4]'>@</span>
            maycamevolve.com
          </p>
        </div>
        <div className='flex flex-col transition-opacity animate-[fade-in_3s_ease-in]  h-20 w-full lg:w-1/2 text-white'>
          <p className=' text-2xl lg:text-4xl'>
            Social Media
          </p>
          <ul className='flex gap-4 lg:gap-6  mt-3 text-white items-center'>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <BiLogoTiktok
                style={{ fontSize: '1.5rem' }}
              />
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
              <HiOutlineMail
                style={{ fontSize: '1.5rem' }}
              />
            </li>
          </ul>
        </div>
        <div className='flex flex-col transition-opacity animate-[fade-in_4s_ease-in]   relative h-20 w-full lg:w-1/2 text-white'>
          <p className=' text-2xl lg:text-4xl'>Sponsors</p>
          <Companies3 />
        </div>
      </section>
    </main>
  );
};
export default Contacto;
