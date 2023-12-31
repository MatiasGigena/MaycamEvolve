'use client';
import styles from './styles/sponsors2.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { mobileLinkVars } from '../animations/anim';

const Companies2 = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [carouselReady, setCarouselReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCarouselReady(true);
    }, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setSlidesToShow(4);
      } else if (window.innerWidth > 768) {
        setSlidesToShow(3);
      } else if (window.innerWidth > 520) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
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
    centerMode: true,
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
           
            bg-[#000]
            fondoNav2
            borderB
            gap-3
            sm:gap-8
            md:gap-9
            xl:gap-14
            py-10
            md:pt-8
            md:pb-8
            lg:py-12
            w-full
            
            z-20
                   
        '
      id='companies2'
    >
      <div className={styles.mainContainer}>
        {carouselReady && (
          <Slider
            className='absolute bottom-9 lg:bottom-0 left-0'
            {...settings}
          >
            <a
              href='https://www.gatorade.com/'
              target='_blank'
              className={`${styles.container} cursor-pointer2`}
            >
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
            </a>
            <a
              href='https://ggpoker.com/'
              target='_blank'
              className={`${styles.container} cursor-pointer2 scale-[1.30]`}
            >
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
            </a>
            <a
              href='https://www.jbl.com/'
              target='_blank'
              className={`${styles.container} cursor-pointer2`}
            >
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
            </a>
            <a
              href='https://www.maycamgames.com.ar/'
              target='_blank'
              className={`${styles.container} cursor-pointer2`}
            >
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
            </a>

            <a
              href='https://www.prexcard.com.ar/'
              target='_blank'
              className={`${styles.container} cursor-pointer2 scale-150`}
            >
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
            </a>
            <a
              href='https://www.redragon.es/'
              target='_blank'
              className={`${styles.container} cursor-pointer2 scale-105`}
            >
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
            </a>
            <a
              href='https://sanignacio.com.ar/index.html'
              target='_blank'
              className={`${styles.container} cursor-pointer2 scale-110`}
            >
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
            </a>
            <a
              href='https://www.seagate.com/la/es/'
              target='_blank'
              className={`${styles.container} cursor-pointer2 scale-105`}
            >
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
            </a>
          </Slider>
        )}
      </div>
    </motion.section>
  );
};

export default Companies2;
