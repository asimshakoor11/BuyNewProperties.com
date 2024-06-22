
import React, { useState } from 'react';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RequestATour from './RequestATour';


const PropertyDescription = () => {
    const [showMore, setShowMore] = useState(false);

    const handleReadMore = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        setShowMore(!showMore);
        
    };

    return (
        <>
            <div className='px-[7%] bg-white w-full flex flex-col xl:flex-row gap-10'>

                <div className='w-full xl:w-2/3'>
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
                </div>

                <div className='w-1/3 hidden xl:block'>
                    <div className="bg-primarycolor text-white p-10 rounded-lg ">
                        <RequestATour dropdown={true} />
                    </div>
                </div>
            </div >
        </>
    )
}

export default PropertyDescription