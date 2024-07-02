import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/src/assets/Fontawesome';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const LuxuryDevelopments = () => {
    const carouselRef = useRef(null);
    const divRef = useRef(null);
    const additionalPixels = 20;
    const [divWidth, setDivWidth] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

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

    const [items, setItems] = useState([
        {
            imgSrc: "/images/pages/homepage/herosection.svg",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/global/bigmenuiamge.png",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/pages/homepage/herosection.svg",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/global/bigmenuiamge.png",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/pages/homepage/herosection.svg",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        },
        {
            imgSrc: "/images/global/bigmenuiamge.png",
            title: "New Apartments In Portimao, Algarve",
            isSaved: false,
            showTooltip: false
        }
    ]);

    const handleSaveClick = (index) => {
        setItems(prevItems => prevItems.map((item, i) => (
            i === index ? { ...item, isSaved: !item.isSaved } : item
        )));
    };

    const handleMouseEnter = (index) => {
        setItems(prevItems => prevItems.map((item, i) => (
            i === index ? { ...item, showTooltip: true } : item
        )));
    };

    const handleMouseLeave = (index) => {
        setItems(prevItems => prevItems.map((item, i) => (
            i === index ? { ...item, showTooltip: false } : item
        )));
    };

    return (
        <>
            <div ref={carouselRef} className="w-full flex flex-nowrap py-2 overflow-x-scroll overflow-y-hidden gap-4 scrollbar-hide mt-10 pl-[7%] pr-[7%]">
                {items.map((item, index) => (
                    <div
                        key={index}
                        ref={divRef}
                        data-aos="fade-up" data-aos-delay={index * 100}
                        className="relative rounded-3xl overflow-hidden min-h-[600px] md:min-h-[650px] min-w-[320px] max-w-[320px] md:min-w-[380px] md:max-w-[380px] bg-container"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className='absolute inset-0 bg-black opacity-30 z-10'></div>

                        <div className="flex items-center absolute top-4 right-4 z-30">
                            {item.showTooltip && (
                                <motion.p
                                    className={`absolute w-max right-6 mr-2 mb-1 lowercase text-xs bg-white py-1 px-2 text-black rounded-lg`}
                                    initial={{ x: -20, opacity: 0 }} // Initial position and opacity
                                    animate={{ x: 0, opacity: 1 }} // Animation properties
                                    transition={{ duration: 0.3 }} // Animation duration
                                >
                                    {item.isSaved ? "Remove from favourites" : "Add to favourites"}
                                </motion.p>
                            )}

                            <button
                                onClick={() => handleSaveClick(index)}
                                className="bg-transparent border-none cursor-pointer"
                                title={item.isSaved ? "Remove from favourites" : "Add to favourites"}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                            >
                                <FontAwesomeIcon
                                    icon={solidBookmark}
                                    style={{
                                        color: item.isSaved ? 'green' : 'silver',
                                        stroke: 'black',
                                        strokeWidth: '40px'
                                    }}
                                    className="text-2xl"
                                />
                            </button>
                        </div>

                        <div
                            className='absolute inset-0 bg-zoom -z-10'
                            style={{
                                backgroundImage: `url(${item.imgSrc})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        ></div>

                        <motion.div
                            initial={{ opacity: 1, y: 0 }}
                            animate={{ y: hoveredIndex === index ? -10 : 0 }}
                            transition={{ duration: 0.5 }}
                            className='w-full h-fit absolute z-20 bottom-0 flex flex-col justify-center items-left gap-2 p-6 text-white'>
                            <div className='flex items-center gap-2 text-sm'>
                                <span>
                                    <img src="/images/icons/locationmarkerwhite.svg" alt="location" className='h-4' />
                                </span>
                                <span>
                                    Algarve, Portugal
                                </span>
                            </div>
                            <h1 className='font-semibold text-xl'>{item.title}</h1>
                            <p className="text-base">$500,000 to $800,000</p>


                            {hoveredIndex === index && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-wrap gap-4"
                                >
                                    <div>
                                        <div className="text-lg">D1001</div>
                                        <div className="text-sm font-semibold">Reference</div>
                                    </div>
                                    <div>
                                        <div className="text-lg">2 to 5</div>
                                        <div className="text-sm font-semibold">Bedrooms</div>
                                    </div>
                                    <div>
                                        <div className="text-lg">68m<sup>2</sup> to 304m<sup>2</sup></div>
                                        <div className="text-sm font-semibold">Build</div>
                                    </div>
                                </motion.div>
                            )}

                        </motion.div>

                        <div className='absolute bottom-0 z-10 h-[35%] w-full px-10' style={{ background: 'linear-gradient(to bottom, transparent, #000000 50%)' }}></div>

                    </div>
                ))}
            </div>
            <div className="flex justify-between items-start mt-6 pl-[7%] pr-[7%]">
                <button className="bg-primarycolor hover:bg-primarycolorhover font-medium text-white py-2 lg:py-3 px-4 sm:px-8 rounded-lg cursor-pointer transition-colors duration-300 ease-in-out">See All Developments</button>

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

export default LuxuryDevelopments;
