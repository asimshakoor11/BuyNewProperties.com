// src/Carousel.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Styles/Global.css';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GlobalImgCarousel = ({ dark, handlepopupcarousel, customheight, images, isPopup }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const NextArrow = ({ onClick }) => {
        return (
            <div
                id='rightarrow'
                className={`hidden  md:flex items-center absolute top-1/2 h-full transform -translate-y-1/2 right-4 z-10 cursor-pointer`}
                onClick={onClick}
            >
                <div className={`flex ${dark ? 'bg-transparent text-black hover:text-white hover:bg-primarycolor' : 'bg-transparent text-white hover:text-primarycolor hover:bg-white'}  border h-8 w-8 md:h-12 md:w-10 items-center justify-center rounded-lg cursor-pointer transition-colors duration-300 ease-in-out`}>
                    <FontAwesomeIcon icon={faChevronRight} size='sm' />
                </div>
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div
                id='leftarrow'
                className={`hidden md:flex items-center absolute top-1/2 h-full transform -translate-y-1/2 left-4 z-10 cursor-pointer`}
                onClick={onClick}
            >
                <div className={`flex ${dark ? 'bg-transparent text-black hover:text-white hover:bg-primarycolor' : 'bg-transparent text-white hover:text-primarycolor hover:bg-white'}  border h-8 w-8 md:h-12 md:w-10 items-center justify-center rounded-lg cursor-pointer transition-colors duration-300 ease-in-out`}>
                    <FontAwesomeIcon icon={faChevronLeft} size='sm' />
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
        <div className={` w-full h-full flex flex-col ${isPopup  ? 'justify-center' : 'justify-between'}  mx-auto relative`} >
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} className={`slick-slid`}>
                        <div className={`flex justify-center h-full items-center `}>
                            <img src={img} alt={`Slide ${index}`} className="object-contain h-full w-full px-6" onClick={handlepopupcarousel} />
                        </div>
                    </div>
                ))}
            </Slider>
            <div className={`text-center mt-2  ${dark ? 'text-gray-900' : 'text-gray-600'}  font-medium text-base`}>
                <span >
                    <span className={`${dark ? 'text-black ' : 'text-white'}`}> 0{currentSlide + 1} / </span>
                    0{images.length}
                </span>

            </div>
        </div>
    );
};

export default GlobalImgCarousel;
