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
    <footer className='footer borderB footer-center p-10 bg-black fondoNav2 text-white'>
      <nav className='grid grid-flow-col gap-4'>
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
            href='https://www.instagram.com/maycamevolve/'
            target='_blank'
          >
            <InstagramIcon />
          </a>
          <a
            href='https://www.tiktok.com/@maycamevolve'
            target='_blank'
          >
            <BiLogoTiktok style={{ fontSize: '1.5rem' }} />
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
            <HiOutlineMail style={{ fontSize: '1.5rem' }} />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © 2023 - All right reserved by Matías
          Gigena.
        </p>
      </aside>
    </footer>
  );
};
export default Footer;
