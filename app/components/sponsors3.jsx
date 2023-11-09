'use client';
import styles from './styles/sponsors3.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { mobileLinkVars } from '../animations/anim';

const Companies3 = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [carouselReady, setCarouselReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCarouselReady(true);
    }, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: !slidesToShow ? 4 : slidesToShow,
    centerMode: false,
    centerPadding: '0',
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: 'ease-in-out',
    arrows: false,
    swipe: false,
    draggable: false,
  };

  return (
    <motion.section
      variants={mobileLinkVars}
      className='     
            rounded-2xl
            lg:rounded-full
            transition-opacity
            animate-[fade-in_5s_ease-in]
            gap-3
            sm:gap-8
            md:gap-9
            xl:gap-14
            py-4
            md:pt-8
            md:pb-8
            lg:pt-12
            lg:pb-12 
            lg:w-11/12
            w-full
            m-7 
            z-20 
            absolute
            left-0   
            top-2  
            ml-[-2rem] 
            
        '
      id='Companies3'
    >
      <div className={styles.mainContainer}>
        {carouselReady && (
          <Slider {...settings}>
            <div className={styles.container}>
              <Image
                sizes={
                  '(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/GATORADE WHITE.png'}
                alt='MustHaveApps Logo'
                fill
                priority={true}
              />
            </div>
            <div className={styles.container}>
              <Image
                sizes={
                  '(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/GGPOKER White 2.png'}
                alt='Binance Logo'
                fill
                priority={true}
              />
            </div>
            <div className={styles.container}>
              <Image
                sizes={
                  '(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/JBL QUANTUM V WHITE.png'}
                alt='Headway Logo'
                fill
                priority={true}
              />
            </div>
            <div className={styles.container}>
              <Image
                sizes={
                  '(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/MAYCAMGAMES White.png'}
                alt='Instories Logo'
                fill
                priority={true}
              />
            </div>

            <div className={styles.container}>
              <Image
                sizes={
                  '(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/PREX White.png'}
                alt='Binance Logo'
                fill
                priority={true}
              />
            </div>
            <div className={styles.container}>
              <Image
                sizes={
                  '(max-width: 768px) 90vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/REDRAGON White.png'}
                alt='Binance Logo'
                fill
                priority={true}
              />
            </div>
            <div className={styles.container}>
              <Image
                sizes={
                  '(max-width: 768px) 90vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/San Ignacio White.png'}
                alt='Binance Logo'
                fill
                priority={true}
              />
            </div>
            <div className={styles.container}>
              <Image
                sizes={
                  '(max-width: 768px) 90vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                className={styles.image}
                src={'/logoswhite/SEAGATE WHITE.png'}
                alt='Binance Logo'
                fill
                priority={true}
              />
            </div>
          </Slider>
        )}
      </div>
    </motion.section>
  );
};

export default Companies3;
