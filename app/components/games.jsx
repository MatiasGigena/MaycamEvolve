import styles from './styles/games.module.css';
import 'animate.css';

const Games = () => {
  return (
    <main className='min-h-screen w-full flex items-center justify-center'>
      <section className='grid animate__animated animate__zoomInDown transition-opacity animate-[fade-in_1s_ease-in] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[80%]  gap-x-32 gap-y-16 py-20 md:py-28 lg:py-4 perspective place-items-center min-h-screen'>
        <a
          href='/equipos/cs2'
          className={`${styles.yoda} cursor-pointer2 order-1`}
        >
          <img
            className={`${styles.logo} max-w-full`}
            src='/images/cs23.png'
            alt=''
          />
          <img
            className={`${styles.frontimage} max-w-full`}
            src='/images/iv0.png'
            alt='neon text'
          />
          <img
            className={`${styles.bgimage1} borderB2 max-w-full`}
            src='/images/cs2img.webp'
            alt='images 3D'
          />
        </a>
        <a
          href='/equipos/eafc24'
          className={`${styles.yoda} cursor-pointer2 order-2`}
        >
          <img
            className={`${styles.logo} max-w-full`}
            src='/images/fifa242.png'
            alt=''
          />
          <img
            className={`${styles.frontimage} mt-40 max-w-full`}
            src='/images/juan.png'
            alt='neon text'
          />
          <img
            className={`${styles.bgimage1} borderB2 max-w-full`}
            src='/images/haaland.webp'
            alt='images 3D'
          />
        </a>
        <a
          href='/equipos/r6'
          className={`${styles.yoda} cursor-pointer2 order-4 md:mt-10 xl:mt-0  xl:order-3`}
        >
          <img
            className={`${styles.logo1} max-w-full`}
            src='/images/r6logo.png'
            alt=''
          />
          <img
            className={`${styles.frontimage} mt-10 max-w-full`}
            src='/images/r6player.png'
            alt='neon text'
          />
          <img
            className={`${styles.bgimage2} borderB2 max-w-full`}
            src='/images/r6img.webp'
            alt='images 3D'
          />
        </a>
        <div className='xl:col-span-3 grid-cols-1 order-3 xl:order-4 md:col-span-2 md:grid-cols-2 xl:grid-cols-2 w-[70%] gap-16 md:gap-[55%] xl:gap-0 place-items-center md:mt-10 grid '>
          <a
            href='/equipos/dota'
            className={`${styles.yoda} cursor-pointer2`}
          >
            <img
              className={`${styles.logo1} max-w-full`}
              src='/images/removebg.png'
              alt=''
            />
            <img
              className={`${styles.frontimage} mt-16 max-w-full`}
              src='/images/debbie.png'
              alt='neon text'
            />
            <img
              className={`${styles.bgimage3} borderB2  max-w-full`}
              src='/images/dota2.webp'
              alt='images 3D'
            />
          </a>
          <a
            href='/equipos/simracing'
            className={`${styles.yoda} cursor-pointer2`}
          >
            <img
              className={`${styles.logo2} max-w-full`}
              src='/images/simracing2.png'
              alt=''
            />
            <img
              className={`${styles.frontimage} max-w-full`}
              src='/images/aspicito.png'
              alt='neon text'
            />
            <img
              className={`${styles.bgimage4} borderB2 max-w-full`}
              src='/images/f12.webp'
              alt='images 3D'
            />
          </a>
        </div>
      </section>
    </main>
  );
};
export default Games;
