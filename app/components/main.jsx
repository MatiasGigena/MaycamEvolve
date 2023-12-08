import Image from 'next/image';
import Companies2 from './sponsors2';
import Streamers from './streamers';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  Autoplay,
  Pagination,
  Navigation,
} from 'swiper/modules';
import Entretenimiento from './entretenimiento';

const HomePage = () => {
  return (
    <section
      id='home'
      className='min-h-screen w-full  flex flex-col items-center  gap-2 pb-9 justify-start'
    >
      <div className='grid grid-cols-1 md:gap-4 place-items-center pt-0  w-full'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper h-[200px] md:h-[500px] lg:h-[600px] xxl:h-[700px] w-full'
        >
          <SwiperSlide>
            {/* CAMBIAR ESTE LINK AL QUE QUIERAS EN LAS IMAGENES PRINCIPALES */}
            <a
              href='https://www.linkedin.com/company/maycamevolve/posts/?feedView=all'
              target='_blank'
              className='cursor-pointer2'
            >
              <Image
                src='/images/Landing.webp'
                alt='banner'
                fill
                quality={100}
                loading='eager'
                className='object-cover'
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {/* CAMBIAR ESTE LINK AL QUE QUIERAS EN LAS IMAGENES PRINCIPALES */}
            <a
              href='https://www.linkedin.com/company/maycamevolve/posts/?feedView=all'
              target='_blank'
              className='cursor-pointer2'
            >
              <Image
                src='/images/triptico showmatch.webp'
                alt='banner'
                fill
                loading='eager'
                quality={100}
                className='object-cover'
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            {/* CAMBIAR ESTE LINK AL QUE QUIERAS EN LAS IMAGENES PRINCIPALES */}
            <a
              href='https://www.linkedin.com/company/maycamevolve/posts/?feedView=all'
              target='_blank'
              className='cursor-pointer2'
            >
              <Image
                src='/images/web.webp'
                alt='banner'
                fill
                quality={100}
                loading='eager'
                className='object-cover'
              />
            </a>
          </SwiperSlide>
          {/* ESTAS SON EXTRAS POR SI QUERES AGREGAR MAS */}
          {/* <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
      <div className=' flex items-center justify-center mt-0 w-full  md:px-0'>
        <Companies2 />
      </div>
      <div className='bg-transparent px-4 w-full mt-7 md:mt-16 lg:-6 flex-col flex lg:flex-row items-center justify-center'>
        <>
          <p className='leading-[110px] sm:leading-[120px] text-center lg:text-left  text-4xl sm:text-5xl  xxl:text-7xl  max-w-5xl text-[#715bd4] xxl:leading-[155px]'>
            Mantente
            <span className='text-[#fff]'>
              {' '}
              informado
            </span>{' '}
            de
            <span className='text-[#fff]'> nuestros </span>
            más{' '}
            <span className='text-[#fff]'>recientes</span>
            <span className='text-[#fff]'> posteos</span>
            .
            <br />
            <span className='text-[#715bd4]'>
              #Evolve
              <span className='text-[#fff]'>Your</span>
              Game
            </span>
          </p>
        </>
        <a
          href='https://twitter.com/maycamevolve'
          target='_blank'
          className='lg:overflow-hidden cursor-pointer2 w-fit rounded-[20px] lg:w-auto'
        >
          <Image
            src={'/images/celuu.png'}
            alt='logo'
            width={600}
            height={200}
          />
        </a>
      </div>
      <Entretenimiento />
      <Streamers />
    </section>
  );
};
export default HomePage;
