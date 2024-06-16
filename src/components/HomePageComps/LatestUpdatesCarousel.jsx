



import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/src/assets/Fontawesome';

const LatestUpdatesCarousel = () => {
    const carouselRef = useRef(null);
    const divRef = useRef(null);
    const additionalPixels = 20
    const [divWidth, setDivWidth] = useState(0);

    const scrollLeft = () => {
        if (carouselRef.current) {
            setDivWidth(divRef.current.offsetWidth);
            carouselRef.current.scrollBy({ left: -(divWidth + additionalPixels), behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            setDivWidth(divRef.current.offsetWidth);
            const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth + 300;
            const scrollAmount = divWidth + additionalPixels;

            if (carouselRef.current.scrollLeft + scrollAmount >= maxScrollLeft) {
                carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    useEffect(() => {
        if (divRef.current) {
            setDivWidth(divRef.current.offsetWidth);
        }
    }, []);

    return (

        <>
            {/* navbar w-full text-xl flex flex-nowrap justify-around overflow-x-hidden */}
            <div ref={carouselRef} className="w-full flex flex-nowrap py-2 overflow-x-scroll overflow-y-hidden gap-4 scrollbar-hide mt-10  pl-[7%] pr-[7%]">
                {[...Array(6)].map((_, index) => (
                    <div key={index} ref={divRef} data-aos="fade-up" data-aos-delay={index * 100}
                        className="overflow-hidden min-w-[320px] max-w-[320px] md:min-w-[350px] md:max-w-[350px] bg-container">
                        <div className='relative rounded-3xl overflow-hidden'>
                            <div className='rounded-3xl'>
                                <img
                                    src="/images/homepage/heroimage.png"
                                    alt="Property Image"
                                    className="w-full  object-cover bg-zoom rounded-3xl"
                                />
                            </div>

                            <div className='absolute inset-0 rounded-3xl bg-black opacity-30 '></div>
                        </div>

                        <div className="py-3">
                            <div className="flex items-center mb-3">
                                <span className="bg-primarycolor text-white text-xs mr-2 px-2 py-1 rounded">
                                    News
                                </span>
                                <span className="text-black font-semibold text-sm">May 15th 2024</span>
                            </div>
                            <h3 className="text-lg font-bold text-black mb-3">
                                Portugal Property Buying Process
                            </h3>
                            <p className="text-black text-sm">
                                Portugal Property Buying Process Portugal Property Buying Process Portugal Property
                                Buying Process...
                            </p>
                        </div>
                    </div>
                ))}

            </div>
            <div className="flex justify-between items-start mt-6 pl-[7%] pr-[7%]">
                <button className="bg-primarycolor font-medium text-white py-2 lg:py-3 px-8 rounded-lg ">See More Blog Posts</button>

                <div className="flex justify-between items-center mb-4">

                    <button onClick={scrollLeft} className="py-2 lg:py-3 px-3 border border-black rounded-lg mr-2">
                        <FontAwesomeIcon icon='chevron-left' />

                    </button>
                    <button onClick={scrollRight} className="py-2 lg:py-3 px-3 border border-black rounded-lg">
                        <FontAwesomeIcon icon='chevron-right' />

                    </button>
                </div>
            </div>

        </>
    );
};

export default LatestUpdatesCarousel