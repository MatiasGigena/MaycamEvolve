'use client';
import 'animate.css';

const Noticias = () => {
  return (
    <main className='min-h-screen relative fondo3D py-14 px-6 w-full flex flex-col items-start gap-6 lg:gap-8 justify-center'>
      <h1 className='text-white animate__animated animate__fadeInDown text-4xl lg:text-5xl'>
        El <span className='text-[#715bd4]'>Panel</span> de{' '}
        <span className='text-[#715bd4]'>Noticias</span>
      </h1>
      <iframe
        title='noticias'
        src='https://www.juicer.io/api/feeds/maycamevolve/iframe'
        style={{
          display: 'block',
          margin: '0 auto',
          width: '100%',
          height: '1000px',
        }}
      ></iframe>
    </main>
  );
};

export default Noticias;
