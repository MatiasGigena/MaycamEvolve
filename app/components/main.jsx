import Image from 'next/image';
import Companies2 from './sponsors2';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Streamers from './streamers';

const HomePage = ({ timeline }) => {
  return (
    <section className='min-h-screen w-full  flex flex-col items-center md:px-10 lg:px-12 xl:px-16 xxl:px-20 gap-2 pb-9 justify-start'>
      <div className='grid grid-cols-1  lg:grid-cols-3 md:gap-4 place-items-center pt-0 md:pt-6 lg:pt-20 xl:pt-10 w-full'>
        <div className='lg:col-span-2 h-[20rem] relative md:h-[30rem] lg:h-[30rem] xl:h-[34rem] xxl:h-[40.3rem]  w-full   '>
          <Image
            src='/images/maycam.jpg'
            alt='logo'
            fill
            className='object-cover md:rounded-xl shadow-xl hover:opacity-80 h-full transition duration-300'
          />
        </div>
        <div className='flex-col md:gap-2 lg:gap-0 flex justify-center items-center w-full '>
          <Image
            src='/images/EtpOdmDXIAEgdyl-1.jpeg'
            alt='logo'
            width={400}
            height={100}
            className='object-cover w-full md:rounded-md md:rounded-b-none shadow-xl hover:opacity-80 transition duration-300'
          />
          <Image
            src='/images/maxresdefault.jpg'
            alt='logo'
            width={400}
            height={100}
            className='object-cover w-full md:rounded-md md:rounded-t-none shadow-xl hover:opacity-80 transition duration-300'
          />
        </div>
      </div>
      <div className=' flex items-center justify-center mt-8 lg:mt-0 w-full px-6 md:px-0'>
        <Companies2 />
      </div>
      <div className='bg-transparent px-4 w-full  md:mt-16 gap-6 flex-col flex lg:flex-row items-center justify-center'>
        <div className=''>
          <p className='leading-[130px] sm:leading-[140px] text-center lg:text-left  text-4xl sm:text-5xl  xxl:text-7xl  max-w-5xl text-[#715bd4] xxl:leading-[170px]'>
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
        </div>
        <div className='overflow-hidden borderB w-[90%] lg:w-auto'>
          <TwitterTimelineEmbed
            noBorders
            options={{
              height: 800,
              width: 790,
            }}
            screenName='MaycamEvolve'
            theme='dark'
          />
        </div>
      </div>
      <Streamers />
    </section>
  );
};
export default HomePage;
