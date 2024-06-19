import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { faXmark, faPlay, faImage, faLocation, faShare } from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LightBox from './LightBox';


const SingleDevHeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    
      const closeLightbox = () => {
        setIsPopupOpen(false);
      };

    const images = [
        '/images/homepage/heroimage.png',
        '/images/global/bgimage.jpeg',
        '/images/homepage/heroimage.png',
        // Add more images as needed
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    const dropdownRef = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpenDropdown(false);
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

    
    return (
        <>
            <section className="h-screen bg-cover bg-center relative">
                {/* style={{ backgroundImage: "url(/images/homepage/heroimage.png)" }} */}
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
                        className="w-full absolute z-20 bottom-0  flex flex-row justify-between items-end text-white px-[7%] py-16"
                    >
                        <div className=''>
                            <h1 className="text-4xl md:text-6xl font-bold ">Montisnavia</h1>
                            <p className='mt-4 text-xl md:text-2xl'>Santo Antonio, Lisbon</p>

                            <button
                                className="flex flex-row items-center bg-white text-black px-8 py-3 md:px-10 md:py-4 rounded-full shadow mt-4" >
                                <span> Play</span>
                                <FontAwesomeIcon icon={faPlay} size='xs' className='ml-2' />
                            </button>
                        </div>

                        <div className='flex flex-row gap-3 '>
                            <button
                                className="bg-transparent border border-[#FFFFFF3D] text-white px-3 pr-[14px] py-3 rounded-xl shadow" onClick={() => setIsPopupOpen(true)}>
                                <img src="/images/icons/image2.png" alt="" className='ml-1' />
                            </button>

                            <button
                                className="bg-transparent border border-[#FFFFFF3D] text-white px-3 pr-[14px]  py-3 rounded-xl shadow" onClick={() => setIsPopupOpen(true)}>
                                <FontAwesomeIcon icon={faLocation} size='lg' className='ml-1' />
                            </button>

                            <div className='relative' ref={dropdownRef}>
                                <button
                                    className="bg-transparent border border-[#FFFFFF3D] text-white px-3 pr-[14px]  py-3 rounded-xl shadow"
                                    onClick={() => { setOpenDropdown(!openDropdown) }}>
                                    <FontAwesomeIcon icon={faShare} size='lg' className='ml-1' />
                                </button>
                                {
                                    openDropdown ? (<motion.div
                                        initial={{ opacity: 0, y: 0 }}
                                        animate={{ opacity: 1, y: 10 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute right-0 bottom-16 w-[200px] md:w-[280px] bg-white shadow-lg rounded-md py-2 z-50"
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
                    <div className='absolute bottom-0 z-10 h-[55%] w-full px-10' style={{ background: 'linear-gradient(to bottom, transparent, #000000 60%)' }}></div>
                    <div className='absolute -top-16 left-0 right-0 h-[25%]' style={{ background: 'linear-gradient(to top, transparent, #000000 100%)' }}></div>
                    {/* <div className='absolute top-0 left-0 right-0 bottom-0 z-10' style={{ pointerEvents: 'none' }}>
                        <div className='absolute -top-10 left-0 right-0 h-[20%]' style={{ background: 'linear-gradient(to top, transparent, #000000 100%)' }}></div>
                        <div className='absolute top-0 -left-16 bottom-0 w-[10%]' style={{ background: 'linear-gradient(to left, transparent, #000000 100%)' }}></div>
                        <div className='absolute top-0 -right-16 bottom-0 w-[10%]' style={{ background: 'linear-gradient(to right, transparent, #000000 100%)' }}></div>
                    </div> */}

                </div>

            </section>


            {isPopupOpen && ( <LightBox isOpen={isPopupOpen} onClose={closeLightbox}/> ) }


        </>
    )
}

export default SingleDevHeroSection