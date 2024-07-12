import React, { useState, useEffect } from 'react'
import { Carousel } from "@material-tailwind/react";
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faEnvelope, faSort, faXmark } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import TableCards from './TableCards';
import GlobalForm from '../GlobalForm'
import DevelopcardImgCarousel from '../DevelopcardImgCarousel';


const Cards = ({ item, index }) => {
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        if (isPopupOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isPopupOpen]);


    const handleClick = () => {
        setIsTableVisible(!isTableVisible);
    };

    // bookmark 
    const [isSaved, setIsSaved] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const handleSaveClick = () => {
        setIsSaved(!isSaved);
    };

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    let delay;
    if (screenSize < 768) {
        // Small screens: 1 card per row
        delay = index * 0;
    } else if (screenSize >= 768 && screenSize < 1140) {
        // Small screens: 2 cards per row
        switch (index) {
            case 0:
                delay = 0; // 0ms delay for the first card in each row
                break;
            case 1:
                delay = 100; // 100ms delay for the second card in each row
                break;
            case 2:
                delay = 0; // 0ms delay for the first card in each row
                break;
            case 3:
                delay = 100; // 100ms delay for the second card in each row
                break;
            case 4:
                delay = 0; // 0ms delay for the first card in each row
                break;
            case 5:
                delay = 100; // 100ms delay for the second card in each row
                break;
            case 6:
                delay = 0; // 100ms delay for the second card in each row
                break;
            default:
                delay = 100; // default delay
                break;
        }
    } else {
        // Larger screens: 3 cards per row
        switch (index % 3) {
            case 0:
                delay = 0; // 0ms delay for the first card in each row
                break;
            case 1:
                delay = 100; // 100ms delay for the second card in each row
                break;
            case 2:
                delay = 200; // 200ms delay for the third card in each row
                break;
            default:
                delay = 0; // default delay
                break;
        }
    }

    const cardimages = [
        '/images/pages/homepage/devcardimage.svg',
        '/images/global/bgimage.jpeg',
        '/images/pages/homepage/devcardimage.svg'
    ]

    return (
        <>
            <div data-aos="fade-up" data-aos-delay={delay} className='flex flex-col'>

                <div className="rounded-[18px] overflow-hidden"
                >
                    <div className='relative-container  w-full rounded-[18px]'>
                        {/* <Carousel className="rounded-[18px] h-full overflow-hidden"
                            navigation={false}
                            loop={true}
                        >
                            <img
                                src="/images/pages/homepage/devcardimage.svg"
                                alt="image 1"
                                className={`h-full w-full rounded-[18px] object-cover bg-cover bg-container bg-zoom`}
                            />
                            <img
                                src="/images/global/bgimage.jpeg"
                                alt="image 2"
                                className={` h-full w-full rounded-[18px] object-cover bg-container bg-zoom`}

                            />
                            <img
                                src="/images/pages/homepage/devcardimage.svg"
                                alt="image 3"
                                className={`h-full w-full rounded-[18px] object-cover bg-container bg-zoom`}

                            />
                        </Carousel> */}
                        <DevelopcardImgCarousel images={cardimages} />

                        <div className="absolute top-4 w-full flex justify-between items-center px-4 gap-3">
                            <div className='flex items-center gap-1 text-black bg-white opacity-80 font-semibold text-[13px] px-2 py-2  rounded'>
                                <span>
                                    <img src="/images/icons/locationmarkerblack.svg" alt="location" className='h-4' />
                                </span>
                                <span>
                                    Algarve
                                </span>
                            </div>
                            {/* <span className="text-black bg-bggray font-semibold text-[13px] px-2 md:px-3 py-2  rounded">Algarve</span> */}
                            <span className="bg-primarycolor text-white font-semibold text-[13px] px-2 py-2  rounded">Delivery: 3rd Quarter 2024</span>
                        </div>
                        <div className='absolute bottom-0 flex justify-between items-center w-full'>
                            <p className="text-black bg-white opacity-80 font-semibold text-[13px] py-2 md:py-3 px-6 w-fit rounded-tr-[23px] rounded-bl-[23px] -ml-1">Status: Completed</p>

                            <div className="flex items-center mr-4 mb-2">
                                {showTooltip && (
                                    <motion.p
                                        className={`absolute right-10 mr-2 mb-1 lowercase text-xs bg-white py-1 px-2 text-black rounded-lg`}
                                        initial={{ x: -20, opacity: 0 }} // Initial position and opacity
                                        animate={{ x: 0, opacity: 1 }} // Animation properties
                                        transition={{ duration: 0.3 }} // Animation duration
                                    >
                                        {isSaved ? "Remove from favourites" : "Add to favourites"}
                                    </motion.p>
                                )}

                                <button
                                    onClick={handleSaveClick}
                                    className="bg-transparent  cursor-pointer"
                                    title={isSaved ? "Remove from favourites" : "Add to favourites"}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <FontAwesomeIcon
                                        icon={solidBookmark}
                                        style={{
                                            color: isSaved ? 'green' : 'silver',
                                            stroke: 'black',
                                            strokeWidth: '40px'
                                        }}
                                        className="text-2xl"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="py-2 ">
                        <Link to={"/singledevelopmenpage"}>
                            <div className="mt-3 flex flex-col gap-3 text-black">
                                <p className="font-semibold text-lg ">$500,000 to $800,000</p>
                                <p className="font-semibold text-2xl">{item.title}</p>
                                <div className="flex flex-wrap justify-between gap-3 text-primarycolor">
                                    <div>
                                        <div className="text-xl">D1001</div>
                                        <div className="text-sm font-bold" >Reference</div>
                                    </div>
                                    <div>
                                        <div className="text-xl">2 to 5</div>
                                        <div className="text-sm font-bold">Beds</div>
                                    </div>
                                    <div>
                                        <div className="text-xl">68m<sup>2</sup> to 304m<sup>2</sup></div>
                                        <div className="text-sm font-bold">Build</div>
                                    </div>
                                    <div>
                                        <div className="text-xl">23m<sup>2</sup> to 78m<sup>2</sup></div>
                                        <div className="text-sm font-bold">Terrace/Plot</div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className="mt-5">
                            <button className="bg-secondrycolor hover:bg-secondrycolorhover text-white px-4 py-2 md:py-3 rounded-lg font-medium w-full transition-colors duration-300 ease-in-out" onClick={() => { setIsPopupOpen(true); }}>Contact</button>
                            <button className="bg-primarycolor hover:bg-primarycolorhover text-white px-4 py-2 md:py-3 rounded-lg font-medium w-full mt-5 transition-colors duration-300 ease-in-out" onClick={handleClick}>9 Available Properties</button>
                        </div>
                    </div>
                </div>

                {/* table  */}

                <AnimatePresence>
                    {
                        isTableVisible && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                id='devtable' className={`w-full mx-auto overflow-x-scroll rounded-[18px] scrollbar-hide mt-2`}
                            >
                                <TableCards />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>

            {isPopupOpen && (

                <div id='popup-container'
                    className="fixed inset-0 z-[1000] h-screen p-10 bg-gray-800 bg-opacity-50 backdrop-blur-lg flex justify-center items-center transition-opacity duration-300 overflow-y-scroll"

                    onClick={() => { setIsPopupOpen(false) }}

                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        id='popup-content'
                        className="max-w-[1000px] mx-auto h-full flex justify-center items-center relative z-[50] ">

                        <div className='w-full h-full  rounded-lg '>
                            <div className='w-full relative rounded-tl-lg rounded-tr-lg bg-primarycolor border-2 border-transparent border-b-[#B69D74] text-white py-10'>

                                <button className="absolute top-4 right-4 font-bold text-white text-2xl" onClick={() => { setIsPopupOpen(false) }}>
                                    <FontAwesomeIcon icon={faXmark} size='md' />
                                </button>

                                <h1 className='text-3xl text-center font-BebasNeueSemiExpBold font-bold'>Make An Enquiry</h1>

                                <div className='absolute -bottom-5 z-50 w-full flex justify-center bg-transparent'>
                                    <span className='p-3 bg-primarycolor hover:bg-primarycolorhover border-2 border-[#B69D74] rounded-full cursor-pointer transition-colors duration-300 ease-in-out'>
                                        <img src="/images/icons/envelopewhite.svg" alt="" className='max-w-[20px]' />

                                    </span>
                                </div>
                            </div>

                            <div className='bg-white w-full flex flex-col-reverse xl:flex-row gap-3'>
                                <div className='w-full h-auto xl:w-1/2 p-6 flex justify-center bg-bggray'>

                                    <div className="overflow-hidden flex flex-col gap-3 p-6 max-w-[500px]"
                                    >
                                        <div className='relative w-full rounded-[18px]'>

                                            <div className='relative h-full  overflow-hidden rounded-[18px]'>
                                                <img
                                                    src="/images/pages/homepage/devcardimage.svg"
                                                    alt="image 1"
                                                    className={`h-full w-full rounded-[18px] object-cover bg-cover bg-container bg-zoom`}
                                                />
                                            </div>

                                            <div className="absolute top-4 w-full flex justify-between items-center px-4 ">
                                                <div className='flex items-center gap-1 text-black bg-white opacity-80 font-semibold text-[13px] px-2 py-2  rounded'>
                                                    <span>
                                                        <img src="/images/icons/locationmarkerblack.svg" alt="location" className='h-4' />
                                                    </span>
                                                    <span>
                                                        Algarve
                                                    </span>
                                                </div>
                                                <span className="bg-primarycolor text-white font-semibold text-[13px] px-2 py-2  rounded">Delivery: 3rd Quarter 2024</span>
                                            </div>

                                        </div>

                                        <div className=" w-full ">
                                            <div className="flex flex-col justify-between h-full gap-3 text-black">

                                                <p className="font-medium text-[1.3rem] text-black">$500,000 to $800,000</p>

                                                <p className="font-semibold text-[1.6rem] leading-[1]">{item.title}</p>
                                                <div className="flex flex-wrap justify-between gap-3 text-primarycolor">
                                                    <div>
                                                        <div className="text-xl">D1001</div>
                                                        <div className="text-sm font-bold" >Reference</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xl">2 to 5</div>
                                                        <div className="text-sm font-bold">Beds</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xl">68m<sup>2</sup> to 304m<sup>2</sup></div>
                                                        <div className="text-sm font-bold">Build</div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xl">23m<sup>2</sup> to 78m<sup>2</sup></div>
                                                        <div className="text-sm font-bold">Terrace/Plot</div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <button className="bg-primarycolor hover:bg-primarycolorhover text-white px-4 py-2 md:py-3 rounded-lg font-medium w-full mt-5 transition-colors duration-300 ease-in-out pointer-events-none">9 Available Properties</button>

                                    </div>
                                </div>
                                <div className='w-full xl:w-1/2 p-6 h-full flex flex-col items-center justify-center  '>

                                    <div className='max-w-[500px] '>
                                        <div className=''>
                                            <GlobalForm colorwhite={true} />
                                        </div>
                                        <div className="flex flex-col md:flex-row gap-2 px-6 font-medium ">
                                            <button className=" flex-1 py-2 md:py-3 text-sm  border border-primarycolor rounded-md flex items-center justify-center ">
                                                <img src="/images/icons/envelope.svg" alt="" className='h-4 mr-2 ' />

                                                Email
                                            </button>
                                            <button className="flex-1 py-2 md:py-3 text-sm border border-primarycolor rounded-md flex items-center justify-center ">

                                                <img src="/images/icons/comment-alt-dots.svg" alt="" className='h-4 mr-2' />
                                                SMS
                                            </button>
                                            <button className="flex-1 py-2 md:py-3 text-sm text-white border border-primarycolor rounded-md flex items-center justify-center bg-secondrycolor hover:bg-secondrycolorhover cursor-pointer transition-colors duration-300 ease-in-out">
                                                <FontAwesomeIcon icon={faWhatsapp} size='lg' className='mr-2' />
                                                WhatsApp
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Cards