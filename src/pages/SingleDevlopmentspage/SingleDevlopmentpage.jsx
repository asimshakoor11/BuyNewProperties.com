
import React, { useState,  } from 'react';
import { faChevronDown, faImage,  } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TableRecidencies from '../../components/SingleDevlopmentPageComps/TableRecidencies';
import TabSection from '../../components/SingleDevlopmentPageComps/TabSection';
import ContactTabsSection from '../../components/SingleDevlopmentPageComps/ContactTabsSection';
import SingleDevHeroSection from '../../components/SingleDevlopmentPageComps/SingleDevHeroSection';



const SingleDevlopmentpage = () => { 
    const [view, setView] = useState('list');

    return (
        <>
            <section>
                <SingleDevHeroSection/>
            </section>

            <section id='sectionid' className="section relative bg-white rounded-tl-[40px] rounded-tr-[40px] -mt-10 z-20">
                <h2 className="text-5xl font-FuturaHeavy text-primarycolor mb-4">Details</h2>
                <div className="flex flex-row flex-wrap  border-2 border-fontdark rounded-lg w-full">
                    <div className="w-[100%] sm:w-[33.33%] xl:w-[20%] flex flex-col py-4 xl:px-4 gap-4 items-start justify-center space-x-2 border-2
                 border-fontdark">
                        <img src="./src/assets/images/icons/double-bed 1.png" className='ml-2' alt="" />
                        <div className='flex flex-col gap-1'>
                            <p className="text-3xl font-FuturaHeavy text-primarycolor">2 - 3</p>
                            <p className="text-2xl text-Black font-FuturaDemi">Beds</p>
                        </div>
                    </div>
                    <div className="w-[100%] sm:w-[33.33%] xl:w-[20%] flex flex-col py-4 xl:px-4 gap-4 items-start justify-center space-x-2 border-2
                 border-fontdark">
                        <img src="./src/assets/images/icons/bath.png" className='ml-2' alt="" />

                        <div className='flex flex-col gap-1'>
                            <p className="text-3xl font-FuturaHeavy text-primarycolor">2.0 - 3.5</p>
                            <p className="text-2xl text-Black font-FuturaDemi">Baths</p>
                        </div>
                    </div>
                    <div className="w-[100%] sm:w-[33.33%] xl:w-[20%] flex flex-col py-4 xl:px-4 gap-4 items-start justify-center space-x-2 border-2
                 border-fontdark">
                        <img src="./src/assets/images/icons/home.png" className='ml-2' alt="" />

                        <div className='flex flex-col gap-1'>
                            <p className="text-3xl font-FuturaHeavy text-primarycolor">39</p>
                            <p className="text-2xl text-Black font-FuturaDemi">Residences</p>
                        </div>
                    </div>
                    <div className="w-[100%] xl:w-[40%] flex flex-col py-4 xl:px-4 gap-4 items-start justify-center space-x-2 border-2
                 border-fontdark">
                        <img src="./src/assets/images/icons/home.png" className='ml-2' alt="" />

                        <div className='flex flex-col gap-1'>
                            <p className="text-3xl font-FuturaHeavy text-primarycolor">€300,000 - €2,000,000</p>
                            <p className="text-2xl text-Black font-FuturaDemi">Price</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col lg:flex-row gap-4 justify-between items-center px-[7%] py-4 '>
                <div className="flex space-x-10">
                    <a
                        href="#"
                        className="text-black hover:text-black hover:text-opacity-50 text-xl font-FuturaHeavy">
                        Overview
                    </a>
                    <a
                        href="#"
                        className="text-black hover:text-black hover:text-opacity-50 text-xl font-FuturaHeavy">
                        Feature & Amenities
                    </a>
                    <a
                        href="#"
                        className="text-black hover:text-black hover:text-opacity-50 text-xl font-FuturaHeavy">
                        Lifestyle Index
                    </a>
                </div>
                <div className="flex  space-x-4">
                    <button className="flex items-center justify-center w-10 h-10 bg-primarycolor text-white rounded-lg px-6 py-2">
                        <FontAwesomeIcon icon={faImage} />
                    </button>
                    <button className="flex items-center justify-center px-6 py-2 border-2 font-FuturaHeavy border-fontdark text-zinc-700 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700">
                        Get in touch
                    </button>
                    <button className="flex items-center justify-center px-6 py-2 font-FuturaHeavy bg-primarycolor text-white rounded-lg hover:bg-blue-700">
                        Schedule a tour
                    </button>
                </div>

            </section>

            <section>

                <div className='section bg-white w-full flex flex-col-reverse lg:flex-row gap-6'>

                    <div className='w-full lg:w-3/5'>
                        <div className="">
                            <h2 className="text-5xl font-FuturaBold text-primarycolor">Property Description</h2>
                            <p className="mt-4 text-lg text-balck">
                                Welcome to an extraordinary new construction contemporary home in the highly sought-after
                                Bridgehampton, NY. This stunning property is perfectly designed for those seeking the ultimate
                                oceanfront living experience. With 125' of ocean frontage and sprawling over 1.5 acres on
                                Surfside Drive, this property offers an unparalleled level of luxury and sophistication. The
                                8,600 SF+/- residence features 8 bedrooms, 8 full and 1 half bathrooms, a heated gunite pool
                                and spa, and breathtaking ocean views.
                            </p>
                            <a href="#" className="text-primarycolor flex items-center text-lg hover:underline mt-4 i"
                            ><span> Read More </span><FontAwesomeIcon icon={faChevronDown} size='xs' className='ml-2' /> </a>
                        </div>

                        <div className='mt-16 p-4' >
                            <h2 className="text-5xl font-FuturaHeavy text-primarycolor">Payment Schedule</h2>
                            <div className="grid grid-cols-3 gap-6 mt-4">
                                <div className="text-center py-4 px-2 border-2 border-primarycolor rounded-lg">
                                    <div className="text-5xl font-FuturaHeavy">10%</div>
                                    <div className='text-sm mt-3' >At the time of booking</div>
                                </div>
                                <div className="text-center p-4 bg-primarycolor text-white rounded-lg">
                                    <div className="text-5xl font-FuturaHeavy">50%</div>
                                    <div className='text-sm mt-3' >During construction</div>
                                </div>
                                <div className="text-center p-4 border-2 border-zinc-300 rounded-lg">
                                    <div className="text-5xl font-FuturaHeavy">40%</div>
                                    <div className='text-sm mt-3' >On handover</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 p-6">
                            <h2 className="text-5xl font-FuturaHeavy text-primarycolor">Features & Amenities</h2>
                            <div className="flex space-x-4 my-8">
                                <div className="border border-primarycolor py-4 px-6 rounded-lg flex flex-col items-center">
                                    <img src="./src/assets/images/icons/swimming-pool 2.png" alt="Indoor Pool" className="mb-2" />
                                    <span className='text-sm mt-3'>Indoor Pool</span>
                                </div>
                                <div className="bg-primarycolor text-white py-4 px-6 rounded-lg flex flex-col items-center">
                                    <img src="./src/assets/images/icons/gym-2.png" alt="Gym" className="mb-2" />
                                    <span className='text-sm mt-3'>Gym</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16 p-4">
                            <div className="border border-primarycolor text-primarycolor p-6 rounded-lg flex flex-col items-center">
                                <img src="./src/assets/images/icons/broucher.png" alt="Brochure" className="mb-4" />
                                <h3 className="font-FuturaHeavy text-xl mb-2">Brochure</h3>
                                <p className="text-center mb-4">
                                    Access all in-depth information, latest price lists, floor plans, brochures & more.
                                </p>
                                <button className="bg-primarycolor text-white py-2 px-4 rounded-lg">View Brochure</button>
                            </div>
                            <div className="border  border-primarycolor text-primarycolor p-6 rounded-lg flex flex-col items-center">
                                <img src="./src/assets/images/icons/price-list 2.png" alt="Pricelist" className="mb-4" />
                                <h3 className="font-FuturaHeavy text-xl mb-2">Pricelist</h3>
                                <p className="text-center mb-4">
                                    Access all in-depth information, latest price lists, floor plans, brochures & more.
                                </p>
                                <button className="bg-primarycolor text-white py-2 px-4 rounded-lg">View Brochure</button>
                            </div>
                        </div>

                        <div className="my-16 p-4">
                            <h2 className="text-5xl font-FuturaHeavy text-primarycolor mb-4">Extra Details</h2>
                            <div className="border border-primarycolor text-primarycolor rounded-lg py-4 px-6 flex flex-wrap gap-1 space-y-2">
                                <div className="flex-1  min-w-[150px]">
                                    <p className="w-fit  mx-auto font-FuturaHeavy text-xl">N1001</p>
                                    <p className="w-fit  mx-auto ">Reference ID</p>
                                </div>
                                <div className="flex-1 min-w-[150px]">
                                    <p className="w-fit  mx-auto font-FuturaHeavy text-xl">Apartment</p>
                                    <p className="w-fit  mx-auto ">Type</p>
                                </div>
                                <div className="flex-1 min-w-[150px]">
                                    <p className="w-fit  mx-auto font-FuturaHeavy text-xl">€15,000</p>
                                    <p className="w-fit  mx-auto ">Save up to</p>
                                </div>
                                <div className="flex-1 min-w-[150px]">
                                    <p className="w-fit  mx-auto font-FuturaHeavy text-xl">103m² - 450m²</p>
                                    <p className="w-fit  mx-auto ">Living area</p>
                                </div>
                                <div className="flex-1 min-w-[150px]  max-w-[150px]">
                                    <p className="w-fit  mx-auto font-FuturaHeavy text-xl">0m² - 130m²</p>
                                    <p className="w-fit mx-auto ">Exterior area</p>
                                </div>
                                <div className="flex-1 min-w-[150px]  max-w-[150px]">
                                    <p className="w-fit  mx-auto font-FuturaHeavy text-xl">10 years</p>
                                    <p className="w-fit  mx-auto ">Construction warranty</p>
                                </div>
                            </div>
                        </div>

                        <div className="my-16 p-4">
                            <h2 className="text-5xl font-FuturaHeavy text-primarycolor mb-4">Construction Status</h2>
                            <div className="bg-white py-8 px-4 rounded-lg shadow-md border border-primarycolor mb-6">
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <div className='flex w-full'>
                                            <div className="flex items-center w-[20%]">
                                                <div className='bg-primarycolor w-full h-1'></div>
                                                <div className="flex items-center">
                                                    <div className="w-5 h-5 bg-white border-2 border-primarycolor rounded-full flex items-center justify-center">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center w-[20%]">
                                                <div className='bg-gray-200 w-full h-1'></div>
                                                <div className="flex items-center">
                                                    <div className="w-5 h-5 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center w-[20%]">
                                                <div className='bg-gray-200 w-full h-1'></div>
                                                <div className="flex items-center">
                                                    <div className="w-5 h-5 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center w-[23%]">
                                                <div className='bg-gray-200 w-full h-1'></div>
                                                <div className="flex items-center">
                                                    <div className="w-5 h-5 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center w-[17%]">
                                                <div className='bg-gray-200 w-full h-1'></div>
                                                <div className="flex items-center">
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex text-fontdark text-sm">
                                            <div className='ml-[12%] text-primarycolor font-FuturaHeavy'>Pre-Launch</div>
                                            <div className='ml-[12%]'>Sales</div>
                                            <div className='ml-[9%]'>Under Construction</div>
                                            <div className='ml-[8%]'>Delivered</div>
                                        </div>
                                    </div>

                                    <div className="flex jsutify-center ml-4">
                                        <div className="text-primarycolor text-center text-xs font-FuturaDemi">Ready <br />
                                            3rd quarter 2024
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className='my-16 p-4'>
                            <div className="bg-white dark:bg-zinc-800 py-6 px-10 rounded-lg shadow-md border border-primarycolor flex items-center">
                                <div className="flex-1">
                                    <h3 className="text-3xl font-FuturaHeavy text-zinc-800 dark:text-zinc-200 mb-2">Save €3,000 on legal fees when you purchase with us</h3>
                                    <p className="text-md text-primarycolor">Our legal team will review every contract clause, ensure all documents are in order and handle the administrative tasks for the CPCV and Deed.</p>
                                </div>
                                <img src="./src/assets/images/homepage/newpackage.png" alt="legal fees" className="w-20 h-20 ml-4" />
                            </div>
                        </div>

                    </div>


                    <div className='w-full lg:w-2/5'>
                        <div className="bg-primarycolor text-white p-6 rounded-lg">
                            <h2 className="text-2xl font-FuturaHeavy text-center">Request a Tour</h2>
                            <div className="grid grid-cols-3 gap-4 mt-4">
                                <div className="text-center rounded-md py-2 border-2 border-white">
                                    <div>Friday</div>
                                    <div className="text-5xl my-2 font-FuturaHeavy">03</div>
                                    <div>May</div>
                                </div>
                                <div className="text-center rounded-md py-2 border-2 border-white">
                                    <div>Saturday</div>

                                    <div className="text-5xl my-2 font-FuturaHeavy">04</div>
                                    <div>May</div>
                                </div>
                                <div className="text-center rounded-md py-2 border-2 border-white">
                                    <div>Sunday</div>

                                    <div className="text-5xl my-2 font-FuturaHeavy">05</div>
                                    <div>May</div>
                                </div>
                            </div>
                            <div className="flex justify-center gap-2 items-center mt-4">
                                <button className="text-2xl border py-1 px-4 border-white rounded-full">‹</button>
                                <button className="text-2xl border py-1 px-4 border-white rounded-full">›</button>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="time-select" className="block mb-2">Choose a time</label>
                                <select id="time-select" className="w-full p-2 rounded-lg bg-transparent border text-white">
                                    <option>Select</option>
                                </select>
                            </div>
                            <div className="w-fit mx-auto flex justify-center py-1 px-2 bg-[#667f99] rounded-full space-x-2 mt-4">
                                <button
                                    className={`px-7 py-2 ${view === 'list' ? 'bg-primarycolor text-white' : ' text-white'} rounded-full`}
                                    onClick={() => setView('list')}
                                >
                                    In person
                                </button>
                                <button
                                    className={`px-6 py-2 ${view === 'map' ? 'bg-primarycolor text-white' : ' text-white'} rounded-full`}
                                    onClick={() => setView('map')}
                                >
                                    Via video chat
                                </button>
                            </div>
                            <button className="bg-[#667f99] text-white p-2 rounded-lg mt-4 w-full">Next</button>
                        </div>

                    </div>

                </div>


            </section >

            <section className="section">
                <div className="">
                    <h2 className="text-5xl font-FuturaHeavy text-primarycolor mb-4">Available Residences</h2>
                    <div className="overflow-x-auto mt-14 scrollbar-hide">
                        <TableRecidencies booking={true} />
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="">
                    <h2 className="text-5xl font-FuturaHeavy text-primarycolor mb-4">Sold or Rented Residences</h2>
                    <div className="overflow-x-auto mt-14 scrollbar-hide">
                        <TableRecidencies booking={false} />
                    </div>
                </div>
            </section>

            <section>
                <TabSection />
            </section>

            <section>
                <ContactTabsSection/>
            </section>

            
           

        </>
    )
}

export default SingleDevlopmentpage