// src/Carousel.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Styles/Global.css';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const images = [
    '/images/pages/homepage/bgiamge.webp',
    '/images/pages/homepage/herosection.svg',
    '/images/pages/homepage/architecture.jpg',
    '/images/pages/homepage/kuala-lumpur.jpg',
];

const GlobalImgCarousel = ({dark}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const NextArrow = ({ onClick }) => {
        return (
            <div
                className={`absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer ${ dark ? 'bg-transparent text-black hover:text-white hover:bg-primarycolor' : 'bg-transparent text-white hover:text-primarycolor hover:bg-white'}  border h-8 w-8 md:h-12 md:w-10 flex items-center justify-center rounded-lg`}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronRight} size='sm' />
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div
                className={`absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer ${ dark ? 'bg-transparent text-black hover:text-white hover:bg-primarycolor' : 'bg-transparent text-white hover:text-primarycolor hover:bg-white'} border h-8 w-8 md:h-12 md:w-10 flex items-center justify-center rounded-lg`}
                onClick={onClick}
            >
                <FontAwesomeIcon icon={faChevronLeft} size='sm' />
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
        <div className="container mx-auto h-full">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} className="slick-slide">
                        <div className={`flex justify-center ${dark ? 'h-full' : 'h-[70vh]'} items-center px-[10%]`}>
                            <img src={img} alt={`Slide ${index}`} className="object-cover h-full w-full" />
                        </div>
                    </div>
                ))}
            </Slider>
            <div className={`text-center mt-8 ${dark ? 'text-gray-700' : 'text-gray-500'}  font-semibold text-lg`}>
                <span className={`${dark ? 'text-black' : 'text-white'}`}> 0{currentSlide + 1} / </span>  0{images.length}
            </div>
        </div>
    );
};

export default GlobalImgCarousel;
