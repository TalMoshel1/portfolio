import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MusicNoteSvg = () => {
  const [xRange, setXRange] = useState([0, 0]);
  const [yRange, setYRange] = useState([0, 0]);

  useEffect(() => {
    const updateRange = () => {
      setXRange([-50, 50]);
      setYRange([-50, 50]);
    };

    updateRange();

    window.addEventListener('resize', updateRange);
    return () => window.removeEventListener('resize', updateRange);
  }, []);

  const getRandomValue = (range) => Math.random() * (range[1] - range[0]) + range[0];

  return (
    <motion.svg
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, x: 0, y: 0 }}
      animate={{
        opacity: 1,
        x: [
          getRandomValue(xRange),
          getRandomValue(xRange),
          getRandomValue(xRange),
          getRandomValue(xRange),
          getRandomValue(xRange),
        ],
        y: [
          getRandomValue(yRange),
          getRandomValue(yRange),
          getRandomValue(yRange),
          getRandomValue(yRange),
          getRandomValue(yRange),
        ],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear',
      }}
    >
      <path d="M12 19.5C12 20.8807 10.8807 22 9.5 22C8.11929 22 7 20.8807 7 19.5C7 18.1193 8.11929 17 9.5 17C10.8807 17 12 18.1193 12 19.5Z" stroke="#1C274C" strokeWidth="1.5"/>
      <path d="M22 17.5C22 18.8807 20.8807 20 19.5 20C18.1193 20 17 18.8807 17 17.5C17 16.1193 18.1193 15 19.5 15C20.8807 15 22 16.1193 22 17.5Z" stroke="#1C274C" strokeWidth="1.5"/>
      <path d="M22 8L12 12" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M14.4556 5.15803L14.7452 5.84987L14.4556 5.15803ZM16.4556 4.32094L16.1661 3.62909L16.4556 4.32094ZM21.1081 3.34059L20.6925 3.96496L20.6925 3.96496L21.1081 3.34059ZM12.75 19.0004V8.84787H11.25V19.0004H12.75ZM22.75 17.1542V8.01078H21.25V17.1542H22.75ZM14.7452 5.84987L16.7452 5.01278L16.1661 3.62909L14.1661 4.46618L14.7452 5.84987ZM22.75 8.01078C22.75 6.67666 22.752 5.59091 22.6304 4.76937C22.5067 3.93328 22.2308 3.18689 21.5236 2.71622L20.6925 3.96496C20.8772 4.08787 21.0473 4.31771 21.1466 4.98889C21.248 5.67462 21.25 6.62717 21.25 8.01078H22.75ZM16.7452 5.01278C18.0215 4.47858 18.901 4.11263 19.5727 3.94145C20.2302 3.77391 20.5079 3.84204 20.6925 3.96496L21.5236 2.71622C20.8164 2.24554 20.0213 2.2792 19.2023 2.48791C18.3975 2.69298 17.3967 3.114 16.1661 3.62909L16.7452 5.01278ZM12.75 8.84787C12.75 8.18634 12.751 7.74991 12.7875 7.41416C12.822 7.09662 12.8823 6.94006 12.9594 6.8243L11.7106 5.99325C11.4527 6.38089 11.3455 6.79864 11.2963 7.25218C11.249 7.68752 11.25 8.21893 11.25 8.84787H12.75ZM14.1661 4.46618C13.5859 4.70901 13.0953 4.91324 12.712 5.12494C12.3126 5.34549 11.9686 5.60562 11.7106 5.99325L12.9594 6.8243C13.0364 6.70855 13.1575 6.59242 13.4371 6.438C13.7328 6.27473 14.135 6.10528 14.7452 5.84987L14.1661 4.46618Z" fill="#1C274C"/>
      <path opacity="0.5" d="M7 11V2C7 4.07107 8.75736 5 10 5M7 10.5C7 11.8807 5.88071 13 4.5 13C3.11929 13 2 11.8807 2 10.5C2 9.11929 3.11929 8 4.5 8C5.88071 8 7 9.11929 7 10.5Z" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </motion.svg>
  );
};

const AnimateMusicSvg = () => (
    <MusicNoteSvg />
);

export default AnimateMusicSvg;
