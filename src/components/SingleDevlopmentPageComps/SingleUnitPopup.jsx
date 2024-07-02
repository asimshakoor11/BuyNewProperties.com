import React, { useState, useEffect, useRef } from 'react'

import { faArrowUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GlobalImgCarousel from '../Global/GlobalImgCarousel';
import CustomMap from '../DevelopmentsSearchPageComps/CustomMap';

const SingleUnitPopup = ({ isOpen, onClose }) => {

    const [selectedPopup, setSelectedPopup] = useState('floor');
    const scrolleddiv = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const locations = [
        {
          id: 1,
          position: { lat: 38.7223, lng: -9.1393 },
          info: {
            image: '/images/homepage/dreamhomecontact.png',
            title: 'New Development Lisbon',
            location: 'Estrela, Lisbon',
            price: '€650,000',
            beds: '2 to 3 Beds from'
          }
        }
      ];

    return (
        <>
            <div id="popup-container" class="fixed inset-0 z-50 h-screen bg-gray-800 p-4  bg-opacity-50 backdrop-blur-lg flex justify-center items-center transition-opacity duration-300"
            >
                <div id="popup-content" class="relative bg-white h-full w-full rounded-3xl mx-auto "
                >
                    <div ref={scrolleddiv} className="flex flex-col-reverse lg:flex-row h-full w-full rounded-3xl overflow-y-scroll scrollbar-custom lg:overflow-hidden">

                        <div className='flex flex-col h-auto lg:h-full w-full lg:w-[35%] bg-bggray rounded-tl-3xl rounded-bl-3xl'>
                            <div className='p-8 lg:overflow-y-scroll scrollbar-custom'>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-medium">Unit B14</h2>
                                    <button undefinedlabel="Share" className="text-black">
                                        <img undefinedhidden="true" alt="share-icon" src="/images/icons/shareblack.svg" className='h-6' />
                                    </button>
                                </div>
                                <section className="mb-6">
                                    <h3 className="text-sm font-medium mb-2">Unit Information</h3>
                                    <div className=" p-6 rounded-lg mb-4 bg-white">
                                        <p className="text-2xl font-light mb-1">€1,300,000</p>
                                        <p className="text-black text-sm font-semibold pb-3 mb-4 border border-transparent border-b-[#B7B7B7]">Price</p>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <p className="text-xl font-light">PID001</p>
                                                <p className="text-sm font-semibold text-black">Reference</p>
                                            </div>
                                            <div>
                                                <p className="text-xl font-light">Apartment</p>
                                                <p className="text-sm font-semibold text-black">Type</p>
                                            </div>
                                            <div>
                                                <p className="text-xl font-light">3</p>
                                                <p className="text-sm font-semibold text-black">Bedrooms</p>
                                            </div>
                                            <div>
                                                <p className="text-xl font-light">2</p>
                                                <p className="text-sm font-semibold text-black">Bathrooms</p>
                                            </div>
                                            <div>
                                                <p className="text-xl font-light">103m²</p>
                                                <p className="text-sm font-semibold text-black">Living Area</p>
                                            </div>
                                            <div>
                                                <p className="text-xl font-light">24m²</p>
                                                <p className="text-sm font-semibold text-black">Terrace Area</p>
                                            </div>
                                            <div>
                                                <p className="text-xl font-light">4</p>
                                                <p className="text-sm font-semibold text-black">Floor/Flat</p>
                                            </div>
                                            <div>
                                                <p className="text-xl font-light">2</p>
                                                <p className="text-sm font-semibold text-black">Parking</p>
                                            </div>
                                            <div>
                                                <p className="text-xl font-light">10 years</p>
                                                <p className="text-sm font-semibold text-black">Warranty</p>
                                            </div>
                                            <div>
                                                <p className="text-xl font-light">-</p>
                                                <p className="text-sm font-semibold text-black">Energy Rating</p>
                                            </div>
                                            <div>
                                                <p className="text-xl font-light">3rd Quarter 2024 </p>
                                                <p className="text-sm font-semibold text-black">Delivery Date</p>
                                            </div>
                                        </div>

                                        <button className="w-full mt-4 bg-primarycolor text-white font-medium py-2 md:py-3 rounded-lg">Register Interest</button>
                                    </div>
                                </section>
                                <section className="mb-6">
                                    <h3 className="text-sm font-medium mb-2">Unit Information</h3>
                                    <div className="  p-6 rounded-lg mb-4 bg-white grid gap-2 grid-cols-1 lg:grid-cols-2">
                                        <div className="flex items-center">
                                            <img undefinedhidden="true" alt="roof-terrace-icon" src="/images/icons/terrace.svg" className="h-5 mr-2" />
                                            <span className=' text-lg font-normal'>Roof terrace</span>
                                        </div>
                                        <div className="flex items-center">
                                            <img undefinedhidden="true" alt="parking-icon" src="/images/icons/car.svg" className="h-5 mr-2" />
                                            <span className=' text-lg font-normal'>Parking</span>
                                        </div>
                                        <div className="flex items-center">
                                            <img undefinedhidden="true" alt="fireplace-icon" src="/images/icons/flame.svg" className="h-5 mr-2" />
                                            <span className=' text-lg font-normal'>Fireplace</span>
                                        </div>
                                        <div className="flex items-center">
                                            <img undefinedhidden="true" alt="storage-room-icon" src="/images/icons/box.svg" className="h-5 mr-2" />
                                            <span className=' text-lg font-normal'>Storage room</span>
                                        </div>
                                        <div className="flex items-center">
                                            <img undefinedhidden="true" alt="pool-icon" src="/images/icons/swimming-pool.svg" className="h-5 mr-2" />
                                            <span className=' text-lg font-normal'>Pool</span>
                                        </div>
                                    </div>
                                </section>
                                <section className="mb-6">
                                    <h3 className="text-sm font-medium mb-2">Payment Plan</h3>
                                    <div className="rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                                        <div className='flex flex-col gap-1 justify-center bg-white p-4 rounded-lg'>
                                            <p className="font-light text-xl text-black">10%</p>
                                            <p className="text-sm font-semibold">At time of booking</p>
                                        </div>
                                        <div className='flex flex-col gap-1 justify-center bg-primarycolor rounded-lg text-white p-4'>
                                            <p className="font-light text-xl ">40%</p>
                                            <p className="text-sm font-semibold">During Construction</p>
                                        </div>
                                        <div className='flex flex-col gap-1 justify-center bg-primarycolor rounded-lg text-white p-4'>
                                            <p className="font-light text-xl">45%</p>
                                            <p className="text-sm font-semibold">On Completion</p>
                                        </div>
                                        <div className='flex flex-col gap-1 justify-center bg-white rounded-lg text-black p-4'>
                                            <p className="font-light text-xl">5%</p>
                                            <p className="text-sm font-semibold">5 months after handover</p>
                                        </div>
                                    </div>
                                </section>
                                <section>
                                    <h3 className="text-sm font-medium mb-2">Downloads</h3>
                                    <div className="rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <button className="flex items-center justify-center gap-2 bg-white text-black font-medium py-2 md:py-3 rounded-lg">
                                            <img src="/images/icons/download.svg" alt="" className='h-5' />
                                            <span>Brochure</span>
                                        </button>
                                        <button className="flex items-center justify-center gap-2 bg-white text-black font-medium py-2 md:py-3 rounded-lg">
                                            <img src="/images/icons/download.svg" alt="" className='h-5' />
                                            <span>Brochure</span>
                                        </button>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className='flex flex-col gap-4 w-full lg:w-[65%] border  p-8'>

                            <div className="flex flex-row lg:gap-4 h-fit items-center justify-between text-black">
                                <div className="flex flex-wrap gap-2 h-fit w-full lg:w-fit">
                                    <button className={`w-14 md:w-auto py-2 md:px-8 md:py-3 flex justify-center items-center border ${selectedPopup === 'floor' ? 'border-[#000000]' : 'border-[#A5A5A5]'}   hover:border-[#000000] rounded-lg `} onClick={() => setSelectedPopup('floor')}>
                                        <span className='hidden md:block'>Floor Plan</span>
                                        <img src="/images/icons/floor-layer.svg" alt="" className='block md:hidden ' style={{ maxWidth: "27px", height: '100%' }} />
                                    </button>
                                    <button className={`w-14 md:w-auto py-2 md:px-8 md:py-3 flex justify-center items-center border ${selectedPopup === 'photos' ? 'border-[#000000]' : 'border-[#A5A5A5]'}   hover:border-[#000000] rounded-lg`} onClick={() => setSelectedPopup('photos')}>
                                        <span className='hidden md:block'>Photos</span>
                                        <img src="/images/icons/pictureblack.svg" alt="" className='block md:hidden ' style={{ maxWidth: "20px" }} />
                                    </button>
                                    <button className={`w-14 md:w-auto py-2 md:px-8  md:py- flex justify-center items-center border ${selectedPopup === 'location' ? 'border-[#000000]' : 'border-[#A5A5A5]'} ]  hover:border-[#000000] rounded-lg`} onClick={() => setSelectedPopup('location')}>
                                        <span className='hidden md:block'>Location</span>
                                        <img src="/images/icons/locationmarkerblack.svg" alt="" className='block md:hidden' style={{ maxWidth: "23px" }} />
                                    </button>
                                    <button className={`w-14 py-2 md:py-3  bg-primarycolor text-white  rounded-lg`}>
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg' />
                                    </button>
                                </div>
                                <div className="flex items-center space-x-4">

                                    <button
                                        className="text-2xl font-bold text-black"
                                        onClick={onClose}
                                    >
                                        <FontAwesomeIcon icon={faXmark} size='md' />
                                    </button>
                                </div>
                            </div>
                            {selectedPopup === 'floor' && (
                                <div className="overflow-hidden h-full w-full">
                                    <div className='relative overflow-hidden h-full w-full '>
                                        <img src="/images/global/bgimage.jpeg" alt="" className='h-full w-full' />
                                    </div>
                                </div>
                            )}

                            {selectedPopup === 'photos' && (
                                <div className=" h-full w-full">
                                    <GlobalImgCarousel dark={true} />
                                </div>
                            )}

                            {selectedPopup === 'location' && (
                                <div className="h-full w-full ">
                                    <CustomMap view={"hfull"} locations={locations}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleUnitPopup