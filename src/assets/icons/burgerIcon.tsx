import React, { SVGProps } from 'react';

export const BurgerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="currentColor" {...props}>
    <g clipPath="url(#clip0_1358_1326)">
      <rect width="4" height="30" rx="2" transform="matrix(-4.21468e-08 1 1 4.21468e-08 0 13)" fill="white" />
      <rect width="4" height="30" rx="2" transform="matrix(-4.21468e-08 1 1 4.21468e-08 0 22)" fill="white" />
      <rect width="4" height="30" rx="2" transform="matrix(-4.21468e-08 1 1 4.21468e-08 0 4)" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_1358_1326">
        <rect width="30" height="30" rx="2" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
