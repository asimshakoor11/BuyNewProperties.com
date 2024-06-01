import React, { useEffect } from 'react'

import { faArrowUpRightFromSquare, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from "@material-tailwind/react";

import { motion } from 'framer-motion';
import ContactTabsSection from './ContactTabsSection';

import MortageCalculator from '../Global/MortageCalculator';
import Map from '../Global/Map';
import ProFeaturesAmenities from '../Global/ProFeaturesAmenities';

const PopupSingleDevPage = ( { isOpen, onClose } ) => {

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    if (!isOpen) return null;



    return (
        <>
            <div

                className="fixed inset-0 bg-transparent bg-opacity-90 z-50"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }} className="min-h-screen bg-zinc-100">
                    <div className="max-w-[70%] mx-auto h-screen bg-white overflow-y-scroll  rounded-3xl shadow-lg">

                        <div className="fixed top-3 w-[68%] flex justify-between items-center mb-4 px-4 z-50">
                            <button className="px-2 md:px-6 py-2 bg-black opacity-70 border-2 border-white rounded-lg text-white">
                                Open in New Tab <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg' className='ml-4' />
                            </button>

                            <button className="bg-bggray p-1 border-2  opacity-80 border-black rounded-lg text-black" onClick={onClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <section className=''>
                            <Carousel className="max-h-[400px]"
                                loop={true}>
                                <img
                                    src="/images/global/bgimage.jpeg"
                                    alt="image 1"
                                    className="max-h-[400px] w-full object-cover"
                                />
                                <img
                                    src="/images/homepage/heroimage.png"
                                    alt="image 2"
                                    className="max-h-[400px] w-full object-cover"
                                />
                                <img
                                    src="/images/global/bgimage.jpeg"
                                    alt="image 3"
                                    className="max-h-[400px] w-full object-cover"
                                />
                            </Carousel>


                        </section>

                        <section className='flex flex-col lg:flex-row gap-4 bg-bggray justify-between items-center px-[5%] py-4 '>
                            <div className="flex flex-wrap items-start justify-center gap-4">
                                <a
                                    href="#"
                                    className="text-black hover:text-black hover:text-opacity-50 text-lg font-FuturaHeavy">
                                    Overview
                                </a>
                                <a
                                    href="#"
                                    className="text-black hover:text-black hover:text-opacity-50 text-lg font-FuturaHeavy">
                                    Feature & Amenities
                                </a>
                                <a
                                    href="#"
                                    className="text-black hover:text-black hover:text-opacity-50 text-lg font-FuturaHeavy">
                                    Lifestyle Index
                                </a>
                            </div>
                            <div className="flex flex-wrap items-start justify-center gap-4">
                                <button className="inline-flex items-center justify-center px-6 py-2 bg-[#D9D9D9] border-2 font-FuturaHeavy border-fontdark text-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700">
                                    <img src="/images/icons/heart.png" alt="heart" className='mr-2' />
                                    Save to Favourite
                                </button>
                                <button className="flex items-center justify-center px-6 py-2 font-FuturaHeavy bg-primarycolor text-white rounded-lg">
                                    Schedule a tour
                                </button>
                            </div>
                        </section>

                        <section className='px-[5%] py-4 '>
                            <h1 className='text-2xl md:text-4xl font-FuturaBold text-primarycolor'>New 1 Bedroom Apartment For Sale In Estrela, Lisbon</h1>
                            <h1 className='text-2xl md:text-4xl font-FuturaBold text-primarycolor mt-2'>€950,000</h1>

                            <div className='my-10'>
                                <div className="bg-white w-full xl:w-[80%] py-6 px-4 md:px-10 rounded-lg shadow-md border border-primarycolor flex flex-col lg:flex-row items-center justify-center gap-4">
                                    <div className="flex-2">
                                        <h3 className="text-3xl font-FuturaHeavy text-zinc-800 mb-2">Save €3,000 on legal fees when you purchase with us</h3>
                                        <p className="text-md text-primarycolor">Our legal team will review every contract clause, ensure all documents are in order and handle the administrative tasks for the CPCV and Deed.</p>
                                    </div>
                                    <img src="/images/homepage/newpackage.png" alt="legal fees" className="w-20 h-20" />
                                </div>
                            </div>

                            <div className="w-full my-10">
                                <h2 className="text-5xl font-FuturaHeavy text-primarycolor mb-4">Extra Details</h2>

                                <div className="border border-primarycolor text-white bg-primarycolor rounded-xl py-6 px-8
                 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div className="">
                                        <p className="w-fit  mx-auto font-FuturaHeavy text-xl">N1001</p>
                                        <p className="w-fit  mx-auto ">Reference ID</p>
                                    </div>
                                    <div className="">
                                        <p className="w-fit  mx-auto font-FuturaHeavy text-xl">Apartment</p>
                                        <p className="w-fit  mx-auto ">Type</p>
                                    </div>
                                    <div className="">
                                        <p className="w-fit  mx-auto font-FuturaHeavy text-xl">€8,000</p>
                                        <p className="w-fit  mx-auto ">Save</p>
                                    </div>
                                    <div className="">
                                        <p className="w-fit  mx-auto font-FuturaHeavy text-xl">103m²</p>
                                        <p className="w-fit  mx-auto ">Living area</p>
                                    </div>
                                    <div className="">
                                        <p className="w-fit  mx-auto font-FuturaHeavy text-xl">130m²</p>
                                        <p className="w-fit mx-auto ">Exterior area</p>
                                    </div>
                                    <div className="">
                                        <p className="w-fit  mx-auto font-FuturaHeavy text-xl">2</p>
                                        <p className="w-fit  mx-auto ">Bed Rooms</p>
                                    </div>
                                    <div className=" ">
                                        <p className="w-fit  mx-auto font-FuturaHeavy text-xl">3</p>
                                        <p className="w-fit mx-auto ">Bath Rooms</p>
                                    </div>
                                    <div className=" ">
                                        <p className="w-fit  mx-auto font-FuturaHeavy text-xl">5</p>
                                        <p className="w-fit  mx-auto ">Floor Number</p>
                                    </div>

                                </div>
                            </div>

                            <div class="">
                                <h2 class="text-5xl font-FuturaBold text-primarycolor">Description</h2>
                                <p class="mt-4 text-lg text-black">
                                    Welcome to an extraordinary new construction contemporary home in the highly sought-after
                                    Bridgehampton, NY. This stunning property is perfectly designed for those seeking the ultimate
                                    oceanfront living experience. With 125' of ocean frontage and sprawling over 1.5 acres on
                                    Surfside Drive, this property offers an unparalleled level of luxury and sophistication. The
                                    8,600 SF+/- residence features 8 bedrooms, 8 full and 1 half bathrooms, a heated gunite pool
                                    and spa, and breathtaking ocean views.
                                </p>
                                <a href="#" class="text-primarycolor flex items-center text-lg hover:underline mt-4 i"
                                ><span> Read More </span><FontAwesomeIcon icon={faChevronDown} size='xs' className='ml-2' /> </a>
                            </div>


                        </section>

                        <section class="px-[5%] my-10">

                            <ProFeaturesAmenities />

                        </section>

                        <section className='my-10'>
                            <Map />
                        </section>

                        <section >

                            <MortageCalculator />

                        </section>


                        <section>
                            <ContactTabsSection />
                        </section>

                    </div>
                </motion.div >
            </div >
        </>
    )
}

export default PopupSingleDevPage