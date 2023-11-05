'use client';
import { useRouter } from 'next/navigation';
import Preloader from '../../components/preloader';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import HomePage from '@/app/components/main';
const MainPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    router.push('/main');
    window.scrollTo(0, 0);
  }, [router]);

  return (
    <>
      <AnimatePresence mode='wait'>
        {isLoading && (
          <Preloader setIsLoading={setIsLoading} />
        )}
      </AnimatePresence>
      <HomePage />
    </>
  );
};
export default MainPage;
