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
          <div className='flex gap-4 lg:gap-6  text-white items-center'>
            <a
              href='https://www.instagram.com/maycamevolve/'
              target='_blank'
            >
              <InstagramIcon />
            </a>
            <a
              href='https://www.tiktok.com/@maycamevolve'
              target='_blank'
            >
              <BiLogoTiktok
                style={{ fontSize: '1.5rem' }}
              />
            </a>
            <a
              href='https://twitter.com/maycamevolve/'
              target='_blank'
            >
              <TwitterIcon />
            </a>
            <a
              href='https://www.youtube.com/c/MaycamEvolve/videos'
              target='_blank'
            >
              <YouTubeIcon />
            </a>
            <a
              href='https://www.linkedin.com/company/maycamevolve/?originalSubdomain=ar'
              target='_blank'
            >
              <BsLinkedin />
            </a>
            <a
              href='https://www.behance.net/maycamevolve'
              target='_blank'
            >
              <AiFillBehanceCircle
                style={{ fontSize: '1.5rem' }}
              />
            </a>
            <a
              href='https://www.facebook.com/MaycamEvolve/'
              target='_blank'
            >
              <Facebook />
            </a>
            <a
              href='https://discord.com/invite/r7qHmd6u6g'
              target='_blank'
            >
              <BsDiscord style={{ fontSize: '1.5rem' }} />
            </a>
            <a href='' target='_blank'>
              <HiOutlineMail
                style={{ fontSize: '1.5rem' }}
              />
            </a>
          </div>
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
