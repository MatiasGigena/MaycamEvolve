import Image from 'next/image';

const Tienda = () => {
  return (
    <main className='min-h-screen pb-16 flex flex-col gap-4 items-center justify-center w-full'>
      <Image
        width={350}
        height={200}
        src='/images/chorrea.png'
        alt=''
        className='transition-opacity animate-[fade-in_1s_ease-in] '
      />
      <div className='w-full h-full flex flex-col mt-10 lg:mt-0 lg:flex-row gap-24 lg:gap-44 items-center justify-center '>
        <div className='w-[50%] lg:w-1/4 h-full'>
          <a href='#' className='group relative block'>
            <div className='relative h-[350px] sm:h-[650px] transition-opacity animate-[fade-inXTWO_2s_ease-out]'>
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
            <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
              <h3 className='text-xl font-medium text-white'>
                Skinny Jeans Blue
              </h3>
              <p className='mt-1.5 max-w-[40ch] text-xs text-white'>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dignissimos sequi dicta
                impedit aperiam ipsum!
              </p>
              <span className='mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                Shop Now
              </span>
            </div>
          </a>
        </div>
        <div className=' w-[50%] lg:w-1/4 h-full'>
          <a href='#' className='group relative block'>
            <div className='relative h-[350px] sm:h-[650px] transition-opacity animate-[fade-inXTWO_2s_ease-out]'>
              <Image
                fill
                quality={100}
                src='/images/camisetarosa.png'
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
            <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
              <h3 className='text-xl font-medium text-white'>
                Skinny Jeans Blue
              </h3>
              <p className='mt-1.5 max-w-[40ch] text-xs text-white'>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dignissimos sequi dicta
                impedit aperiam ipsum!
              </p>
              <span className='mt-3 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                Shop Now
              </span>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};
export default Tienda;
