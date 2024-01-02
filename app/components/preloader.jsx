'use client';
import { useEffect } from 'react';
import { slideUp2 } from '../animations/anim';
import { motion } from 'framer-motion';
const Preloader = ({ setIsLoading }) => {
  // Establecer la fecha de finalización

  useEffect(() => {
    let countDownDate = new Date(
      'Jan 2, 2024 20:00:00'
    ).getTime();

    // Actualizar el conteo cada segundo
    let x = setInterval(function () {
      // Obtener la fecha y hora actuales
      let now = new Date().getTime();

      // Encontrar la distancia entre ahora y la fecha de cuenta regresiva
      let distance = countDownDate - now;

      // Cálculos de tiempo para días, horas, minutos y segundos
      let days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
      );
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
      );

      // Mostrar el resultado en los elementos con id="date"
      document
        .getElementById('days')
        .style.setProperty('--value', days);
      document
        .getElementById('hours')
        .style.setProperty('--value', hours);
      document
        .getElementById('minutes')
        .style.setProperty('--value', minutes);
      document
        .getElementById('seconds')
        .style.setProperty('--value', seconds);

      // Si la cuenta regresiva termina, escribir algún texto
      if (distance < 0) {
        clearInterval(x);
        document.getElementById('date').innerHTML =
          'EXPIRED';
      }
    }, 1000);
  }, []);
  const handleVideoEnd = () => {
    setIsLoading(true);
    window.scrollTo(0, 0);
    document.getElementById('date').style.opacity = 1;
  };
  return (
    <motion.div
      variants={slideUp2}
      initial='initial'
      exit='exit'
      className='min-h-screen fixed w-full flex-col  bg-black top-0 left-0 z-[999] text-white flex items-center justify-center'
    >
      <video
        autoPlay={true}
        playsInline
        muted
        style={{ width: '700px', height: '700px' }}
        onEnded={handleVideoEnd}
      >
        <source
          src='images/ezgif.com-optimize.mp4'
          type='video/mp4'
        />
      </video>
      <div
        id='date'
        className='flex gap-5 opacity-0 transition-opacity duration-300'
      >
        <div>
          <span className='countdown font-mono text-4xl lg:text-6xl'>
            <span id='days' style={{ '--value': 4 }}></span>
          </span>{' '}
          days
        </div>
        <div>
          <span className='countdown font-mono text-4xl lg:text-6xl'>
            <span
              id='hours'
              style={{ '--value': 7 }}
            ></span>
          </span>{' '}
          hours
        </div>
        <div>
          <span className='countdown font-mono text-4xl lg:text-6xl'>
            <span
              id='minutes'
              style={{ '--value': 15 }}
            ></span>
          </span>{' '}
          min
        </div>
        <div>
          <span className='countdown font-mono text-4xl lg:text-6xl'>
            <span
              id='seconds'
              style={{ '--value': 12 }}
            ></span>
          </span>{' '}
          sec
        </div>
      </div>
    </motion.div>
  );
};
export default Preloader;
