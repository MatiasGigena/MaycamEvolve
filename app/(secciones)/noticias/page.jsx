'use client';
import React, { useEffect } from 'react';
import 'animate.css';

const Noticias = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://static.elfsight.com/platform/platform.js';
    script.defer = true;
    script.setAttribute('data-use-service-core', '');
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className='min-h-screen relative fondo3D py-14 px-6 w-full flex flex-col items-start gap-6 lg:gap-8 justify-start'>
      <h1 className='text-white animate__animated animate__fadeInDown text-4xl lg:text-5xl'>
        El <span className='text-[#715bd4]'>Panel</span> de{' '}
        <span className='text-[#715bd4]'>Noticias</span>
      </h1>
      <div className='w-full h-full mt-5'>
        <div
          className='elfsight-app-7619ce24-5a7d-4557-85f9-dced8a5449f6'
          data-elfsight-app-lazy
        ></div>
      </div>
    </main>
  );
};

export default Noticias;
