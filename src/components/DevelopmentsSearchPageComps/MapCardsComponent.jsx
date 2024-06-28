import React, { useState, useEffect } from 'react'
import { Carousel } from "@material-tailwind/react";
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faSort } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import MapCardsTable from './MapCardsTable';

const MapCardsComponent = ({ item, index }) => {
    const [isTableVisible, setIsTableVisible] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

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

    const handleScrollDown = () => {
        window.scrollTo({
            top: window.scrollY + 20,
            behavior: 'smooth',
        });
    };


    return (
        <>
            <div data-aos="fade-up" data-aos-delay={index*100}  className='w-full flex flex-col'>

                <div className="overflow-hidden flex flex-col xl:flex-row gap-3"
                >
                    <div className='relative w-full xl:w-1/2 rounded-[18px]'>
                        <Carousel className="rounded-[18px] h-full overflow-hidden"
                            navigation={false}
                        >
                            <img
                                src="/images/homepage/cardimage.png"
                                alt="image 1"
                                className={`h-full w-full rounded-[18px] object-cover bg-cover bg-container bg-zoom`}
                            />
                            <img
                                src="/images/global/bgimage.jpeg"
                                alt="image 2"
                                className={` h-full w-full rounded-[18px] object-cover bg-container bg-zoom`}

                            />
                            <img
                                src="/images/homepage/cardimage.png"
                                alt="image 3"
                                className={`h-full w-full rounded-[18px] object-cover bg-container bg-zoom`}

                            />
                        </Carousel>

                        <div className="absolute top-4 w-full flex justify-between items-center px-4 ">
                            <span className="bg-primarycolor text-white font-semibold text-[13px] px-2 py-2  rounded">Delivery: 3rd Quarter 2024</span>
                        </div>
                        <div className='absolute bottom-0 right-0'>

                            <div className="flex items-center mr-4 mb-2">
                                {showTooltip && (
                                    <motion.p
                                        className={`absolute right-10 w-max mr-2 mb-1 lowercase text-xs bg-white py-1 px-2 text-black rounded-lg`}
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

                    <div className=" w-full xl:w-1/2 ">
                        <Link to={"/singledevelopmenpage"}>
                            <div className="flex flex-col justify-between h-full gap-3 text-black">
                                <div className='flex justify-between text-sm'>
                                    <p className='font-semibold'>New Development In Vale do Lobo</p>
                                    <div className='flex items-center gap-1 text-black font-semibold'>
                                        <span>
                                            <img src="/images/icons/locationwhite.png" alt="location" className='h-4' />
                                        </span>
                                        <span>
                                            Algarve
                                        </span>
                                    </div>
                                </div>
                                <p className="font-medium text-xl">{item.title}</p>
                                <div className="flex flex-wrap gap-3 text-primarycolor">
                                    <div>
                                        <div className="text-xl">D1001</div>
                                        <div className="text-sm font-bold" >Reference</div>
                                    </div>
                                    <div>
                                        <div className="text-xl">2 to 5</div>
                                        <div className="text-sm font-bold">Bedsrooms</div>
                                    </div>
                                    <div>
                                        <div className="text-xl">68m<sup>2</sup> to 304m<sup>2</sup></div>
                                        <div className="text-sm font-bold">Interior Build</div>
                                    </div>

                                </div>
                                <p className="font-semibold text-xl text-black">$500,000 to $800,000</p>

                                <button className="bg-secondrycolor text-white px-4 py-2 lg:py-3 rounded-lg  font-medium w-full" onClick={() => { setIsPopupOpen(true); handleScrollDown(); }}>Contact</button>
                            </div>
                        </Link>

                    </div>

                </div>

                <div className="">
                    <button className="bg-primarycolor text-white px-4 py-2 lg:py-3 rounded-lg font-medium w-full mt-5" onClick={handleClick}>9 Available Properties</button>
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
                                id='devtable' className={`w-full mx-auto overflow-x-scroll rounded-[18px] scrollbar-custom mt-4`}
                            >
                                <MapCardsTable />
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>

            {isPopupOpen && (

                <div id='popup-container'
                    className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 backdrop-blur-lg flex justify-center items-center transition-opacity duration-300"

                    onClick={() => { setIsPopupOpen(false) }}

                >
                    <div

                        onClick={(e) => e.stopPropagation()}
                        id='popup-content'
                        className="min-h-screen bg-zinc-100 p-10 relative z-50">
                        <div className="max-w-[300px] sm:max-w-md mx-auto h-[85vh]  relative z-50 lg:h-[92vh] bg-white overflow-y-scroll rounded-lg p-6">

                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-FuturaHeavy font-bold text-primarycolor">Contact an Agent</h2>
                                <button className="text-zinc-400 hover:text-zinc-600" onClick={() => { setIsPopupOpen(false) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex items-center mb-4">
                                <img className="w-12 h-12 rounded-full mr-4" src="https://placehold.co/100x100" alt="Agent" />
                                <div>
                                    <h3 className="text-balck text-xl font-FuturaMedium dark:text-white font-semibold">Sam Floris Marjot</h3>
                                    <p className="text-zinc-500 dark:text-zinc-400 text-sm">No reviews</p>
                                </div>
                            </div>
                            <form>
                                <div className="mb-4">
                                    <label className="block text-balck text-sm font-FuturaHeavy mb-2" htmlFor="name">Name</label>
                                    <input className="shadow appearance-none border rounded w-full py-3 px-3 text-zinc-700 dark:text-zinc-300 dark:bg-zinc-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-balck text-sm font-FuturaHeavy mb-2" htmlFor="phone">Phone Number</label>
                                    <div className="flex">
                                        <button className="flex items-center justify-center bg-zinc-200 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-l px-4 py-2">
                                            <img src="/images/global/flag.png" alt="Country Flag" className="mr-2 h-4" />
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <input className="shadow appearance-none border rounded-r w-full py-3 px-3 text-zinc-700 dark:text-zinc-300 dark:bg-zinc-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-balck text-sm font-FuturaHeavy mb-2" htmlFor="email">Email</label>
                                    <input className="shadow appearance-none border rounded w-full py-3 px-3 text-zinc-700 dark:text-zinc-300 dark:bg-zinc-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-balck text-sm font-FuturaHeavy mb-2" htmlFor="budget">Budget</label>
                                    <input className="shadow appearance-none border rounded w-full py-3 px-3 text-zinc-700 dark:text-zinc-300 dark:bg-zinc-700 leading-tight focus:outline-none focus:shadow-outline" id="budget" type="text" placeholder="Budget" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-balck text-sm font-FuturaHeavy mb-2" htmlFor="message">Message</label>
                                    <textarea className="shadow appearance-none border rounded w-full py-3 px-3 text-zinc-700 dark:text-zinc-300 dark:bg-zinc-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text-area" rows={"5"} placeholder="Message"></textarea>
                                </div>
                                <div className='mb-4'>
                                    <button className='w-full bg-primarycolor py-3 px-4 rounded-md text-white'>Send Message</button>
                                </div>
                            </form>
                            <div className="flex flex-col sm:flex-row gap-4 justify-between">
                                <button className="flex items-center justify-center bg-gray-300 border rounded px-6 py-3">
                                    <FontAwesomeIcon icon={faPhone} className='mr-2' size='sm' />

                                    Call
                                </button>
                                <button className="flex items-center justify-center bg-gray-300 border rounded px-6 py-3">
                                    <FontAwesomeIcon icon={faEnvelope} className='mr-2' size='sm' />

                                    Email
                                </button>
                                <button className="flex items-center justify-center bg-secondrycolor text-white border rounded px-6 py-3">
                                    <FontAwesomeIcon icon={faWhatsapp} className='mr-2' size='sm' />

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

export default MapCardsComponent