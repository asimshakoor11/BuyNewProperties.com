// src/Carousel.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GlobalImgCarousel = () => {

    const dark=true;


    const testimonialsData = [
        {
            name: "John Doe",
            title: "CEO, Company",
            quote: "This is an amazing service! Highly recommended.",
        },
        {
            name: "Jane Smith",
            title: "Marketing Head, Another Company",
            quote: "Excellent support and very easy to use.",
        },
        {
            name: "Sam Johnson",
            title: "Freelancer",
            quote: "I love how simple and effective this product is.",
        },
    ];

    const NextArrow = ({ onClick }) => {
        return (
            <div
                id='rightarrow'
                className={`hidden  md:flex items-center absolute top-1/2 h-full transform -translate-y-1/2 -right-20 z-10 cursor-pointer`}
                onClick={onClick}
            >
                <div className={`flex ${dark ? 'bg-transparent text-black hover:text-white hover:bg-primarycolor' : 'bg-transparent text-white hover:text-primarycolor hover:bg-white'}  border border-bggray h-8 w-8 md:h-12 md:w-10 items-center justify-center rounded-lg cursor-pointer transition-colors duration-300 ease-in-out`}>
                    <FontAwesomeIcon icon={faChevronRight} size='sm' />
                </div>
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div
                id='leftarrow'
                className={`hidden md:flex items-center absolute top-1/2 h-full transform -translate-y-1/2 -left-20 z-10 cursor-pointer`}
                onClick={onClick}
            >
                <div className={`flex ${dark ? 'bg-transparent text-black hover:text-white hover:bg-primarycolor' : 'bg-transparent text-white hover:text-primarycolor hover:bg-white'}  border border-bggray h-8 w-8 md:h-12 md:w-10 items-center justify-center rounded-lg cursor-pointer transition-colors duration-300 ease-in-out`}>
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
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="">
            <h2 className="text-3xl font-bold text-center text-primarycolor mb-8">What Russell Henderson Clients Say</h2>
            <div className="max-w-4xl mx-auto">
                <Slider {...settings} className=''>
                    {testimonialsData.map((testimonial, index) => (
                        <div key={index} className="p-6">
                            <div className="bg-bggray p-12 rounded-lg">
                                <p className="italic text-lg">"{testimonial.quote}"</p>
                                <p className="mt-4 text-black font-semibold">- {testimonial.name}, <span className="text-gray-600">{testimonial.title}</span></p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default GlobalImgCarousel;
