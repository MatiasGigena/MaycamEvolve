'use client';
import { useEffect } from 'react';

const Noticias = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://widgets.sociablekit.com/linkedin-page-posts/widget.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className='min-h-screen fondo3D py-14 px-4 w-full flex flex-col items-center justify-center'>
      <div
        className='sk-ww-linkedin-page-post'
        data-embed-id='221398'
      ></div>
    </main>
  );
};

export default Noticias;
