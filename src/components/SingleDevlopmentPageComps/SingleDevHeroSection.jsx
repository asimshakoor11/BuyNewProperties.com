import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { faXmark, faPlay, faImage, faLocation, faShare } from '@fortawesome/free-solid-svg-icons';

import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LightBox from './LightBox';

import './Styles/HeroSec.css'


const SingleDevHeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);


    const closeLightbox = () => {
        setIsPopupOpen(false);
    };

    const images = [
        '/images/pages/homepage/herosection.svg',
        '/images/global/bgimage.jpeg',
        '/images/pages/homepage/herosection.svg',
        // Add more images as needed
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        if (isPopupVisible) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isPopupVisible]);

    const [copied, setCopied] = useState(false);
    const inputRef = useRef(null);

    const copyToClipboard = () => {
        if (inputRef.current) {
            inputRef.current.select();
            document.execCommand('copy');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
        }
    };

    const handleOutsideClick = (e) => {
        if (e.target.id === 'popup-container') {
            setPopupVisible(false);
        }
    };

    const handleSubmit = (e) => {
        setPopupVisible(true);
    };

    return (
        <>
            <section className="h-[85vh] md:h-screen bg-cover bg-center relative">
                {/* style={{ backgroundImage: "url(/images/homepage/heroimage.png)" }} */}
                <div className="relative w-full h-[85vh] md:h-screen overflow-hidden">

                    <img
                        src={images[0]}
                        alt="Slide 1"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === 0 ? 'opacity-100 zoom-in' : 'opacity-0'}`}
                    />
                    <img
                        src={images[1]}
                        alt="Slide 2"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === 1 ? 'opacity-100 zoom-in' : 'opacity-0'}`}
                    />
                    <img
                        src={images[2]}
                        alt="Slide 3"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${currentIndex === 2 ? 'opacity-100 zoom-in' : 'opacity-0'}`}
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
                                    className="h-[42px] w-12 md:h-[52px] md:w-14 flex justify-center items-center bg-transparent border border-[#FFFFFF3D] hover:border-[#A5A5A5] text-white rounded-xl " onClick={() => setIsPopupOpen(true)}>
                                    <img src="/images/icons/whitepicture.svg" alt="" className='max-w-[18px] md:max-w-[23px]' />
                                </button>

                                <button
                                    className="h-[42px] w-12 md:h-[52px] md:w-14 flex justify-center items-center bg-transparent border border-[#FFFFFF3D] hover:border-[#A5A5A5] text-white rounded-xl " onClick={() => setIsPopupOpen(true)}>
                                    <img src="/images/icons/locationmarkerwhite.svg" alt="" className='max-w-[18px] md:max-w-[23px]' />
                                </button>

                                <button
                                    className="h-[42px] w-12 md:h-[52px] md:w-14 flex justify-center items-center  bg-transparent border border-[#FFFFFF3D] hover:border-[#A5A5A5] text-white rounded-xl "
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

            {isPopupOpen && (<LightBox isOpen={isPopupOpen} onClose={closeLightbox} />)}

            {isPopupVisible && (
                <div id="popup-container" class="fixed inset-0 z-40 bg-gray-800 p-4 md:p-0  bg-opacity-50 backdrop-blur-lg flex justify-center items-center transition-opacity duration-300"
                    onClick={handleOutsideClick}
                >
                    <div id="popup-content" class="bg-white rounded-lg w-[300px] md:w-[500px] mx-auto relative"
                    >
                        <div className="flex justify-between items-center md:p-3 p-6 mb-8 w-full border-b-2 border-gray-300">
                            <h2 className="text-xl font-semibold">Share Development</h2>
                            <button className="text-2xl font-bold text-black" onClick={() => { setPopupVisible(false); }}>
                                <FontAwesomeIcon icon={faXmark} size='md' />
                            </button>
                        </div>
                        <div className='px-6 pb-6 md:px-3 md:pb-3 '>
                            <div className="mb-8">
                                <input
                                    type="text"
                                    readOnly
                                    className="w-full p-2 border rounded-md bg-gray-100"
                                    value="https://newbuilds.com/listings/confidence?property=()"
                                    ref={inputRef}
                                />
                            </div>
                            <div className="mb-8">
                                <button
                                    className="w-full py-3 md:py-4 bg-primarycolor font-medium rounded-md text-white flex items-center gap-3 justify-center"
                                    onClick={copyToClipboard}
                                >
                                    <img src="/images/icons/copywhite.svg" alt="" className="h-5" />
                                    Copy link
                                </button>
                                {copied && <p className="text-green-500 mt-2">Copied!</p>}
                            </div>
                            <div className="flex flex-col md:flex-row gap-4">
                                <button className="flex-1 py-3 md:py-4  border border-primarycolor rounded-md flex items-center justify-center ">
                                    <img src="/images/icons/envelope.svg" alt="" className='h-5 mr-3 ' />

                                    Email
                                </button>
                                <button className="flex-1 py-3 md:py-4 border border-primarycolor rounded-md flex items-center justify-center ">

                                    <img src="/images/icons/comment-alt-dots.svg" alt="" className='h-5 mr-3' />
                                    Sms
                                </button>
                                <button className="flex-1 py-3 md:py-4 border border-primarycolor rounded-md flex items-center justify-center ">
                                    <FontAwesomeIcon icon={faWhatsapp} size='lg' className='mr-3' />
                                    WhatsApp
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

            )}


        </>
    )
}

export default SingleDevHeroSection