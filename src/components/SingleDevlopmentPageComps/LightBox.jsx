import React, { useState, useRef, useEffect } from 'react';
import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from "@material-tailwind/react";
import { faXmark, faShare, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GlobalImgCarousel from '../Global/GlobalImgCarousel';
import { motion } from 'framer-motion';
import SharePopup from '../Global/SharePopup';


const LightBox = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    const [selectedPopup, setSelectedPopup] = useState('image');
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isPopupVisibleSV, setPopupVisibleSV] = useState(false);

    useEffect(() => {
        if (isPopupVisible || isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isPopupVisible || isOpen]);

    const handleOutsideClick = (e) => {
        if (e.target.id === 'popup-container') {
            setPopupVisible(false);
            setPopupVisibleSV(false)
        }
    };

    const handleSubmit = (e) => {
        setPopupVisible(true);
    };

    const handleScrollView = () => {
        setPopupVisibleSV(true)
    }

    const closeSharePopup = () => {
        setPopupVisible(false);
    };

    return (
        <>
            <div className="fixed min-h-screen inset-0 bg-black z-50">
                <div className="min-h-screen bg-zinc-100 p-6 text-white">
                    <div className='h-full '>
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
                                <button className="flex items-center" onClick={handleScrollView}>
                                    <img src="/images/icons/arrow-square-down.svg" className='max-w-[25px]' alt="" />
                                    <span className='hidden md:block ml-3'>Scroll View</span>
                                </button>

                                <button className="flex items-center px-4 py-4 md:px-8 md:py-2 border border-[#FFFFFF3D] rounded-full" onClick={handleSubmit}>
                                    <span className='hidden md:block mr-3'>Share</span>
                                    <img src="/images/icons/sharewhite.svg" className='h-27 min-w-25' style={{ maxWidth: "20px" }} alt="" />
                                </button>


                                <button
                                    className="bg-transparent text-white border border-[#FFFFFF3D] rounded-full px-4 py-3"
                                    onClick={onClose}
                                >
                                    <FontAwesomeIcon icon={faXmark} size='lg' />
                                </button>
                            </div>
                        </div>
                        {selectedPopup === 'image' && (
                            <div className="h-full w-full mt-10 ">
                                <GlobalImgCarousel dark={false} customheight={false} />
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
                   <SharePopup onCloseShare={closeSharePopup} handleOutsideClick={handleOutsideClick}/>
                )
            }

            {
                isPopupVisibleSV && (
                    <div id="popup-container" class="fixed inset-0 z-[1000] bg-gray-800 md:p-0  bg-opacity-50 backdrop-blur-lg flex justify-center items-center transition-opacity duration-300"
                        onClick={handleOutsideClick}>
                        <div id="popup-content" class="relative w-full h-full overflow-y-scroll scrollbar-custom"
                        >
                            <div className='bg-gray-800 md:bg-transparent sticky top-0 p-3 w-full flex items-center justify-between md:justify-end gap-4'>
                                <button className="flex items-center px-4 py-4 md:px-8 md:py-2 " onClick={() => { setPopupVisibleSV(false); }}>
                                    <img src="/images/icons/exchange-alt.svg" className='h-27 max-w-[25px]'  alt="" />
                                    <span className=' ml-3 text-white'>Scroll View</span>
                                </button>
                                <button className="text-2xl font-bold text-white" onClick={() => { setPopupVisibleSV(false); }}>
                                    <FontAwesomeIcon icon={faXmark} size='md' />
                                </button>
                            </div>


                            <div className="max-w-[80%] lg:max-w-[50%] flex flex-col gap-10 md:gap-20 mx-auto py-[40px]">
                                <img src="/images/pages/homepage/bgiamge.webp" alt="" />
                                <img src="/images/pages/homepage/herosection.svg" alt="" />
                                <img src="/images/pages/homepage/architecture.jpg" alt="" />
                                <img src="/images/pages/homepage/kuala-lumpur.jpg" alt="" />
                            </div>

                        </div>
                    </div>
                )
            }

        </>
    )
}

export default LightBox