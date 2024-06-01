import React, { useState, useEffect } from 'react'
import { Carousel } from "@material-tailwind/react";
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Cards = ({ item }) => {
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

    return (
        <>
            <div className='flex flex-col '>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
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

                        <div className="absolute top-2 w-full flex justify-between items-center px-2">
                            <span className="text-black bg-bggray text-xs font-semibold px-2 py-1 rounded">Algarve</span>
                            <span className="bg-primarycolor text-white text-xs px-2 py-1 rounded">Delivery: 3rd Quarter 2024</span>
                        </div>
                        <div className='absolute bottom-0'>
                            <p className="text-black bg-bggray font-semibold text-xs  py-2 px-4 w-fit rounded-tr-[15px]">Status: Completed</p>
                        </div>
                    </div>

                    <div className="py-2 px-4">
                        <Link to={"/singledevelopmenpage"}>
                            <div className="mt-4 text-black">
                                <p className="font-semibold text-base">$500,000 to $800,000</p>
                                <p className="font-bold text-2xl">{item.title}</p>
                                <p className="font-semibold text-base">Ref. D1031 <span className='ml-3'> 2 to 4 Beds</span></p>
                                <p className="font-semibold text-base">Area: 67m to 312m <span className='ml-3'>Type: Apartment</span> </p>
                            </div>
                        </Link>
                        <div className="mt-4">
                            <button className="bg-secondrycolor text-white px-4 py-2 rounded-lg w-full" onClick={() => { setIsPopupOpen(true) }}>Contact</button>
                            <button className="bg-primarycolor text-white px-4 py-2 rounded-lg w-full mt-2" onClick={handleClick}>9 AVAILABLE PROPERTIES</button>
                        </div>
                    </div>
                </div>

                {/* table  */}
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    id='devtable' className={`w-full mx-auto overflow-x-scroll scrollbar-hide mt-2 ${isTableVisible ? '' : 'hidden'}`}
                >

                    <table
                        className="w-full border-collapse over rounded-xl">
                        <thead>
                            <tr className="bg-primarycolor text-white">
                                <th className="px-4 py-2 rounded-tl-xl">Type </th>
                                <th className="px-4 py-2">Beds</th>
                                <th className="px-4 py-2">Price</th>
                                <th className="px-4 py-2 rounded-tr-xl"></th>
                            </tr>
                        </thead>
                        <tbody className='overflow-x-scroll'>
                            <tr className="bg-zinc-100">
                                <td className="border px-4 py-2">Appt</td>
                                <td className="border px-4 py-2">4</td>
                                <td className="border px-4 py-2 bg-[#D9D9D9]">$23,000,000</td>
                                <td className="border px-4 py-2 text-center"><input type="checkbox" /></td>
                            </tr>
                            <tr className=" bg-[#D9D9D9]">
                                <td className="border px-4 py-2">Appt</td>
                                <td className="border px-4 py-2">4</td>
                                <td className="border px-4 py-2  bg-[#D9D9D9]">$23,000,000</td>
                                <td className="border px-4 py-2 text-center"><input type="checkbox" /></td>
                            </tr>
                            <tr className="bg-zinc-100">
                                <td className="border px-4 py-2">Appt</td>
                                <td className="border px-4 py-2">4</td>
                                <td className="border px-4 py-2  bg-[#D9D9D9]">$23,000,000</td>
                                <td className="border px-4 py-2 text-center"><input type="checkbox" /></td>
                            </tr>
                            <tr className="bg-[#D9D9D9]">
                                <td className="border px-4 py-2">Appt</td>
                                <td className="border px-4 py-2">4</td>
                                <td className="border px-4 py-2  bg-[#D9D9D9]">$23,000,000</td>
                                <td className="border px-4 py-2 text-center"><input type="checkbox" /></td>
                            </tr>
                            <tr className="bg-zinc-100">
                                <td className="border px-4 py-2">Appt</td>
                                <td className="border px-4 py-2">4</td>
                                <td className="border px-4 py-2  bg-[#D9D9D9]">$23,000,000</td>
                                <td className="border px-4 py-2 text-center"><input type="checkbox" /></td>
                            </tr>
                            <tr className="bg-[#D9D9D9]">
                                <td className="border px-4 py-2">Appt</td>
                                <td className="border px-4 py-2">4</td>
                                <td className="border px-4 py-2  bg-[#D9D9D9]">$23,000,000</td>
                                <td className="border px-4 py-2 text-center"><input type="checkbox" /></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="bg-primarycolor w-full text-white text-center py-2 rounded-bl-xl rounded-br-xl">
                        <button className="uppercase font-bold">See the Development</button>
                    </div>
                </motion.div>

            </div>

            {isPopupOpen && (
                <div

                    className="fixed inset-0 bg-black bg-opacity-90 z-50"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }} className="min-h-screen bg-zinc-100 p-6">
                        <div className="max-w-md mx-auto h-[92vh] bg-white overflow-y-scroll rounded-lg shadow-lg p-6">

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
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 dark:text-zinc-300 dark:bg-zinc-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
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
                                        <input className="shadow appearance-none border rounded-r w-full py-2 px-3 text-zinc-700 dark:text-zinc-300 dark:bg-zinc-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="text" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-balck text-sm font-FuturaHeavy mb-2" htmlFor="email">Email</label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 dark:text-zinc-300 dark:bg-zinc-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-balck text-sm font-FuturaHeavy mb-2" htmlFor="budget">Budget</label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 dark:text-zinc-300 dark:bg-zinc-700 leading-tight focus:outline-none focus:shadow-outline" id="budget" type="text" placeholder="Budget" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-balck text-sm font-FuturaHeavy mb-2" htmlFor="message">Message</label>
                                    <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-700 dark:text-zinc-300 dark:bg-zinc-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text-area" rows={"5"} placeholder="Message"></textarea>
                                </div>
                                <div className='mb-4'>
                                    <button className='w-full bg-primarycolor py-2 px-4 rounded-md text-white'>Send Message</button>
                                </div>
                            </form>
                            <div className="flex justify-between">
                                <button className="flex items-center justify-center bg-gray-300 border rounded px-6 py-2">
                                    <FontAwesomeIcon icon={faPhone} className='mr-2' size='sm' />

                                    Call
                                </button>
                                <button className="flex items-center justify-center bg-gray-300 border rounded px-6 py-2">
                                    <FontAwesomeIcon icon={faEnvelope} className='mr-2' size='sm' />

                                    Email
                                </button>
                                <button className="flex items-center justify-center bg-secondrycolor text-white border rounded px-6 py-2">
                                    <FontAwesomeIcon icon={faWhatsapp} className='mr-2' size='sm' />

                                    WhatsApp
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}


        </>
    )
}

export default Cards