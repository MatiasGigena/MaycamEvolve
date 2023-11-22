'use client';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { BiLogoTiktok } from 'react-icons/bi';
import { BsLinkedin, BsDiscord } from 'react-icons/bs';
import { AiFillBehanceCircle } from 'react-icons/ai';
import { Facebook } from '@mui/icons-material';
import { HiOutlineMail } from 'react-icons/hi';
const Footer = () => {
  return (
    <footer className='footer borderB footer-center p-8 lg:p-10 bg-black fondoNav2 text-white'>
      <nav className='grid grid-flow-col gap-4 text-xs lg:text-base '>
        <a href='/equipos' className='link link-hover'>
          Equipo
        </a>
        <a href='/noticias' className='link link-hover'>
          Noticias
        </a>
        <a href='/tienda' className='link link-hover'>
          Tienda
        </a>
        <a href='/contacto' className='link link-hover'>
          Contacto
        </a>
        <a href='/sponsors' className='link link-hover'>
          Sponsors
        </a>
      </nav>
      <nav>
        <div className='flex gap-4 lg:gap-6  text-white items-center'>
          <a
            aria-label='Instagram'
            href='https://www.instagram.com/maycamevolve/'
            target='_blank'
          >
            <InstagramIcon />
          </a>
          <a
            aria-label='Tiktok'
            href='https://www.tiktok.com/@maycamevolve'
            target='_blank'
          >
            <BiLogoTiktok style={{ fontSize: '1.5rem' }} />
          </a>
          <a
            aria-label='Twitter'
            href='https://twitter.com/maycamevolve/'
            target='_blank'
          >
            <TwitterIcon />
          </a>
          <a
            aria-label='Youtube'
            href='https://www.youtube.com/c/MaycamEvolve/videos'
            target='_blank'
          >
            <YouTubeIcon />
          </a>
          <a
            aria-label='Linkedin'
            href='https://www.linkedin.com/company/maycamevolve/?originalSubdomain=ar'
            target='_blank'
          >
            <BsLinkedin />
          </a>
          <a
            aria-label='Behance'
            href='https://www.behance.net/maycamevolve'
            target='_blank'
          >
            <AiFillBehanceCircle
              style={{ fontSize: '1.5rem' }}
            />
          </a>
          <a
            aria-label='Facebook'
            href='https://www.facebook.com/MaycamEvolve/'
            target='_blank'
          >
            <Facebook />
          </a>
          <a
            aria-label='Discord'
            href='https://discord.com/invite/r7qHmd6u6g'
            target='_blank'
          >
            <BsDiscord style={{ fontSize: '1.5rem' }} />
          </a>
          <a aria-label='Email' href='' target='_blank'>
            <HiOutlineMail style={{ fontSize: '1.5rem' }} />
          </a>
        </div>
      </nav>
      <aside>
        <p className='text-xs lg:text-base'>
          Copyright © 2023 - All right reserved by Matías
          Gigena.
        </p>
      </aside>
    </footer>
  );
};
export default Footer;
