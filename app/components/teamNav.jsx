'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const TeamNav = () => {
  const pathName = usePathname();
  let subpage = pathName.split('/')?.[2];
  const activeLinks = (type = null) => {
    let classes = '';

    if (type === subpage) {
      classes +=
        'inline-flex items-center gap-2 lg:rounded-md border-y-2 lg:border-2 border-[#715bd4] px-4 py-2 text-sm shadow-md ';
    } else {
      classes +=
        'inline-flex items-center gap-2 rounded-md px-4 text-sm cursor-pointer2  ';
    }
    return classes;
  };
  return (
    <div className='flex flex-col w-[15%] sm:w-[10%] lg:w-auto top-72 lg:top-0 borderB z-40 py-6 items-center fixed rounded-2xl lg:relative lg:flex-row h-auto lg:h-28 bg-black fondoNav2 lg:px-4 gap-10'>
      <a href='/equipos/r6' className={activeLinks('r6')}>
        <Image
          style={{ height: 'auto', width: 'auto' }}
          src='/images/r6B.png'
          width={50}
          height={20}
          alt='logosequipos'
        />
      </a>
      <a href='/equipos/cs2' className={activeLinks('cs2')}>
        <Image
          style={{ height: 'auto', width: '70px' }}
          src='/images/cslogo2B.png'
          width={55}
          height={20}
          alt='logosequipos'
        />
      </a>
      <a
        href='/equipos/dota'
        className={activeLinks('dota')}
      >
        <Image
          style={{ height: 'auto', width: 'auto' }}
          src='/images/dotalogoB.png'
          width={55}
          height={20}
          alt='logosequipos'
        />
      </a>
      <a
        href='/equipos/eafc24'
        className={activeLinks('eafc24')}
      >
        <Image
          style={{ height: 'auto', width: '70px' }}
          src='/images/eafc24B.png'
          width={60}
          height={20}
          alt='logosequipos'
        />
      </a>
      <a
        href='/equipos/simracing'
        className={activeLinks('simracing')}
      >
        <Image
          style={{ height: 'auto', width: '70px' }}
          src='/images/simracingB.png'
          width={60}
          height={20}
          alt='logosequipos'
        />
      </a>
    </div>
  );
};
export default TeamNav;
