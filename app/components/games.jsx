import styles from './styles/games.module.css';

const Games = () => {
  return (
    <main className='min-h-screen w-full flex items-center justify-center'>
      <section className='grid grid-cols-3 w-[70%] gap-10 py-20 perspective place-items-center min-h-screen'>
        <div className={styles.yoda}>
          <img
            className={`${styles.logo} max-w-full`}
            src='/images/cs23.png'
            alt=''
          />
          <img
            className={`${styles.frontimage} max-w-full`}
            src='https://assets.codepen.io/308367/yoda-front.png'
            alt='yoda holding his lightsabre up, the glow highlighting an angry look on his face'
          />
          <img
            className={`${styles.bgimage} max-w-full`}
            src='https://assets.codepen.io/308367/yoda-on-dagobah.jpg'
            alt='yoda looking peaceful on dagobah'
          />
        </div>
        <div className={styles.yoda}>
          <img
            className={`${styles.logo} max-w-full`}
            src='/images/fifa24.png'
            alt=''
          />
          <img
            className={`${styles.frontimage} max-w-full`}
            src='https://assets.codepen.io/308367/yoda-front.png'
            alt='yoda holding his lightsabre up, the glow highlighting an angry look on his face'
          />
          <img
            className={`${styles.bgimage} max-w-full`}
            src='https://assets.codepen.io/308367/yoda-on-dagobah.jpg'
            alt='yoda looking peaceful on dagobah'
          />
        </div>
        <div className={styles.yoda}>
          <img
            className={`${styles.logo1} max-w-full`}
            src='/images/r6logo.png'
            alt=''
          />
          <img
            className={`${styles.frontimage} max-w-full`}
            src='https://assets.codepen.io/308367/yoda-front.png'
            alt='yoda holding his lightsabre up, the glow highlighting an angry look on his face'
          />
          <img
            className={`${styles.bgimage} max-w-full`}
            src='https://assets.codepen.io/308367/yoda-on-dagobah.jpg'
            alt='yoda looking peaceful on dagobah'
          />
        </div>
        <div className='col-span-3 grid-cols-2 w-[70%] place-items-center mt-10 grid '>
          <div className={styles.yoda}>
            <img
              className={`${styles.logo1} max-w-full`}
              src='/images/removebg.png'
              alt=''
            />
            <img
              className={`${styles.frontimage} max-w-full`}
              src='https://assets.codepen.io/308367/yoda-front.png'
              alt='yoda holding his lightsabre up, the glow highlighting an angry look on his face'
            />
            <img
              className={`${styles.bgimage} max-w-full`}
              src='https://assets.codepen.io/308367/yoda-on-dagobah.jpg'
              alt='yoda looking peaceful on dagobah'
            />
          </div>
          <div className={styles.yoda}>
            <img
              className={`${styles.logo} max-w-full`}
              src='https://assets.codepen.io/308367/yoda-logo.webp'
              alt=''
            />
            <img
              className={`${styles.frontimage} max-w-full`}
              src='https://assets.codepen.io/308367/yoda-front.png'
              alt='yoda holding his lightsabre up, the glow highlighting an angry look on his face'
            />
            <img
              className={`${styles.bgimage} max-w-full`}
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
