import React, { useState, useRef, useEffect } from 'react';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from "@material-tailwind/react";
import { faXmark, faShare, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GlobalImgCarousel from '../Global/GlobalImgCarousel';
import { motion } from 'framer-motion';


const LightBox = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [selectedPopup, setSelectedPopup] = useState('image');
    const [isPopupVisible, setPopupVisible] = useState(false);

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
            <div className="fixed min-h-screen inset-0 bg-black z-50">
                <div className="min-h-screen bg-zinc-100 p-6 text-white">
                    <div className='h-full'>
                        <div className="flex flex-row gap-4 items-center justify-between p-0 md:p-4 bg-black">
                            <div className="flex space-x-2">
                                <button className={`px-4 py-4 md:px-8 md:py-2 border ${selectedPopup === 'image' ? 'border-[#A5A5A5]' : 'border-[#FFFFFF3D]'}   hover:border-[#A5A5A5] rounded-full  cursor-pointer transition-colors duration-300 ease-in-out`} onClick={() => setSelectedPopup('image')}>
                                    <span className='hidden md:block'>Photos</span>
                                    <img src="/images/icons/searchwhite.svg" alt="" className='block md:hidden' style={{ maxWidth: "20px" }} />
                                </button>
                                <button className={`px-4 py-4 md:px-8 md:py-2 border ${selectedPopup === 'map' ? 'border-[#A5A5A5]' : 'border-[#FFFFFF3D]'}   hover:border-[#A5A5A5] rounded-full cursor-pointer transition-colors duration-300 ease-in-out`} onClick={() => setSelectedPopup('map')}>
                                    <span className='hidden md:block'>Map</span>
                                    <img src="/images/icons/mapwhite.svg" alt="" className='block md:hidden ' style={{ maxWidth: "20px" }} />

                                </button>
                                <button className={`px-3.5 py-3.5 md:px-8  md:py-2 border ${selectedPopup === 'streetview' ? 'border-[#A5A5A5]' : 'border-[#FFFFFF3D]'} ]  hover:border-[#A5A5A5] rounded-full cursor-pointer transition-colors duration-300 ease-in-out`} onClick={() => setSelectedPopup('streetview')}>
                                    <span className='hidden md:block'>Photos</span>
                                    <img src="/images/icons/street-view.svg" alt="" className='block md:hidden' style={{ maxWidth: "25px" }} />
                                </button>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className='relative'>
                                    <button className="flex items-center px-4 py-4 md:px-8 md:py-2 border border-[#FFFFFF3D] rounded-full" onClick={handleSubmit}>
                                        <span className='hidden md:block mr-3'>Share</span>
                                        <img src="/images/icons/sharewhite.svg" className='h-27 min-w-25' style={{ maxWidth: "20px" }} alt="" />

                                    </button>

                                </div>

                                <button
                                    className="bg-transparent text-white border border-[#FFFFFF3D] rounded-full px-4 py-3"
                                    onClick={onClose}
                                >
                                    <FontAwesomeIcon icon={faXmark} size='lg' />
                                </button>
                            </div>
                        </div>
                        {selectedPopup === 'image' && (
                            <div className="h-full w-full mt-10">
                                <GlobalImgCarousel dark={false} />
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
            </div>

            {
                isPopupVisible && (
                    <div id="popup-container" class="fixed inset-0 z-[1000] bg-gray-800 p-4 md:p-0  bg-opacity-50 backdrop-blur-lg flex justify-center items-center transition-opacity duration-300"
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
                )
            }

        </>
    )
}

export default LightBox