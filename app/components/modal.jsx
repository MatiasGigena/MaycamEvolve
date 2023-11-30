'use client';
import { useEffect, useState } from 'react';
import getCookie from '@/hooks/getCookies';
import Image from 'next/image';
import 'animate.css';

const Modal = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowButton(false);
    const date = new Date();
    date.setDate(date.getDate() + 1);
    document.cookie = `ModalClosed=${true}; expires=${date.toUTCString()}`;
  };

  useEffect(() => {
    const modal = getCookie('ModalClosed');
    if (modal) {
      setShowButton(false);
    }
  }, []);

  return (
    <>
      {showButton && (
        <div className=' h-[150px] animate__animated animate__fadeIn w-[150px] lg:h-[250px] rounded-lg lg:w-[250px] fondo bg-[#1a1e1c] borderB items-center flex justify-center transition duration-300 fixed z-[500] bottom-10 left-10'>
          <button
            className='relative bg-white h-[70%] w-[70%] cursor-pointer2'
            onClick={() =>
              document
                .getElementById('my_modal_2')
                .showModal()
            }
          >
            <Image
              sizes={
                '(max-width: 768px) 60vw, (max-width: 1200px) 70vw, (max-width: 2560px) 80vw, 100vw'
              }
              src='/images/codeqr.png'
              alt='codeqr'
              fill
            />
          </button>
          <button
            onClick={handleClose}
            className='absolute cursor-pointer2 text-white p-3 text-lg z-[600] top-0 right-0'
          >
            X
          </button>
        </div>
      )}
      <dialog id='my_modal_2' className='modal'>
        <div className='modal-box rounded-lg shadow-lg flex flex-col items-center gap-8 py-12 bg-[#0c1218]'>
          <h3 className='font-semibold text-lg text-center text-white'>
            Escanea el QR para participar en nuestro sorteo!
          </h3>

          <Image
            width={200}
            height={500}
            src='/images/codeqr.png'
            alt='codeqr'
            className='bg-white'
          />
          <p className=' text-white'>
            Preiona ESC o clickea afuera para cerrar
          </p>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};
export default Modal;
