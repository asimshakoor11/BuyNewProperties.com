import React, { useState, useEffect } from 'react'
import { Carousel } from "@material-tailwind/react";
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faEnvelope, faSort } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import TableCards from './TableCards';
import AOS from 'aos';
import 'aos/dist/aos.css';


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

    // table 

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

    return (
        <>
            <div className='flex flex-col '>

                <div data-aos="fade-up" data-aos-delay={delay} className="rounded-lg overflow-hidden">
                    <div className='relative'>
                        <Carousel className="rounded-xl"
                            navigation={false}>
                            <img
                                src="/images/homepage/cardimage.png"
                                alt="image 1"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                                alt="image 2"
                                className="h-full w-full object-cover"
                            />
                            <img
                                src="/images/homepage/cardimage.png"
                                alt="image 3"
                                className="h-full w-full object-cover"
                            />
                        </Carousel>

                        <div className="absolute top-4 w-full flex justify-between items-center px-4 gap-3">
                            <span className="text-black bg-bggray text-md font-semibold px-3 py-2 rounded">Algarve</span>
                            <span className="bg-primarycolor text-white text-md px-3 py-2 rounded">Delivery: 3rd Quarter 2024</span>
                        </div>
                        <div className='absolute bottom-0 flex justify-between items-center w-full'>
                            <p className="text-black bg-bggray font-semibold text-md py-3 lg:py-4 px-6 w-fit rounded-tr-[25px]">Status: Completed</p>

                            <div className="flex items-center">
                                {showTooltip && (
                                    <motion.p
                                        className={`absolute right-10 mr-2 text-xs bg-white py-1 px-2 text-black rounded-lg`}
                                        initial={{ x: -20, opacity: 0 }} // Initial position and opacity
                                        animate={{ x: 0, opacity: 1 }} // Animation properties
                                        transition={{ duration: 0.3 }} // Animation duration
                                    >
                                        {isSaved ? "Remove from favourites" : "Add to favourites"}
                                    </motion.p>
                                )}

                                <button
                                    onClick={handleSaveClick}
                                    className="bg-transparent border-none cursor-pointer pr-4"
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
                        <div className="mt-3">
                            <button className="bg-secondrycolor text-white px-4 py-2 lg:py-3 rounded-lg w-full" onClick={() => { setIsPopupOpen(true) }}>Contact</button>
                            <button className="bg-primarycolor text-white px-4 py-2 lg:py-3 rounded-lg w-full mt-3" onClick={handleClick}>9 Available Properties</button>
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
                                id='devtable' className={`w-full mx-auto overflow-x-scroll scrollbar-hide mt-2`}
                            >

                                <TableCards />
                                <div className="bg-primarycolor w-full text-white text-center py-3 rounded-bl-xl rounded-br-xl">
                                    <button className="uppercase font-bold">See the Development</button>
                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </div>


            <AnimatePresence>


                {isPopupOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 backdrop-blur-lg flex justify-center items-center transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}

                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                            className="min-h-screen bg-zinc-100 p-10">
                            <div className="max-w-[300px] lg:max-w-md mx-auto h-[85vh] lg:h-[92vh] bg-white overflow-y-scroll rounded-lg shadow-lg p-6">

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
                                <div className="flex justify-between">
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
                        </motion.div>
                    </motion.div>
                )}

            </AnimatePresence>



        </>
    )
}

export default Cards