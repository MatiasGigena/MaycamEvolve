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
      <div className='loader'>
        <div className='loader-inner'>
          <div className='loader-block'></div>
          <div className='loader-block'></div>
          <div className='loader-block'></div>
          <div className='loader-block'></div>
          <div className='loader-block'></div>
          <div className='loader-block'></div>
          <div className='loader-block'></div>
          <div className='loader-block'></div>
        </div>
      </div>
    </div>
  );
};

export default App;
