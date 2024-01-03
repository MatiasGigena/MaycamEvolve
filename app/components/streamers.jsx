import Image from 'next/image';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { BiLogoTiktok } from 'react-icons/bi';
import { FaTwitch } from 'react-icons/fa';

const Streamers = () => {
  const streamers = [
    // {
    //   nombre: 'ZEKI',
    //   nacionalidad: 'ARGENTINA',
    //   img: '/images/zeki.png',
    //   instagram: 'https://www.instagram.com/xzeekii/',
    //   tiktok: 'https://www.tiktok.com/@xzeekii',
    //   twitch: 'https://www.twitch.tv/zeki',
    //   youtube: 'https://www.youtube.com/@Zekix',
    //   twitter: 'https://twitter.com/xzeekii',
    // },
    {
      nombre: 'MANUCRESPO',
      nacionalidad: 'ARGENTINA',
      img: '/images/manucrespo.webp',
      instagram: 'https://www.instagram.com/manucrespo_1/',
      tiktok: 'https://www.tiktok.com/@manucrespo_1',
      twitch: 'https://www.twitch.tv/manucrespoo',
      youtube: 'https://www.youtube.com/@manucrespoo',
      twitter: 'https://twitter.com/manucrespoo',
    },
    {
      nombre: 'alejobadass',
      nacionalidad: 'ARGENTINA',
      img: '/images/alejobadass.jpg',
      instagram: 'https://www.instagram.com/alejobadass/',
      tiktok: 'https://www.tiktok.com/@alejobadass',
      twitch: 'https://www.twitch.tv/alejobadass',
      youtube: 'https://www.youtube.com/@alejobadass',
      twitter: 'https://twitter.com/alejobadass_',
    },
    {
      nombre: 'randompl4yer',
      nacionalidad: 'ARGENTINA',
      img: '/images/marcos.png',
      instagram:
        'https://www.instagram.com/randompl4yerok/',
      tiktok: 'https://www.tiktok.com/@randompl4yer',
      twitch: 'https://www.twitch.tv/randompl4yer_',
      youtube:
        'https://www.youtube.com/@randompl4yerok/videos',
      twitter: 'https://twitter.com/RandomPl4yerok',
    },
    // {
    //   nombre: 'FOLKER',
    //   nacionalidad: 'ARGENTINA',
    //   img: '/images/folker.webp',
    //   instagram: 'https://www.instagram.com/folkerz12/',
    //   tiktok: 'https://www.tiktok.com/@folkerz12',
    //   twitch: 'https://www.twitch.tv/folkerz12',
    //   youtube: 'https://www.youtube.com/@folkerz12',
    //   twitter: 'https://twitter.com/folkerz12',
    // },
    {
      nombre: 'CONO',
      nacionalidad: 'ARGENTINA',
      img: '/images/cono.png',
      instagram: 'https://www.instagram.com/con0o_/',
      tiktok: 'https://www.tiktok.com/@con0o_',
      twitch: 'https://www.twitch.tv/Con0o',
      youtube: 'https://www.youtube.com/@con0o',
      twitter: 'https://twitter.com/Con0o_',
    },
    {
      nombre: 'TIZI',
      nacionalidad: 'ARGENTINA',
      img: '/images/tiziana.png',
      instagram:
        'https://www.instagram.com/sharontiziana_/',
      twitch: 'https://www.twitch.tv/tizianabj_',
    },
    // {
    //   nombre: 'MATI FIFA',
    //   nacionalidad: 'ARGENTINA',
    //   img: 'https://cdn.devdojo.com/images/july2021/team-member-1.jpg',
    //   instagram: 'https://www.instagram.com/matififa90/',
    //   tiktok: 'https://www.tiktok.com/@matififa90',
    //   twitch: 'https://www.twitch.tv/matififa_90',
    //   youtube: 'https://www.youtube.com/@matififa90',
    //   twitter: 'https://twitter.com/mati_alvarez7',
    // },
    {
      nombre: 'Fernanda Russo',
      nacionalidad: 'ARGENTINA',
      img: '/images/fernanda.webp',
      instagram:
        'https://www.instagram.com/russofernandaa/',
      twitter: 'https://twitter.com/ItsFerRusso',
    },
  ];
  return (
    <section id='streamers' className=' mt-4 lg:mt-10'>
      <div className='py-16 pl-4 pr-4 mx-auto ml-auto mr-auto bg-top bg-cover max-w-7xl md:px-24 lg:px-12 lg:py-20'>
        <div className='mb-10 flex flex-col ml-auto mr-auto bg-top bg-cover max-w-7xl md:mx-auto sm:text-center lg:max-w-3xl md:mb-16'>
          <p className='inline-block px-3 py-px mb-3 text-sm font-normal tracking-wider text-white uppercase rounded-full'>
            Maycam Evolve Teams
          </p>
          <p className='inline-block text-4xl px-3 py-px sm:text-5xl lg:text-7xl font-normal tracking-wider text-white uppercase rounded-full'>
            PANDAS{' '}
            <span className='text-[#715bd4]'>MEMBERS</span>
          </p>
          <div className='ml-auto mb-4 mr-auto font-sans tracking-tight text-gray-900 bg-top bg-cover max-w-7xl md:mx-auto'></div>
          <p className='text-base px-3 text-white/75 md:text-lg'>
            Echa un vistazo a nuestro impresionante equipo
            de creadores en Maycam.{' '}
          </p>
        </div>
        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          {streamers.map((streamer, index) => {
            return (
              <div key={index}>
                <div className='relative compressedbg rounded-lg shadow-lg group'>
                  <Image
                    width={500}
                    height={500}
                    className='object-cover object-top rounded-lg  w-full h-[34rem] xl:h-80'
                    src={streamer.img}
                    alt='Team Member Name'
                  />
                  <div className='absolute inset-0 px-6 py-4 text-center duration-300 opacity-0 group-hover:opacity-100'>
                    <div className='absolute rounded-lg inset-0 borderB w-full h-full bg-gradient-to-br from-blue-500 opacity-60 to-purple-700'></div>
                    <div className='relative flex flex-col items-center justify-center w-full h-full'>
                      <p className='mb-1 text-lg font-bold text-white'>
                        {streamer.nombre}
                      </p>
                      <p className='mb-4 text-xs text-blue-50'>
                        {streamer.nacionalidad}
                      </p>
                      <div className='flex items-center justify-center space-x-3 bg-top bg-cover'>
                        {streamer.instagram && (
                          <a
                            aria-label='Instagram'
                            target='_blank'
                            href={streamer.instagram}
                            className='transition-colors duration-300 bg-top bg-cover cursor-pointer2 hover:text-white text-blue-50'
                          >
                            <InstagramIcon />
                          </a>
                        )}
                        {streamer.tiktok && (
                          <a
                            aria-label='Tiktok'
                            target='_blank'
                            href={streamer.tiktok}
                            className='transition-colors duration-300 cursor-pointer2 text-blue-50 hover:text-white'
                          >
                            <BiLogoTiktok
                              style={{ fontSize: '1.3rem' }}
                            />
                          </a>
                        )}
                        {streamer.youtube && (
                          <a
                            aria-label='Yootube'
                            target='_blank'
                            href={streamer.youtube}
                            className='transition-colors duration-300 cursor-pointer2 text-blue-50 hover:text-white'
                          >
                            <YouTubeIcon />
                          </a>
                        )}
                        {streamer.twitter && (
                          <a
                            aria-label='Twitter'
                            target='_blank'
                            href={streamer.twitter}
                            className='transition-colors duration-300 cursor-pointer2 text-blue-50 hover:text-white'
                          >
                            <TwitterIcon />
                          </a>
                        )}
                        {streamer.twitch && (
                          <a
                            aria-label='Twitch'
                            target='_blank'
                            href={streamer.twitch}
                            className='transition-colors duration-300 cursor-pointer2 text-blue-50 hover:text-white'
                          >
                            <FaTwitch />
                          </a>
                        )}
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
