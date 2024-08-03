
import React, { useEffect, useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../SingleDevlopmentPageComps/Styles/PropertyDetails.css'
import RequestATourSold from './RequestATourSold';
// import { Bars } from 'react-loader-spinner';


const PropertyDetailsSold = () => {
    const [showMore, setShowMore] = useState(false);

    const handleReadMore = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setShowMore(!showMore);
    };


    return (
        <>

            <section id="section-244fc0d2-c72f-45f8-abbc-021ebc1250acd" className="px-[7%] pb-[80px] bg-white is-font-color-dark is-background-color-light ">
                <div className="about-section lp-vertical-paddings--large">
                    <div className="lp-container ">
                        <div className="about-section__row p-3.5">

                            <div className="about-section__col">
                                <div className="user-content lp-a pr-0 xl:pr-20">

                                    <div className="">
                                        <h2 className="text-4xl mb-10 md:text-5xl text-primarycolor dark:text-zinc-200 font-BebasNeueSemiExpBold">
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

                                    

                                    <div className="mt-16">
                                        <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Features & Amenities</h2>
                                        <div className="flex space-x-4 mt-10">
                                            <div className="border border-primarycolor h-[150px] w-[130px] rounded-lg flex flex-col justify-center items-center">
                                                <img src="/images/icons/swimming-pool 2.svg" alt="Indoor Pool" className="mb-2" />
                                                <span className='text-sm mt-3 font-semibold' >Indoor Pool</span>
                                            </div>
                                            <div className="bg-primarycolor hover:bg-primarycolorhover text-white h-[150px] w-[130px] rounded-lg flex flex-col  justify-center items-center cursor-pointer transition-colors duration-300 ease-in-out">
                                                <img src="/images/icons/gym-2.svg" alt="Gym" className="mb-2" />
                                                <span className='text-sm mt-3 font-semibold'>Gym</span>
                                            </div>
                                        </div>
                                    </div>
                        
                                </div>
                            </div>

                            <div className="about-section__col about-section__col--cms hidden xl:flex ">

                                <div className="bg-primarycolor text-white p-6 rounded-lg w-[100%] ">
                                    <RequestATourSold dropdown={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}

export default PropertyDetailsSold