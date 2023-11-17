'use client';

const Noticias = () => {
  return (
    <main className='min-h-screen relative fondo3D py-14 px-4 w-full flex flex-col items-center justify-center'>
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
