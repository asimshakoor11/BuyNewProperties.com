
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TableRecidencies from '../../components/SingleDevlopmentPageComps/TableRecidencies';
import ContactTabsSection from '../../components/SingleDevlopmentPageComps/ContactTabsSection';
import SingleDevHeroSection from '../../components/SingleDevlopmentPageComps/SingleDevHeroSection';
import WhyWorkWithUsCarousel from '../../components/HomePageComps/WhyWorkWithUsCarousel';
import { faPlay, faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons';
import LightBox from '../../components/SingleDevlopmentPageComps/LightBox';
// import './SingleDevelopmentPage.css'
import VideoPopup from '../../components/SingleDevlopmentPageComps/VideoPopup';
import PropertyDetailsSold from '../../components/SingleSoldDevPageComps/PropertyDetailsSold';
import LatestDevelopmentCard from '../../components/Global/LatestDevelopmentCard/LatestDevlopmentsCard';
import CustomMapComp from '../../components/Global/CustomMapComp';
import TableRecidenciesSold from '../../components/SingleSoldDevPageComps/TableRecidenciesSold';

const SingleSoldDevelopmentPage = () => {
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
        if (showPopup || isLightboxOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [showPopup || isLightboxOpen]);


    const data = [
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 1' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 2' },
        { title: 'New Build Apartments In Lapa, Lisbon', description: 'Description 3' },
    ];

    const locationareas = [
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

    const imagessingeldevpage = [
        '/images/pages/homepage/bgiamge.webp',
        '/images/pages/homepage/herosection.svg',
        '/images/pages/homepage/architecture.jpg',
        '/images/pages/homepage/kuala-lumpur.jpg',
    ];

    return (
        <>
            <LightBox isOpen={isLightboxOpen} onClose={closebox} images={imagessingeldevpage} />

            <section id='herosection' >
                <SingleDevHeroSection images={imagessingeldevpage} />
            </section>

            <section id='overview' className="bg-black">
                <div className='section bg-white w-full rounded-tl-[40px] rounded-tr-[40px]'>
                    <h2 className="text-3xl mb-10 md:text-5xl text-primarycolor dark:text-zinc-200 font-BebasNeueSemiExpBold">
                        Details
                    </h2>
                    <div className='relative'>
                        <div className="scroll-container flex w-full overflow-x-scroll scrollbar-hideSDP">
                            <div className="custommaxforSDP:min-w-[500px] customminforSDP:w-[40%] flex flex-col py-4 px-6 gap-4 items-start justify-center space-x-2 border border-[#D3D3D3] rounded-tl-3xl rounded-bl-3xl ">
                                <img src="/images/icons/home.svg" className='ml-2' alt="" />
                                <div className='flex flex-col gap-1'>
                                    <p className="text-2xl md:text-3xl font-bold text-primarycolor">Sold</p>
                                    <p className="text-lg text-Black font-semibold">Price</p>
                                </div>
                            </div>
                            <div className="custommaxforSDP:min-w-[200px] customminforSDP:w-[20%] flex flex-col py-4 px-6 gap-4 items-end justify-center space-x-2 border-t  border-b border-[#D3D3D3]">
                                <img src="/images/icons/double-bed.svg" className='ml-2' alt="" />
                                <div className='flex flex-col gap-1'>
                                    <p className="text-2xl md:text-3xl font-bold text-primarycolor">2 - 3</p>
                                    <p className="text-lg text-Black font-semibold text-right">Beds</p>
                                </div>
                            </div>
                            <div className="custommaxforSDP:min-w-[200px] customminforSDP:w-[20%] flex flex-col py-4 px-6 gap-4 items-end justify-center space-x-2 border border-[#D3D3D3] ">
                                <img src="/images/icons/bath.svg" className='ml-2' alt="" />

                                <div className='flex flex-col gap-1'>
                                    <p className="text-2xl md:text-3xl font-bold text-primarycolor">2.0 - 3.5</p>
                                    <p className="text-lg text-Black font-semibold text-right">Baths</p>
                                </div>
                            </div>
                            <div className="custommaxforSDP:min-w-[200px] customminforSDP:w-[20%] flex flex-col py-4 px-6 gap-4 items-end justify-center space-x-2 border-t  border-b border-r  border-[#D3D3D3] rounded-tr-3xl rounded-br-3xl mr-0 custommaxforSDP:mr-14">
                                <img src="/images/icons/home.svg" className='ml-2' alt="" />

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

            <section id='features'>
                <PropertyDetailsSold />
            </section>

            <section className='section  bg-bggray' style={{ padding: "80px 0% 80px 0%" }}>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left pl-[7%]">Why Work With Us?</h2>

                <WhyWorkWithUsCarousel />
            </section>

            <section className="section bg-white">
                <div className="">
                    <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Sold or Rented Residences</h2>
                    <div className='relative'>
                        <div className="overflow-x-auto mt-14 md:scrollbar-hide">
                            <TableRecidenciesSold booking={false} />
                        </div>
                        <div className='hidden custommaxforSDPTable:block fade-right'></div>
                    </div>
                </div>
            </section >

            <section section id='videoplay' className='section  bg-bggray rounded-xl' >
                <div className='section bg-cover bg-center h-[350px] md:h-[600px] flex items-center justify-center relative rounded-xl' style={{ backgroundImage: "url(/images/pages/homepage/herosection.svg)", backgroundRepeat: "no-repeat" }}>
                    <div className='absolute inset-0 bg-black opacity-50 z-10 rounded-xl'></div>
                    <div className='relative z-20 p-8 flex flex-col items-center gap-3 text-white'>
                        <p className='font-regular text-medium '>Play The Video</p>
                        <div className='w-full h-20 flex items-center justify-center'>
                            <button className={`border border-[#A5A5A5] hover:border-bggray rounded-full ${isHoverPlay ? ' w-16 h-16' : ' w-14 h-14'}  flex items-center justify-center transition-all cursor-pointer duration-300 ease-in-out`}
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
            </section >

            <section className=''>

                <div >
                    <CustomMapComp customview={true} locations={locationareas} />
                </div>
            </section>

            <section id='neighborhood' className='section bg-cover bg-center h-screen flex items-end relative' style={{ backgroundImage: "url(/images/pages/homepage/herosection.svg)", backgroundRepeat: "no-repeat" }}>
                <div className='absolute inset-0 bg-black opacity-50 z-10'></div>
                <div className='relative z-20 w-[500px] p-8 flex flex-col gap-3 text-white border border-bggray rounded-xl'>
                    <p className='font-bold text-lg'>THE NEIGHBORHOOD</p>
                    <h2 className='font-BebasNeueSemiExpBold font-bold text-4xl md:text-5xl'>Upper East Side</h2>
                    <p className='font-medium text-medium'>An upscale residential haven renowned for its elegance and glamour, the Upper East Side is marked by a pretty blend of luxurious townhouses and historic apartment buildings.</p>
                </div>
            </section>

            <section id='contact'>
                <ContactTabsSection />
            </section>

            <section className='section bg-white'>
                <h2 className="font-BebasNeueSemiExpBold text-4xl md:text-5xl text-primarycolor text-left ">Similar Developments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 mb-10">
                    {data.map((item, index) => (
                        <LatestDevelopmentCard key={index} index={index} item={item} />
                    ))}
                </div>

                <div className="flex justify-center mt-5">
                    <button className="buttonLong bg-primarycolor hover:bg-primarycolorhover text-white text-center cursor-pointer transition-colors duration-300 ease-in-out">See More</button>
                </div>
            </section>

            {/* sticky bottombar  */}

            <section className={`md:flex fixed bottom-4 w-full z-30  justify-center transition-transform duration-500 ${isVisible ? 'translate-y-0' : 'translate-y-[120px]'}`}>
                <div className='w-[300px] md:min-w-[600px] mx-auto bg-dangercolor opacity-80 text-white flex gap-2 py-3 px-8 rounded-lg'>
                    <p className='w-full text-center'>Recently Sold</p>
                </div>
            </section>
        </>
    )
}


export default SingleSoldDevelopmentPage