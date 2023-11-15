'use client';
import Image from 'next/image';
import { RxOpenInNewWindow } from 'react-icons/rx';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'GGPOKER',
      logo: '/logoswhite/GGPOKER White 2.png',
      url: 'https://ggpoker.com/',
      description:
        'GGPoker, fundado en 2017, es una plataforma de póker diseñada por un equipo de apasionados jugadores. Nuestra misión es hacer que el póker sea divertido y emocionante, ofreciendo formatos de juego y características únicas que no se encuentran en otros lugares. Nos dirigimos a aquellos con estilos de vida ocupados, brindando sesiones de juego llenas de acción.',
    },
    {
      name: 'JBL QUANTUM V',
      logo: '/logoswhite/JBL QUANTUM V white.png',
      url: 'https://www.jbl.com/',
      description:
        'JBL siempre ha creído que el sonido debería ser un escenario abierto, un lugar de libre expresión donde las voces sean escuchadas, sin restricciones ni limitaciones. Es por eso que destacamos y celebramos la expresión auténtica y sin filtros de artistas, creadores y artistas valientes. JBL está aquí para ayudarte a expresar tu verdadero yo, para que puedas experimentar la alegría y emoción de ser tú mismo.',
    },
    {
      name: 'MAYCAMGAMES',
      logo: '/logoswhite/MAYCAMGAMES white.png',
      url: 'https://maycamgames.com/',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis quos tenetur qui nostrum aliquid cumesse dolore. Soluta earum nam recusandae inciduntiusto, sequi, eaque deserunt impedit quis nobis excepturi.',
    },
    {
      name: 'PREX',
      logo: '/logoswhite/PREX white.png',
      url: 'https://prex.com/',
      description:
        'Brindamos acceso a productos financieros seguros, innovadores, transparentes y de calidad en LATAM a través de una cuenta digital. Si tu plata rinde, ¡cuenta! Tenés una cuenta, una App, una tarjeta prepaga internacional y libertad financiera en tus manos.',
    },
    {
      name: 'SEAGATE',
      logo: '/logoswhite/SEAGATE white H.png',
      url: 'https://musthaveapps.com/',
      description:
        'En Seagate, lideramos en almacenamiento de datos, respondiendo al crecimiento explosivo de la nube, inteligencia artificial y aprendizaje automático. Nuestra innovación utiliza ingeniería nanométrica y ciencia de materiales, priorizando la circularidad y sostenibilidad. Ofrecemos líderes densidades de área, impulsando una gama completa de dispositivos y servicios para todos los ecosistemas basados en datos. Inspirados en nuestros valores, buscamos constantemente la innovación para garantizar el almacenamiento seguro y desbloquear el valor de tus datos. ',
    },
    {
      name: 'GATORADE',
      logo: '/logoswhite/GATORADE white.png',
      url: 'https://musthaveapps.com/',
      description:
        'Gatorade, se destaca por ofrecer innovaciones en rendimiento deportivo. Con más de 40 años de experiencia y un enfoque en el estudio de los mejores atletas del mundo, la empresa se basa en investigaciones de hidratación y nutrición deportiva realizadas en el Gatorade Sports Science Institute. Su compromiso radica en proporcionar productos científicamente formulados que aborden las necesidades de combustible deportivo de atletas en todas las fases de su actividad atlética.',
    },
    {
      name: 'REDRAGON',
      logo: '/logoswhite/REDRAGON white.png',
      url: 'https://musthaveapps.com/',
      description:
        'Eastern Times Technology Co., Ltd, fundada en 1996, es una de las principales fábricas de ratones y teclados en China. Con más de 1400 empleados, ofrece servicios de producción integrales. Como propietaria de Redragon, una marca destacada en periféricos de juegos, se compromete a brindar productos de alto rendimiento a nivel global. Con 20 años de experiencia, Redragon se destaca por su innovación en diseño e calidad. Su presencia de ventas abarca más de 30 países y aspira a proporcionar una vida de calidad y comodidad a sus usuarios.',
    },
    {
      name: 'SAN IGNACIO',
      logo: '/logoswhite/San Ignacio white.png',
      url: 'https://musthaveapps.com/',
      description:
        'San Ignacio, fundada en 1939 en Rosario, Argentina, es conocida por su excelencia en la producción de dulce de leche y queso. Procesan más de 27 millones de litros de leche anualmente para producir dulce de leche, queso y productos frescos que son reconocidos por su calidad, tradición y han ganado premios, como el mejor queso azul del país en 2006. San Ignacio es elegida por otras marcas por su trayectoria, tradición y calidad para ubicarnos en el corazón de sus productos.',
    },
  ];

  return (
    <main className='min-h-screen w-full flex flex-col gap-8 lg:gap-10 py-20 items-start justify-start'>
      <h1 className='text-white font-extralight px-10 text-4xl  lg:text-5xl'>
        Nuestros{' '}
        <span className='text-[#715bd4] font-light'>
          Sponsors
        </span>
      </h1>
      <p className='leading-[40px] lg:leading-[60px] px-10  font-light text-left text-base  lg:text-2xl w-full xlxl:w-4/5 text-white'>
        Hemos tenido el{' '}
        <span className='text-[#715bd4] font-medium'>
          privilegio
        </span>{' '}
        de establecer colaboraciones con{' '}
        <span className='text-[#715bd4] font-medium'>
          destacados referentes
        </span>{' '}
        en sus respectivos{' '}
        <span className='text-[#715bd4] font-medium'>
          ámbitos
        </span>
        . Compartimos valores fundamentales, tales como el{' '}
        <span className='text-[#715bd4] font-medium'>
          rendimiento
        </span>
        , la
        <span className='text-[#715bd4] font-medium'>
          {' '}
          innovación
        </span>
        , la{' '}
        <span className='text-[#715bd4] font-medium'>
          autenticidad
        </span>{' '}
        y la{' '}
        <span className='text-[#715bd4] font-medium'>
          pasión
        </span>
        . Estamos entusiasmados de contar con{' '}
        <span className='text-[#715bd4] font-medium'>
          patrocinadores
        </span>{' '}
        a largo plazo que nos brindarán el respaldo
        necesario para alcanzar nuestras{' '}
        <span className='text-[#715bd4] font-medium'>
          metas
        </span>{' '}
        y{' '}
        <span className='text-[#715bd4] font-medium'>
          expandirnos
        </span>{' '}
        más allá de los límites del mundo de los deportes
        electrónicos.
      </p>
      <section className=' grid place-items-start xlxl:grid-cols-2 grid-cols-1 px-5 xl:p-10 gap-10 overflow-hidden w-full'>
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className='card lg:card-side w-full fondoNav2 h-full lg:h-[29rem]  rounded-3xl shadow-xl'
          >
            <figure className='w-auto min-w-[100px] lg:min-w-[400px] flex items-center justify-center'>
              <div className='relative flex items-center justify-center h-full w-56'>
                <Image
                  src={sponsor.logo}
                  fill
                  alt='Album'
                  quality={100}
                  className='object-contain '
                />
              </div>
            </figure>
            <div className='card-body'>
              <h2 className='card-title text-white'>
                {sponsor.name}
              </h2>
              <p className='text-white   lg:min-h-[216px]   xl:w-full'>
                {sponsor.description}
              </p>
              <div className='card-actions mt-5 justify-end'>
                <button className='btn hvr-fade hover:border-[#715bd4] bg-[#000] text-white border border-[#715bd4]'>
                  <RxOpenInNewWindow
                    style={{ fontSize: '28px' }}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};
export default Sponsors;
