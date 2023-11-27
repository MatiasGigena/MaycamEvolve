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
import Departamentos from '@/app/components/departamentos';
const Contacto = () => {
  const handleDownloadES = () => {
    const pdfUrl = '/files/tinified.zip';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'tinified.zip';
    link.click();
  };
  return (
    <main className='h-[100vh] lg:h-[90vh] fondo3D w-full  flex items-start overflow-hidden px-10 '>
      <section className=' h-full lg:h-[70vh] w-full flex flex-col mt-10 xl:mt-16 gap-8 lg:gap-10 xl:gap-12'>
        <Departamentos />
        <article className='flex flex-col transition-opacity animate-[fade-in_2s_ease-in]  h-20 w-full xl:w-1/2 text-white'>
          <h3 className=' text-2xl text-[#715bd4] xl:text-4xl'>
            Social{' '}
            <span className='text-[#fff]'>Media</span>
          </h3>
          <div className='flex gap-4 xl:gap-6  mt-5  text-white items-center'>
            <a
              href='https://www.instagram.com/maycamevolve/'
              target='_blank'
              className='cursor-pointer2'
            >
              <InstagramIcon />
            </a>
            <a
              href='https://www.tiktok.com/@maycamevolve'
              target='_blank'
              className='cursor-pointer2'
            >
              <BiLogoTiktok
                style={{
                  fontSize: '1.5rem',
                }}
              />
            </a>
            <a
              href='https://twitter.com/maycamevolve/'
              target='_blank'
              className='cursor-pointer2'
            >
              <TwitterIcon />
            </a>
            <a
              href='https://www.youtube.com/c/MaycamEvolve/videos'
              target='_blank'
              className='cursor-pointer2'
            >
              <YouTubeIcon />
            </a>
            <a
              href='https://www.linkedin.com/company/maycamevolve/?originalSubdomain=ar'
              target='_blank'
              className='cursor-pointer2'
            >
              <BsLinkedin />
            </a>
            <a
              href='https://www.behance.net/maycamevolve'
              target='_blank'
              className='cursor-pointer2'
            >
              <AiFillBehanceCircle
                style={{
                  fontSize: '1.5rem',
                }}
              />
            </a>
            <a
              href='https://www.facebook.com/MaycamEvolve/'
              target='_blank'
              className='cursor-pointer2'
            >
              <Facebook />
            </a>
            <a
              href='https://discord.com/invite/r7qHmd6u6g'
              target='_blank'
              className='cursor-pointer2'
            >
              <BsDiscord
                style={{
                  fontSize: '1.5rem',
                }}
              />
            </a>
            <a
              href='mailto:hola@maycamevolve.com'
              target='_blank'
              className='cursor-pointer2'
            >
              <HiOutlineMail
                style={{ fontSize: '1.5rem' }}
              />
            </a>
          </div>
        </article>
        <article className='flex flex-col transition-opacity animate-[fade-in_2s_ease-in]   relative h-20 w-full xl:w-1/2 text-white'>
          <h4 className=' text-2xl xl:text-4xl text-[#715bd4]'>
            Sponsors
          </h4>
          <Companies3 />
        </article>
        <article className='flex flex-col gap-8 xl:gap-10 justify-center items-start transition-opacity animate-[fade-in_2s_ease-in] mt-16 lg:mt-32  relative h-20 w-full xl:w-1/2 text-white'>
          <h5 className=' text-2xl xl:text-4xl '>
            Descarga{' '}
            <span className='text-[#715bd4]'>Assets</span> y{' '}
            <span className='text-[#715bd4]'>Gráficos</span>
          </h5>
          <button
            onClick={handleDownloadES}
            className='border cursor-pointer2 hvr-fade font-medium border-[#715bd4] rounded-2xl flex items-center text-base xl:text-2xl gap-3 p-5 xl:p-8'
          >
            Download{' '}
            <HiDownload style={{ fontSize: '1.3rem' }} />
          </button>
        </article>
      </section>
    </main>
  );
};
export default Contacto;
