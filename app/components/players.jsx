'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BiLogoInstagramAlt } from 'react-icons/bi';
import { PiTwitchLogoFill } from 'react-icons/pi';

const Players = () => {
  const pahtName = usePathname();
  const subTeam = pahtName.split('/')[2];
  const player = [
    {
      juego: 'dota',
      nombre: 'Ponce Debora',
      gamerTag: 'Debbie',
      img: '/images/debbie.png',
    },
    {
      juego: 'dota',
      nombre: 'Polanco Lucía Mariel',
      gamerTag: 'Lulu~',
      img: '/dota/LULU2.png',
    },
    {
      juego: 'dota',
      nombre: 'Gerosa Destribats Victoria Debora',
      gamerTag: 'GaRaF',
      img: '/images/siluetamujer.png',
    },
    {
      juego: 'dota',
      nombre: 'Evangelista Milena',
      gamerTag: 'Mile-Mile',
      img: '/images/siluetamujer.png',
    },
    {
      juego: 'dota',
      nombre: 'Romina Ayelén Pacheco',
      gamerTag: 'Lykke',
      img: '/images/siluetamujer.png',
    },
    {
      juego: 'r6',
      nombre: 'Carlos Daniel Kumichel',
      gamerTag: 'INF4ME',
      img: '/r6/INF4ME2.png',
    },
    {
      juego: 'r6',
      nombre: 'Ián Jesús Solé',
      gamerTag: 'KerzZ',
      img: '/r6/KERRZ.png',
    },
    {
      juego: 'r6',
      nombre: 'Lucca Cezana Coser',
      gamerTag: 'Mking',
      img: '/r6/mking.png',
    },
    {
      juego: 'r6',
      nombre: 'Ceridono Gonzalo',
      gamerTag: 'WOLFz',
      img: '/r6/wolfz.png',
    },
    {
      juego: 'r6',
      nombre: 'Daniel Pinto Coelho Novy',
      gamerTag: 'Novys',
      img: '/r6/NOVYS2.png',
    },
    {
      juego: 'r6',
      nombre: 'Dante Italiani',
      gamerTag: 'Dante7',
      img: '/r6/DANTE1.png',
    },
    {
      juego: 'r6',
      nombre: 'Emanuel Gaggero',
      gamerTag: 'GKO',
      img: '/r6/GEKO1.png',
    },
    {
      juego: 'r6',
      nombre: 'Joan Tort',
      gamerTag: 'NaoResh',
      img: '/r6/nao.png',
    },
    {
      juego: 'cs2',
      nombre: 'Villa Joaquin',
      gamerTag: 'jqn',
      img: '/cs2/jqn2.png',
    },
    {
      juego: 'cs2',
      nombre: 'Vaisman Ivan',
      gamerTag: 'iv0',
      img: '/images/iv0.png',
    },
    {
      juego: 'cs2',
      nombre: 'Santiago Manuel Campello Gerardi',
      gamerTag: 'Campe',
      img: '/cs2/CAMPE2.png',
    },
    {
      juego: 'cs2',
      nombre: 'Garay Federico Eduardo',
      gamerTag: 'fdg1_',
      img: '/images/silu.png',
    },
    {
      juego: 'cs2',
      nombre: 'Lorenzo Michel Vanega',
      gamerTag: 'MicheL',
      img: '/images/silu.png',
    },
    {
      juego: 'eafc24',
      nombre: 'Juan Caride',
      gamerTag: 'JuanCaride99',
      img: '/images/juan.png',
    },
    {
      juego: 'eafc24',
      nombre: 'Juan Antonio Rodriguez Ponce',
      gamerTag: 'JuanRP_',
      img: '/eafc24/JUANERP.png',
    },
    {
      juego: 'eafc24',
      nombre: 'Arias Daniela Belen',
      gamerTag: 'AriasDaniela_',
      img: '/eafc24/AriasDaniela.png',
    },
    {
      juego: 'eafc24',
      nombre: 'Franco Lazarte',
      gamerTag: 'FLazarte7',
      img: '/eafc24/Flazarte.png',
    },
    {
      juego: 'simracing',
      nombre: 'Lucas Gaston Gil',
      gamerTag: 'luqui',
      img: '/simsracing/LucasGil.png',
    },
    {
      juego: 'simracing',
      nombre: 'Agustin Cajal',
      gamerTag: 'Aspicito',
      img: '/images/aspicito.png',
    },
    {
      juego: 'simracing',
      nombre: 'Gil Matias',
      gamerTag: 'Matias',
      img: '/simsracing/MatiasGil.png',
    },
    {
      juego: 'simracing',
      nombre: 'Gómez Parise Daiana Soledad ',
      gamerTag: 'Dai G. Parise',
      img: '/images/siluetamujer.png',
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
                    className='col-span-full sm:col-span-3 borderB lg:col-span-2 relative pb-4 px-3 h-80 flex justify-center items-end overflow-hidden rounded-lg fondo4D'
                  >
                    <img
                      src={players.img}
                      alt=''
                      className='absolute top-0 left-0 w-full h-full object-[center_-10px] object-cover'
                    />
                    <div className='relative p-2 w-full flex flex-col items-center rounded bg-white bg-opacity-80'>
                      <h3 className='text-base text-gray-800 font-bold tracking-wide'>
                        {players.gamerTag}
                      </h3>
                      <p className='text-sm text-gray-500 font-semibold'>
                        {players.nombre}
                      </p>
                      <div className='mt-2 flex items-center space-x-4'>
                        <a
                          href='#'
                          className='text-gray-700 hover:text-pink-600'
                        >
                          <PiTwitchLogoFill />
                        </a>
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
                        <a
                          href='#'
                          className='text-gray-700  hover:text-pink-600'
                        >
                          <BiLogoInstagramAlt
                            style={{ fontSize: '1.1rem' }}
                          />
                        </a>
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
