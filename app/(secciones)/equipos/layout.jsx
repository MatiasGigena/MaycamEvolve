'use client';
import { usePathname } from 'next/navigation';
import TeamNav from '@/app/components/teamNav';

const Layout = ({ children }) => {
  const pathName = usePathname();
  return (
    <main className=' min-h-screen flex flex-col w-full items-start lg:items-center pl-2 pr-1 justify-start lg:justify-between  lg:py-20'>
      {pathName.startsWith('/equipos/') ? <TeamNav /> : ''}
      {children}
    </main>
  );
};

export default Layout;
