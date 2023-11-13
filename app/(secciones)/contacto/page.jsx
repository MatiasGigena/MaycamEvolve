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
import { HiDownload } from 'react-icons/hi';
const Contacto = () => {
  return (
    <main className='h-[90vh] fondo3D w-full  flex items-start overflow-hidden px-10 '>
      <section className='h-[70vh] w-full flex flex-col mt-10 xl:mt-16 gap-10 xl:gap-12'>
        <div className='flex flex-col xl:h-40 gap-6 xl:gap-8 transition-opacity animate-[fade-in_1s_ease-in]  w-full xl:w-3/5 text-white'>
          <p className=' text-2xl xl:text-4xl'>
            Nuestros{' '}
            <span className='text-[#715bd4]'>
              Departamentos
            </span>
          </p>
          <div className='h-full justify-start items-start flex-col gap-4 flex xl:flex-row xl:items-center xl:gap-16'>
            <div className='flex border-2 border-[#715bd4] rounded-2xl p-3 w-56 xl:w-auto xl:p-5 flex-col items-start justify-start '>
              <p className=' text-base xl:text-2xl'>
                Generales
              </p>
              <p className='text-xs xl:text-xl'>
                hola
                <span className='text-[#715bd4]'>@</span>
                maycamevolve.com
              </p>
            </div>
            <div className='flex border-2 border-[#715bd4] rounded-2xl p-3 w-56 xl:w-auto xl:p-5 flex-col items-start '>
              <p className=' text-base xl:text-2xl'>
                Deportivas
              </p>
              <p className='text-xs xl:text-xl'>
                meg<span className='text-[#715bd4]'>@</span>
                maycamevolve.com
              </p>
            </div>
            <div className='flex border-2 border-[#715bd4] rounded-2xl p-3 w-56 xl:w-auto xl:p-5 flex-col items-start '>
              <p className=' text-base xl:text-2xl'>
                Marketing
              </p>
              <p className='text-xs xl:text-xl'>
                marketing
                <span className='text-[#715bd4]'>@</span>
                maycamevolve.com
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col transition-opacity animate-[fade-in_2s_ease-in]  h-20 w-full xl:w-1/2 text-white'>
          <p className=' text-2xl text-[#715bd4] xl:text-4xl'>
            Social{' '}
            <span className='text-[#fff]'>Media</span>
          </p>
          <div className='flex gap-4 xl:gap-6  mt-5  text-white items-center'>
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
        <div className='flex flex-col transition-opacity animate-[fade-in_2s_ease-in]   relative h-20 w-full xl:w-1/2 text-white'>
          <p className=' text-2xl xl:text-4xl text-[#715bd4]'>
            Sponsors
          </p>
          <Companies3 />
        </div>
        <div className='flex flex-col gap-8 xl:gap-10 justify-center items-start transition-opacity animate-[fade-in_2s_ease-in] mt-32  relative h-20 w-full xl:w-1/2 text-white'>
          <p className=' text-2xl xl:text-4xl '>
            Descarga{' '}
            <span className='text-[#715bd4]'>Assets</span> y{' '}
            <span className='text-[#715bd4]'>Gráficos</span>
          </p>
          <button className='border border-[#715bd4] rounded-2xl flex items-center text-base xl:text-2xl gap-3 p-5 xl:p-8'>
            Download{' '}
            <HiDownload style={{ fontSize: '1.3rem' }} />
          </button>
        </div>
      </section>
    </main>
  );
};
export default Contacto;
