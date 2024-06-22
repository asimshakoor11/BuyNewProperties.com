// src/CustomArrows.js
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer bg-transparent text-white hover:text-primarycolor hover:bg-white border h-10 w-10 md:h-14 md:w-14 flex items-center justify-center rounded-full"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} size='sm' />

    </div>
  );
};

export const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer  bg-transparent text-white hover:text-primarycolor hover:bg-white border h-10 w-10 md:h-14 md:w-14 flex items-center justify-center rounded-full"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} size='sm' />



    </div>
  );
};
