
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
import './SingleDevelopmentPage.css'
import VideoPopup from '../../components/SingleDevlopmentPageComps/VideoPopup';
import PropertyDetails from '../../components/SingleDevlopmentPageComps/PropertyDetails';

const SingleDevlopmentpage = () => {
    const [isSaved, setIsSaved] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [isHoverPlay, setIsHoverPlay] = useState(false);

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

            <section id='herosection' >
                <SingleDevHeroSection />
            </section>

            <section id='overview' className="bg-black">
                <div className='section bg-white w-full rounded-tl-[40px] rounded-tr-[40px]'>
                    <h2 className="text-3xl mb-10 md:text-5xl text-primarycolor dark:text-zinc-200 font-BebasNeueSemiExpBold">
                        Details
                    </h2>
                    <div className='relative'>
                        <div className="scroll-container flex w-full overflow-x-scroll scrollbar-hideSDP">
                            <div className="custommaxforSDP:min-w-[500px] customminforSDP:w-[40%] flex flex-col py-4 px-6 gap-4 items-start justify-center space-x-2 border border-[#D3D3D3] rounded-tl-3xl rounded-bl-3xl ">
                                <img src="/images/icons/home.png" className='ml-2' alt="" />
                                <div className='flex flex-col gap-1'>
                                    <p className="text-2xl md:text-3xl font-bold text-primarycolor">€300,000 - €2,000,000</p>
                                    <p className="text-lg text-Black font-semibold">Price</p>
                                </div>
                            </div>
                            <div className="custommaxforSDP:min-w-[200px] customminforSDP:w-[20%] flex flex-col py-4 px-6 gap-4 items-end justify-center space-x-2 border-t  border-b border-[#D3D3D3]">
                                <img src="/images/icons/double-bed 1.png" className='ml-2' alt="" />
                                <div className='flex flex-col gap-1'>
                                    <p className="text-2xl md:text-3xl font-bold text-primarycolor">2 - 3</p>
                                    <p className="text-lg text-Black font-semibold text-right">Beds</p>
                                </div>
                            </div>
                            <div className="custommaxforSDP:min-w-[200px] customminforSDP:w-[20%] flex flex-col py-4 px-6 gap-4 items-end justify-center space-x-2 border border-[#D3D3D3]">
                                <img src="/images/icons/bath.png" className='ml-2' alt="" />

                                <div className='flex flex-col gap-1'>
                                    <p className="text-2xl md:text-3xl font-bold text-primarycolor">2.0 - 3.5</p>
                                    <p className="text-lg text-Black font-semibold text-right">Baths</p>
                                </div>
                            </div>
                            <div className="custommaxforSDP:min-w-[200px] customminforSDP:w-[20%] flex flex-col py-4 px-6 gap-4 items-end justify-center space-x-2 border-t  border-b border-r  border-[#D3D3D3] rounded-tr-3xl rounded-br-3xl">
                                <img src="/images/icons/home.png" className='ml-2' alt="" />

                                <div className='flex flex-col gap-1'>
                                    <p className="text-2xl md:text-3xl font-bold text-primarycolor text-right">39</p>
                                    <p className="text-lg text-Black font-semibold text-right">Residences</p>
                                </div>
                            </div>
                        </div>
                        <div className='hidden custommaxforSDP:block fade-right'></div>
                    </div>
                </div>
            </section>

            {/* <section>
                <PropertyDescription />
            </section> */}
            
            <section>
                <PropertyDetails/>
            </section>

            <section className='section  bg-bggray' style={{ padding: "80px 0% 80px 0%" }}>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left pl-[7%]">Why Work With Us?</h2>

                <WhyWorkWithUsCarousel />
            </section>

            <section id="Units" className="section bg-white">
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

            {/* <section id='lifestyle'>
                <TabSection />
            </section> */}

            <section id='videoplay' className='section bg-white rounded-xl'>
                <div className='section bg-cover bg-center h-[350px] md:h-[600px] flex items-center justify-center relative rounded-xl' style={{ backgroundImage: "url(/images/homepage/heroimage.png)", backgroundRepeat: "no-repeat" }}>
                    <div className='absolute inset-0 bg-black opacity-50 z-10 rounded-xl'></div>
                    <div className='relative z-20 p-8 flex flex-col items-center gap-3 text-white'>
                        <p className='font-regular text-medium uppercase'>Play the video</p>
                        <div className='w-full h-20 flex items-center justify-center'>
                            <button className={`border border-[#A5A5A5] hover:border-bggray rounded-full ${isHoverPlay ? ' w-16 h-16' : ' w-14 h-14'}  flex items-center justify-center transition-all duration-300`}
                                onClick={handlePlayButtonClick}
                                onMouseEnter={() => { setIsHoverPlay(true) }}
                                onMouseLeave={() => { setIsHoverPlay(false) }}
                            >
                                <img src="/images/icons/playicon.svg" alt="" className='h-4 w-4' />
                            </button>
                        </div>

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

            <section id='contact'>
                <ContactTabsSection />
            </section>

            {/* sticky bottombar  */}

            <section className={`md:flex fixed bottom-4 w-full z-30  justify-center transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-[120px]'}`}>
                <div className='w-fit  md:w-xl mx-auto bg-[#242323] text-white flex gap-2 py-3 px-3 rounded-3xl'>
                    <button
                        className={`hidden md:block bg-transparent border ${activeSection === 'overview' ? 'border-[#A5A5A5]' : 'border-[#434343]'} hover:border-[#A5A5A5] py-4 px-8 rounded-xl`}
                        onClick={() => handleScrollToSection('overview')}
                    >
                        <span> Overview</span>
                    </button>
                    <button
                        className={`hidden md:block bg-transparent border ${activeSection === 'features' ? 'border-[#A5A5A5]' : 'border-[#434343]'} hover:border-[#A5A5A5] py-4 px-8 rounded-xl`}
                        onClick={() => handleScrollToSection('features')}
                    >
                        <span> Features</span>
                    </button>
                    <button
                        className={`bg-transparent border ${activeSection === 'Units' ? 'border-[#A5A5A5]' : 'border-[#434343]'} hover:border-[#A5A5A5] py-3 px-3 md:py-4 md:px-8 rounded-xl`}
                        onClick={() => handleScrollToSection('Units')}
                    >
                        <span className='hidden md:block'> Units</span>
                        <img src="/images/icons/icons8-home-24.svg" alt="" className='block md:hidden min-h-27 min-w-25' style={{ maxWidth: "25px" }} />

                    </button>
                    <button
                        className={`bg-transparent border border-[#434343] ${activeSection === 'herosection' ? 'border-[#A5A5A5]' : 'border-[#434343]'} hover:border-[#A5A5A5] py-3 px-4 md:py-4 md:px-5  rounded-xl`}
                        onClick={() => { openLightbox(); setActiveSection('herosection') }}
                    >
                        <img src="/images/icons/picture.png" alt="" className='min-h-23 min-w-21' style={{ maxWidth: "21px" }} />

                        {/* <img src="/images/icons/picture.png" alt="" /> */}
                    </button>
                    <button className='bg-secondrycolor border border-secondrycolor py-3 px-4 md:py-4 md:px-8  rounded-xl'
                        onClick={() => handleScrollToSection('contact')}
                    >
                        <span className='hidden md:block'> Contact</span>
                        <img src="/images/icons/envelope.png" alt="" className='block md:hidden min-h-23 min-w-21' style={{ maxWidth: "21px" }} />
                    </button>
                    <button
                        className='bg-transparent border border-[#434343] hover:border-[#A5A5A5] py-3 px-4 md:py-4 md:px-5  rounded-xl'
                        onClick={() => setIsSaved(!isSaved)}
                    >
                        <FontAwesomeIcon
                            icon={solidBookmark}
                            style={{
                                color: isSaved ? 'green' : '#242323',
                                stroke: 'white',
                                strokeWidth: '40px'
                            }}
                            className="text-xl md:text-2xl"
                        />
                    </button>
                </div>
            </section>
        </>
    )
}

export default SingleDevlopmentpage