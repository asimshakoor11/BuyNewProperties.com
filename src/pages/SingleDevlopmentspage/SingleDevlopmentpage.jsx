
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TableRecidencies from '../../components/SingleDevlopmentPageComps/TableRecidencies';
import TabSection from '../../components/SingleDevlopmentPageComps/TabSection';
import ContactTabsSection from '../../components/SingleDevlopmentPageComps/ContactTabsSection';
import SingleDevHeroSection from '../../components/SingleDevlopmentPageComps/SingleDevHeroSection';
import WhyWorkWithUsCarousel from '../../components/HomePageComps/WhyWorkWithUsCarousel';
import { faPlay, faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import LightBox from '../../components/SingleDevlopmentPageComps/LightBox';
import PropertyDescription from '../../components/SingleDevlopmentPageComps/PropertyDescription';
import '../styles/ConstructionStatus.css'
import VideoPopup from '../../components/SingleDevlopmentPageComps/VideoPopup';


const SingleDevlopmentpage = () => {
    const [isSaved, setIsSaved] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
        setActiveSection(sectionId);
    };

    const openLightbox = () => {
        setIsLightboxOpen(true);
    };

    const closebox = () => {
        setIsLightboxOpen(false);
    };

    const [showPopup, setShowPopup] = useState(false);

    const handlePlayButtonClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    useEffect(() => {
        if (showPopup) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showPopup]);

    return (
        <>
            <LightBox isOpen={isLightboxOpen} onClose={closebox} />

            <section id='herosection'>
                <SingleDevHeroSection />
            </section>

            <section id='overview' className="bg-black">
                <div className='section bg-white w-full rounded-tl-[40px] rounded-tr-[40px]'>
                    <h2 className="text-3xl mb-10 md:text-5xl text-primarycolor dark:text-zinc-200 font-BebasNeueSemiExpBold">
                        Details
                    </h2>
                    <div className="flex w-full overflow-x-scroll scrollbar-hideSDP">
                        <div className="custommaxforSDP:min-w-[500px] customminforSDP:w-[40%] flex flex-col py-4 px-6 gap-4 items-start justify-center space-x-2 border border-[#D3D3D3] rounded-tl-3xl rounded-bl-3xl ">
                            <img src="/images/icons/home.png" className='ml-2' alt="" />
                            <div className='flex flex-col gap-1'>
                                <p className="text-3xl font-bold text-primarycolor">€300,000 - €2,000,000</p>
                                <p className="text-lg text-Black font-semibold">Price</p>
                            </div>
                        </div>
                        <div className="custommaxforSDP:min-w-[200px] customminforSDP:w-[20%] flex flex-col py-4 px-6 gap-4 items-end justify-center space-x-2 border-t  border-b border-[#D3D3D3]">
                            <img src="/images/icons/double-bed 1.png" className='ml-2' alt="" />
                            <div className='flex flex-col gap-1'>
                                <p className="text-3xl font-bold text-primarycolor">2 - 3</p>
                                <p className="text-lg text-Black font-semibold text-right">Beds</p>
                            </div>
                        </div>
                        <div className="custommaxforSDP:min-w-[200px] customminforSDP:w-[20%] flex flex-col py-4 px-6 gap-4 items-end justify-center space-x-2 border border-[#D3D3D3]">
                            <img src="/images/icons/bath.png" className='ml-2' alt="" />

                            <div className='flex flex-col gap-1'>
                                <p className="text-3xl font-bold text-primarycolor">2.0 - 3.5</p>
                                <p className="text-lg text-Black font-semibold text-right">Baths</p>
                            </div>
                        </div>
                        <div className="custommaxforSDP:min-w-[200px] customminforSDP:w-[20%] flex flex-col py-4 px-6 gap-4 items-end justify-center space-x-2 border-t  border-b border-r  border-[#D3D3D3] rounded-tr-3xl rounded-br-3xl">
                            <img src="/images/icons/home.png" className='ml-2' alt="" />

                            <div className='flex flex-col gap-1'>
                                <p className="text-3xl font-bold text-primarycolor text-right">39</p>
                                <p className="text-lg text-Black font-semibold text-right">Residences</p>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

            <section>
                <PropertyDescription />
            </section>

            <section id='features'>

                <div className='section bg-white w-full flex flex-col-reverse lg:flex-row gap-6'>

                    <div className='w-full lg:w-3/5'>

                        <div className="mt-16 p-6">
                            <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Features & Amenities</h2>
                            <div className="flex space-x-4 my-8">
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

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16 p-4">
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

                        <div className="my-16 p-4">
                            <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Extra Details</h2>
                            <div className=" mt-10 border border-primarycolor text-primarycolor rounded-lg py-6 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="">
                                    <p className="w-fit  mx-auto text-xl font-bold">N1001</p>
                                    <p className="w-fit  mx-auto text-sm font-semibold">Reference ID</p>
                                </div>
                                <div className="">
                                    <p className="w-fit  mx-auto  text-xl font-bold">Apartment</p>
                                    <p className="w-fit  mx-auto  text-sm font-semibold">Type</p>
                                </div>
                                <div className="">
                                    <p className="w-fit  mx-auto  text-xl font-bold">€15,000</p>
                                    <p className="w-fit  mx-auto text-sm font-semibold">Save up to</p>
                                </div>
                                <div className="">
                                    <p className="w-fit  mx-auto  text-xl font-bold">103m² - 450m²</p>
                                    <p className="w-fit  mx-auto  text-sm font-semibold">Living area</p>
                                </div>
                                <div className="">

                                    <p className="w-fit  mx-auto  text-xl font-bold">0m² - 130m²</p>
                                    <p className="w-fit mx-auto  text-sm font-semibold">Exterior area</p>
                                </div>
                                <div className="">
                                    <p className="w-fit  mx-auto  text-xl font-bold">10 years</p>
                                    <p className="w-fit  mx-auto text-sm font-semibold ">warranty</p>
                                </div>

                            </div>
                        </div>

                        <div className="my-16 p-4">
                            <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Construction Status</h2>
                            <div className="mt-10 bg-white py-4 px-4 rounded-lg shadow-md border border-primarycolor mb-6">

                                <div class="building-block box ">
                                    <div class="info-holder">
                                        <ul class="building-lifecycle">
                                            <li class="step active"><a>Pre-launch</a></li>
                                            <li class="step active"><a>Sales</a></li>
                                            <li class="step active"><a>Under construction</a></li>
                                            <li class="step "><a>Delivered</a></li>
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
            </section >

            <section className='section  bg-bggray' style={{ padding: "80px 0% 80px 0%" }}>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left pl-[7%]">Why Work With Us?</h2>

                <WhyWorkWithUsCarousel />
            </section>

            <section className="section bg-white">
                <div className="">
                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Available Residences</h2>
                    <div className="overflow-x-auto mt-14 scrollbar-hide">
                        <TableRecidencies booking={true} />
                    </div>
                </div>
            </section>

            <section className="section bg-white">
                <div className="">
                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Sold or Rented Residences</h2>
                    <div className="overflow-x-auto mt-14 md:scrollbar-hide">
                        <TableRecidencies booking={false} />
                    </div>
                </div>
            </section>

            <section id='lifestyle'>
                <TabSection />
            </section>

            <section id='videoplay' className='section bg-white rounded-xl'>
                <div className='section bg-cover bg-center h-screen flex items-center justify-center relative rounded-xl' style={{ backgroundImage: "url(/images/homepage/heroimage.png)", backgroundRepeat: "no-repeat" }}>
                    <div className='absolute inset-0 bg-black opacity-50 z-10 rounded-xl'></div>
                    <div className='relative z-20 p-8 flex flex-col items-center gap-3 text-white'>
                        <p className='font-medium text-medium uppercase'>Play the video</p>
                        <button className='border border-bggray rounded-full w-10 h-10 flex items-center justify-center' onClick={handlePlayButtonClick}>
                            <FontAwesomeIcon icon={faPlay} size='base' />
                        </button>
                    </div>
                </div>
                {showPopup && <VideoPopup id="popup-container" videoUrl='https://www.youtube.com/embed/dQw4w9WgXcQ' onClose={handleClosePopup} />}
            </section>

            <section id='neighborhood' className='section bg-cover bg-center h-screen flex items-end relative' style={{ backgroundImage: "url(/images/homepage/heroimage.png)", backgroundRepeat: "no-repeat" }}>
                <div className='absolute inset-0 bg-black opacity-50 z-10'></div>
                <div className='relative z-20 w-[500px] p-8 flex flex-col gap-3 text-white border border-bggray rounded-xl'>
                    <p className='font-bold text-lg'>THE NEIGHBORHOOD</p>
                    <h2 className='font-BebasNeueSemiExpBold font-bold text-5xl'>Upper East Side</h2>
                    <p className='font-medium text-medium'>An upscale residential haven renowned for its elegance and glamour, the Upper East Side is marked by a pretty blend of luxurious townhouses and historic apartment buildings.</p>
                </div>
            </section>

            <section>
                <ContactTabsSection />
            </section>

            {/* sticky bottombar  */}

            <section className={`hidden md:flex fixed bottom-4 w-full z-40  justify-center transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-[120px]'}`}>
                <div className='w-xl bg-[#242323] text-white flex gap-2 py-3 px-3 rounded-3xl'>
                    <button
                        className={`bg-transparent border ${activeSection === 'overview' ? 'border-[#A5A5A5]' : 'border-[#434343]'} hover:border-[#A5A5A5] py-4 px-8 rounded-xl`}
                        onClick={() => handleScrollToSection('overview')}
                    >
                        Overview
                    </button>
                    <button
                        className={`bg-transparent border ${activeSection === 'features' ? 'border-[#A5A5A5]' : 'border-[#434343]'} hover:border-[#A5A5A5] py-4 px-8 rounded-xl`}
                        onClick={() => handleScrollToSection('features')}
                    >
                        Features
                    </button>
                    <button
                        className={`bg-transparent border ${activeSection === 'lifestyle' ? 'border-[#A5A5A5]' : 'border-[#434343]'} hover:border-[#A5A5A5] py-4 px-8 rounded-xl`}
                        onClick={() => handleScrollToSection('lifestyle')}
                    >
                        Lifestyle
                    </button>
                    <button
                        className={`bg-transparent border border-[#434343] ${activeSection === 'herosection' ? 'border-[#A5A5A5]' : 'border-[#434343]'} hover:border-[#A5A5A5] py-4 px-5 rounded-xl`}
                        onClick={() => { openLightbox(); setActiveSection('herosection') }}
                    >
                        <img src="/images/icons/image2.png" alt="" />
                    </button>
                    <button className='bg-secondrycolor border border-secondrycolor py-4 px-8 rounded-xl'>Contact</button>
                    <button
                        className='bg-transparent border border-[#434343] hover:border-[#A5A5A5] py-4 px-5 rounded-xl'
                        onClick={() => setIsSaved(!isSaved)}
                    >
                        <FontAwesomeIcon
                            icon={solidBookmark}
                            style={{
                                color: isSaved ? 'green' : '#242323',
                                stroke: 'white',
                                strokeWidth: '40px'
                            }}
                            className="text-2xl"
                        />
                    </button>
                </div>
            </section>
        </>
    )
}

export default SingleDevlopmentpage