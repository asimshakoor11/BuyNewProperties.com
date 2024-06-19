import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from "@material-tailwind/react";
import { faXmark, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const LightBox = ({isOpen, onClose}) => {
    if (!isOpen) return null;
    const [selectedPopup, setSelectedPopup] = useState('image');
    const [openDropdown2, setOpenDropdown2] = useState(false);

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

    const dropdownRef2 = useRef(null);

    const handleClickOutside = (event) => {
        if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
            setOpenDropdown2(false);
        }

    };


    return (
        <>
            <div className="fixed min-h-screen inset-0 bg-black z-50">
                <div className="min-h-screen bg-zinc-100 p-6 text-white">
                    <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-between p-0 md:p-4 bg-black">
                        <div className="flex space-x-2">
                            <button className="px-3 md:px-8 py-1 md:py-2 border border-[#FFFFFF3D] rounded-full dark:text-white" onClick={() => setSelectedPopup('image')}>Photos</button>
                            <button className="px-4 md:px-8 py-1 md:py-2 border border-[#FFFFFF3D] rounded-full dark:text-white" onClick={() => setSelectedPopup('map')}>Map</button>
                            <button className="px-4 md:px-8 py-1 md:py-2 border border-[#FFFFFF3D] rounded-full dark:text-white" onClick={() => setSelectedPopup('streetview')}>
                                Street View
                            </button>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className='relative' ref={dropdownRef2}>
                                <button className="flex items-center space-x-1 px-3 md:px-8 py-1 md:py-2 border border-[#FFFFFF3D] rounded-full dark:text-white" onClick={() => { setOpenDropdown2(!openDropdown2) }}>
                                    <span>Share</span>
                                    <FontAwesomeIcon icon={faShare} className='ml-4 text-xs md:text-lg' />
                                </button>
                                {
                                    openDropdown2 ? (<motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute right-0 top-14 w-[200px] md:w-[280px] bg-white shadow-lg rounded-md py-2 z-50"
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
                                className="bg-transparent text-white border border-[#FFFFFF3D] rounded-full px-2 py-1 md:py-2 md:px-3"
                                onClick={onClose}
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
                                    src="/images/homepage/cardimage.png"
                                    alt="image 1"
                                    className="h-full w-full object-contain"
                                />
                                <img
                                    src="/images/global/bgimage.jpeg"
                                    alt="image 2"
                                    className="h-full w-full object-contain"
                                />
                                <img
                                    src="/images/homepage/cardimage.png"
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

            </div></>
    )
}

export default LightBox