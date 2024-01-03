const Entretenimiento = () => {
  return (
    <section className=' xl:h-[85vh] mt-12 w-full px-5 xl:px-10 flex flex-col gap-5  items-center justify-center'>
      <p className='inline-block text-sm font-normal tracking-wider text-white uppercase rounded-full'>
        Maycam Evolve
      </p>
      <h2 className='text-2xl text-center w-full text-white md:text-4xl lg:text-6xl'>
        Buscabas{' '}
        <span className='text-[#715bd4]'>
          entretenimiento
        </span>
        ?
      </h2>
      <p className='text-base w-full text-center text-white/75 md:text-lg  '>
        Mira nuestras mas recientes retransmisiones y
        videos!
      </p>

      <div className='flex flex-col xl:flex-row md:gap-2 mt-6 lg:gap-5 justify-center items-center w-full '>
        <div className='relative overflow-hidden min-h-[250px]  md:min-h-[600px] w-full '>
          <iframe
            title='twitch'
            src='https://player.twitch.tv/?channel=maycamevolve&parent=maycamevolve.com'
            allowFullScreen
            height='378'
            width='620'
            className='absolute inset-0 w-full h-full md:rounded-md lg:rounded-b-none shadow-xl cursor-pointer2 hover:opacity-90'
          ></iframe>
        </div>
        <div className='relative overflow-hidden w-full min-h-[250px]  md:min-h-[600px] '>
          <iframe
            width='620'
            height='378'
            src='https://www.youtube.com/embed/mH_hPFBNJIQ?si=oOpjkqlKhXHA5Sed'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
            className='absolute inset-0 w-full h-full md:rounded-md lg:rounded-t-none shadow-xl cursor-pointer2 hover:opacity-90'
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Entretenimiento;
