import Image from 'next/image';
const Streamers = () => {
  const streamers = [
    {
      nombre: 'John Smith',
      posicion: 'Founder and CEO',
      descripcion:
        'John has a family of three and enjoys hiking.',
      img: 'https://cdn.devdojo.com/images/july2021/team-member-1.jpg',
    },
    {
      nombre: 'John Smith',
      posicion: 'Founder and CEO',
      descripcion:
        'John has a family of three and enjoys hiking.',
      img: 'https://cdn.devdojo.com/images/july2021/team-member-1.jpg',
    },
    {
      nombre: 'John Smith',
      posicion: 'Founder and CEO',
      descripcion:
        'John has a family of three and enjoys hiking.',
      img: 'https://cdn.devdojo.com/images/july2021/team-member-1.jpg',
    },
    {
      nombre: 'John Smith',
      posicion: 'Founder and CEO',
      descripcion:
        'John has a family of three and enjoys hiking.',
      img: 'https://cdn.devdojo.com/images/july2021/team-member-1.jpg',
    },
    {
      nombre: 'John Smith',
      posicion: 'Founder and CEO',
      descripcion:
        'John has a family of three and enjoys hiking.',
      img: 'https://cdn.devdojo.com/images/july2021/team-member-1.jpg',
    },
    {
      nombre: 'John Smith',
      posicion: 'Founder and CEO',
      descripcion:
        'John has a family of three and enjoys hiking.',
      img: 'https://cdn.devdojo.com/images/july2021/team-member-1.jpg',
    },
    {
      nombre: 'John Smith',
      posicion: 'Founder and CEO',
      descripcion:
        'John has a family of three and enjoys hiking.',
      img: 'https://cdn.devdojo.com/images/july2021/team-member-1.jpg',
    },
    {
      nombre: 'John Smith',
      posicion: 'Founder and CEO',
      descripcion:
        'John has a family of three and enjoys hiking.',
      img: 'https://cdn.devdojo.com/images/july2021/team-member-1.jpg',
    },
  ];
  return (
    <section>
      <div className='pt-16 pb-16 pl-4 pr-4 mx-auto ml-auto mr-auto bg-top bg-cover max-w-7xl md:px-24 lg:px-12 lg:py-20'>
        <div className='mb-10 ml-auto mr-auto bg-top bg-cover max-w-7xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-16'>
          <p className='inline-block px-3 py-px mb-3 text-sm font-semibold tracking-wider text-white uppercase bg-[#715bd4] rounded-full'>
            Nuestros Streamers
          </p>
          <div className='mb-6 ml-auto mr-auto font-sans tracking-tight text-gray-900 bg-top bg-cover max-w-7xl md:mx-auto'></div>
          <p className='text-base text-white/75 md:text-lg'>
            Echa un vistazo a nuestro impresionante equipo
            de streamers en Maycam.
            <span className='text-[#715bd4]'>
              #EvolveYourGame
            </span>
          </p>
        </div>
        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          {streamers.map((streamer, index) => {
            return (
              <div key={index}>
                <div className='relative overflow-hidden rounded-md shadow-lg group'>
                  <Image
                    width={500}
                    height={500}
                    className='object-cover w-full h-72 xl:h-80'
                    src={streamer.img}
                    alt='Team Member Name'
                  />
                  <div className='absolute inset-0 px-6 py-4 text-center duration-300 opacity-0 group-hover:opacity-100'>
                    <div className='absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 opacity-60 to-purple-700'></div>
                    <div className='relative flex flex-col items-center justify-center w-full h-full'>
                      <p className='mb-1 text-lg font-bold text-white'>
                        {streamer.nombre}
                      </p>
                      <p className='mb-4 text-xs text-blue-50'>
                        {streamer.posicion}
                      </p>
                      <p className='mb-4 text-xs tracking-wide text-blue-50'>
                        {streamer.descripcion}
                      </p>
                      <div className='flex items-center justify-center space-x-3 bg-top bg-cover'>
                        <a
                          href='#_'
                          className='transition-colors duration-300 bg-top bg-cover cursor-pointer hover:text-white text-blue-50'
                        >
                          <svg
                            className='h-5'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                          >
                            <path d='M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z'></path>
                          </svg>
                        </a>
                        <a
                          href='#_'
                          className='transition-colors duration-300 cursor-pointer text-blue-50 hover:text-white'
                        >
                          <svg
                            className='h-5'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                          >
                            <path d='M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z'></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Streamers;
