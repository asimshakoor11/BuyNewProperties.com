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
    '/images/pages/homepage/verticalimage.jpeg',
    '/images/pages/homepage/kuala-lumpur.jpg',
];

const GlobalImgCarousel = ({ dark, handlepopupcarousel }) => {
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
        <div className="container flex flex-col justify-between mx-auto relative " >
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} className="slick-slide  h-[100%] ">
                        <div className={`flex justify-center ${dark ? 'h-[70vh]' : 'h-[70vh]'} items-center px-0 md:px-[10%]`}>
                            <img src={img} alt={`Slide ${index}`} className=" object-contain h-full w-full" onClick={handlepopupcarousel}/>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className={` text-center  mt-8 ${dark ? 'text-gray-700' : 'text-gray-500'}  font-medium text-base`}>
                <span className={`${dark ? 'text-black' : 'text-white'}`}> 0{currentSlide + 1} / </span>  0{images.length}
            </div>
        </div>
    );
};

export default GlobalImgCarousel;
