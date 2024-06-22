// src/Carousel.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from './CarouselArrows';
import './Styles/Global.css';


const images = [
    '/images/homepage/bgiamge.webp',
    '/images/homepage/heroimage.png',
    '/images/homepage/architecture.jpg',
    '/images/homepage/kuala-lumpur.jpg',
];

const GlobalImgCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

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
        <div className="container mx-auto mt-8 h-[72vh]">
            <Slider {...settings}>
                {images.map((img, index) => (
                    <div key={index} className="slick-slide h-[72vh] ">
                        <div className="flex justify-center items-center h-full">
                            <img src={img} alt={`Slide ${index}`} className="object-contain max-h-full max-w-full" />
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="text-center mt-8 text-gray-500 font-semibold text-lg">
                <span className='text-white'> 0{currentSlide + 1} / </span>  0{images.length}
            </div>
        </div>
    );
};

export default GlobalImgCarousel;
