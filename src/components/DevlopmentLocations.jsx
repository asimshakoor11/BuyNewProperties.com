import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/src/assets/Fontawesome';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const DevelopmentLocations = () => {
    const [backgroundImage, setBackgroundImage] = useState('');
    const hoveredButtonRef = useRef(null);
    const updateTimeoutRef = useRef(null);

    const getBackgroundImage = (buttonName) => {
        switch (buttonName) {
            case 'Algarve':
                return 'url(/images/homepage/hoverimg1.jpg)';
            case 'Newyork':
                return 'url(/images/homepage/hoverimg2.jpg)';
            case 'Lisbon':
                return 'url(/images/homepage/hoverimage3.jpg)';
            case 'Porto':
                return 'url(/images/homepage/kuala-lumpur.jpg)';
            case 'Florida':
                return 'url(/images/homepage/buildings.jpg)';
            case 'LongIsland':
                return 'url(/images/homepage/architecture.jpg)';
            case 'Georgia':
                return 'url(/images/homepage/skyline.jpg)';
            default:
                return '';
        }
    };

    const handleMouseEnter = (buttonName) => {
        clearTimeout(updateTimeoutRef.current);
        hoveredButtonRef.current = buttonName;
        updateTimeoutRef.current = setTimeout(() => {
            if (hoveredButtonRef.current === buttonName) {
                setBackgroundImage(getBackgroundImage(buttonName));
            }
        }, 100); // Small delay to manage rapid hover events
    };

    const handleMouseLeave = (buttonName) => {
        clearTimeout(updateTimeoutRef.current);
        if (hoveredButtonRef.current === buttonName) {
            setBackgroundImage('');
        }
    };

    useEffect(() => {
        AOS.init({
            offset: 120,
            delay: 0,
            duration: 800,
            once: false,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <section className="section bg-bggray relative z-20">
            <AnimatePresence>
                {backgroundImage && (
                    <motion.div
                        key={backgroundImage}
                        id='sectionid'
                        className="absolute top-0 left-0 h-full w-full bg-bggray -z-10"
                        style={{
                            backgroundImage: backgroundImage ? `linear-gradient(to left, transparent, #F7F7F7 60%), ${backgroundImage}` : `linear-gradient(to left, transparent, #F7F7F7 60%)`,
                            backgroundSize: "cover"
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    ></motion.div>
                )}
            </AnimatePresence>
            {!backgroundImage && (
                <motion.div
                    key="colorBackground"
                    id='sectionid'
                    className="absolute top-0 left-0 h-full w-full bg-bggray -z-10"
                    style={{
                        backgroundImage: `linear-gradient(to left, transparent, #F7F7F7 60%)`,
                        backgroundSize: "cover"
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                ></motion.div>
            )}
            <h2 className="text-3xl mb-10 md:text-5xl text-primarycolor dark:text-zinc-200 font-BebasNeueSemiExpBold">
                Development Locations
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div data-aos="fade-up" data-aos-delay="0">
                    <button
                        className="flex justify-between items-center bg-white hover:bg-primarycolor hover:text-white font-semibold py-2 lg:py-3 px-4 rounded-lg w-full transition-colors duration-500 ease-in-out"
                        onMouseEnter={() => handleMouseEnter('Algarve')}
                        onMouseLeave={() => handleMouseLeave('Algarve')}>
                        <span>Algarve</span>
                        <span>
                            <FontAwesomeIcon icon="chevron-right" size="sm" />
                        </span>
                    </button>
                </div>
                <div data-aos="fade-up" data-aos-delay="50">
                    <button className="flex justify-between items-center bg-white hover:bg-primarycolor hover:text-white font-semibold py-2 lg:py-3 px-4 rounded-lg w-full transition-colors duration-500 ease-in-out"
                        onMouseEnter={() => handleMouseEnter('Newyork')}
                        onMouseLeave={() => handleMouseLeave('Newyork')}>
                        <span>New York</span>
                        <span>
                            <FontAwesomeIcon icon="chevron-right" size="sm" />
                        </span>
                    </button>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                    <button className="flex justify-between items-center bg-white hover:bg-primarycolor hover:text-white font-semibold py-2 lg:py-3 px-4 rounded-lg w-full transition-colors duration-500 ease-in-out"
                        onMouseEnter={() => handleMouseEnter('Lisbon')}
                        onMouseLeave={() => handleMouseLeave('Lisbon')}>
                        <span>Lisbon</span>
                        <span>
                            <FontAwesomeIcon icon="chevron-right" size="sm" />
                        </span>
                    </button>
                </div>
                <div data-aos="fade-up" data-aos-delay="150">
                    <button className="flex justify-between items-center bg-white hover:bg-primarycolor hover:text-white font-semibold py-2 lg:py-3 px-4 rounded-lg w-full transition-colors duration-500 ease-in-out"
                        onMouseEnter={() => handleMouseEnter('Porto')}
                        onMouseLeave={() => handleMouseLeave('Porto')}>
                        <span>Porto</span>
                        <span>
                            <FontAwesomeIcon icon="chevron-right" size="sm" />
                        </span>
                    </button>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                    <button className="flex justify-between items-center bg-white hover:bg-primarycolor hover:text-white font-semibold py-2 lg:py-3 px-4 rounded-lg w-full transition-colors duration-500 ease-in-out"
                        onMouseEnter={() => handleMouseEnter('Florida')}
                        onMouseLeave={() => handleMouseLeave('Florida')}>
                        <span>Florida</span>
                        <span>
                            <FontAwesomeIcon icon="chevron-right" size="sm" />
                        </span>
                    </button>
                </div>
                <div data-aos="fade-up" data-aos-delay="250">
                    <button className="flex justify-between items-center bg-white hover:bg-primarycolor hover:text-white font-semibold py-2 lg:py-3 px-4 rounded-lg w-full transition-colors duration-500 ease-in-out"
                        onMouseEnter={() => handleMouseEnter('LongIsland')}
                        onMouseLeave={() => handleMouseLeave('LongIsland')}>
                        <span>Long Island</span>
                        <span>
                            <FontAwesomeIcon icon="chevron-right" size="sm" />
                        </span>
                    </button>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <button className="flex justify-between items-center bg-white hover:bg-primarycolor hover:text-white font-semibold py-2 lg:py-3 px-4 rounded-lg w-full transition-colors duration-500 ease-in-out"
                        onMouseEnter={() => handleMouseEnter('Georgia')}
                        onMouseLeave={() => handleMouseLeave('Georgia')}>
                        <span>Georgia</span>
                        <span>
                            <FontAwesomeIcon icon="chevron-right" size="sm" />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DevelopmentLocations;
