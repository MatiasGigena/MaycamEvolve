'use client';
import styles from './styles/sponsors.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { mobileLinkVars } from '../animations/anim';

const Companies = () => {
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
           
            bg-[#fff]
            rounded-lg
            lg:rounded-[40px]
            gap-3
            sm:gap-8
            md:gap-9
            xl:gap-14
            py-4
            md:pt-8
            md:pb-8
            lg:pt-12
            lg:pb-12 
w-full
            m-7 

            z-20
                   
        '
      id='companies'
    >
      <div className={styles.mainContainer}>
        {carouselReady && (
          <Slider {...settings}>
            <div className={styles.container}>
              <Image
                className={styles.image}
                sizes={
                  '(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
                }
                src={'/logosblack/GATORADE BLACK.png'}
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
                src={'/logosblack/GGPOKER Black.png'}
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
                src={'/logosblack/JBL QUANTUM V BLACK.png'}
                alt='JBL QUANTUM Logo'
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
                src={'/logosblack/MAYCAMGAMES Black.png'}
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
                src={'/logosblack/PREX Black.png'}
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
                src={'/logosblack/REDRAGON Black.png'}
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

export default Companies;
