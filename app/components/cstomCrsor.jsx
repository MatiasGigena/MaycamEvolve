// 'use client';
// import {
//   useMotionValue,
//   useSpring,
//   motion,
// } from 'framer-motion';
// import { useEffect } from 'react';

// const CstomCrsor = () => {
//   const cursorSize = 10;
//   const mouse = {
//     x: useMotionValue(0),
//     y: useMotionValue(0),
//   };
//   const smoothOptions = {
//     damping: 20,
//     stifness: 300,
//     mass: 0.5,
//   };
//   const smoothMouse = {
//     x: useSpring(mouse.x, smoothOptions),
//     y: useSpring(mouse.y, smoothOptions),
//   };
//   const manageMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     mouse.x.set(clientX - cursorSize / 2);
//     mouse.y.set(clientY - cursorSize / 2);
//   };
//   useEffect(() => {
//     window.addEventListener('mousemove', manageMouseMove);
//     return () => {
//       window.removeEventListener(
//         'mousemove',
//         manageMouseMove
//       );
//     };
//   });
//   return (
//     <motion.div
//       className='custom-cursor'
//       style={{ left: smoothMouse.x, top: smoothMouse.y }}
//     ></motion.div>
//   );
// };
// export default CstomCrsor;
