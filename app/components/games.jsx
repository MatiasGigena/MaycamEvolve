import styles from './styles/games.module.css';

const Games = () => {
  return (
    <main className='min-h-screen w-full flex items-center justify-center'>
      <section className='grid transition-opacity animate-[fade-in_1s_ease-in] grid-cols-2 xl:grid-cols-3 w-[70%] space-x-4 xl:space-x-20 gap-10 py-28 perspective place-items-center min-h-screen'>
        <div className={`${styles.yoda} order-1`}>
          <img
            className={`${styles.logo} max-w-full`}
            src='/images/cs23.png'
            alt=''
          />
          <img
            className={`${styles.frontimage} max-w-full`}
            src='/images/iv0.png'
            alt='yoda holding his lightsabre up, the glow highlighting an angry look on his face'
          />
          <img
            className={`${styles.bgimage1} borderB  max-w-full`}
            src='/images/cs2img.webp'
            alt='yoda looking peaceful on dagobah'
          />
        </div>
        <div className={`${styles.yoda} order-2`}>
          <img
            className={`${styles.logo} max-w-full`}
            src='/images/fifa24.png'
            alt=''
          />
          <img
            className={`${styles.frontimage} mt-40 max-w-full`}
            src='/images/juan.png'
            alt='yoda holding his lightsabre up, the glow highlighting an angry look on his face'
          />
          <img
            className={`${styles.bgimage1} borderB max-w-full`}
            src='/images/haaland.webp'
            alt='yoda looking peaceful on dagobah'
          />
        </div>
        <div
          className={`${styles.yoda} order-4 mt-10 xl:mt-0  xl:order-3`}
        >
          <img
            className={`${styles.logo1} max-w-full`}
            src='/images/r6logo.png'
            alt=''
          />
          <img
            className={`${styles.frontimage} mt-10 max-w-full`}
            src='/images/r6player.png'
            alt='yoda holding his lightsabre up, the glow highlighting an angry look on his face'
          />
          <img
            className={`${styles.bgimage2} borderB max-w-full`}
            src='/images/r6img.webp'
            alt='yoda looking peaceful on dagobah'
          />
        </div>
        <div className='xl:col-span-3 order-3 xl:order-4 col-span-2 grid-cols-2 xl:grid-cols-2 w-[70%] gap-[55%] xl:gap-0 place-items-center mt-10 grid '>
          <div className={`${styles.yoda}`}>
            <img
              className={`${styles.logo1} max-w-full`}
              src='/images/removebg.png'
              alt=''
            />
            <img
              className={`${styles.frontimage} mt-16 max-w-full`}
              src='/images/debbie.png'
              alt='yoda holding his lightsabre up, the glow highlighting an angry look on his face'
            />
            <img
              className={`${styles.bgimage3} borderB  max-w-full`}
              src='/images/dota2.webp'
              alt='yoda looking peaceful on dagobah'
            />
          </div>
          <div className={`${styles.yoda}`}>
            <img
              className={`${styles.logo} max-w-full`}
              src='https://assets.codepen.io/308367/yoda-logo.webp'
              alt=''
            />
            <img
              className={`${styles.frontimage} mt-7 max-w-full`}
              src='/images/aspicito.png'
              alt='yoda holding his lightsabre up, the glow highlighting an angry look on his face'
            />
            <img
              className={`${styles.bgimage} borderB max-w-full`}
              src='https://assets.codepen.io/308367/yoda-on-dagobah.jpg'
              alt='yoda looking peaceful on dagobah'
            />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Games;
