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
    switch (window.location.hash) {
      case '#streamers':
        setIsLoading(false);
        const streamersElement =
          document.getElementById('streamers');
        if (streamersElement) {
          streamersElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
        break;
      case '#home':
        setIsLoading(false);
        window.scrollTo(0, 0);
        break;
      default:
        setIsLoading(true);
        router.push('/main');
        window.scrollTo(0, 0);
        break;
    }
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
