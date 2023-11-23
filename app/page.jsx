'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const App = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/main');
  });

  return (
    <div className='min-h-screen w-full flex justify-center items-center'>
      <div className='spinner'></div>
    </div>
  );
};

export default App;
