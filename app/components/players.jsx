'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const Players = () => {
  const pahtName = usePathname();
  const subTeam = pahtName.split('/')[2];
  const player = [
    {
      juego: 'dota',
      nombre: 'Gerosa Destribats Victoria Debora',
      gamerTag: 'GaRaF',
    },
    {
      juego: 'dota',
      nombre: 'Ponce Debora',
      gamerTag: 'Debbie',
    },
    {
      juego: 'dota',
      nombre: 'Polanco Lucía Mariel',
      gamerTag: 'Lulu~',
    },
    {
      juego: 'dota',
      nombre: 'Evangelista Milena',
      gamerTag: 'Mile-Mile',
    },
    {
      juego: 'dota',
      nombre: 'Romina Ayelén Pacheco',
      gamerTag: 'Lykke',
    },
    {
      juego: 'r6',
      nombre: 'Carlos Daniel Kumichel',
      gamerTag: 'INF4ME',
      img: '/images/simra1.webp',
    },
    {
      juego: 'r6',
      nombre: 'Ián Jesús Solé',
      gamerTag: 'KerzZ',
      img: '/images/simra1.webp',
    },
    {
      juego: 'r6',
      nombre: 'Lucca Cezana Coser',
      gamerTag: 'Mking',
      img: '/images/simra1.webp',
    },
    {
      juego: 'r6',
      nombre: 'Ceridono Gonzalo',
      gamerTag: 'WOLFz',
      img: '/images/simra1.webp',
    },
    {
      juego: 'r6',
      nombre: 'Daniel Pinto Coelho Novy',
      gamerTag: 'Novys',
      img: '/images/simra1.webp',
    },
    {
      juego: 'r6',
      nombre: 'Dante Italiani',
      gamerTag: 'Dante7',
      img: '/images/simra1.webp',
    },
    {
      juego: 'r6',
      nombre: 'Emanuel Gaggero',
      gamerTag: 'GKO',
      img: '/images/simra1.webp',
    },
    {
      juego: 'r6',
      nombre: 'Joan Tort',
      gamerTag: 'NaoResh',
      img: '/images/simra1.webp',
    },
    {
      juego: 'r6',
      nombre: 'Villa Joaquin',
      gamerTag: 'jqn',
      img: '/images/simra1.webp',
    },
    {
      juego: 'r6',
      nombre: 'Vaisman Ivan',
      gamerTag: 'iv0',
      img: '/images/simra1.webp',
    },
    {
      juego: 'cs2',
      nombre: 'Garay Federico Eduardo',
      gamerTag: 'fdg1_',
    },
    {
      juego: 'cs2',
      nombre: 'Lorenzo Michel Vanega',
      gamerTag: 'MicheL',
    },
    {
      juego: 'cs2',
      nombre: 'Santiago Manuel Campello Gerardi',
      gamerTag: 'Campe',
    },
    {
      juego: 'cs2',
      nombre: 'Franco Lazarte',
      gamerTag: 'FLazarte7',
    },
    {
      juego: 'cs2',
      nombre: 'Juan Caride',
      gamerTag: 'JuanCaride99',
    },
    {
      juego: 'cs2',
      nombre: 'Juan Antonio Rodriguez Ponce',
      gamerTag: 'JuanRP_',
    },
    {
      juego: 'cs2',
      nombre: 'Arias Daniela Belen',
      gamerTag: 'AriasDaniela_',
    },
    {
      juego: 'cs2',
      nombre: 'Gómez Parise Daiana Soledad',
      gamerTag: 'Dai G. Parise',
    },
    {
      juego: 'cs2',
      nombre: 'Lucas Gaston Gil',
      gamerTag: 'luqui',
    },
    {
      juego: 'cs2',
      nombre: 'Agustin Cajal',
      gamerTag: 'Aspicito',
    },
    {
      juego: 'cs2',
      nombre: 'Gil Matias',
      gamerTag: 'Matias',
    },
    {
      juego: 'eafc24',
      nombre: 'Franco Lazarte',
      gamerTag: 'FLazarte7',
    },
    {
      juego: 'eafc24',
      nombre: 'Juan Caride',
      gamerTag: 'JuanCaride99',
    },
    {
      juego: 'eafc24',
      nombre: 'Juan Antonio Rodriguez Ponce',
      gamerTag: 'JuanRP_',
    },
    {
      juego: 'eafc24',
      nombre: 'Arias Daniela Belen',
      gamerTag: 'AriasDaniela_',
    },
    {
      juego: 'simracing',
      nombre: 'Gómez Parise Daiana Soledad ',
      gamerTag: 'Dai G. Parise',
    },
    {
      juego: 'simracing',
      nombre: 'Lucas Gaston Gil',
      gamerTag: 'luqui',
    },
    {
      juego: 'simracing',
      nombre: 'Agustin Cajal',
      gamerTag: 'Aspicito',
    },
    {
      juego: 'simracing',
      nombre: 'Gil Matias',
      gamerTag: 'Matias',
    },
  ];
  return (
    <div className='relative mx-auto py-10 px-3 w-full max-w-8xl text-white'>
      <div className='flex flex-col items-center'>
        <div className='mt-10 mx-auto w-full max-w-sm sm:max-w-2xl lg:max-w-7xl'>
          <ul className='grid grid-cols-6 gap-10 lg:gap-24'>
            {player.map(
              (players) =>
                players.juego === subTeam && (
                  <li
                    key={players.nombre}
                    className='col-span-full sm:col-span-3 borderB lg:col-span-2 relative pb-4 px-3 h-80 flex justify-center items-end overflow-hidden rounded-lg bg-pink-500'
                  >
                    {/* ::Background picture */}
                    <img
                      src={players.img}
                      alt=''
                      className='absolute top-0 left-0 w-full h-full object-cover'
                    />
                    {/* ::Details */}
                    <div className='relative p-2 w-full flex flex-col items-center rounded bg-white bg-opacity-80'>
                      {/* :::name */}
                      <h3 className='text-base text-gray-800 font-bold tracking-wide'>
                        {players.gamerTag}
                      </h3>
                      {/* :::role */}
                      <p className='text-sm text-gray-500 font-semibold'>
                        {players.nombre}
                      </p>
                      {/* :::socials */}
                      <div className='mt-2 inline-flex space-x-4'>
                        {/* Facebook */}
                        <a
                          href='#'
                          className='text-gray-700 hover:text-pink-600'
                        >
                          <svg
                            className='w-4 h-4'
                            fill='currentColor'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                          >
                            <path d='M16.403,9H14V7c0-1.032,0.084-1.682,1.563-1.682h0.868c0.552,0,1-0.448,1-1V3.064c0-0.523-0.401-0.97-0.923-1.005C15.904,2.018,15.299,1.999,14.693,2C11.98,2,10,3.657,10,6.699V9H8c-0.552,0-1,0.448-1,1v2c0,0.552,0.448,1,1,1l2-0.001V21c0,0.552,0.448,1,1,1h2c0.552,0,1-0.448,1-1v-8.003l2.174-0.001c0.508,0,0.935-0.381,0.993-0.886l0.229-1.996C17.465,9.521,17.001,9,16.403,9z' />
                          </svg>
                        </a>
                        {/* Twitter */}
                        <a
                          href='#'
                          className='text-gray-700 hover:text-pink-600'
                        >
                          <svg
                            className='w-4 h-4'
                            fill='currentColor'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                          >
                            <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                          </svg>
                        </a>
                        {/* Linkedin */}
                        <a
                          href='#'
                          className='text-gray-700 hover:text-pink-600'
                        >
                          <svg
                            className='w-4 h-4'
                            fill='currentColor'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 30 30'
                          >
                            <path d='M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z' />
                          </svg>
                        </a>
                        {/* Youtube */}
                        <a
                          href='#'
                          className='text-gray-700 hover:text-pink-600'
                        >
                          <svg
                            className='w-4 h-4'
                            fill='currentColor'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 50 50'
                          >
                            <path d='M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z' />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Players;
