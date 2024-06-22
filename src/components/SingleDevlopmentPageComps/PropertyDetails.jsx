
import React, { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Styles/PropertyDetails.css'
import RequestATour from './RequestATour';


const PropertyDetails = () => {
    const [showMore, setShowMore] = useState(false);

    const handleReadMore = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setShowMore(!showMore);

    };

    return (
        <section id="section-244fc0d2-c72f-45f8-abbc-021ebc1250acd" className="px-[7%] pb-[80px] bg-white is-font-color-dark is-background-color-light ">
            <div className="about-section lp-vertical-paddings--large">
                <div className="lp-container ">
                    <div className="about-section__row p-3.5">

                        <div className="about-section__col">
                            <div className="user-content lp-a pr-0 xl:pr-20">

                                <div className="">
                                    <h2 className="text-3xl mb-10 md:text-5xl text-primarycolor dark:text-zinc-200 font-BebasNeueSemiExpBold">
                                        Description</h2>
                                    <p className="mt-4 text-lg text-black">
                                        Welcome to an extraordinary new construction contemporary home in the highly sought-after Bridgehampton, NY. This stunning property is perfectly designed for those seeking the ultimate oceanfront living experience. With 125' of ocean frontage and sprawling over 1.5 acres on Surfside Drive, this property offers an unparalleled level of luxury and sophistication. The 8,600 SF+/- residence features 8 bedrooms, 8 full and 1 half bathrooms, a heated gunite pool and spa, and breathtaking ocean views.
                                    </p>
                                    {showMore && (
                                        <p className="mt-4 text-lg text-black fade-down">
                                            Welcome to an extraordinary new construction contemporary home in the highly sought-after Bridgehampton, NY. This stunning property is perfectly designed for those seeking the ultimate oceanfront living experience. With 125' of ocean frontage and sprawling over 1.5 acres on Surfside Drive, this property offers an unparalleled level of luxury and sophistication. The 8,600 SF+/- residence features 8 bedrooms, 8 full and 1 half bathrooms, a heated gunite pool and spa, and breathtaking ocean views.
                                            <br />
                                            <br />
                                            Welcome to an extraordinary new construction contemporary home in the highly sought-after Bridgehampton, NY. This stunning property is perfectly designed for those seeking the ultimate oceanfront living experience. With 125' of ocean frontage and sprawling over 1.5 acres on Surfside Drive, this property offers an unparalleled level of luxury and sophistication. The 8,600 SF+/- residence features 8 bedrooms, 8 full and 1 half bathrooms, a heated gunite pool and spa, and breathtaking ocean views.
                                        </p>
                                    )}
                                    <div className="fade-div"></div>
                                    <a
                                        className="text-primarycolor flex items-center text-lg hover:underline mt-4"
                                        onClick={handleReadMore}
                                    >
                                        <span className='font-semibold cursor-pointer'>{showMore ? 'Read Less' : 'Read More'}</span>
                                        <FontAwesomeIcon icon={faChevronDown} size="xs" className={`font-semibold cursor-pointer ml-2 ${showMore ? 'rotate' : ''}`} />
                                    </a>
                                </div>

                                <div className='mt-16' >
                                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left">Payment Schedule</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
                                        <div className="text-center p-4 border border-primarycolor rounded-lg">
                                            <div className="text-5xl font-semibold">10%</div>
                                            <div className='text-sm mt-3 font-semibold' >At the time of booking</div>
                                        </div>
                                        <div className="text-center p-4 bg-primarycolor text-white rounded-lg">
                                            <div className="text-5xl font-semibold">50%</div>
                                            <div className='text-sm mt-3 font-semibold' >During construction</div>
                                        </div>
                                        <div className="text-center p-4 border border-primarycolor rounded-lg">
                                            <div className="text-5xl font-semibold">40%</div>
                                            <div className='text-sm mt-3 font-semibold' >On handover</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16">
                                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Features & Amenities</h2>
                                    <div className="flex space-x-4 mt-10">
                                        <div className="border border-primarycolor h-[150px] w-[130px] rounded-lg flex flex-col justify-center items-center">
                                            <img src="/images/icons/swimming-pool 2.png" alt="Indoor Pool" className="mb-2" />
                                            <span className='text-sm mt-3 font-semibold' >Indoor Pool</span>
                                        </div>
                                        <div className="bg-primarycolor text-white h-[150px] w-[130px] rounded-lg flex flex-col  justify-center items-center">
                                            <img src="/images/icons/gym-2.png" alt="Gym" className="mb-2" />
                                            <span className='text-sm mt-3 font-semibold'>Gym</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
                                    <div className="border border-primarycolor text-primarycolor p-6 rounded-lg flex flex-col items-center">
                                        <img src="/images/icons/broucher.png" alt="Brochure" className="mb-4" />
                                        <h3 className=" text-xl mb-2  font-bold">Brochure</h3>
                                        <p className="text-center mb-4 font-medium">
                                            Access all in-depth information, latest price lists, floor plans, brochures & more.
                                        </p>
                                        <button className="bg-primarycolor text-white py-3 px-8 rounded-lg font-bold">View Brochure</button>
                                    </div>
                                    <div className="border  border-primarycolor text-primarycolor p-6 rounded-lg flex flex-col items-center">
                                        <img src="/images/icons/price-list 2.png" alt="Pricelist" className="mb-4" />
                                        <h3 className=" text-xl mb-2 font-bold">Pricelist</h3>
                                        <p className="text-center mb-4 font-medium">
                                            Access all in-depth information, latest price lists, floor plans, brochures & more.
                                        </p>
                                        <button className="bg-primarycolor text-white py-3 px-8 rounded-lg font-bold">View Brochure</button>
                                    </div>
                                </div>

                                <div className="mt-16">
                                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Extra Details</h2>
                                    <div className=" mt-10 border border-primarycolor text-primarycolor rounded-lg py-6 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        <div className="flex flex-col justify-center">
                                            <p className="w-fit  mx-auto text-xl font-bold">N1001</p>
                                            <p className="w-fit  mx-auto text-sm font-semibold">Reference ID</p>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="w-fit  mx-auto  text-xl font-bold">Apartment</p>
                                            <p className="w-fit  mx-auto  text-sm font-semibold">Type</p>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="w-fit  mx-auto  text-xl font-bold">€15,000</p>
                                            <p className="w-fit  mx-auto text-sm font-semibold">Save up to</p>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="w-fit  mx-auto text-center  text-xl font-bold">103m² - 450m²</p>
                                            <p className="w-fit  mx-auto  text-sm font-semibold">Living area</p>
                                        </div>
                                        <div className="flex flex-col justify-center">

                                            <p className="w-fit  mx-auto text-center text-xl font-bold">0m² - 130m²</p>
                                            <p className="w-fit mx-auto  text-sm font-semibold">Exterior area</p>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="w-fit  mx-auto  text-xl font-bold">10 years</p>
                                            <p className="w-fit  mx-auto text-sm font-semibold ">warranty</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="mt-16">
                                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Construction Status</h2>
                                    <div className="mt-10 bg-white py-4 px-4 rounded-lg border border-primarycolor mb-6">

                                        <div class="building-block box ">
                                            <div class="info-holder">
                                                <ul class="building-lifecycle">
                                                    <li class="step active"><a >Pre-launch</a></li>
                                                    <li class="step active"><a >Sales</a></li>
                                                    <li class="step active"><a >Under construction</a></li>
                                                    <li class="step "><a >Delivered</a></li>
                                                </ul>
                                                <div class="result-holder"><a><span>Ready
                                                    around</span><strong class="date">3rd quarter
                                                        2024</strong></a></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="about-section__col about-section__col--cms hidden xl:flex ">

                            <div className="bg-primarycolor text-white p-10 rounded-lg w-[100%] ">
                                <RequestATour dropdown={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PropertyDetails