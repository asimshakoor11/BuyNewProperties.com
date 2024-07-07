import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { faXmark, faPlay, faImage, faLocation, faShare } from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LightBox from './LightBox';

import './Styles/HeroSec.css'
import SharePopup from '../Global/SharePopup';


const SingleDevHeroSection = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);

    const closeLightbox = () => {
        setIsPopupOpen(false);
    };

    const imageshero = [
        '/images/pages/homepage/herosection.svg',
        '/images/global/bgimage.jpeg',
        '/images/pages/homepage/herosection.svg',
        // Add more images as needed
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageshero.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        if (isPopupVisible || isPopupOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isPopupVisible || isPopupOpen]);


    const handleOutsideClick = (e) => {
        if (e.target.id === 'popup-container') {
            setPopupVisible(false);
        }
    };

    const handleSubmit = (e) => {
        setPopupVisible(true);
    };

    const closeSharePopup = () => {
        setPopupVisible(false);
    };

    return (
        <>
            <section className="h-[85vh] md:h-screen bg-cover bg-center relative">
                {/* style={{ backgroundImage: "url(/images/homepage/heroimage.png)" }} */}
                <div className="relative w-full h-[85vh] md:h-screen overflow-hidden">

                    <img
                        src={images[0]}
                        alt="Slide 1"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === 0 ? 'opacity-100 zoom-in' : 'opacity-0 zoom-out'}`}
                    />
                    <img
                        src={images[1]}
                        alt="Slide 2"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === 1 ? 'opacity-100 zoom-in' : 'opacity-0 zoom-out'}`}
                    />
                    <img
                        src={images[2]}
                        alt="Slide 3"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === 2 ? 'opacity-100 zoom-in' : 'opacity-0 zoom-out'}`}
                    />
                    <div
                        className="w-full absolute z-20 bottom-0 text-white px-[7%] pb-[4%] md:pb-[2%]"
                    >
                        <div className=''>
                            <h1 className="text-4xl md:text-6xl font-bold ">Montisnavia</h1>
                            <p className='mt-3  text-xl md:text-2xl'>Santo Antonio, Lisbon</p>
                        </div>

                        <div className='flex flex-row justify-between items-end gap-4 mt-4'>
                            <button
                                className="flex flex-row items-center bg-white text-black px-6 py-2 md:px-10 md:py-4 rounded-full  font-semibold" >
                                <span> Play</span>
                                <FontAwesomeIcon icon={faPlay} size='xs' className='ml-2' />
                            </button>

                            <div className='flex flex-row gap-2 md:gap-3 '>
                                <button
                                    className="h-[42px] w-12 md:h-[52px] md:w-14 flex justify-center items-center bg-transparent border border-[#FFFFFF3D] hover:border-[#A5A5A5] text-white rounded-xl cursor-pointer transition-colors duration-300 ease-in-out" onClick={() => setIsPopupOpen(true)}>
                                    <img src="/images/icons/whitepicture.svg" alt="" className='max-w-[18px] md:max-w-[23px]' />
                                </button>

                                <button
                                    className="h-[42px] w-12 md:h-[52px] md:w-14 flex justify-center items-center bg-transparent border border-[#FFFFFF3D] hover:border-[#A5A5A5] text-white rounded-xl cursor-pointer transition-colors duration-300 ease-in-out" onClick={() => setIsPopupOpen(true)}>
                                    <img src="/images/icons/locationmarkerwhite.svg" alt="" className='max-w-[18px] md:max-w-[23px]' />
                                </button>

                                <button
                                    className="h-[42px] w-12 md:h-[52px] md:w-14 flex justify-center items-center  bg-transparent border border-[#FFFFFF3D] hover:border-[#A5A5A5] text-white rounded-xl cursor-pointer transition-colors duration-300 ease-in-out"
                                    onClick={() => { handleSubmit(); }}>
                                    <img src="/images/icons/sharewhite.svg" className='max-w-[18px] md:max-w-[23px]' alt="" />
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className='absolute bottom-0 z-10 h-[45%] w-full px-10' style={{ background: 'linear-gradient(to bottom, transparent, #000000 60%)' }}></div>
                    <div className='absolute -top-16 left-0 right-0 h-[25%]' style={{ background: 'linear-gradient(to top, transparent, #000000 100%)' }}></div>
                    {/* <div className='absolute top-0 left-0 right-0 bottom-0 z-10' style={{ pointerEvents: 'none' }}>
                        <div className='absolute -top-10 left-0 right-0 h-[20%]' style={{ background: 'linear-gradient(to top, transparent, #000000 100%)' }}></div>
                        <div className='absolute top-0 -left-16 bottom-0 w-[10%]' style={{ background: 'linear-gradient(to left, transparent, #000000 100%)' }}></div>
                        <div className='absolute top-0 -right-16 bottom-0 w-[10%]' style={{ background: 'linear-gradient(to right, transparent, #000000 100%)' }}></div>
                    </div> */}

                </div>

            </section>

            {isPopupOpen && (<LightBox isOpen={isPopupOpen} onClose={closeLightbox} images={images}/>)}

            {isPopupVisible && (
                <SharePopup onCloseShare={closeSharePopup} handleOutsideClick={handleOutsideClick} />
            )}
        </>
    )
}

export default SingleDevHeroSection