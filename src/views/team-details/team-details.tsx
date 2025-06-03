'use client';

import { useGSAP } from '@gsap/react';
import { fadeAnimation, splitAnimation } from '@/utils/title-animation';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';

const TeamDetailsMain = () => {
  // GSAP animations
  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      splitAnimation();
    }, LOADING_ANIMATION_TIMEOUT);
    return () => clearTimeout(timer);
  });

  return <></>; // Temporary empty return to avoid build error
};

export default TeamDetailsMain;
