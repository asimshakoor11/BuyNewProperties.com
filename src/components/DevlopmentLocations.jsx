


import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/src/assets/Fontawesome';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';


const DevlopmentLocations = () => {
    const [hoveredButton, setHoveredButton] = useState(null);
    const [backgroundImage, setBackgroundImage] = useState('');

    const getBackgroundImage = (buttonName) => {
        switch (buttonName) {
            case 'Algarve':
                return 'url(/images/homepage/hoverimg1.jpg)';
            case 'Newyork':
                return 'url(/images/homepage/hoverimg2.jpg)';
            case 'Lisbon':
                return 'url(/images/homepage/hoverimage3.jpg)';
            case 'Porto':
                return 'url(/images/homepage/hoverimg1.jpg)';
            case 'Florida':
                return 'url(/images/homepage/hoverimg2.jpg)';
            case 'LongIsland':
                return 'url(/images/homepage/hoverimage3.jpg)';
            case 'Georgia':
                return 'url(/images/homepage/hoverimg1.jpg)';
            default:
                return '';
        }
    };

    const handleMouseEnter = (buttonName) => {
        setHoveredButton(buttonName);
        setBackgroundImage(getBackgroundImage(buttonName));
    };

    const handleMouseLeave = () => {
        setHoveredButton(null);
        setBackgroundImage('');
        
    };


    useEffect(() => {
        AOS.init({
            offset: 0, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 800, // values from 0 to 3000, with step 50ms
            once: false, // whether animation should happen only once - while scrolling down
            // mirror: false, // whether elements should animate out while scrolling past them
            // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <section className="section relative bg-bggray rounded-tl-[40px] rounded-tr-[40px] -mt-8 z-20 " >
            <AnimatePresence>
                {backgroundImage && (
                    <motion.div
                        key={backgroundImage}
                        id='sectionid'
                        className="absolute top-0 left-0 h-full w-full rounded-tl-[40px] rounded-tr-[40px] bg-bggray -z-10"
                        style={{
                            backgroundImage: `linear-gradient(to left, transparent, #F7F7F7 60%), ${backgroundImage}`,
                            backgroundSize: "cover"
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    ></motion.div>
                )}
            </AnimatePresence>
            {/* <motion.div id='sectionid' className="absolute top-0 left-0 h-full w-full rounded-tl-[40px] rounded-tr-[40px] bg-bggray -z-10"
                style={{
                    backgroundImage: `linear-gradient(to left, transparent, #F7F7F7 60%), 
                    ${getBackgroundImage()}`, backgroundSize: "cover"
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}>

            </motion.div> */}
            <h2   className="text-3xl md:text-5xl text-primarycolor dark:text-zinc-200 mb-4
                font-BebasNeueSemiExpBold">
                Development Locations
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <button  data-aos="fade-up" data-aos-delay="0"
                    className="flex justify-between items-center bg-white hover:bg-primarycolor hover:text-white font-semibold py-2 lg:py-3 px-4 rounded-lg w-full"
                    onMouseEnter={() => handleMouseEnter('Algarve')}
                    onMouseLeave={handleMouseLeave}>
                    <span>Algarve</span>
                    <span>
                        <FontAwesomeIcon icon="chevron-right" size="sm" />
                    </span>
                </button>
                <button data-aos="fade-up" data-aos-delay="50" className="flex justify-between items-center bg-white hover:bg-primarycolor hover:text-white  font-semibold py-2 lg:py-3 px-4 rounded-lg w-full"
                    onMouseEnter={() => handleMouseEnter('Newyork')}
                    onMouseLeave={handleMouseLeave}>
                    <span>New York</span>
                    <span>
                        <FontAwesomeIcon icon="chevron-right" size="sm" />

                    </span>
                </button>
                <button data-aos="fade-up" data-aos-delay="100" className="flex justify-between items-center bg-white hover:bg-primarycolor hover:text-white  font-semibold py-2 lg:py-3 px-4 rounded-lg w-full"
                    onMouseEnter={() => handleMouseEnter('Lisbon')}
                    onMouseLeave={handleMouseLeave}>
                    <span>Lisbon</span>
                    <span>
                        <FontAwesomeIcon icon="chevron-right" size="sm" />

                    </span>
                </button>
                <button data-aos="fade-up" data-aos-delay="150" className="flex justify-between items-center bg-white hover:bg-primarycolor hover:text-white  font-semibold py-2 lg:py-3 px-4  rounded-lg w-full"
                    onMouseEnter={() => handleMouseEnter('Porto')}
                    onMouseLeave={handleMouseLeave}>
                    <span>Porto</span>
                    <span>
                        <FontAwesomeIcon icon="chevron-right" size="sm" />
                    </span>
                </button>
                <button data-aos="fade-up" data-aos-delay="200" className="flex justify-between items-center bg-white hover:bg-primarycolor hover:text-white  font-semibold py-2 lg:py-3 px-4  rounded-lg w-full"
                    onMouseEnter={() => handleMouseEnter('Florida')}
                    onMouseLeave={handleMouseLeave}>
                    <span>Florida</span>
                    <span>
                        <FontAwesomeIcon icon="chevron-right" size="sm" />

                    </span>
                </button>
                <button data-aos="fade-up" data-aos-delay="250" className="flex justify-between items-center bg-white hover:bg-primarycolor hover:text-white  font-semibold py-2 lg:py-3 px-4  rounded-lg w-full"
                    onMouseEnter={() => handleMouseEnter('LongIsland')}
                    onMouseLeave={handleMouseLeave}>
                    <span>Long Island</span>
                    <span>
                        <FontAwesomeIcon icon="chevron-right" size="sm" />

                    </span>
                </button>
                <button data-aos="fade-up" data-aos-delay="300" className="flex justify-between items-center bg-white hover:bg-primarycolor hover:text-white  font-semibold py-2 lg:py-3 px-4  rounded-lg w-full"
                    onMouseEnter={() => handleMouseEnter('Georgia')}
                    onMouseLeave={handleMouseLeave}>
                    <span>Georgia</span>
                    <span>
                        <FontAwesomeIcon icon="chevron-right" size="sm" />

                    </span>
                </button>
            </div>
        </section>
    )
}

export default DevlopmentLocations