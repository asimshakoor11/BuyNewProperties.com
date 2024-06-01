



import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/src/assets/Fontawesome';

const LatestUpdatesCarousel = () => {
    const carouselRef = useRef(null);
    const divRef = useRef(null);
    const additionalPixels = 10
    const [divWidth, setDivWidth] = useState(0);

    const scrollLeft = () => {
        if (carouselRef.current) {
            setDivWidth(divRef.current.offsetWidth);
            carouselRef.current.scrollBy({ left: -(divWidth+additionalPixels) , behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            setDivWidth(divRef.current.offsetWidth);
            carouselRef.current.scrollBy({ left: divWidth+additionalPixels, behavior: 'smooth' });
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
            <div ref={carouselRef} className="w-full flex flex-nowrap justify-evenly  py-2 overflow-x-scroll gap-4 scrollbar-hide mt-10">
                {[...Array(8)].map((_, index) => (
                    <div key={index} ref={divRef} className="bg-white dark:bg-zinc-800  rounded-lg shadow-md overflow-hidden
                    min-w-[100%] sm:min-w-[60%] md:min-w-[40%] lg:min-w-[30%] xl:min-w-[25%]">
                        <div className='relative'>
                            <img
                                src="/images/homepage/heroimage.png"
                                alt="Property Image"
                                className="w-full h-48 object-cover"
                            />
                            <div className='absolute inset-0 bg-black opacity-30'></div>

                        </div>

                        <div className="p-4">
                            <div className="flex items-center mb-2">
                                <span className="bg-primarycolor text-white text-xs  mr-2 px-2.5 py-0.5 rounded">
                                    News
                                </span>
                                <span className="text-black font-semibold text-sm">May 15th 2024</span>
                            </div>
                            <h3 className="text-lg font-bold text-black mb-2">
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
            <div className="flex justify-between items-start mt-4 px-10">
                <div className="flex justify-between items-center mb-4">
                    <button onClick={scrollLeft} className="py-2 px-3 border border-black rounded-md mr-2">
                        <FontAwesomeIcon icon='chevron-left' />

                    </button>
                    <button onClick={scrollRight} className="py-2 px-3 border border-black rounded-md">
                        <FontAwesomeIcon icon='chevron-right' />

                    </button>
                </div>
                <button className="bg-primarycolor text-white py-2 px-8 rounded-lg">View All</button>
            </div>

        </>
    );
};

export default LatestUpdatesCarousel