import React, { useState, useRef, useEffect } from 'react';
import { Carousel } from "@material-tailwind/react";
import { motion } from 'framer-motion';
import { faXmark, faPlay, faImage, faLocation, faShare } from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SingleDevHeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedPopup, setSelectedPopup] = useState('image');
    const [openDropdown, setOpenDropdown] = useState(false);
    const [openDropdown2, setOpenDropdown2] = useState(false);


    const images = [
        './src/assets/images/homepage/heroimage.png',
        './src/assets/images/global/bgimage.jpeg',
        './src/assets/images/homepage/heroimage.png',
        // Add more images as needed
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    const dropdownRef = useRef(null);
    const dropdownRef2 = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenDropdown(false);
        }

        if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
            setOpenDropdown2(false);
        }

    };

    useEffect(() => {
        if (openDropdown) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [openDropdown]);

    useEffect(() => {
        if (openDropdown2) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [openDropdown2]);
    return (
        <>
            <section className="h-screen bg-cover bg-center relative">
                {/* style={{ backgroundImage: "url(./src/assets/images/homepage/heroimage.png)" }} */}
                <div className="relative w-full h-screen overflow-hidden">
                    <img
                        src={images[0]}
                        alt="Slide 1"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <img
                        src={images[1]}
                        alt="Slide 2"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <img
                        src={images[2]}
                        alt="Slide 3"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === 2 ? 'opacity-100' : 'opacity-0'}`}
                    />
                    <div
                        className="w-full absolute bottom-0 flex flex-row justify-between items-end text-white px-[7%] py-5 pb-14"
                        style={{ background: 'linear-gradient(to bottom, transparent, #000000 10%)' }}
                    >
                        <div>
                            <h1 className="text-2xl md:text-4xl font-bold font-FuturaHeavy ">Montisnavia</h1>
                            <p className='mt-2'>Santo Antonio, Lisbon</p>

                            <button
                                className="flex flex-row items-center font-FuturaHeavymt-8 bg-white text-black px-4 py-2 rounded-xl shadow mt-2" >
                                <span> Play</span>
                                <FontAwesomeIcon icon={faPlay} size='xs' className='ml-2' />
                            </button>
                        </div>

                        <div className='flex flex-row gap-3'>
                            <button
                                className="bg-transparent border-2 border-fontdark text-white px-3 py-3 rounded-xl shadow" onClick={() => setIsPopupOpen(true)}>
                                <FontAwesomeIcon icon={faImage} size='lg' className='ml-1' />
                            </button>

                            <button
                                className="bg-transparent border-2 border-fontdark text-white px-3 py-3 rounded-xl shadow" onClick={() => setIsPopupOpen(true)}>
                                <FontAwesomeIcon icon={faLocation} size='lg' className='ml-1' />
                            </button>

                            <div className='relative' ref={dropdownRef}>
                                <button
                                    className="bg-transparent border-2 border-fontdark text-white px-3 py-3 rounded-xl shadow"
                                    onClick={() => { setOpenDropdown(!openDropdown) }}>
                                    <FontAwesomeIcon icon={faShare} size='lg' className='ml-1' />
                                </button>
                                {
                                    openDropdown ? (<motion.div
                                        initial={{ opacity: 0, y: 0 }}
                                        animate={{ opacity: 1, y: 10 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute right-0 bottom-16 w-[280px] bg-white shadow-lg rounded-md py-2 z-50"
                                    >
                                        <div
                                            className="flex flex-col px-4 py-2 gap-4 font-FuturaHeavy cursor-pointer border-black transition-colors text-primarycolor "
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <a href="#" className='w-full flex justify-between '>
                                                <span>
                                                    facebook
                                                </span>
                                                <FontAwesomeIcon icon={faFacebook} size='lg' />
                                            </a>
                                            <a href="#" className='w-full flex justify-between  '>
                                                <span>
                                                    Twitter
                                                </span>
                                                <FontAwesomeIcon icon={faTwitter} size='lg' />
                                            </a><a href="#" className='w-full flex justify-between  '>
                                                <span>
                                                    Instrgram
                                                </span>
                                                <FontAwesomeIcon icon={faInstagram} size='lg' />
                                            </a><a href="#" className='w-full flex justify-between  '>
                                                <span>
                                                    LindedIn
                                                </span>
                                                <FontAwesomeIcon icon={faLinkedin} size='lg' />
                                            </a>
                                        </div>
                                    </motion.div>) : ""

                                }


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {isPopupOpen && (
                <div className="fixed min-h-screen inset-0 bg-black z-50">
                    <div className="min-h-screen bg-zinc-100 p-6 text-white">
                        <div className="flex items-center justify-between p-4 bg-black">
                            <div className="flex space-x-2">
                                <button className="px-2 md:px-8 py-2 border rounded-full dark:text-white" onClick={() => setSelectedPopup('image')}>Photos</button>
                                <button className="px-2 md:px-8 py-2 border rounded-full dark:text-white" onClick={() => setSelectedPopup('map')}>Map</button>
                                <button className="px-2 md:px-8 py-2 border rounded-full dark:text-white" onClick={() => setSelectedPopup('streetview')}>
                                    Street View
                                </button>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className='relative' ref={dropdownRef2}>
                                    <button className="flex items-center space-x-1 px-2 md:px-8 py-2 border rounded-full dark:text-white" onClick={() => { setOpenDropdown2(!openDropdown2) }}>
                                        <span>Share</span>
                                        <FontAwesomeIcon icon={faShare} className='ml-4 text-xs md:text-lg' />
                                    </button>
                                    {
                                        openDropdown2 ? (<motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute right-0 top-14 w-[280px] bg-white shadow-lg rounded-md py-2 z-50"
                                        >
                                            <div
                                                className="flex flex-col px-4 py-2 gap-4 font-FuturaHeavy cursor-pointer border-black transition-colors text-primarycolor "
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <a href="#" className='w-full flex justify-between '>
                                                    <span>
                                                        facebook
                                                    </span>
                                                    <FontAwesomeIcon icon={faFacebook} size='lg' />
                                                </a>
                                                <a href="#" className='w-full flex justify-between  '>
                                                    <span>
                                                        Twitter
                                                    </span>
                                                    <FontAwesomeIcon icon={faTwitter} size='lg' />
                                                </a><a href="#" className='w-full flex justify-between  '>
                                                    <span>
                                                        Instrgram
                                                    </span>
                                                    <FontAwesomeIcon icon={faInstagram} size='lg' />
                                                </a><a href="#" className='w-full flex justify-between  '>
                                                    <span>
                                                        LindedIn
                                                    </span>
                                                    <FontAwesomeIcon icon={faLinkedin} size='lg' />
                                                </a>
                                            </div>
                                        </motion.div>) : ""
                                    }

                                </div>

                                <button
                                    className="bg-transparent text-white border rounded-full py-2 px-3"
                                    onClick={() => setIsPopupOpen(false)}
                                >
                                    <FontAwesomeIcon icon={faXmark} size='lg' />
                                </button>
                            </div>
                        </div>
                        {selectedPopup === 'image' && (
                            <div className="">
                                <Carousel className="h-[80vh]"
                                    loop={true}>
                                    <img
                                        src="./src/assets/images/homepage/cardimage.png"
                                        alt="image 1"
                                        className="h-full w-full object-contain"
                                    />
                                    <img
                                        src="./src/assets/images/global/bgimage.jpeg"
                                        alt="image 2"
                                        className="h-full w-full object-contain"
                                    />
                                    <img
                                        src="./src/assets/images/homepage/cardimage.png"
                                        alt="image 3"
                                        className="h-full w-full object-contain"
                                    />
                                </Carousel>
                            </div>
                        )}

                        {selectedPopup === 'map' && (
                            <div className="flex flex-col flex-wrap gap-6 md:flex-row w-full text-white">
                                <h1>map</h1>
                            </div>
                        )}

                        {selectedPopup === 'streetview' && (
                            <div className="flex flex-col flex-wrap gap-6 md:flex-row w-full text-white">
                                <h1>streetview</h1>
                            </div>
                        )}

                    </div>

                </div>

            )}


        </>
    )
}

export default SingleDevHeroSection