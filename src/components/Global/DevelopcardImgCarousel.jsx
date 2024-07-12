// src/Carousel.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DevelopcardImgCarousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const NextArrow = ({ onClick }) => {
        return (
            <div
                id='rightarrow'
                className={`hidden  md:flex items-center absolute top-1/2  transform -translate-y-1/2 right-4 z-10 cursor-pointer`}
                onClick={onClick}
            >
                <div className={`flex bg-transparent hover:bg-opacity-30 text-white hover:bg-white h-7 w-7 md:h-8 md:w-8 items-center justify-center rounded-full cursor-pointer transition-colors duration-300 ease-in-out`}>
                    <FontAwesomeIcon icon={faChevronRight} size='base' />
                </div>
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div
                id='leftarrow'
                className={`hidden md:flex items-center absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer`}
                onClick={onClick}
            >
                <div className={`flex bg-transparent hover:bg-opacity-30 text-white hover:bg-white h-7 w-7 md:h-8 md:w-8  items-center justify-center rounded-full  cursor-pointer transition-colors duration-300 ease-in-out`}>
                    <FontAwesomeIcon icon={faChevronLeft} size='base' />
                </div>
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    };

    return (
        <div className={` w-full h-full relative overflow-hidden  rounded-[18px] `} >
            <Slider {...settings} className='h-full '>
                {images.map((img, index) => (
                    <div key={index} className={`h-full`}>
                        <div className={` h-full `}>
                            <img src={img} alt={`Slide ${index}`} className="object-contain h-full w-full bg-container bg-zoom"/>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default DevelopcardImgCarousel;
