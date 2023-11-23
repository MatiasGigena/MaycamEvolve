import Image from 'next/image';
import 'animate.css';

const Tienda = () => {
  return (
    <main className='min-h-screen px-4 py-10 lg:pt-0 lg:pb-32 flex flex-col gap-4 lg:px-10 items-center justify-center w-full'>
      <section className='w-full h-full flex flex-col mt-10 lg:mt-0 lg:flex-row gap-24 lg:gap-44 items-center justify-center '>
        <article className='w-[350px] lg:w-[460px] h-full'>
          <a
            target='_blank'
            href='https://articulo.mercadolibre.com.ar/MLA-1183906200-jersey-maycam-evolve-edicion-especial-argentina-mundial-2022-_JM'
            className='group relative block cursor-pointer2'
          >
            <div className='relative h-[500px] animate__animated animate__bounceInLeft sm:h-[650px] transition-opacity animate-[fade-in_1s_ease-in] '>
              <Image
                fill
                quality={100}
                src='/images/camisetaCeleste.png'
                alt=''
                className='absolute inset-0 h-full w-full object-contain borderB2 fondo4D opacity-100 group-hover:opacity-0'
              />
              <Image
                fill
                src='/images/messi.webp'
                alt=''
                className='absolute inset-0 borderB h-full w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100'
              />
            </div>
            <div className='absolute animate__animated animate__zoomInUp inset-0 flex flex-col items-start justify-end p-6'>
              <h3 className='text-xl textsh font-medium text-white'>
                Jersey Limitada Mundialista
              </h3>
              <p className='mt-1.5 max-w-[40ch] text-xs text-white'>
                Jersey Maycam Evolve, edición limitada
                mundialista 2022. La camiseta más linda de
                los Esports en Argentina.
              </p>
              <span className='mt-3 inline-block hvr-bounce-to-right bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                Compra YA
              </span>
            </div>
          </a>
        </article>
        <article className=' w-[350px] animate__animated animate__bounceInRight lg:w-[460px] h-full'>
          <a
            target='_blank'
            href='https://articulo.mercadolibre.com.ar/MLA-1133083845-jersey-oficial-equipos-esports-maycam-evolve-temporada-2022-_JM'
            className='group relative block cursor-pointer2'
          >
            <div className='relative h-[500px] sm:h-[650px] transition-opacity animate-[fade-in_1s_ease-in] '>
              <Image
                fill
                quality={100}
                src='/images/camisetaRosa.png'
                alt=''
                className='absolute inset-0 h-full w-full object-contain borderB2 fondo4D opacity-100 group-hover:opacity-0'
              />
              <Image
                fill
                quality={100}
                src='/images/camisetarosa2.webp'
                alt=''
                className='absolute inset-0 h-full w-full borderB object-cover transition duration-500 opacity-0 group-hover:opacity-100'
              />
            </div>
            <div className='absolute animate__animated animate__zoomInUp inset-0 flex flex-col items-start justify-end p-6'>
              <h3 className='text-xl textsh2 font-medium text-white'>
                Jersey Oficial
              </h3>
              <p className='mt-1.5 max-w-[40ch] text-xs text-white'>
                Material hecho en Dry Fit, con detalles
                únicos, una tela super liviana, detalles
                reflex y flock del logo.
              </p>
              <span className='mt-3 inline-block hvr-bounce-to-right bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                Compra YA
              </span>
            </div>
          </a>
        </article>
      </section>
    </main>
  );
};
export default Tienda;
